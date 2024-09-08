[@isdk/ipc-server](../README.md) / [Exports](../modules.md) / IPCClientOptions

# Interface: IPCClientOptions

## Hierarchy

- `IpcNetConnectOpts`

  ↳ **`IPCClientOptions`**

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [allowHalfOpen](IPCClientOptions.md#allowhalfopen)
- [fd](IPCClientOptions.md#fd)
- [handshake](IPCClientOptions.md#handshake)
- [maxRetryTime](IPCClientOptions.md#maxretrytime)
- [onread](IPCClientOptions.md#onread)
- [path](IPCClientOptions.md#path)
- [readable](IPCClientOptions.md#readable)
- [reconnect](IPCClientOptions.md#reconnect)
- [retries](IPCClientOptions.md#retries)
- [signal](IPCClientOptions.md#signal)
- [timeout](IPCClientOptions.md#timeout)
- [writable](IPCClientOptions.md#writable)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

IpcNetConnectOpts.allowHalfOpen

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:31

___

### fd

• `Optional` **fd**: `number`

#### Inherited from

IpcNetConnectOpts.fd

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:30

___

### handshake

• `Optional` **handshake**: `boolean`

#### Defined in

[packages/ipc-server/src/client.ts:15](https://github.com/isdk/ipc-server.js/blob/f9c03cdae67c31917ee51825ad932f20a97ede2a/src/client.ts#L15)

___

### maxRetryTime

• `Optional` **maxRetryTime**: `number`

#### Defined in

[packages/ipc-server/src/client.ts:18](https://github.com/isdk/ipc-server.js/blob/f9c03cdae67c31917ee51825ad932f20a97ede2a/src/client.ts#L18)

___

### onread

• `Optional` **onread**: `OnReadOpts`

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

IpcNetConnectOpts.onread

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:51

___

### path

• **path**: `string`

#### Overrides

IpcNetConnectOpts.path

#### Defined in

[packages/ipc-server/src/client.ts:14](https://github.com/isdk/ipc-server.js/blob/f9c03cdae67c31917ee51825ad932f20a97ede2a/src/client.ts#L14)

___

### readable

• `Optional` **readable**: `boolean`

#### Inherited from

IpcNetConnectOpts.readable

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:32

___

### reconnect

• `Optional` **reconnect**: `boolean`

#### Defined in

[packages/ipc-server/src/client.ts:16](https://github.com/isdk/ipc-server.js/blob/f9c03cdae67c31917ee51825ad932f20a97ede2a/src/client.ts#L16)

___

### retries

• `Optional` **retries**: `number`

#### Defined in

[packages/ipc-server/src/client.ts:17](https://github.com/isdk/ipc-server.js/blob/f9c03cdae67c31917ee51825ad932f20a97ede2a/src/client.ts#L17)

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

IpcNetConnectOpts.signal

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:34

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

IpcNetConnectOpts.timeout

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:791

___

### writable

• `Optional` **writable**: `boolean`

#### Inherited from

IpcNetConnectOpts.writable

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:33
