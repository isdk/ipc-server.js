import { Socket } from "net";
import { Buffer } from "buffer";
import { IPCBaseConnection, IPCPacketType, IPCPayloadData } from "./base-connection";
import { ERR_CONNECTION_CLOSED, IPCNetSocketEvents, DEFAULT_PATH, ERR_PREMATURE_PACKET, IPCEvents, IPCMessageType, ERR_ORPHAN_CONNECTION, DEFAULT_RETRY_INCREMENT } from "./constants";
import type { IPCServer } from './server'


export class IPCConnection extends IPCBaseConnection {
	declare server: IPCServer
	declare _retries: number
	// Date.now()
	declare connectedAt: number

	constructor(socket: Socket, server: any) {
		super()
		this.server = server;
		this.socket = socket;
		this.socket.on(IPCNetSocketEvents.ERROR, this._onError.bind(this));
		this.socket.on(IPCNetSocketEvents.CLOSE, this._onClose.bind(this));
		this.socket.on(IPCNetSocketEvents.DATA, this._init.bind(this));
		this.socket.on(IPCNetSocketEvents.DRAIN, this._drain.bind(this));
		this._retries = server.options.retries;
	}
	pause() {
		this.socket!.pause();
	}
	resume() {
		this.socket!.resume();
	}
	_init() {
		const socket = this.socket!;
		const test = socket.read(3);
		if(!test) { return; }
		const string = test.toString();
		if(string === "GET") {
			const CRLF = Buffer.from("\r\n\r\n");
			let buff = Buffer.allocUnsafe(0);

			this._readToBuffer(socket)

			let currentBufferIndex = 0
			let currentBuffer = this._buffer[currentBufferIndex];

			do {
				const data = currentBuffer

				buff = Buffer.concat([buff, data]);
				const index = buff.indexOf(CRLF);
				if(index > -1) {
					const headers = socket.read(index + 4);
					if(!headers) { continue; }
					const str = headers.toString();
					if(str.includes("Connection: Upgrade") && str.includes(`Upgrade: ${DEFAULT_PATH}`)) {
						socket.write(`HTTP/1.1 101 Switching Protocols\r\nConnection: Upgrade\r\nUpgrade: ${DEFAULT_PATH}\r\n\r\n`);
						socket.removeAllListeners(IPCNetSocketEvents.DATA);
						socket.on(IPCNetSocketEvents.DATA, this._read.bind(this))
						this._read();
						return;
					} else {
						socket.end("HTTP/1.1 404 Not Found");
					}
				}
			} while(currentBuffer = this._buffer[++currentBufferIndex]);
		} else if(string === "IPC") {
			socket.removeAllListeners(IPCNetSocketEvents.DATA);
			socket.on(IPCNetSocketEvents.DATA, this._read.bind(this))
			this._read();
		} else {
			socket.end("HTTP/1.1 404 Not Found");
		}
	}
	_onError(e: Error) {
		this._error = e;
		if(this.server.listenerCount(IPCEvents.ERROR)) {
			this.server.emit(IPCEvents.ERROR, e, this);
		}
		if(!this.server.connections.find((c: any) => c.id === this.id)) {
			this.close(ERR_ORPHAN_CONNECTION);
		}
	}
	_onClose() {
		super._onClose()

		const array = this.server.connections;
		const index = array.findIndex(c => c.id === this.id);
		if(index > -1) {
			this.server.emit(IPCEvents.DISCONNECT, this, this._end || this._error);
			array[index] = array[array.length - 1];
			array.pop();
		}
	}
	_parse(data: IPCPacketType) {
		const socket = this.socket!;
		if(!this.connectedAt && data.t !== IPCMessageType.CONNECTION) {
			socket.emit(IPCNetSocketEvents.ERROR, new Error(ERR_PREMATURE_PACKET));
			return;
		}
		switch(data.t) {
			case IPCMessageType.CONNECTION: {
				if(data.d.id) { this.id = data.d.id; }
				const reply = {
					id: this.id,
				};
				this._write(IPCMessageType.CONNECTION, reply, data.n).catch(e => {
					socket.emit(IPCNetSocketEvents.ERROR, e);
					socket.destroy(e);

				});
				socket.emit(IPCNetSocketEvents.READY, data.d.extras);
				break;
			}
			case IPCMessageType.MESSAGE: {
				this.server.emit(IPCEvents.MESSAGE, data.d, this);
				break;
			}
			case IPCMessageType.REQUEST: {
				if(this.server.listenerCount(IPCEvents.REQUEST)) {
					this.server.emit(IPCEvents.REQUEST, data.d, (response: any) => this._tryWrite(IPCMessageType.RESPONSE, response, data.n), this);
				} else {
					this._tryWrite(IPCMessageType.RESPONSE, void 0, data.n).catch((e: Error) => socket.emit(IPCNetSocketEvents.ERROR, e));
				}
				break;
			}
			case IPCMessageType.RESPONSE: {
				const stored = this._requests[data.n!];
				if(stored) {
					if(stored.timer) { clearTimeout(stored.timer); }
					stored.resolve(data.d);
					delete this._requests[data.n!];
				}
				break;
			}
			case IPCMessageType.PING: {
				this._tryWrite(IPCMessageType.PONG, data.d, data.n).catch((e: Error) => socket.emit(IPCNetSocketEvents.ERROR, e));
				break;
			}
			case IPCMessageType.PONG: {
				const stored = this._requests[data.n!];
				if(stored) {
					if(stored.timer) { clearTimeout(stored.timer); }
					stored.resolve(Date.now() - stored.date);
					delete this._requests[data.n!];
				}
				break;
			}
			case IPCMessageType.END: {
				if(data.d) {
					this._end = data.d.m;
				}
				break;
			}
		}
	}
	async _tryWrite(op: IPCMessageType, data?: IPCPayloadData, nonce?: string, retries = 0): Promise<boolean|undefined|Error> {
		if(this._closed) { throw new Error(ERR_CONNECTION_CLOSED); }
		try {
			const sent = await this._write(op, data, nonce);
			return sent;
		} catch(e: any) {
			if(this._retries && this._retries > retries) {
				for(let i = retries; i < this._retries; i++) {
					await new Promise(resolve => { setTimeout(resolve, DEFAULT_RETRY_INCREMENT * (i + 1)); });
					const connection = this.server.connections.find(c => c.id === this.id);
					if(connection) { return connection._tryWrite(op, data, nonce, i); }
				}
			}
			return new Error(e);
		}
	}
}
