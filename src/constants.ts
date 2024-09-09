import os from 'os'

export const DEFAULT_RETRIES = 3
export const DEFAULT_MAX_RETRY_TIME = 10000
export const DEFAULT_RETRY_INCREMENT = 500
export const DEFAULT_TIMEOUT = 10000
export const DEFAULT_CONNECTION_TIMEOUT = 10000
export const DEFAULT_PATH = "isdk-ipc"

export const ERR_BAD_PATH = "invalid socket path"
export const ERR_NOT_IDLE = "Client not ready to connect"
export const ERR_UNKNOWN = "Unknown Error"
export const ERR_NOT_READY = "Client not ready"
export const ERR_BAD_TIMEOUT = "Invalid timeout"
export const ERR_TIMEOUT = "Request timed out"
export const ERR_CONNECTION_CLOSED = "Failed to send, connection is not available"
export const ERR_CONNECTION_DESTROYED = "Failed to send, connection was destroyed"
export const ERR_ORPHAN_CONNECTION = "Closing orphaned connection"
export const ERR_PREMATURE_PACKET = "Ignored data packet received before connection finished establishing"
export const ERR_SERVER_EXISTS = "Server already exists"
export const ERR_ADDRINUSE = "Address already in use(EADDRINUSE)"
export const ERR_SERVER_CLOSED = "Server was shut down"
export const ERR_DRAIN_WRITE = "Cannot resend data in drain state"

export function getValidPipePath(path: string = DEFAULT_PATH) {
  if (process.platform === "win32") {
    // "//./pipe/"
    // path = `\\\\.\\pipe\\${path.replace(/^\//, "").replace(/\//g, "-")}`;
    path = '//./pipe/' + (path.startsWith('/') ? path.slice(1) : path)
  } else {
    const firstChar = path[0]
    if (firstChar !== '/' && firstChar !== '.') {
      path = os.tmpdir() + '/' + path
    }
  }
  return path
}