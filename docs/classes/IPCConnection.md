[**@isdk/ipc-server**](../README.md) • **Docs**

***

[@isdk/ipc-server](../globals.md) / IPCConnection

# Class: IPCConnection

## Extends

- [`IPCBaseConnection`](IPCBaseConnection.md)

## Constructors

### new IPCConnection()

> **new IPCConnection**(`socket`, `server`): [`IPCConnection`](IPCConnection.md)

#### Parameters

• **socket**: `Socket`

• **server**: [`IPCServer`](IPCServer.md)

#### Returns

[`IPCConnection`](IPCConnection.md)

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`constructor`](IPCBaseConnection.md#constructors)

#### Defined in

[packages/ipc-server/src/connection.ts:13](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L13)

## Properties

### \_buffer

> **\_buffer**: `Buffer`[] = `[]`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_buffer`](IPCBaseConnection.md#_buffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L73)

***

### \_bufferTotalLength

> **\_bufferTotalLength**: `number` = `0`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_bufferTotalLength`](IPCBaseConnection.md#_buffertotallength)

#### Defined in

[packages/ipc-server/src/base-connection.ts:74](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L74)

***

### \_closed

> **\_closed**: `boolean`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_closed`](IPCBaseConnection.md#_closed)

#### Defined in

[packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L67)

***

### \_drainQueue

> **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_drainQueue`](IPCBaseConnection.md#_drainqueue)

#### Defined in

[packages/ipc-server/src/base-connection.ts:77](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L77)

***

### \_end

> **\_end**: `any`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_end`](IPCBaseConnection.md#_end)

#### Defined in

[packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L70)

***

### \_error

> **\_error**: `undefined` \| `Error`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_error`](IPCBaseConnection.md#_error)

#### Defined in

[packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L69)

***

### \_requests

> **\_requests**: `any` = `{}`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_requests`](IPCBaseConnection.md#_requests)

#### Defined in

[packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L76)

***

### \_retries

> **\_retries**: `number`

#### Defined in

[packages/ipc-server/src/connection.ts:9](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L9)

***

### \_subscriptions

> **\_subscriptions**: `string`[] = `[]`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_subscriptions`](IPCBaseConnection.md#_subscriptions)

#### Defined in

[packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L72)

***

### connectedAt

> **connectedAt**: `number`

#### Defined in

[packages/ipc-server/src/connection.ts:11](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L11)

***

### id

> **id**: `string`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`id`](IPCBaseConnection.md#id)

#### Defined in

[packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L66)

***

### server

> **server**: [`IPCServer`](IPCServer.md)

#### Defined in

[packages/ipc-server/src/connection.ts:13](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L13)

***

### socket

> **socket**: `undefined` \| `Socket`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`socket`](IPCBaseConnection.md#socket)

#### Defined in

[packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L68)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`defaultMaxListeners`](IPCBaseConnection.md#defaultmaxlisteners)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_drain()

> **\_drain**(): `void`

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_drain`](IPCBaseConnection.md#_drain)

#### Defined in

[packages/ipc-server/src/base-connection.ts:317](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L317)

***

### \_init()

> **\_init**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:29](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L29)

***

### \_nonce()

> **\_nonce**(): `string`

#### Returns

`string`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_nonce`](IPCBaseConnection.md#_nonce)

#### Defined in

[packages/ipc-server/src/base-connection.ts:173](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L173)

***

### \_onClose()

> **\_onClose**(): `void`

#### Returns

`void`

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`_onClose`](IPCBaseConnection.md#_onclose)

#### Defined in

[packages/ipc-server/src/connection.ts:80](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L80)

***

### \_onError()

> **\_onError**(`e`): `void`

#### Parameters

• **e**: `Error`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:71](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L71)

***

### \_pack()

> **\_pack**(`packetData`): `Buffer`

#### Parameters

