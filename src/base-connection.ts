import { Socket } from 'net'
import { EventEmitter } from 'events-ex'

import { ERR_BAD_TIMEOUT, ERR_CONNECTION_CLOSED, ERR_CONNECTION_DESTROYED, DEFAULT_TIMEOUT, ERR_TIMEOUT } from './constants'
import { CommonError, ErrorCode } from '@isdk/common-error'

export enum IPCErrorCode {
  ConnectionDestroyed = 498
}

export enum IPCMessageType {
  CONNECTION,
  MESSAGE,
  REQUEST,
  RESPONSE,
  PING,
  PONG,
  END,
}

export const IPCNetSocketEvents = {
  ERROR: "error",
  CLOSE: "close",
  DATA: "readable",
  READY: "ready",
  DRAIN: "drain",
  // user-defined
  DONE: "done",
}

export const IPCEvents = {
  READY: "ready",
  ERROR: "error",
  STATUS: "status",
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  MESSAGE: "message",
  REQUEST: "request",
  CLOSE: "close"
}

interface PromiseEx<T=any> extends Promise<T> {
  resolve: (value?: T) => void
  reject: (reason?: any) => void
}

export interface IPCPacketType {
  // Message types
  t: IPCMessageType
  // Message data
  // d.id the connection id
  // d.extras
  d: any
  // Message nonce
  n?: string
}

export type IPCPayloadData = any

export interface IPCBaseConnection {
  // _tryWrite(op: IPCMessageType, data?: IPCPayloadData, nonce?: string): Promise<Boolean|Error|void>
  // _parse(packet: IPCPacketType): void
}

export abstract class IPCBaseConnection extends EventEmitter {
	declare id: string
  declare _closed: boolean
  declare socket: Socket|undefined
	declare _error: Error|undefined
	declare _end: any

	_subscriptions: string[] = []
  _buffer: Buffer[] = []; // internal buffer for readable data
  _bufferTotalLength = 0; // the total length of the buffered data

  _requests: any = {}
  _drainQueue: PromiseEx[] = []

  abstract _tryWrite(op: IPCMessageType, data?: IPCPayloadData, nonce?: string): Promise<Boolean|Error|void>
  abstract _parse(packet: IPCPacketType): void

  send(data: IPCPayloadData) {
    return this._tryWrite(IPCMessageType.MESSAGE, data);
  }

  sendByType(op: IPCMessageType, data?: IPCPayloadData, timeout = DEFAULT_TIMEOUT) {
    if (!Number.isInteger(timeout)) {
      return Promise.reject(new CommonError(ERR_BAD_TIMEOUT, {data: {id: this.id, op}}, ErrorCode.InvalidArgument));
    }
    return new Promise((resolve, reject) => {
      const nonce = this._nonce();
      this._requests[nonce] = {
        resolve,
        reject,
        date: Date.now(),
        timer: timeout > 0 ? setTimeout(() => {
          delete this._requests[nonce];
          reject(new CommonError(ERR_TIMEOUT, {data: {id: this.id, op}}, ErrorCode.RequestTimeout));
        }, timeout) : undefined
      };
      this._tryWrite(op, data, nonce).catch(e => {
        if (this._requests[nonce].timer) { clearTimeout(this._requests[nonce].timer); }
        delete this._requests[nonce];
        e.data = {id: this.id, op};
        reject(e);
      });
    });
  }

  request(data?: IPCPayloadData, timeout = DEFAULT_TIMEOUT) {
    return this.sendByType(IPCMessageType.REQUEST, data, timeout)
  }

  publish(event: string, message: any, timeout = DEFAULT_TIMEOUT) {
    return this.request({pub: event, message}, timeout) as Promise<boolean>
  }

  subscribe(event: string|string[], timeout = DEFAULT_TIMEOUT) {
    return this.request({sub: event}, timeout) as Promise<boolean>
  }

  unsubscribe(event: string|string[], timeout = DEFAULT_TIMEOUT) {
    return this.request({unsub: event}, timeout) as Promise<boolean>
  }

  ping(data?: IPCPayloadData, timeout = DEFAULT_TIMEOUT) {
    return this.sendByType(IPCMessageType.PING, data, timeout)
  }

  async close(data?: any, allowReconnect = false) {
    const socket = this.socket
    if (this._closed || !socket) { return false; }
    this._closed = true;
    await Promise.allSettled(this._drainQueue);
    const packet = this._pack({
      t: IPCMessageType.END,
      d: {
        m: data,
        a: allowReconnect
      }
    });

    await new Promise(ok => {
      socket.end(packet, ok as any);
    });
    return true;
  }

