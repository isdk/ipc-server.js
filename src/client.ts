import net from "net";
import type {IpcNetConnectOpts} from "net";

import { IPCBaseConnection, IPCEvents, IPCPacketType, IPCPayloadData, IPCNetSocketEvents, IPCMessageType, } from "./base-connection.js";
import {
	DEFAULT_MAX_RETRY_TIME, DEFAULT_PATH, DEFAULT_RETRIES, DEFAULT_RETRY_INCREMENT,
	ERR_CONNECTION_CLOSED, ERR_UNKNOWN, ERR_NOT_IDLE, ERR_NOT_READY,
	getValidPipePath,
} from "./constants.js";
import { CommonError, ErrorCode } from "@isdk/common-error";


export interface IPCClientOptions extends IpcNetConnectOpts {
	// Path to the socket
	path: string;
	handshake?: boolean;
	reconnect?: boolean;
	retries?: number;
	maxRetryTime?: number;
	[name: string]: any
}

export enum IPCClientStatus {
	IDLE,
	CONNECTING,
	CONNECTED,
	READY,
	DISCONNECTED,
	RECONNECTING,
}

export class IPCClient extends IPCBaseConnection {
	declare status: IPCClientStatus
	declare _promise: any
	declare _retries: number
	declare _payload: any
	declare _events: any

	constructor(public options: IPCClientOptions = {path: DEFAULT_PATH}) {
		super();
		this.status = IPCClientStatus.IDLE;

		if (options.reconnect === undefined) { options.reconnect = true }
		if (!(options.retries! > 0)) { options.retries = DEFAULT_RETRIES }
		if (!(options.maxRetryTime! >= DEFAULT_RETRY_INCREMENT)) { options.maxRetryTime = DEFAULT_MAX_RETRY_TIME }

		this._retries = 0;
		options.path = getValidPipePath(options.path)
	}

	connect(data?: IPCPayloadData) {
		return new Promise((resolve, reject) => {
			if(this.status !== IPCClientStatus.IDLE) {
				reject(new Error(ERR_NOT_IDLE));
				return;
			}
			if(this._closed) {
				this._closed = false;
			}
			this._promise = {
				resolve,
				reject,
			};
			this._payload = data;
			this._setStatus(IPCClientStatus.CONNECTING);
			const options = Object.assign({}, this.options);
			this.socket = net.connect(options);
			this.socket.setKeepAlive(true);
			this.socket.on(IPCNetSocketEvents.ERROR, this._onError.bind(this));
			this.socket.on(IPCNetSocketEvents.CLOSE, this._onClose.bind(this));
			this.socket.once(IPCNetSocketEvents.READY, this._ready.bind(this));
		});
	}

	_onError(e: Error) {
		this._error = e;
		if(this._events[IPCEvents.ERROR]) {
			this.emit(IPCEvents.ERROR, e);
		}
	}

	_onClose() {
		this._setStatus(IPCClientStatus.DISCONNECTED);
		const error = this._error;
		const end = this._end;
		const promise = this._promise;

		super._onClose();

		this._error = undefined;
		this._end = undefined;
		this._promise = undefined;

		if(this.options.reconnect && !this._closed) {
			this._setStatus(IPCClientStatus.RECONNECTING);
			setTimeout(() => {
				this._setStatus(IPCClientStatus.IDLE);
				const exceeded = this._retries > this.options.retries!;
				if(exceeded) {
					if(promise) {
						this._retries = 0;
						promise.reject(error || new CommonError(ERR_UNKNOWN, 'Reconnecting', ErrorCode.TooManyRequests));
					} else {
						this.emit(IPCEvents.CLOSE, end || error);
					}
				} else if(promise) {
					promise.resolve(this.connect(this._payload));
				} else {
					this.connect(this._payload).catch(e => {
						this.emit(IPCEvents.CLOSE, e);
					});
				}
			}, Math.min(DEFAULT_RETRY_INCREMENT * ++this._retries, this.options.maxRetryTime!));
		} else {
			this._setStatus(IPCClientStatus.IDLE);
			this._retries = 0;
			this.emit(IPCEvents.CLOSE, end || error);
		}
	}