• **packetData**: [`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`Buffer`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_pack`](IPCBaseConnection.md#_pack)

#### Defined in

[packages/ipc-server/src/base-connection.ts:275](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L275)

***

### \_parse()

> **\_parse**(`data`): `void`

#### Parameters

• **data**: [`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`void`

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`_parse`](IPCBaseConnection.md#_parse)

#### Defined in

[packages/ipc-server/src/connection.ts:91](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L91)

***

### \_processBuffer()

> **\_processBuffer**(`socket`): `void`

#### Parameters

• **socket**: `Socket` = `...`

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_processBuffer`](IPCBaseConnection.md#_processbuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:195](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L195)

***

### \_read()

> **\_read**(): `void`

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_read`](IPCBaseConnection.md#_read)

#### Defined in

[packages/ipc-server/src/base-connection.ts:187](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L187)

***

### \_readFromBuffer()

> **\_readFromBuffer**(`length`): `undefined` \| `Buffer`

#### Parameters

• **length**: `number`

#### Returns

`undefined` \| `Buffer`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_readFromBuffer`](IPCBaseConnection.md#_readfrombuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:212](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L212)

***

### \_readToBuffer()

> **\_readToBuffer**(`socket`): `void`

#### Parameters

• **socket**: `Socket` = `...`

#### Returns

`void`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_readToBuffer`](IPCBaseConnection.md#_readtobuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:177](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L177)

***

### \_tag()

> **\_tag**(`_size`): `number`[]

#### Parameters

• **\_size**: `number`

#### Returns

`number`[]

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_tag`](IPCBaseConnection.md#_tag)

#### Defined in

[packages/ipc-server/src/base-connection.ts:285](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L285)

***

### \_tryWrite()

> **\_tryWrite**(`op`, `data`?, `nonce`?, `retries`?): `Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Parameters

• **op**: [`IPCMessageType`](../enumerations/IPCMessageType.md)

• **data?**: `any`

• **nonce?**: `string`

• **retries?**: `number` = `0`

#### Returns

`Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Overrides

[`IPCBaseConnection`](IPCBaseConnection.md).[`_tryWrite`](IPCBaseConnection.md#_trywrite)

#### Defined in

[packages/ipc-server/src/connection.ts:155](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L155)

***

### \_write()

> **\_write**(`op`, `data`?, `nonce`?): `PromiseEx`\<`any`\> \| `Promise`\<`true`\>

#### Parameters

• **op**: [`IPCMessageType`](../enumerations/IPCMessageType.md)

• **data?**: `any`

• **nonce?**: `string`

#### Returns

`PromiseEx`\<`any`\> \| `Promise`\<`true`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`_write`](IPCBaseConnection.md#_write)

#### Defined in

[packages/ipc-server/src/base-connection.ts:245](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L245)

***

### close()

> **close**(`data`?, `allowReconnect`?): `Promise`\<`boolean`\>

#### Parameters

• **data?**: `any`

• **allowReconnect?**: `boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`close`](IPCBaseConnection.md#close)

#### Defined in

[packages/ipc-server/src/base-connection.ts:130](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L130)

***

### destroy()

> **destroy**(`reason`?): `boolean`

#### Parameters

• **reason?**: `string` \| `Error`

#### Returns

`boolean`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`destroy`](IPCBaseConnection.md#destroy)

#### Defined in

[packages/ipc-server/src/base-connection.ts:149](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L149)

***

### emit()

> **emit**(`eventName`, ...`args`): `any`

Emits the specified event type with the given arguments.

#### Parameters

• **eventName**: `string`

• ...**args**: `any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`any`

The result of the event.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`emit`](IPCBaseConnection.md#emit)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:38

***

### emitAsync()

> **emitAsync**(`eventName`, ...`args`): `Promise`\<`any`\>

Asynchronously emits the specified event type with the given arguments.

#### Parameters

• **eventName**: `string`

• ...**args**: `any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`emitAsync`](IPCBaseConnection.md#emitasync)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:44

***

### listenerCount()

> **listenerCount**(`eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

• **eventName**: `string` \| `RegExp`

The name of the event to get the listeners for.

#### Returns

`number`

- the listeners count

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`listenerCount`](IPCBaseConnection.md#listenercount)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:66

***

### listeners()

> **listeners**(`eventName`): `Function`[]

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

• **eventName**: `string` \| `RegExp`

The name of the event to get the listeners for.

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`listeners`](IPCBaseConnection.md#listeners)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:59

***

### off()

> **off**(`eventName`, `listener`): `EventEmitter`

Removes a listener function from the specified event type.

#### Parameters

• **eventName**: `string` \| `RegExp`

• **listener**: `Function`

The listener function to be removed.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`off`](IPCBaseConnection.md#off)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:32

***

### on()

> **on**(`eventName`, `listener`): `EventEmitter`

Adds a listener function to the specified event type.

#### Parameters

• **eventName**: `string` \| `RegExp`

• **listener**: `Function`

The listener function to be called when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`on`](IPCBaseConnection.md#on)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:16

***

### once()

> **once**(`eventName`, `listener`): `EventEmitter`

Adds a one-time listener function to the specified event type.

#### Parameters

• **eventName**: `string` \| `RegExp`

• **listener**: `Function`

The listener function to be called once when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`once`](IPCBaseConnection.md#once)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

***

### pause()

> **pause**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:23](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L23)

***

### ping()

> **ping**(`data`?, `timeout`?): `Promise`\<`unknown`\>

#### Parameters

• **data?**: `any`

• **timeout?**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`ping`](IPCBaseConnection.md#ping)

#### Defined in

[packages/ipc-server/src/base-connection.ts:126](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L126)

***

### publish()

> **publish**(`event`, `message`, `timeout`): `Promise`\<`boolean`\>

#### Parameters

• **event**: `string`

• **message**: `any`

• **timeout**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`publish`](IPCBaseConnection.md#publish)

#### Defined in

[packages/ipc-server/src/base-connection.ts:114](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L114)

***

### readBuffer()

> **readBuffer**(`size`?): `undefined` \| `Buffer`

#### Parameters

• **size?**: `number`

#### Returns

`undefined` \| `Buffer`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`readBuffer`](IPCBaseConnection.md#readbuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:237](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L237)

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `EventEmitter`

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

• **eventName?**: `string` \| `RegExp`

The event to remove listeners for. If not provided, all listeners for all events will be removed.

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`removeAllListeners`](IPCBaseConnection.md#removealllisteners)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

***

### request()

> **request**(`data`?, `timeout`?): `Promise`\<`unknown`\>

#### Parameters

• **data?**: `any`

• **timeout?**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`request`](IPCBaseConnection.md#request)

#### Defined in

[packages/ipc-server/src/base-connection.ts:110](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L110)

***

### resume()

> **resume**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:26](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/connection.ts#L26)

***

### send()

> **send**(`data`): `Promise`\<`void` \| `Boolean` \| `Error`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`send`](IPCBaseConnection.md#send)

#### Defined in

[packages/ipc-server/src/base-connection.ts:82](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L82)

***

### sendByType()

> **sendByType**(`op`, `data`?, `timeout`?): `Promise`\<`unknown`\>

#### Parameters

• **op**: [`IPCMessageType`](../enumerations/IPCMessageType.md)

• **data?**: `any`

• **timeout?**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`sendByType`](IPCBaseConnection.md#sendbytype)

#### Defined in

[packages/ipc-server/src/base-connection.ts:86](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L86)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

• **n**: `number`

#### Returns

`EventEmitter`

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`setMaxListeners`](IPCBaseConnection.md#setmaxlisteners)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

***

### subscribe()

> **subscribe**(`event`, `timeout`): `Promise`\<`boolean`\>

#### Parameters

• **event**: `string` \| `string`[]

• **timeout**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`subscribe`](IPCBaseConnection.md#subscribe)

#### Defined in

[packages/ipc-server/src/base-connection.ts:118](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L118)

***

### unsubscribe()

> **unsubscribe**(`event`, `timeout`): `Promise`\<`boolean`\>

#### Parameters

• **event**: `string` \| `string`[]

• **timeout**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`unsubscribe`](IPCBaseConnection.md#unsubscribe)

#### Defined in

[packages/ipc-server/src/base-connection.ts:122](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L122)

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

• **emitter**: `EventEmitter`

• **eventName**: `string` \| `RegExp`

#### Returns

`number`

#### Deprecated

use emitter.listenerCount instead

#### Inherited from

[`IPCBaseConnection`](IPCBaseConnection.md).[`listenerCount`](IPCBaseConnection.md#listenercount-1)

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:74
