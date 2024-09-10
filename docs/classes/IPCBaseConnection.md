[@isdk/ipc-server](../README.md) / [Exports](../modules.md) / IPCBaseConnection

# Class: IPCBaseConnection

## Hierarchy

- `EventEmitter`

  ↳ **`IPCBaseConnection`**

  ↳↳ [`IPCClient`](IPCClient.md)

  ↳↳ [`IPCConnection`](IPCConnection.md)

## Table of contents

### Constructors

- [constructor](IPCBaseConnection.md#constructor)

### Properties

- [\_buffer](IPCBaseConnection.md#_buffer)
- [\_bufferTotalLength](IPCBaseConnection.md#_buffertotallength)
- [\_closed](IPCBaseConnection.md#_closed)
- [\_drainQueue](IPCBaseConnection.md#_drainqueue)
- [\_end](IPCBaseConnection.md#_end)
- [\_error](IPCBaseConnection.md#_error)
- [\_requests](IPCBaseConnection.md#_requests)
- [id](IPCBaseConnection.md#id)
- [socket](IPCBaseConnection.md#socket)
- [defaultMaxListeners](IPCBaseConnection.md#defaultmaxlisteners)

### Methods

- [\_drain](IPCBaseConnection.md#_drain)
- [\_nonce](IPCBaseConnection.md#_nonce)
- [\_onClose](IPCBaseConnection.md#_onclose)
- [\_pack](IPCBaseConnection.md#_pack)
- [\_parse](IPCBaseConnection.md#_parse)
- [\_processBuffer](IPCBaseConnection.md#_processbuffer)
- [\_read](IPCBaseConnection.md#_read)
- [\_readFromBuffer](IPCBaseConnection.md#_readfrombuffer)
- [\_readToBuffer](IPCBaseConnection.md#_readtobuffer)
- [\_tag](IPCBaseConnection.md#_tag)
- [\_tryWrite](IPCBaseConnection.md#_trywrite)
- [\_untag](IPCBaseConnection.md#_untag)
- [\_write](IPCBaseConnection.md#_write)
- [close](IPCBaseConnection.md#close)
- [destroy](IPCBaseConnection.md#destroy)
- [emit](IPCBaseConnection.md#emit)
- [emitAsync](IPCBaseConnection.md#emitasync)
- [listenerCount](IPCBaseConnection.md#listenercount)
- [listeners](IPCBaseConnection.md#listeners)
- [off](IPCBaseConnection.md#off)
- [on](IPCBaseConnection.md#on)
- [once](IPCBaseConnection.md#once)
- [ping](IPCBaseConnection.md#ping)
- [readBuffer](IPCBaseConnection.md#readbuffer)
- [removeAllListeners](IPCBaseConnection.md#removealllisteners)
- [request](IPCBaseConnection.md#request)
- [send](IPCBaseConnection.md#send)
- [sendByType](IPCBaseConnection.md#sendbytype)
- [setMaxListeners](IPCBaseConnection.md#setmaxlisteners)
- [listenerCount](IPCBaseConnection.md#listenercount-1)

## Constructors

### constructor

• **new IPCBaseConnection**(): [`IPCBaseConnection`](IPCBaseConnection.md)

#### Returns

[`IPCBaseConnection`](IPCBaseConnection.md)

## Properties

### \_buffer

• **\_buffer**: `Buffer`[] = `[]`

#### Defined in

[packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L72)

___

### \_bufferTotalLength

• **\_bufferTotalLength**: `number` = `0`

#### Defined in

[packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L73)

___

### \_closed

• **\_closed**: `boolean`

#### Defined in

[packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L67)

___

### \_drainQueue

• **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

#### Defined in

[packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L76)

___

### \_end

• **\_end**: `any`

#### Defined in

[packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L70)

___

### \_error

• **\_error**: `undefined` \| `Error`

#### Defined in

[packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L69)

___

### \_requests

• **\_requests**: `any` = `{}`

#### Defined in

[packages/ipc-server/src/base-connection.ts:75](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L75)

___

### id

• **id**: `string`

#### Defined in

[packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L66)

___

### socket

• **socket**: `undefined` \| `Socket`

#### Defined in

[packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L68)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_drain

▸ **_drain**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:303](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L303)

___

### \_nonce

▸ **_nonce**(): `string`

#### Returns

`string`

#### Defined in

[packages/ipc-server/src/base-connection.ts:159](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L159)

___

### \_onClose

▸ **_onClose**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:150](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L150)

___

### \_pack

▸ **_pack**(`packetData`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packetData` | [`IPCPacketType`](../interfaces/IPCPacketType.md) |

#### Returns

`Buffer`

#### Defined in

[packages/ipc-server/src/base-connection.ts:261](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L261)

___

### \_parse

▸ **_parse**(`packet`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`IPCPacketType`](../interfaces/IPCPacketType.md) |

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:79](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L79)

___

### \_processBuffer

▸ **_processBuffer**(`socket?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:181](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L181)

___

### \_read

▸ **_read**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:173](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L173)

___

### \_readFromBuffer

▸ **_readFromBuffer**(`length`): `undefined` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`undefined` \| `Buffer`

#### Defined in

[packages/ipc-server/src/base-connection.ts:198](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L198)

___

### \_readToBuffer

▸ **_readToBuffer**(`socket?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/base-connection.ts:163](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L163)

___

### \_tag

▸ **_tag**(`_size`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_size` | `number` |

#### Returns

`number`[]

#### Defined in

[packages/ipc-server/src/base-connection.ts:271](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L271)

___

### \_tryWrite

▸ **_tryWrite**(`op`, `data?`, `nonce?`): `Promise`\<`void` \| `Boolean` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`IPCMessageType`](../enums/IPCMessageType.md) |
| `data?` | `any` |
| `nonce?` | `string` |

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:78](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L78)

___

### \_untag

▸ **_untag**(): ``false`` \| `number`[]

#### Returns

``false`` \| `number`[]

#### Defined in

[packages/ipc-server/src/base-connection.ts:280](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L280)

___

### \_write

▸ **_write**(`op`, `data?`, `nonce?`): `PromiseEx`\<`any`\> \| `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`IPCMessageType`](../enums/IPCMessageType.md) |
| `data?` | `any` |
| `nonce?` | `string` |

#### Returns

`PromiseEx`\<`any`\> \| `Promise`\<``true``\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:231](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L231)

___

### close

▸ **close**(`data?`, `allowReconnect?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data?` | `any` | `undefined` |
| `allowReconnect` | `boolean` | `false` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:117](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L117)

___

### destroy

▸ **destroy**(`reason?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` \| `Error` |

#### Returns

`boolean`

#### Defined in

[packages/ipc-server/src/base-connection.ts:136](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L136)

___

### emit

▸ **emit**(`eventName`, `...args`): `any`

Emits the specified event type with the given arguments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | - |
| `...args` | `any`[] | The event type followed by any number of arguments to be passed to the listener functions. |

#### Returns

`any`

The result of the event.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:38

___

### emitAsync

▸ **emitAsync**(`eventName`, `...args`): `Promise`\<`any`\>

Asynchronously emits the specified event type with the given arguments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | - |
| `...args` | `any`[] | The event type followed by any number of arguments to be passed to the listener functions. |

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:44

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | The name of the event to get the listeners for. |

#### Returns

`number`

- the listeners count

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:66

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | The name of the event to get the listeners for. |

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:59

___

### off

▸ **off**(`eventName`, `listener`): `EventEmitter`

Removes a listener function from the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | - |
| `listener` | `Function` | The listener function to be removed. |

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

**`Throws`**

If the listener is not a function.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:32

___

### on

▸ **on**(`eventName`, `listener`): `EventEmitter`

Adds a listener function to the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | - |
| `listener` | `Function` | The listener function to be called when the event is emitted. |

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

**`Throws`**

If the listener is not a function.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:16

___

### once

▸ **once**(`eventName`, `listener`): `EventEmitter`

Adds a one-time listener function to the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | - |
| `listener` | `Function` | The listener function to be called once when the event is emitted. |

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

**`Throws`**

If the listener is not a function.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:24

___

### ping

▸ **ping**(`data?`, `timeout?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data?` | `any` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:113](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L113)

___

### readBuffer

▸ **readBuffer**(`size?`): `undefined` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`undefined` \| `Buffer`

#### Defined in

[packages/ipc-server/src/base-connection.ts:223](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L223)

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): `EventEmitter`

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `string` \| `RegExp` | The event to remove listeners for. If not provided, all listeners for all events will be removed. |

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:51

___

### request

▸ **request**(`data?`, `timeout?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data?` | `any` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:109](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L109)

___

### send

▸ **send**(`data`): `Promise`\<`void` \| `Boolean` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:81](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L81)

___

### sendByType

▸ **sendByType**(`op`, `data?`, `timeout?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `op` | [`IPCMessageType`](../enums/IPCMessageType.md) | `undefined` |
| `data?` | `any` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:85](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L85)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`EventEmitter`

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:52

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `eventName` | `string` \| `RegExp` |

#### Returns

`number`

**`Deprecated`**

use emitter.listenerCount instead

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:74
