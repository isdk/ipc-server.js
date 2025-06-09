[**@isdk/ipc-server**](../README.md)

***

[@isdk/ipc-server](../globals.md) / IPCBaseConnection

# Class: `abstract` IPCBaseConnection

Defined in: [packages/ipc-server/src/base-connection.ts:60](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L60)

## Extends

- `EventEmitter`

## Extended by

- [`IPCClient`](IPCClient.md)
- [`IPCConnection`](IPCConnection.md)

## Constructors

### new IPCBaseConnection()

> **new IPCBaseConnection**(): [`IPCBaseConnection`](IPCBaseConnection.md)

#### Returns

[`IPCBaseConnection`](IPCBaseConnection.md)

## Properties

### \_buffer

> **\_buffer**: `Buffer`\<`ArrayBufferLike`\>[] = `[]`

Defined in: [packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L73)

***

### \_bufferTotalLength

> **\_bufferTotalLength**: `number` = `0`

Defined in: [packages/ipc-server/src/base-connection.ts:74](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L74)

***

### \_closed

> **\_closed**: `boolean`

Defined in: [packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L67)

***

### \_drainQueue

> **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

Defined in: [packages/ipc-server/src/base-connection.ts:77](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L77)

***

### \_end

> **\_end**: `any`

Defined in: [packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L70)

***

### \_error

> **\_error**: `undefined` \| `Error`

Defined in: [packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L69)

***

### \_requests

> **\_requests**: `any` = `{}`

Defined in: [packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L76)

***

### \_subscriptions

> **\_subscriptions**: `string`[] = `[]`

Defined in: [packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L72)

***

### id

> **id**: `string`

Defined in: [packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L66)

***

### socket

> **socket**: `undefined` \| `Socket`

Defined in: [packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L68)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_drain()

> **\_drain**(): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:317](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L317)

#### Returns

`void`

***

### \_nonce()

> **\_nonce**(): `string`

Defined in: [packages/ipc-server/src/base-connection.ts:173](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L173)

#### Returns

`string`

***

### \_onClose()

> **\_onClose**(): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:163](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L163)

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

***

### \_parse()

> `abstract` **\_parse**(`packet`): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:80](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L80)

#### Parameters

##### packet

[`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`void`

***

### \_processBuffer()

> **\_processBuffer**(`socket`): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:195](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L195)

#### Parameters

##### socket

`Socket` = `...`

#### Returns

`void`

***

### \_read()

> **\_read**(): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:187](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L187)

#### Returns

`void`

***

### \_readFromBuffer()

> **\_readFromBuffer**(`length`): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/ipc-server/src/base-connection.ts:212](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L212)

#### Parameters

##### length

`number`

#### Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>

***

### \_readToBuffer()

> **\_readToBuffer**(`socket`): `void`

Defined in: [packages/ipc-server/src/base-connection.ts:177](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L177)

#### Parameters

##### socket

`Socket` = `...`

#### Returns

`void`

***

### \_tag()

> **\_tag**(`_size`): `number`[]

Defined in: [packages/ipc-server/src/base-connection.ts:285](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L285)

#### Parameters

##### \_size

`number`

#### Returns

`number`[]

***

### \_tryWrite()

> `abstract` **\_tryWrite**(`op`, `data`?, `nonce`?): `Promise`\<`void` \| `Boolean` \| `Error`\>

Defined in: [packages/ipc-server/src/base-connection.ts:79](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L79)

#### Parameters

##### op

[`IPCMessageType`](../enumerations/IPCMessageType.md)

##### data?

`any`

##### nonce?

`string`

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

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

***

### destroy()

> **destroy**(`reason`?): `boolean`

Defined in: [packages/ipc-server/src/base-connection.ts:149](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L149)

#### Parameters

##### reason?

`string` | `Error`

#### Returns

`boolean`

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

***

### readBuffer()

> **readBuffer**(`size`?): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/ipc-server/src/base-connection.ts:237](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L237)

#### Parameters

##### size?

`number`

#### Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>

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

***

### send()

> **send**(`data`): `Promise`\<`void` \| `Boolean` \| `Error`\>

Defined in: [packages/ipc-server/src/base-connection.ts:82](https://github.com/isdk/ipc-server.js/blob/2f64abf9d868d3d65221954637804408e9f46984/src/base-connection.ts#L82)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

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

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

#### Parameters

##### n

`number`

#### Returns

`EventEmitter`

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
