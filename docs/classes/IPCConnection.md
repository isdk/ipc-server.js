[**@isdk/ipc-server**](../README.md)

***

[@isdk/ipc-server](../globals.md) / IPCConnection

# Class: IPCConnection

Defined in: [packages/ipc-server/src/connection.ts:8](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L8)

## Extends

- [`IPCBaseConnection`](IPCBaseConnection.md)

## Constructors

### new IPCConnection()

> **new IPCConnection**(`socket`, `server`): [`IPCConnection`](IPCConnection.md)

Defined in: [packages/ipc-server/src/connection.ts:13](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L13)

#### Parameters

##### socket

`Socket`

##### server

[`IPCServer`](IPCServer.md)

#### Returns

[`IPCConnection`](IPCConnection.md)

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`constructor`](IPCBaseConnection.md#constructors)

## Properties

### \_buffer

> **\_buffer**: `Buffer`\<`ArrayBufferLike`\>[] = `[]`

Defined in: [packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L73)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_buffer`](IPCBaseConnection.md#_buffer)

***

### \_bufferTotalLength

> **\_bufferTotalLength**: `number` = `0`

Defined in: [packages/ipc-server/src/base-connection.ts:74](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L74)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_bufferTotalLength`](IPCBaseConnection.md#_buffertotallength)

***

### \_closed

> **\_closed**: `boolean`

Defined in: [packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L67)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_closed`](IPCBaseConnection.md#_closed)

***

### \_drainQueue

> **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

Defined in: [packages/ipc-server/src/base-connection.ts:77](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L77)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_drainQueue`](IPCBaseConnection.md#_drainqueue)

***

### \_end

> **\_end**: `any`

Defined in: [packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L70)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_end`](IPCBaseConnection.md#_end)

***

### \_error

> **\_error**: `undefined` \| `Error`

Defined in: [packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L69)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_error`](IPCBaseConnection.md#_error)

***

### \_requests

> **\_requests**: `any` = `{}`

Defined in: [packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L76)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_requests`](IPCBaseConnection.md#_requests)

***

### \_retries

> **\_retries**: `number`

Defined in: [packages/ipc-server/src/connection.ts:9](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L9)

***

### \_subscriptions

> **\_subscriptions**: `string`[] = `[]`

Defined in: [packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L72)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_subscriptions`](IPCBaseConnection.md#_subscriptions)

***

### connectedAt

> **connectedAt**: `number`

Defined in: [packages/ipc-server/src/connection.ts:11](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L11)

***

### id

> **id**: `string`

Defined in: [packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L66)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`id`](IPCBaseConnection.md#id)

***

### server

> **server**: [`IPCServer`](IPCServer.md)

Defined in: [packages/ipc-server/src/connection.ts:13](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L13)

***

### socket

> **socket**: `undefined` \| `Socket`

Defined in: [packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L68)

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`socket`](IPCBaseConnection.md#socket)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`defaultMaxListeners`](IPCBaseConnection.md#defaultmaxlisteners)

## Methods

### \_drain()

> **\_drain**(): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:317](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L317)

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_drain`](IPCBaseConnection.md#_drain)

***

### \_init()

> **\_init**(): `void`

Defined in: [packages/ipc-server/src/connection.ts:29](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L29)

#### Returns

`void`

***

### \_nonce()

> **\_nonce**(): `string`

Defined in: [packages/ipc-server/src/base-connection.ts:173](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L173)

#### Returns

`string`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_nonce`](IPCBaseConnection.md#_nonce)

***

### \_onClose()

> **\_onClose**(): `void`

Defined in: [packages/ipc-server/src/connection.ts:80](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L80)

#### Returns

`void`

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`_onClose`](IPCBaseConnection.md#_onclose)

***

### \_onError()

> **\_onError**(`e`): `void`

Defined in: [packages/ipc-server/src/connection.ts:71](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L71)

#### Parameters

##### e

`Error`

#### Returns

`void`

***

### \_pack()

> **\_pack**(`packetData`): `Buffer`\<`ArrayBuffer`\>

Defined in: [packages/ipc-server/src/base-connection.ts:275](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L275)

#### Parameters

##### packetData

[`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`Buffer`\<`ArrayBuffer`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_pack`](IPCBaseConnection.md#_pack)

***

### \_parse()

> **\_parse**(`data`): `void`

Defined in: [packages/ipc-server/src/connection.ts:91](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L91)

#### Parameters

##### data

[`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`void`

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`_parse`](IPCBaseConnection.md#_parse)

***

### \_processBuffer()

> **\_processBuffer**(`socket`): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:195](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L195)

#### Parameters

##### socket

`Socket` = `...`

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_processBuffer`](IPCBaseConnection.md#_processbuffer)

***

### \_read()

> **\_read**(): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:187](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L187)

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_read`](IPCBaseConnection.md#_read)

***

### \_readFromBuffer()

> **\_readFromBuffer**(`length`): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/ipc-server/src/base-connection.ts:212](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L212)

#### Parameters

##### length

`number`

#### Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_readFromBuffer`](IPCBaseConnection.md#_readfrombuffer)

***

### \_readToBuffer()

> **\_readToBuffer**(`socket`): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:177](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L177)

#### Parameters

##### socket

`Socket` = `...`

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_readToBuffer`](IPCBaseConnection.md#_readtobuffer)

***

### \_tag()

> **\_tag**(`_size`): `number`[]

Defined in: [packages/ipc-server/src/base-connection.ts:285](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L285)

#### Parameters

##### \_size

`number`

#### Returns

`number`[]

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_tag`](IPCBaseConnection.md#_tag)

***

### \_tryWrite()

> **\_tryWrite**(`op`, `data`?, `nonce`?, `retries`?): `Promise`\<`undefined` \| `boolean` \| `Error`\>

Defined in: [packages/ipc-server/src/connection.ts:155](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L155)

#### Parameters

##### op

[`IPCMessageType`](../enumerations/IPCMessageType.md)

##### data?

`any`

##### nonce?

`string`

##### retries?

`number` = `0`

#### Returns

`Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`_tryWrite`](IPCBaseConnection.md#_trywrite)

***

### \_write()

> **\_write**(`op`, `data`?, `nonce`?): `PromiseEx`\<`any`\> \| `Promise`\<`true`\>

Defined in: [packages/ipc-server/src/base-connection.ts:245](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L245)

#### Parameters

##### op

[`IPCMessageType`](../enumerations/IPCMessageType.md)

##### data?

`any`

##### nonce?

`string`

#### Returns

`PromiseEx`\<`any`\> \| `Promise`\<`true`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_write`](IPCBaseConnection.md#_write)

***

### close()

> **close**(`data`?, `allowReconnect`?): `Promise`\<`boolean`\>

Defined in: [packages/ipc-server/src/base-connection.ts:130](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L130)

#### Parameters

##### data?

`any`

##### allowReconnect?

`boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`close`](IPCBaseConnection.md#close)

***

### destroy()

> **destroy**(`reason`?): `boolean`

Defined in: [packages/ipc-server/src/base-connection.ts:149](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L149)

#### Parameters

##### reason?

`string` | `Error`

#### Returns

`boolean`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`destroy`](IPCBaseConnection.md#destroy)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`emit`](IPCBaseConnection.md#emit)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`emitAsync`](IPCBaseConnection.md#emitasync)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`listenerCount`](IPCBaseConnection.md#listenercount)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`listeners`](IPCBaseConnection.md#listeners)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`off`](IPCBaseConnection.md#off)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`on`](IPCBaseConnection.md#on)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`once`](IPCBaseConnection.md#once)

***

### pause()

> **pause**(): `void`

Defined in: [packages/ipc-server/src/connection.ts:23](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L23)

#### Returns

`void`

***

### ping()

> **ping**(`data`?, `timeout`?): `Promise`\<`unknown`\>

Defined in: [packages/ipc-server/src/base-connection.ts:126](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L126)

#### Parameters

##### data?

`any`

##### timeout?

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`ping`](IPCBaseConnection.md#ping)

***

### publish()

> **publish**(`event`, `message`, `timeout`): `Promise`\<`boolean`\>

Defined in: [packages/ipc-server/src/base-connection.ts:114](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L114)

#### Parameters

##### event

`string`

##### message

`any`

##### timeout

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`publish`](IPCBaseConnection.md#publish)

***

### readBuffer()

> **readBuffer**(`size`?): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/ipc-server/src/base-connection.ts:237](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L237)

#### Parameters

##### size?

`number`

#### Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`readBuffer`](IPCBaseConnection.md#readbuffer)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`removeAllListeners`](IPCBaseConnection.md#removealllisteners)

***

### request()

> **request**(`data`?, `timeout`?): `Promise`\<`unknown`\>

Defined in: [packages/ipc-server/src/base-connection.ts:110](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L110)

#### Parameters

##### data?

`any`

##### timeout?

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`request`](IPCBaseConnection.md#request)

***

### resume()

> **resume**(): `void`

Defined in: [packages/ipc-server/src/connection.ts:26](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/connection.ts#L26)

#### Returns

`void`

***

### send()

> **send**(`data`): `Promise`\<`void` \| `Boolean` \| `Error`\>

Defined in: [packages/ipc-server/src/base-connection.ts:82](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L82)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`send`](IPCBaseConnection.md#send)

***

### sendByType()

> **sendByType**(`op`, `data`?, `timeout`?): `Promise`\<`unknown`\>

Defined in: [packages/ipc-server/src/base-connection.ts:86](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L86)

#### Parameters

##### op

[`IPCMessageType`](../enumerations/IPCMessageType.md)

##### data?

`any`

##### timeout?

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`sendByType`](IPCBaseConnection.md#sendbytype)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`setMaxListeners`](IPCBaseConnection.md#setmaxlisteners)

***

### subscribe()

> **subscribe**(`event`, `timeout`): `Promise`\<`boolean`\>

Defined in: [packages/ipc-server/src/base-connection.ts:118](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L118)

#### Parameters

##### event

`string` | `string`[]

##### timeout

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`subscribe`](IPCBaseConnection.md#subscribe)

***

### unsubscribe()

> **unsubscribe**(`event`, `timeout`): `Promise`\<`boolean`\>

Defined in: [packages/ipc-server/src/base-connection.ts:122](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L122)

#### Parameters

##### event

`string` | `string`[]

##### timeout

`number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`unsubscribe`](IPCBaseConnection.md#unsubscribe)

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

[`IPCBaseConnection`](IPCBaseConnection.md).[`listenerCount`](IPCBaseConnection.md#listenercount-2)
