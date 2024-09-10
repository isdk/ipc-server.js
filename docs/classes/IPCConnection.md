[@isdk/ipc-server](../README.md) / [Exports](../modules.md) / IPCConnection

# Class: IPCConnection

## Hierarchy

- [`IPCBaseConnection`](IPCBaseConnection.md)

  ↳ **`IPCConnection`**

## Table of contents

### Constructors

- [constructor](IPCConnection.md#constructor)

### Properties

- [\_buffer](IPCConnection.md#_buffer)
- [\_bufferTotalLength](IPCConnection.md#_buffertotallength)
- [\_closed](IPCConnection.md#_closed)
- [\_drainQueue](IPCConnection.md#_drainqueue)
- [\_end](IPCConnection.md#_end)
- [\_error](IPCConnection.md#_error)
- [\_requests](IPCConnection.md#_requests)
- [\_retries](IPCConnection.md#_retries)
- [\_subscriptions](IPCConnection.md#_subscriptions)
- [connectedAt](IPCConnection.md#connectedat)
- [id](IPCConnection.md#id)
- [server](IPCConnection.md#server)
- [socket](IPCConnection.md#socket)
- [defaultMaxListeners](IPCConnection.md#defaultmaxlisteners)

### Methods

- [\_drain](IPCConnection.md#_drain)
- [\_init](IPCConnection.md#_init)
- [\_nonce](IPCConnection.md#_nonce)
- [\_onClose](IPCConnection.md#_onclose)
- [\_onError](IPCConnection.md#_onerror)
- [\_pack](IPCConnection.md#_pack)
- [\_parse](IPCConnection.md#_parse)
- [\_processBuffer](IPCConnection.md#_processbuffer)
- [\_read](IPCConnection.md#_read)
- [\_readFromBuffer](IPCConnection.md#_readfrombuffer)
- [\_readToBuffer](IPCConnection.md#_readtobuffer)
- [\_tag](IPCConnection.md#_tag)
- [\_tryWrite](IPCConnection.md#_trywrite)
- [\_write](IPCConnection.md#_write)
- [close](IPCConnection.md#close)
- [destroy](IPCConnection.md#destroy)
- [emit](IPCConnection.md#emit)
- [emitAsync](IPCConnection.md#emitasync)
- [listenerCount](IPCConnection.md#listenercount)
- [listeners](IPCConnection.md#listeners)
- [off](IPCConnection.md#off)
- [on](IPCConnection.md#on)
- [once](IPCConnection.md#once)
- [pause](IPCConnection.md#pause)
- [ping](IPCConnection.md#ping)
- [publish](IPCConnection.md#publish)
- [readBuffer](IPCConnection.md#readbuffer)
- [removeAllListeners](IPCConnection.md#removealllisteners)
- [request](IPCConnection.md#request)
- [resume](IPCConnection.md#resume)
- [send](IPCConnection.md#send)
- [sendByType](IPCConnection.md#sendbytype)
- [setMaxListeners](IPCConnection.md#setmaxlisteners)
- [subscribe](IPCConnection.md#subscribe)
- [unsubscribe](IPCConnection.md#unsubscribe)
- [listenerCount](IPCConnection.md#listenercount-1)

## Constructors

### constructor

• **new IPCConnection**(`socket`, `server`): [`IPCConnection`](IPCConnection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |
| `server` | [`IPCServer`](IPCServer.md) |

#### Returns

[`IPCConnection`](IPCConnection.md)

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[constructor](IPCBaseConnection.md#constructor)

#### Defined in

[packages/ipc-server/src/connection.ts:13](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L13)

## Properties

### \_buffer

• **\_buffer**: `Buffer`[] = `[]`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_buffer](IPCBaseConnection.md#_buffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L73)

___

### \_bufferTotalLength

• **\_bufferTotalLength**: `number` = `0`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_bufferTotalLength](IPCBaseConnection.md#_buffertotallength)

#### Defined in

[packages/ipc-server/src/base-connection.ts:74](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L74)

___

### \_closed

• **\_closed**: `boolean`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_closed](IPCBaseConnection.md#_closed)

#### Defined in

[packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L67)

___

### \_drainQueue

• **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_drainQueue](IPCBaseConnection.md#_drainqueue)

#### Defined in

[packages/ipc-server/src/base-connection.ts:77](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L77)

___

### \_end

• **\_end**: `any`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_end](IPCBaseConnection.md#_end)

#### Defined in

[packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L70)

___

### \_error

• **\_error**: `undefined` \| `Error`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_error](IPCBaseConnection.md#_error)

#### Defined in

[packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L69)

___

### \_requests

• **\_requests**: `any` = `{}`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_requests](IPCBaseConnection.md#_requests)

#### Defined in

[packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L76)

___

### \_retries

• **\_retries**: `number`

#### Defined in

[packages/ipc-server/src/connection.ts:9](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L9)

___

### \_subscriptions

• **\_subscriptions**: `string`[] = `[]`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_subscriptions](IPCBaseConnection.md#_subscriptions)

#### Defined in

[packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L72)

___

### connectedAt

• **connectedAt**: `number`

#### Defined in

[packages/ipc-server/src/connection.ts:11](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L11)

___

### id

• **id**: `string`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[id](IPCBaseConnection.md#id)

#### Defined in

[packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L66)

___

### server

• **server**: [`IPCServer`](IPCServer.md)

#### Defined in

[packages/ipc-server/src/connection.ts:13](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L13)

___

### socket

• **socket**: `undefined` \| `Socket`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[socket](IPCBaseConnection.md#socket)

#### Defined in

[packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L68)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[defaultMaxListeners](IPCBaseConnection.md#defaultmaxlisteners)

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_drain

▸ **_drain**(): `void`

#### Returns

`void`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_drain](IPCBaseConnection.md#_drain)

#### Defined in

[packages/ipc-server/src/base-connection.ts:317](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L317)

___

### \_init

▸ **_init**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:29](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L29)

___

### \_nonce

▸ **_nonce**(): `string`

#### Returns

`string`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_nonce](IPCBaseConnection.md#_nonce)

#### Defined in

[packages/ipc-server/src/base-connection.ts:173](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L173)

___

### \_onClose

▸ **_onClose**(): `void`

#### Returns

`void`

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[_onClose](IPCBaseConnection.md#_onclose)

#### Defined in

[packages/ipc-server/src/connection.ts:80](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L80)

___

### \_onError

▸ **_onError**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:71](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L71)

___

### \_pack

▸ **_pack**(`packetData`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packetData` | [`IPCPacketType`](../interfaces/IPCPacketType.md) |

#### Returns

`Buffer`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_pack](IPCBaseConnection.md#_pack)

#### Defined in

[packages/ipc-server/src/base-connection.ts:275](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L275)

___

### \_parse

▸ **_parse**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPCPacketType`](../interfaces/IPCPacketType.md) |

#### Returns

`void`

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[_parse](IPCBaseConnection.md#_parse)

#### Defined in

[packages/ipc-server/src/connection.ts:91](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L91)

___

### \_processBuffer

▸ **_processBuffer**(`socket?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_processBuffer](IPCBaseConnection.md#_processbuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:195](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L195)

___

### \_read

▸ **_read**(): `void`

#### Returns

`void`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_read](IPCBaseConnection.md#_read)

#### Defined in

[packages/ipc-server/src/base-connection.ts:187](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L187)

___

### \_readFromBuffer

▸ **_readFromBuffer**(`length`): `undefined` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`undefined` \| `Buffer`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_readFromBuffer](IPCBaseConnection.md#_readfrombuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:212](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L212)

___

### \_readToBuffer

▸ **_readToBuffer**(`socket?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_readToBuffer](IPCBaseConnection.md#_readtobuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:177](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L177)

___

### \_tag

▸ **_tag**(`_size`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_size` | `number` |

#### Returns

`number`[]

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_tag](IPCBaseConnection.md#_tag)

#### Defined in

[packages/ipc-server/src/base-connection.ts:285](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L285)

___

### \_tryWrite

▸ **_tryWrite**(`op`, `data?`, `nonce?`, `retries?`): `Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `op` | [`IPCMessageType`](../enums/IPCMessageType.md) | `undefined` |
| `data?` | `any` | `undefined` |
| `nonce?` | `string` | `undefined` |
| `retries` | `number` | `0` |

#### Returns

`Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[_tryWrite](IPCBaseConnection.md#_trywrite)

#### Defined in

[packages/ipc-server/src/connection.ts:155](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L155)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_write](IPCBaseConnection.md#_write)

#### Defined in

[packages/ipc-server/src/base-connection.ts:245](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L245)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[close](IPCBaseConnection.md#close)

#### Defined in

[packages/ipc-server/src/base-connection.ts:130](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L130)

___

### destroy

▸ **destroy**(`reason?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` \| `Error` |

#### Returns

`boolean`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[destroy](IPCBaseConnection.md#destroy)

#### Defined in

[packages/ipc-server/src/base-connection.ts:149](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L149)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[emit](IPCBaseConnection.md#emit)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[emitAsync](IPCBaseConnection.md#emitasync)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[listenerCount](IPCBaseConnection.md#listenercount)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[listeners](IPCBaseConnection.md#listeners)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[off](IPCBaseConnection.md#off)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[on](IPCBaseConnection.md#on)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[once](IPCBaseConnection.md#once)

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:24

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:23](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L23)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[ping](IPCBaseConnection.md#ping)

#### Defined in

[packages/ipc-server/src/base-connection.ts:126](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L126)

___

### publish

▸ **publish**(`event`, `message`, `timeout?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` | `undefined` |
| `message` | `any` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[publish](IPCBaseConnection.md#publish)

#### Defined in

[packages/ipc-server/src/base-connection.ts:114](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L114)

___

### readBuffer

▸ **readBuffer**(`size?`): `undefined` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`undefined` \| `Buffer`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[readBuffer](IPCBaseConnection.md#readbuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:237](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L237)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[removeAllListeners](IPCBaseConnection.md#removealllisteners)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[request](IPCBaseConnection.md#request)

#### Defined in

[packages/ipc-server/src/base-connection.ts:110](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L110)

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/connection.ts:26](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/connection.ts#L26)

___

### send

▸ **send**(`data`): `Promise`\<`void` \| `Boolean` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`void` \| `Boolean` \| `Error`\>

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[send](IPCBaseConnection.md#send)

#### Defined in

[packages/ipc-server/src/base-connection.ts:82](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L82)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[sendByType](IPCBaseConnection.md#sendbytype)

#### Defined in

[packages/ipc-server/src/base-connection.ts:86](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L86)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`EventEmitter`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[setMaxListeners](IPCBaseConnection.md#setmaxlisteners)

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:52

___

### subscribe

▸ **subscribe**(`event`, `timeout?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` \| `string`[] | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[subscribe](IPCBaseConnection.md#subscribe)

#### Defined in

[packages/ipc-server/src/base-connection.ts:118](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L118)

___

### unsubscribe

▸ **unsubscribe**(`event`, `timeout?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` \| `string`[] | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[unsubscribe](IPCBaseConnection.md#unsubscribe)

#### Defined in

[packages/ipc-server/src/base-connection.ts:122](https://github.com/isdk/ipc-server.js/blob/e240e4395923d3d90123c33159fd9e4a3e252a28/src/base-connection.ts#L122)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[listenerCount](IPCBaseConnection.md#listenercount-1)

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:74
