[**@isdk/ipc-server**](../README.md)

***

[@isdk/ipc-server](../globals.md) / IPCClientOptions

# Interface: IPCClientOptions

Defined in: [packages/ipc-server/src/client.ts:13](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/client.ts#L13)

## Extends

- `IpcNetConnectOpts`

## Indexable

\[`name`: `string`\]: `any`

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:31

#### Inherited from

`IpcNetConnectOpts.allowHalfOpen`

***

### fd?

> `optional` **fd**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:30

#### Inherited from

`IpcNetConnectOpts.fd`

***

### handshake?

> `optional` **handshake**: `boolean`

Defined in: [packages/ipc-server/src/client.ts:16](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/client.ts#L16)

***

### maxRetryTime?

> `optional` **maxRetryTime**: `number`

Defined in: [packages/ipc-server/src/client.ts:19](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/client.ts#L19)

***

### onread?

> `optional` **onread**: `OnReadOpts`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:32

#### Inherited from

`IpcNetConnectOpts.onread`

***

### path

> **path**: `string`

Defined in: [packages/ipc-server/src/client.ts:15](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/client.ts#L15)

#### Overrides

`IpcNetConnectOpts.path`

***

### readable?

> `optional` **readable**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:33

#### Inherited from

`IpcNetConnectOpts.readable`

***

### reconnect?

> `optional` **reconnect**: `boolean`

Defined in: [packages/ipc-server/src/client.ts:17](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/client.ts#L17)

***

### retries?

> `optional` **retries**: `number`

Defined in: [packages/ipc-server/src/client.ts:18](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/client.ts#L18)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:35

#### Inherited from

`IpcNetConnectOpts.signal`

***

### timeout?

> `optional` **timeout**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:810

#### Inherited from

`IpcNetConnectOpts.timeout`

***

### writable?

> `optional` **writable**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:34

#### Inherited from

`IpcNetConnectOpts.writable`
