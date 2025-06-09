[**@isdk/ipc-server**](../README.md)

***

[@isdk/ipc-server](../globals.md) / IPCServer

# Class: IPCServer

Defined in: [packages/ipc-server/src/server.ts:30](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L30)

## Extends

- `EventEmitter`

## Constructors

### new IPCServer()

> **new IPCServer**(`options`): [`IPCServer`](IPCServer.md)

Defined in: [packages/ipc-server/src/server.ts:36](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L36)

#### Parameters

##### options

`Partial`\<[`IPCServerOptions`](../interfaces/IPCServerOptions.md)\> = `{}`

#### Returns

[`IPCServer`](IPCServer.md)

#### Overrides

`EventEmitter.constructor`

## Properties

### connections

> **connections**: [`IPCConnection`](IPCConnection.md)[] = `[]`

Defined in: [packages/ipc-server/src/server.ts:32](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L32)

***

### isReady

> **isReady**: `boolean` = `false`

Defined in: [packages/ipc-server/src/server.ts:34](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L34)

***

### options

> **options**: `Partial`\<[`IPCServerOptions`](../interfaces/IPCServerOptions.md)\> = `{}`

Defined in: [packages/ipc-server/src/server.ts:36](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L36)

***

### server

> **server**: `undefined` \| `Server`

Defined in: [packages/ipc-server/src/server.ts:31](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L31)

***

### subscriptions

> **subscriptions**: `object` = `{}`

Defined in: [packages/ipc-server/src/server.ts:33](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L33)

#### Index Signature

\[`event`: `string`\]: [`IPCConnection`](IPCConnection.md)[]

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

#### Inherited from

`EventEmitter.defaultMaxListeners`

## Methods

### \_onClose()

> **\_onClose**(): `void`

Defined in: [packages/ipc-server/src/server.ts:137](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L137)

#### Returns

`void`

***

### \_onConnection()

> **\_onConnection**(`socket`): `void`

Defined in: [packages/ipc-server/src/server.ts:144](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L144)

#### Parameters

##### socket

`Socket`

#### Returns

`void`

***

### \_onError()

> **\_onError**(`e`): `void`

Defined in: [packages/ipc-server/src/server.ts:131](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L131)

#### Parameters

##### e

`Error`

#### Returns

`void`

***

### \_onListening()

> **\_onListening**(): `void`

Defined in: [packages/ipc-server/src/server.ts:122](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L122)

#### Returns

`void`

***

### \_onRequest()

> **\_onRequest**(`this`, `request`, `response`, `connection`): `Promise`\<`void`\>

Defined in: [packages/ipc-server/src/server.ts:158](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L158)

#### Parameters

##### this

`Event`

##### request

`any`

##### response

(`data`) => `Promise`\<`void`\>

##### connection

[`IPCConnection`](IPCConnection.md)

#### Returns

`Promise`\<`void`\>

***

### broadcast()

> **broadcast**(`data`): `Promise`\<`void`\>

Defined in: [packages/ipc-server/src/server.ts:93](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L93)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### close()

> **close**(`allowReconnect`): `Promise`\<[`IPCServer`](IPCServer.md)\>

Defined in: [packages/ipc-server/src/server.ts:85](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L85)

#### Parameters

##### allowReconnect

`boolean` = `false`

#### Returns

`Promise`\<[`IPCServer`](IPCServer.md)\>

***

### emit()

> **emit**(`eventName`, ...`args`): `any`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:38

Emits the specified event type with the given arguments.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`any`

The result of the event.

#### Inherited from

`EventEmitter.emit`

***

### emitAsync()

> **emitAsync**(`eventName`, ...`args`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:44

Asynchronously emits the specified event type with the given arguments.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

#### Inherited from

`EventEmitter.emitAsync`

***

### listenerCount()

> **listenerCount**(`eventName`): `number`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:66

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`number`

- the listeners count

#### Inherited from

`EventEmitter.listenerCount`

***

### listeners()

> **listeners**(`eventName`): `Function`[]

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:59

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Inherited from

`EventEmitter.listeners`

***

### off()

> **off**(`eventName`, `listener`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:32

Removes a listener function from the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be removed.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`EventEmitter.off`

***

### on()

> **on**(`eventName`, `listener`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:16

Adds a listener function to the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be called when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`EventEmitter.on`

***

### once()

> **once**(`eventName`, `listener`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

Adds a one-time listener function to the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be called once when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`EventEmitter.once`

***

### pause()

> **pause**(): `void`

Defined in: [packages/ipc-server/src/server.ts:110](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L110)

#### Returns

`void`

***

### ping()

> **ping**(`data`?, `timeout`?): `Promise`\<`PromiseSettledResult`\<\{ `id`: `string`; `ping`: `number`; \}\>[]\>

Defined in: [packages/ipc-server/src/server.ts:106](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L106)

#### Parameters

##### data?

`any`

##### timeout?

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`PromiseSettledResult`\<\{ `id`: `string`; `ping`: `number`; \}\>[]\>

***

### publish()

> **publish**(`request`): `Promise`\<`void`\>

Defined in: [packages/ipc-server/src/server.ts:179](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L179)

#### Parameters

##### request

###### message

`any`

###### pub

`string`

#### Returns

`Promise`\<`void`\>

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

##### eventName?

The event to remove listeners for. If not provided, all listeners for all events will be removed.

`string` | `RegExp`

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Inherited from

`EventEmitter.removeAllListeners`

***

### resume()

> **resume**(): `void`

Defined in: [packages/ipc-server/src/server.ts:116](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L116)

#### Returns

`void`

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

#### Parameters

##### n

`number`

#### Returns

`EventEmitter`

#### Inherited from

`EventEmitter.setMaxListeners`

***

### start()

> **start**(): `Promise`\<[`IPCServer`](IPCServer.md)\>

Defined in: [packages/ipc-server/src/server.ts:54](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L54)

#### Returns

`Promise`\<[`IPCServer`](IPCServer.md)\>

***

### subscribe()

> **subscribe**(`events`, `connection`): `boolean`

Defined in: [packages/ipc-server/src/server.ts:186](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L186)

#### Parameters

##### events

`string` | `string`[]

##### connection

[`IPCConnection`](IPCConnection.md)

#### Returns

`boolean`

***

### survey()

> **survey**(`data`?, `timeout`?): `Promise`\<`any`[]\>

Defined in: [packages/ipc-server/src/server.ts:99](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L99)

#### Parameters

##### data?

`any`

##### timeout?

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`any`[]\>

***

### unsubscribe()

> **unsubscribe**(`events`, `connection`): `boolean`

Defined in: [packages/ipc-server/src/server.ts:201](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/server.ts#L201)

#### Parameters

##### events

`string` | `string`[]

##### connection

[`IPCConnection`](IPCConnection.md)

#### Returns

`boolean`

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:74

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### emitter

`EventEmitter`

##### eventName

`string` | `RegExp`

#### Returns

`number`

#### Deprecated

use emitter.listenerCount instead

#### Inherited from

`EventEmitter.listenerCount`
