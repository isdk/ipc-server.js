[**@isdk/ipc-server**](../README.md) • **Docs**

***

[@isdk/ipc-server](../globals.md) / IPCClientOptions

# Interface: IPCClientOptions

## Extends

- `IpcNetConnectOpts`

## Indexable

 \[`name`: `string`\]: `any`

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

#### Inherited from

`IpcNetConnectOpts.allowHalfOpen`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:31

***

### fd?

> `optional` **fd**: `number`

#### Inherited from

`IpcNetConnectOpts.fd`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:30

***

### handshake?

> `optional` **handshake**: `boolean`

#### Defined in

[packages/ipc-server/src/client.ts:16](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/client.ts#L16)

***

### maxRetryTime?

> `optional` **maxRetryTime**: `number`

#### Defined in

[packages/ipc-server/src/client.ts:19](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/client.ts#L19)

***

### onread?

> `optional` **onread**: `OnReadOpts`

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

`IpcNetConnectOpts.onread`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:51

***

### path

> **path**: `string`

#### Overrides

`IpcNetConnectOpts.path`

#### Defined in

[packages/ipc-server/src/client.ts:15](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/client.ts#L15)

***

### readable?

> `optional` **readable**: `boolean`

#### Inherited from

`IpcNetConnectOpts.readable`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:32

***

### reconnect?

> `optional` **reconnect**: `boolean`

#### Defined in

[packages/ipc-server/src/client.ts:17](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/client.ts#L17)

***

### retries?

> `optional` **retries**: `number`

#### Defined in

[packages/ipc-server/src/client.ts:18](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/client.ts#L18)

***

### signal?

> `optional` **signal**: `AbortSignal`

#### Inherited from

`IpcNetConnectOpts.signal`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:34

***

### timeout?

> `optional` **timeout**: `number`

#### Inherited from

`IpcNetConnectOpts.timeout`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:797

***

### writable?

> `optional` **writable**: `boolean`

#### Inherited from

`IpcNetConnectOpts.writable`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:33
