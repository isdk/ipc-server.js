import {type IpcNetConnectOpts} from "net";

export enum IPCClientStatus {
	IDLE,
	CONNECTING,
	CONNECTED,
	READY,
	DISCONNECTED,
	RECONNECTING,
}

export interface IPCClientOptions extends IpcNetConnectOpts {
	// Path to the socket
	path: string;
	handshake?: boolean;
	reconnect?: boolean;
	retries?: number;
	maxRetryTime?: number;
	[name: string]: any
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

export const IPCNetServerEvents = {
  ERROR: "error",
  CONNECTION: "connection",
  SECURECONNECTION: "secureConnection",
  LISTENING: "listening",
  CLOSE: "close"
}

export const DEFAULT_RETRIES = 3
export const DEFAULT_MAXRETRYTIME = 10000
export const DEFAULT_RETRY_INCREMENT = 500
export const DEFAULT_TIMEOUT = 10000
export const DEFAULT_CONNECTIONTIMEOUT = 10000
export const DEFAULT_PATH = "node-ipc"
export const ERR_BAD_PATH = "invalid socket path"
export const ERR_NOT_IDLE = "Client not ready to connect"
export const ERR_UNKNOWN = "Unknown Error"
export const ERR_NOT_READY = "Client not ready"
export const ERR_BAD_TIMEOUT = "invalid timeout"
export const ERR_TIMEOUT = "request timed out"
export const ERR_CONNECTION_CLOSED = "Failed to send, connection not available"
export const ERR_CONNECTION_DESTROYED = "Failed to send, connection was destroyed"
export const ERR_ORPHAN_CONNECTION = "Closing orphaned connection"
export const ERR_PREMATURE_PACKET = "ignored data packet received before connection finished establishing"
export const ERR_SERVER_EXISTS = "server already exists"
export const ERR_ADDRINUSE = "EADDRINUSE: address already in use"
export const ERR_SERVER_CLOSED = "Server was shut down"
export const ERR_DRAIN_WRITE = "Can not resent data when drain"
