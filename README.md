# IPC-Server

Simple IPC (Inter Process Communication) server for Windows(windows pipe) and Linux(unix sockets)

* Works on Linux, Windows AND macOS.
* Publish/Subscribe to messages.

## Examples

Local IPC server for communication between processes in the same machine.

```js
import { IPCServer } from '@isdk/ipc-server'
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

server.on("request", (request: any, response: (data: any) => Promise<void>, connection: IPCConnection) => {
    console.log(`received request from ${connection.id}`);
    console.log("request content:", request);
    // return a response to this request
    response("hello").catch(console.error);
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
```

## Credit

* [net-ipc](https://github.com/timotejroiko/net-ipc)