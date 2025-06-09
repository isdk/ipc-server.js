[**@isdk/ipc-server**](../README.md)

***

[@isdk/ipc-server](../globals.md) / IPCServerOptions

# Interface: IPCServerOptions

Defined in: [packages/ipc-server/src/server.ts:19](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L19)

## Extends

- `ServerOpts`

## Indexable

\[`name`: `string`\]: `any`

## Properties

### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:508

Indicates whether half-opened TCP connections are allowed.

#### Default

```ts
false
```

#### Inherited from

`ServerOpts.allowHalfOpen`

***

### blockList?

> `optional` **blockList**: `BlockList`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:547

`blockList` can be used for disabling inbound
access to specific IP addresses, IP ranges, or IP subnets. This does not
work if the server is behind a reverse proxy, NAT, etc. because the address
checked against the block list is the address of the proxy, or the one
specified by the NAT.

#### Since

v22.13.0

#### Inherited from

`ServerOpts.blockList`

***

### generateID?

> `optional` **generateID**: `GenIdFunc`

Defined in: [packages/ipc-server/src/server.ts:26](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L26)

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:538

Optionally overrides all `net.Socket`s' `readableHighWaterMark` and `writableHighWaterMark`.

#### Default

```ts
See [stream.getDefaultHighWaterMark()](https://nodejs.org/docs/latest-v22.x/api/stream.html#streamgetdefaulthighwatermarkobjectmode).
```

#### Since

v18.17.0, v20.1.0

#### Inherited from

`ServerOpts.highWaterMark`

***

### keepAlive?

> `optional` **keepAlive**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:526

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

***

### keepAliveInitialDelay?

> `optional` **keepAliveInitialDelay**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:532

If set to a positive number, it sets the initial delay before the first keepalive probe is sent on an idle socket.

#### Default

```ts
0
```

#### Since

v16.5.0

#### Inherited from

`ServerOpts.keepAliveInitialDelay`

***

### listenOptions?

> `optional` **listenOptions**: `Omit`\<`ListenOptions`, `"path"` \| `"port"`\>

Defined in: [packages/ipc-server/src/server.ts:25](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L25)

***

### max?

> `optional` **max**: `number`

Defined in: [packages/ipc-server/src/server.ts:23](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L23)

***

### noDelay?

> `optional` **noDelay**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:519

If set to `true`, it disables the use of Nagle's algorithm immediately after a new incoming connection is received.

#### Default

```ts
false
```

#### Since

v16.5.0

#### Inherited from

`ServerOpts.noDelay`

***

### path?

> `optional` **path**: `string`

Defined in: [packages/ipc-server/src/server.ts:20](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L20)

***

### pauseOnConnect?

> `optional` **pauseOnConnect**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.13.10/node\_modules/@types/node/net.d.ts:513

Indicates whether the socket should be paused on incoming connections.

#### Default

```ts
false
```

#### Inherited from

`ServerOpts.pauseOnConnect`

***

### port?

> `optional` **port**: `number`

Defined in: [packages/ipc-server/src/server.ts:21](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L21)

***

### retries?

> `optional` **retries**: `number`

Defined in: [packages/ipc-server/src/server.ts:24](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L24)

***

### tls?

> `optional` **tls**: `boolean`

Defined in: [packages/ipc-server/src/server.ts:22](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L22)