  destroy(reason?: string|Error) {
    if (this._closed || !this.socket) { return false; }
    this._closed = true;
    const drainQueue = this._drainQueue
    for (let i = 0; i < drainQueue.length; i++) {
      drainQueue.shift()!.reject(new CommonError(ERR_CONNECTION_DESTROYED, {data: {reason, id: this.id}}, IPCErrorCode.ConnectionDestroyed));
    }
    if (typeof reason === "string") {
      reason = new CommonError(reason, 'connection.destroyed', IPCErrorCode.ConnectionDestroyed);
    }
    this.socket.destroy(reason);
    return true;
  }

	_onClose() {
    const socket = this.socket!
		this.socket = undefined
		socket.removeAllListeners()
		socket.destroy()
    this._buffer.length = 0
    this._bufferTotalLength = 0
    this._subscriptions.length = 0
  }

  _nonce() {
    return Date.now().toString(36) + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
  }

  _readToBuffer(socket = this.socket!) {
    if (socket.readableLength > 0) {
      const chunk = socket.read();
      if (chunk) {
        this._buffer.push(chunk);
        this._bufferTotalLength += chunk.length;
      }
    }
  }

  _read() {
    const socket = this.socket!;
    if (socket.readableLength > 1) {
      this._readToBuffer(socket);
      this._processBuffer(socket);
    }
  }

  _processBuffer(socket: Socket = this.socket!) {
    do {
      const length = this._untag();
      if (!length) { return }
      let data = this.readBuffer(length[0] + length[1]);
      if (!data) { return }
      data = data.subarray(length[0]);
      const s = data.toString('utf8')
      try {
        const json = JSON.parse(s);
        this._parse(json);
      } catch (e) {
        socket.emit(IPCNetSocketEvents.ERROR, e);
      }
    } while (this._bufferTotalLength > 0);
  }

  _readFromBuffer(length: number): Buffer | undefined {
    let totalRead = 0;
    let result = [];
    let bufferIndex = 0;
    let currentBuffer = this._buffer[bufferIndex];

    while (totalRead < length && currentBuffer) {
      const sliceLength = Math.min(currentBuffer.length, length - totalRead);
      result.push(currentBuffer.subarray(0, sliceLength));
      totalRead += sliceLength;
      this._bufferTotalLength -= sliceLength;

      if (sliceLength === currentBuffer.length) {
        this._buffer.shift();
      } else {
        this._buffer[bufferIndex] = currentBuffer.subarray(sliceLength);
        bufferIndex++;
      }

      currentBuffer = this._buffer[bufferIndex];
    }

    return Buffer.concat(result, totalRead);
  }

  readBuffer(size?: number): Buffer | undefined {
    if (!size) { size = this._bufferTotalLength }

    if (size <= this._bufferTotalLength) {
      return this._readFromBuffer(size)
    }
  }

  _write(op: IPCMessageType, data?: IPCPayloadData, nonce?: string) {
    const socket = this.socket
    if (!socket || !socket.writable) {
      return Promise.reject(new CommonError(ERR_CONNECTION_CLOSED, 'write', ErrorCode.ServiceUnavailable));
    }
    try {
      const d: IPCPacketType = {
        t: op,
        d: data
      };
      if (nonce) { d.n = nonce; }
      const packet = this._pack(d);
      const sent = socket.write(packet);
      if (sent) { return Promise.resolve(sent); }
      let resolve;
      let reject;
      const promise = new Promise((ok, nope) => {
        resolve = ok;
        reject = nope;
      }) as PromiseEx;
      promise.resolve = resolve!;
      promise.reject = reject!;

      this._drainQueue.push(promise);
      return promise;
    } catch (e) {
      socket.emit(IPCNetSocketEvents.ERROR, e);
      return Promise.reject(e);
    }
  }
  _pack(packetData: IPCPacketType) {
    let msg = Buffer.from(JSON.stringify(packetData));
    const tag = this._tag(msg.length);
    const packet = Buffer.allocUnsafe(msg.length + tag.length);
    for (let i = 0; i < tag.length; i++) {
      packet[i] = tag[i];
    }
    packet.set(msg, tag.length);
    return packet;
  }
  _tag(_size: number) {
    let size = _size;
    const tag = [(size & 127) + 128];
    while ((size >>= 7)) {
      tag.push(size & 127);
    }
    return tag.reverse();
  }

  private _untag() {
    let num = 0;
    let size = 0;
    let bufferIndex = 0;
    let currentBuffer = this._buffer[bufferIndex];

    do {
      for (let i = 0; i < currentBuffer.length; i++) {
        const byte = currentBuffer[i];
        num *= 128;
        size++;
        if (byte > 127) {
          return [size, num + (byte & 127)];
        }
        num += byte;
      }
      bufferIndex++;
      currentBuffer = this._buffer[bufferIndex];
    } while (currentBuffer);

    return false;
  }

  _drain() {
    const drainQueue = this._drainQueue
    while (drainQueue.length) {
      const promise = drainQueue.shift()!
      promise.resolve()
    }
  }
}

export async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
