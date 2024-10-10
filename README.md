# IPC-Server

Simple IPC (Inter Process Communication) server for Windows(windows pipe) and Linux(unix sockets)

* Works on Linux, Windows AND macOS.
* Request/Response
* Publish/Subscribe to messages.

## Examples

Local IPC server for communication between processes in the same machine.

```js
import { IPCServer } from '@isdk/ipc-server'
import type { Event } from 'events-ex'

const server = new IPCServer({
    path: "/myapp"
});

server.on("ready", address => {
    console.log(`server started on ${address}`);
});

server.on("error", (error, connection) => {
    console.log(`an error happened in the connection ${connection.id}: ${error.message}`);
    console.log(error);
});

server.on("connect", (connection, payload) => {
    console.log(`new connection! assigned it the following id: ${connection.id}`);
    if(payload) {
        console.log(`client sent an initial payload:`);
        console.log(payload);
        /* auth example
        if(payload !== "superSecretPassword") {
            connection.close();
        }
        */
    }
});

server.on("disconnect", (connection: IPCConnection, reason?: string) => {
    console.log(`connection ${connection.id} disconnected because of:`);
    console.log(reason);
});

server.on("close", () => {
    console.log("server closed");
});

server.on("message", (message, connection: IPCConnection) => {
    console.log(`${message} from ${connection.id}`)
})

server.on("request", function(this: Event, request: any, response: (data: any) => Promise<void>, connection: IPCConnection) {
    console.log(`received request from ${connection.id}`);
    console.log("request content:", request);
    // return a response to this request
    response("hello").catch(console.error);
    // if already processed, do not wanna other request listeners to be triggered
    this.stopped = true
});

await server.start()
```

Connecting to a local IPC server.

```js
import { IPCClient } from '@isdk/ipc-server'
const client = new IPCClient({
    path: "/myapp"
});

await client.connect()

const ping = await client.ping()
// Sends a message to the server.
await client.send("hello")

// Sends a request to the server.
const response = await client.request("what time is it?")

// Pubsub events
client.on("event", (data) => {})
await client.subscribe("event")
await client.publish("event", "hello from client")
await server.publish({pub: "event", message: "hello from server"})
const client1 = new IPCClient({path: "/myapp"})
await client1.connect()
client1.publish("event", "hello from client1")
await client.unsubscribe("event")


// Gracefully disconnects the client. Any pending operations will be fulfilled before the connection is closed.
await client.close("shutting down")

// Immediately disconnects the client. Any pending operations will be rejected.
client.destroy("shutting down")

const allowReconnect = false // if true, the server notices these connected clients to reconnect to the server after a while. the server will restart. defaults to false.
await server.close(allowReconnect)
```

## API

### Request/Response

Usage:

When a client sends a request, the server triggers the `request` (`IPCEvents.REQUEST`) event. Users need to listen for the `request` event and respond with the appropriate data.

Note:

If there are multiple `request` event listeners on the server, set `this.stopped = true` within the event handler for requests that have been processed. This prevents subsequent listeners from processing the same request again.

```ts
import { IPCServer } from '@isdk/ipc-server'
import type { Event } from 'events-ex'

server.on("request", function(this: Event, request: any, response: (data: any) => Promise<void>, connection: IPCConnection) {
    if (request?.cmd === "say") {
      response("hello").catch(console.error);
      this.stopped = true
    }
});
```

### Event Flow

- `ready`: Triggered when the connection is ready.
  - **Client**:
    - Sets `ClientStatus.CONNECTED` when the connection is ready, then performs a `handshake` if configured.
    - Sends an `IPCMessageType.CONNECTION` message to the server and waits for a response of the same type. After receiving the response, the client emits the `IPCNetSocketEvents.DONE` notification event.
      - In the `IPCNetSocketEvents.DONE` event, sets the status to `IPCClientStatus.READY` and emits the `IPCEvents.READY` event.
  - **Server**:
    - `GET`: Performs a handshake when a `GET` request is received.
    - `IPC`: Hands over to `_read` for processing.
      - On the first read (when `connectedAt` is not set), it waits for an `IPCMessageType.CONNECTION` packet:
        - Checks if the packet type is `IPCMessageType.CONNECTION`. If not, it sends an error event and returns.
        - If the packet type matches, it sets the client’s `id` and sends an `IPCMessageType.CONNECTION` packet as a response.
- `end`: Triggered when the connection is closed or ends.
- `request`:
  - **Client**:
    - The `request` method will send a request (`IPCMessageType.REQUEST`) package, which triggers the `request` (`IPCEvents.REQUEST`) event on the server.
    - Wait the server to respond with an `IPCMessageType.RESPONSE` package until timeout.
  - **Server**:
    - If the `IPCMessageType.REQUEST` event is listened to, it triggers the `request` event.
    - If not, it responds with an empty `IPCMessageType.RESPONSE` packet.

## Credit

* [net-ipc](https://github.com/timotejroiko/net-ipc)
