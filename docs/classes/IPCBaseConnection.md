[**@isdk/ipc-server**](../README.md) • **Docs**

***

[@isdk/ipc-server](../globals.md) / IPCBaseConnection

# Class: `abstract` IPCBaseConnection

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

> **\_buffer**: `Buffer`[] = `[]`

#### Defined in

[packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L73)

***

### \_bufferTotalLength

> **\_bufferTotalLength**: `number` = `0`

#### Defined in

[packages/ipc-server/src/base-connection.ts:74](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L74)

***

### \_closed

> **\_closed**: `boolean`

#### Defined in

[packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L67)

***

### \_drainQueue

> **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

#### Defined in

[packages/ipc-server/src/base-connection.ts:77](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L77)

***

### \_end

> **\_end**: `any`

#### Defined in

[packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L70)

***

### \_error

> **\_error**: `undefined` \| `Error`

#### Defined in

[packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L69)

***

### \_requests

> **\_requests**: `any` = `{}`

#### Defined in

[packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L76)

***

### \_subscriptions

> **\_subscriptions**: `string`[] = `[]`

#### Defined in

[packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L72)

***

### id

> **id**: `string`

#### Defined in

[packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L66)

***

### socket

> **socket**: `undefined` \| `Socket`

#### Defined in

[packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L68)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_drain()

> **\_drain**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:317](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L317)

***

### \_nonce()

> **\_nonce**(): `string`

#### Returns

`string`

#### Defined in

[packages/ipc-server/src/base-connection.ts:173](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L173)

***

### \_onClose()

> **\_onClose**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:163](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L163)

***

### \_pack()

> **\_pack**(`packetData`): `Buffer`

#### Parameters

• **packetData**: [`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`Buffer`

#### Defined in

[packages/ipc-server/src/base-connection.ts:275](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L275)

***

### \_parse()

> `abstract` **\_parse**(`packet`): `void`

#### Parameters

• **packet**: [`IPCPacketType`](../interfaces/IPCPacketType.md)

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:80](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L80)

***

### \_processBuffer()

> **\_processBuffer**(`socket`): `void`

#### Parameters

• **socket**: `Socket` = `...`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:195](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L195)

***

### \_read()

> **\_read**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:187](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L187)

***

### \_readFromBuffer()

> **\_readFromBuffer**(`length`): `undefined` \| `Buffer`

#### Parameters

• **length**: `number`

#### Returns

`undefined` \| `Buffer`

#### Defined in

[packages/ipc-server/src/base-connection.ts:212](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L212)

***

### \_readToBuffer()

> **\_readToBuffer**(`socket`): `void`

#### Parameters

• **socket**: `Socket` = `...`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:177](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L177)

***

### \_tag()

> **\_tag**(`_size`): `number`[]

#### Parameters

• **\_size**: `number`

#### Returns

`number`[]

#### Defined in

[packages/ipc-server/src/base-connection.ts:285](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L285)

***

### \_tryWrite()

> `abstract` **\_tryWrite**(`op`, `data`?, `nonce`?): `Promise`\<`void` \| `Boolean` \| `Error`\>

#### Parameters

• **op**: [`IPCMessageType`](../enumerations/IPCMessageType.md)

• **data?**: `any`

• **nonce?**: `string`

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:79](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L79)

***

### \_write()

> **\_write**(`op`, `data`?, `nonce`?): `PromiseEx`\<`any`\> \| `Promise`\<`true`\>

#### Parameters

• **op**: [`IPCMessageType`](../enumerations/IPCMessageType.md)

• **data?**: `any`

• **nonce?**: `string`

#### Returns

`PromiseEx`\<`any`\> \| `Promise`\<`true`\>

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

#### Defined in

[packages/ipc-server/src/base-connection.ts:130](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L130)

***

### destroy()

> **destroy**(`reason`?): `boolean`

#### Parameters

• **reason?**: `string` \| `Error`

#### Returns

`boolean`

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

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

***

### ping()

> **ping**(`data`?, `timeout`?): `Promise`\<`unknown`\>

#### Parameters

• **data?**: `any`

• **timeout?**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`unknown`\>

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

#### Defined in

[packages/ipc-server/src/base-connection.ts:114](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L114)

***

### readBuffer()

> **readBuffer**(`size`?): `undefined` \| `Buffer`

#### Parameters

• **size?**: `number`

#### Returns

`undefined` \| `Buffer`

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

#### Defined in

[packages/ipc-server/src/base-connection.ts:110](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L110)

***

### send()

> **send**(`data`): `Promise`\<`void` \| `Boolean` \| `Error`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

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

#### Defined in

[packages/ipc-server/src/base-connection.ts:86](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/base-connection.ts#L86)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

• **n**: `number`

#### Returns

`EventEmitter`

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

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:74
