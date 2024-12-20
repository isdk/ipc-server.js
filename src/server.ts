import net, { type ServerOpts, type ListenOptions } from "net";
import { unlinkSync, statSync } from "fs";
import { Event, EventEmitter } from "events-ex";

import { IPCConnection } from "./connection";
import { ERR_BAD_TIMEOUT, DEFAULT_CONNECTION_TIMEOUT, DEFAULT_PATH, DEFAULT_RETRIES, DEFAULT_TIMEOUT, ERR_ADDRINUSE, ERR_SERVER_CLOSED, ERR_SERVER_EXISTS, getValidPipePath, } from "./constants";
import { IPCEvents, IPCNetSocketEvents, IPCPayloadData } from "./base-connection";

type GenIdFunc = () => string;

export const IPCNetServerEvents = {
  ERROR: "error",
  CONNECTION: "connection",
  SECURECONNECTION: "secureConnection",
  LISTENING: "listening",
  CLOSE: "close"
}

export interface IPCServerOptions extends ServerOpts {
  path?: string;
  port?: number;
  tls?: boolean;
  max?: number;
  retries?: number;
  listenOptions?: Omit<ListenOptions, "port" | "path">;
  generateID?: GenIdFunc
  [name: string]: any;
}

export class IPCServer extends EventEmitter {
  server: net.Server | undefined;
  connections: IPCConnection[] = [];
  subscriptions: {[event: string]: IPCConnection[]} = {}
  isReady: boolean = false;

  constructor(public options: Partial<IPCServerOptions> = {}) {
    super()
    if (!options.path) {
      options.path = DEFAULT_PATH;
    }

    if (!(options.max! > 0)) {
      delete options.max
    }
		if (!(options.retries! > 0)) { options.retries = DEFAULT_RETRIES }
    if (typeof options.generateID === "function") {
      options.idGen = options.generateID
    }

    options.path = getValidPipePath(options.path)
    this.on(IPCEvents.REQUEST, this._onRequest)
  }

  start(): Promise<IPCServer> {
    return new Promise((resolve, reject) => {
      if (this.server) {
        reject(new Error(ERR_SERVER_EXISTS));
        return;
      }
      const server = net.createServer(this.options);
      server.on(IPCNetServerEvents.ERROR, this._onError.bind(this));
      server.on(IPCNetServerEvents.CLOSE, this._onClose.bind(this));
      server.on(IPCNetServerEvents.CONNECTION, this._onConnection.bind(this));
      server.on(IPCNetServerEvents.LISTENING, this._onListening.bind(this));
      server.once(IPCNetServerEvents.LISTENING, () => resolve(this));
      if (this.options.max) {
        server.maxConnections = this.options.max;
      }
      if (this.options.path) {
        try { unlinkSync(this.options.path); } catch (e) { /* no-op */ }
        const stat = statSync(this.options.path, { throwIfNoEntry: false });
        if (stat) {
          this.close();
          reject(new Error(`${ERR_ADDRINUSE} - ${this.options.path}`));
          return;
        }
        server.listen({
          ...this.options.listenOptions,
          path: this.options.path
        });
      }
    });
  }

  async close(allowReconnect = false): Promise<IPCServer> {
    if (this.server) {
      this.server.close();
      await Promise.all(this.connections.map(client => client.close(ERR_SERVER_CLOSED, allowReconnect)));
    }
    return this;
  }

  async broadcast(data: IPCPayloadData): Promise<void> {
    for (const c of this.connections) {
      await c.send(data).catch(e => this.emit(IPCEvents.ERROR, e));
    }
  }

  survey(data?: IPCPayloadData, timeout = DEFAULT_TIMEOUT): Promise<any[]> {
    if (!Number.isInteger(timeout)) {
      return Promise.reject(ERR_BAD_TIMEOUT);
    }
    return Promise.allSettled(this.connections.map(c => c.request(data, timeout)));
  }

  ping(data?: IPCPayloadData, timeout = DEFAULT_TIMEOUT) {
    return Promise.allSettled(this.connections.map(async c => ({id: c.id, ping: (await c.ping(data, timeout)) as number})));
  }

  pause(): void {
    for (const c of this.connections) {
      c.pause();
    }
  }

  resume(): void {
    for (const c of this.connections) {
      c.resume();
    }
  }

  _onListening(): void {
    let address = this.server?.address();
    if (address && typeof address === "object") {
      address = `${address.address}:${address.port}`;
    }
    this.isReady = true
    this.emit(IPCEvents.READY, address);
  }

  _onError(e: Error): void {
    if (this.listenerCount(IPCEvents.ERROR)) {
      this.emit(IPCEvents.ERROR, e);
    }
  }

  _onClose(): void {
    this.isReady = false
    this.server?.removeAllListeners();
    this.server = undefined;
    this.emit(IPCEvents.CLOSE);
  }

  _onConnection(socket: net.Socket): void {
    const client = new IPCConnection(socket, this);
    client.id = this.options.idGen ? this.options.idGen() : client._nonce();
    const timer = setTimeout(() => {
      client.close();
    }, DEFAULT_CONNECTION_TIMEOUT);
    socket.once(IPCNetSocketEvents.READY, extras => {
      clearTimeout(timer);
      client.connectedAt = Date.now();
      this.connections.push(client);
      this.emit(IPCEvents.CONNECT, client, extras);
    });
  }

  async _onRequest(this: Event, request: any, response: (data: any) => Promise<void>, connection: IPCConnection) {
    const that = this.target as IPCServer || this
    let processed = false
    if (request) {
      if (request.pub) {
        await that.publish(request)
        await response({result: true})
        processed = true
      } else if (request.sub) {
        const result = that.subscribe(request.sub, connection)
        await response({result})
        processed = true
      } else if (request.unsub) {
        const result = that.unsubscribe(request.unsub, connection)
        await response({result})
        processed = true
      }
    }
    this.stopped = processed
  }

  async publish(request: {pub: string, message: any}) {
    const connections = this.subscriptions[request.pub]
    if (connections) for (const c of connections) {
      await c.send(request).catch(e => this.emit(IPCEvents.ERROR, e));
    }
  }

  subscribe(events: string|string[], connection: IPCConnection) {
    let result = false
    if (events && !Array.isArray(events)) { events = [events] }
    for (const event of events) {
      const connections = this.subscriptions[event] || []
      if (!connections.find(conn => conn.id === connection.id)) {
        connections.push(connection)
        this.subscriptions[event] = connections
        result = true
      }

    }
    return result
  }

  unsubscribe(events: string|string[], connection: IPCConnection) {
    let result = false
    if (events && !Array.isArray(events)) { events = [events] }
    for (const event of events) {
      const connections = this.subscriptions[event]
      const ix = connections?.findIndex(conn => conn.id === connection.id)
      if (ix >= 0) {
        connections.splice(ix, 1)
        result = true
      }
    }
    return result
  }
}
