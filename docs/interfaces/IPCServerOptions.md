[@isdk/ipc-server](../README.md) / [Exports](../modules.md) / IPCServerOptions

# Interface: IPCServerOptions

## Hierarchy

- `ServerOpts`

  ↳ **`IPCServerOptions`**

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [allowHalfOpen](IPCServerOptions.md#allowhalfopen)
- [generateID](IPCServerOptions.md#generateid)
- [keepAlive](IPCServerOptions.md#keepalive)
- [keepAliveInitialDelay](IPCServerOptions.md#keepaliveinitialdelay)
- [listenOptions](IPCServerOptions.md#listenoptions)
- [max](IPCServerOptions.md#max)
- [noDelay](IPCServerOptions.md#nodelay)
- [path](IPCServerOptions.md#path)
- [pauseOnConnect](IPCServerOptions.md#pauseonconnect)
- [port](IPCServerOptions.md#port)
- [retries](IPCServerOptions.md#retries)
- [tls](IPCServerOptions.md#tls)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

Indicates whether half-opened TCP connections are allowed.

**`Default`**

```ts
false
```

#### Inherited from

ServerOpts.allowHalfOpen

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:510

___

### generateID

• `Optional` **generateID**: `GenIdFunc`

#### Defined in

[packages/ipc-server/src/server.ts:26](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L26)

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

If set to `true`, it enables keep-alive functionality on the socket immediately after a new incoming connection is received,
similarly on what is done in `socket.setKeepAlive([enable][, initialDelay])`.

**`Default`**

```ts
false
```

**`Since`**

v16.5.0

#### Inherited from

ServerOpts.keepAlive

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:528

___

### keepAliveInitialDelay

• `Optional` **keepAliveInitialDelay**: `number`

If set to a positive number, it sets the initial delay before the first keepalive probe is sent on an idle socket.

**`Default`**

```ts
0
```

**`Since`**

v16.5.0

#### Inherited from

ServerOpts.keepAliveInitialDelay

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:534

___

### listenOptions

• `Optional` **listenOptions**: `Omit`\<`ListenOptions`, ``"path"`` \| ``"port"``\>

#### Defined in

[packages/ipc-server/src/server.ts:25](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L25)

___

### max

• `Optional` **max**: `number`

#### Defined in

[packages/ipc-server/src/server.ts:23](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L23)

___

### noDelay

• `Optional` **noDelay**: `boolean`

If set to `true`, it disables the use of Nagle's algorithm immediately after a new incoming connection is received.

**`Default`**

```ts
false
```

**`Since`**

v16.5.0

#### Inherited from

ServerOpts.noDelay

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:521

___

### path

• `Optional` **path**: `string`

#### Defined in

[packages/ipc-server/src/server.ts:20](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L20)

___

### pauseOnConnect

• `Optional` **pauseOnConnect**: `boolean`

Indicates whether the socket should be paused on incoming connections.

**`Default`**

```ts
false
```

#### Inherited from

ServerOpts.pauseOnConnect

#### Defined in

node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node/net.d.ts:515

___

### port

• `Optional` **port**: `number`

#### Defined in

[packages/ipc-server/src/server.ts:21](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L21)

___

### retries

• `Optional` **retries**: `number`

#### Defined in

[packages/ipc-server/src/server.ts:24](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L24)

___

### tls

• `Optional` **tls**: `boolean`

#### Defined in

[packages/ipc-server/src/server.ts:22](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L22)