	_ready() {
		this._setStatus(IPCClientStatus.CONNECTED);
		const socket = this.socket!;
		if(this.options.handshake) {
			socket.on(IPCNetSocketEvents.DATA, () => {
				const test = socket.read(32);
				if(!test) { return; }

				if(test.toString() === "HTTP/1.1 101 Switching Protocols") {
					const CRLF = Buffer.from("\r\n\r\n")
					let buff = Buffer.allocUnsafe(0)

					this._readToBuffer(socket)

					let currentBufferIndex = 0
					let currentBuffer = this._buffer[currentBufferIndex]

					do {
						const data = currentBuffer

						buff = Buffer.concat([buff, data]);
						const index = buff.indexOf(CRLF);
						if(index > -1) {
							const headers = socket.read(index + 4);
							if(!headers) { continue; }
							socket.removeAllListeners(IPCNetSocketEvents.DATA);
							this._init();
							return;
						}
					} while(currentBuffer = this._buffer[++currentBufferIndex]);
				} else {
					let str = test.toString();
					str = str.slice(0, str.indexOf("\r\n"))
					this._error = new Error(str);
					socket.destroy();
				}
			});
			const host = this.options.host || DEFAULT_PATH;
			const data = Buffer.from(`GET / HTTP/1.1\r\nHost: ${host}\r\nConnection: Upgrade\r\nUpgrade: ${DEFAULT_PATH}\r\n\r\n`);
			socket.write(data);
		} else {
			socket.write(Buffer.from("IPC"));
			this._init();
		}
	}

	_init() {
		const socket = this.socket!;
		socket.on(IPCNetSocketEvents.DATA, this._read.bind(this));
		socket.on(IPCNetSocketEvents.DRAIN, this._drain.bind(this));
		socket.once(IPCNetSocketEvents.DONE, extras => {
			this.id = extras.id;
			this._setStatus(IPCClientStatus.READY);
			this._promise.resolve(this);
			this._promise = null;
			this._retries = 0;
			this.emit(IPCEvents.READY, extras);
		});
		const payload = {
			// compress: this.options.compress && Boolean(this._zlib),
			// messagepack: this.options.messagepack && Boolean(this._msgpack),
			extras: this._payload,
			id: this.id
		};
		this._write(IPCMessageType.CONNECTION, payload).catch(e => {
			this._error = e;
			socket.destroy();
		});
	}

	_setStatus(status: IPCClientStatus) {
		this.status = status;
		this.emit(IPCEvents.STATUS, status);
	}

	_parse(data: IPCPacketType) {
		const socket = this.socket!
		switch(data.t) {
			case IPCMessageType.CONNECTION: {
				socket.emit(IPCNetSocketEvents.DONE, data.d);
				break;
			}
			case IPCMessageType.MESSAGE: {
				if (data.d?.pub && data.d.message) {
					this.emit(data.d.pub, data.d.message)
				} else {
					this.emit(IPCEvents.MESSAGE, data.d);
				}
				break;
			}
			case IPCMessageType.REQUEST: {
				if(this.listenerCount(IPCEvents.REQUEST)) {
					this.emit(IPCEvents.REQUEST, data.d, (response: any) => this._tryWrite(IPCMessageType.RESPONSE, response, data.n));
				} else {
					this._tryWrite(IPCMessageType.RESPONSE, undefined, data.n).catch((e: Error) => this.socket!.emit(IPCNetSocketEvents.ERROR, e));
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
				this._tryWrite(IPCMessageType.PONG, data.d, data.n).catch((e: Error) => this.socket!.emit(IPCNetSocketEvents.ERROR, e));
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
					this._closed = !data.d.a;
				}
				break;
			}
		}
	}
	async _tryWrite(op: number, data?: IPCPayloadData, nonce?: string, retries = 0): Promise<boolean|undefined|Error> {
		if(this._closed) { throw new Error(ERR_CONNECTION_CLOSED) }
		try {
			if(this.status !== IPCClientStatus.READY) { throw new Error(ERR_NOT_READY); }
			const sent = await this._write(op, data, nonce);
			return sent;
		} catch(e: any) {
			if(this.options.reconnect && this.options.retries! > retries) {
				retries++
				await new Promise(resolve => { setTimeout(resolve, Math.min(DEFAULT_RETRY_INCREMENT * retries, this.options.maxRetryTime!)) })
				return this._tryWrite(op, data, nonce, retries)
			}
			return e
		}
	}
}
