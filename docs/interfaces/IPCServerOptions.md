[**@isdk/ipc-server**](../README.md) • **Docs**

***

[@isdk/ipc-server](../globals.md) / IPCServerOptions

# Interface: IPCServerOptions

## Extends

- `ServerOpts`

## Indexable

 \[`name`: `string`\]: `any`

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

Indicates whether half-opened TCP connections are allowed.

#### Default

```ts
false
```

#### Inherited from

`ServerOpts.allowHalfOpen`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:510

***

### generateID?

> `optional` **generateID**: `GenIdFunc`

#### Defined in

[packages/ipc-server/src/server.ts:26](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L26)

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

Optionally overrides all `net.Socket`s' `readableHighWaterMark` and `writableHighWaterMark`.

#### Default

```ts
See [stream.getDefaultHighWaterMark()](https://nodejs.org/docs/latest-v20.x/api/stream.html#streamgetdefaulthighwatermarkobjectmode).
```

#### Since

v18.17.0, v20.1.0

#### Inherited from

`ServerOpts.highWaterMark`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:540

***

### keepAlive?

> `optional` **keepAlive**: `boolean`

If set to `true`, it enables keep-alive functionality on the socket immediately after a new incoming connection is received,
similarly on what is done in `socket.setKeepAlive([enable][, initialDelay])`.

#### Default

```ts
false
```

#### Since

v16.5.0

#### Inherited from

`ServerOpts.keepAlive`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:528

***

### keepAliveInitialDelay?

> `optional` **keepAliveInitialDelay**: `number`

If set to a positive number, it sets the initial delay before the first keepalive probe is sent on an idle socket.

#### Default

```ts
0
```

#### Since

v16.5.0

#### Inherited from

`ServerOpts.keepAliveInitialDelay`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:534

***

### listenOptions?

> `optional` **listenOptions**: `Omit`\<`ListenOptions`, `"path"` \| `"port"`\>

#### Defined in

[packages/ipc-server/src/server.ts:25](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L25)

***

### max?

> `optional` **max**: `number`

#### Defined in

[packages/ipc-server/src/server.ts:23](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L23)

***

### noDelay?

> `optional` **noDelay**: `boolean`

If set to `true`, it disables the use of Nagle's algorithm immediately after a new incoming connection is received.

#### Default

```ts
false
```

#### Since

v16.5.0

#### Inherited from

`ServerOpts.noDelay`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:521

***

### path?

> `optional` **path**: `string`

#### Defined in

[packages/ipc-server/src/server.ts:20](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L20)

***

### pauseOnConnect?

> `optional` **pauseOnConnect**: `boolean`

Indicates whether the socket should be paused on incoming connections.

#### Default

```ts
false
```

#### Inherited from

`ServerOpts.pauseOnConnect`

#### Defined in

node\_modules/.pnpm/@types+node@20.16.12/node\_modules/@types/node/net.d.ts:515

***

### port?

> `optional` **port**: `number`

#### Defined in

[packages/ipc-server/src/server.ts:21](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L21)

***

### retries?

> `optional` **retries**: `number`

#### Defined in

[packages/ipc-server/src/server.ts:24](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L24)

***

### tls?

> `optional` **tls**: `boolean`

#### Defined in

[packages/ipc-server/src/server.ts:22](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L22)
