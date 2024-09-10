[@isdk/ipc-server](../README.md) / [Exports](../modules.md) / IPCClient

# Class: IPCClient

## Hierarchy

- [`IPCBaseConnection`](IPCBaseConnection.md)

  ↳ **`IPCClient`**

## Table of contents

### Constructors

- [constructor](IPCClient.md#constructor)

### Properties

- [\_buffer](IPCClient.md#_buffer)
- [\_bufferTotalLength](IPCClient.md#_buffertotallength)
- [\_closed](IPCClient.md#_closed)
- [\_drainQueue](IPCClient.md#_drainqueue)
- [\_end](IPCClient.md#_end)
- [\_error](IPCClient.md#_error)
- [\_events](IPCClient.md#_events)
- [\_payload](IPCClient.md#_payload)
- [\_promise](IPCClient.md#_promise)
- [\_requests](IPCClient.md#_requests)
- [\_retries](IPCClient.md#_retries)
- [id](IPCClient.md#id)
- [options](IPCClient.md#options)
- [socket](IPCClient.md#socket)
- [status](IPCClient.md#status)
- [defaultMaxListeners](IPCClient.md#defaultmaxlisteners)

### Methods

- [\_drain](IPCClient.md#_drain)
- [\_init](IPCClient.md#_init)
- [\_nonce](IPCClient.md#_nonce)
- [\_onClose](IPCClient.md#_onclose)
- [\_onError](IPCClient.md#_onerror)
- [\_pack](IPCClient.md#_pack)
- [\_parse](IPCClient.md#_parse)
- [\_processBuffer](IPCClient.md#_processbuffer)
- [\_read](IPCClient.md#_read)
- [\_readFromBuffer](IPCClient.md#_readfrombuffer)
- [\_readToBuffer](IPCClient.md#_readtobuffer)
- [\_ready](IPCClient.md#_ready)
- [\_setStatus](IPCClient.md#_setstatus)
- [\_tag](IPCClient.md#_tag)
- [\_tryWrite](IPCClient.md#_trywrite)
- [\_write](IPCClient.md#_write)
- [close](IPCClient.md#close)
- [connect](IPCClient.md#connect)
- [destroy](IPCClient.md#destroy)
- [emit](IPCClient.md#emit)
- [emitAsync](IPCClient.md#emitasync)
- [listenerCount](IPCClient.md#listenercount)
- [listeners](IPCClient.md#listeners)
- [off](IPCClient.md#off)
- [on](IPCClient.md#on)
- [once](IPCClient.md#once)
- [ping](IPCClient.md#ping)
- [readBuffer](IPCClient.md#readbuffer)
- [removeAllListeners](IPCClient.md#removealllisteners)
- [request](IPCClient.md#request)
- [send](IPCClient.md#send)
- [sendByType](IPCClient.md#sendbytype)
- [setMaxListeners](IPCClient.md#setmaxlisteners)
- [listenerCount](IPCClient.md#listenercount-1)

## Constructors

### constructor

• **new IPCClient**(`options?`): [`IPCClient`](IPCClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IPCClientOptions`](../interfaces/IPCClientOptions.md) |

#### Returns

[`IPCClient`](IPCClient.md)

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[constructor](IPCBaseConnection.md#constructor)

#### Defined in

[packages/ipc-server/src/client.ts:39](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L39)

## Properties

### \_buffer

• **\_buffer**: `Buffer`[] = `[]`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_buffer](IPCBaseConnection.md#_buffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:72](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L72)

___

### \_bufferTotalLength

• **\_bufferTotalLength**: `number` = `0`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_bufferTotalLength](IPCBaseConnection.md#_buffertotallength)

#### Defined in

[packages/ipc-server/src/base-connection.ts:73](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L73)

___

### \_closed

• **\_closed**: `boolean`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_closed](IPCBaseConnection.md#_closed)

#### Defined in

[packages/ipc-server/src/base-connection.ts:67](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L67)

___

### \_drainQueue

• **\_drainQueue**: `PromiseEx`\<`any`\>[] = `[]`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_drainQueue](IPCBaseConnection.md#_drainqueue)

#### Defined in

[packages/ipc-server/src/base-connection.ts:76](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L76)

___

### \_end

• **\_end**: `any`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_end](IPCBaseConnection.md#_end)

#### Defined in

[packages/ipc-server/src/base-connection.ts:70](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L70)

___

### \_error

• **\_error**: `undefined` \| `Error`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_error](IPCBaseConnection.md#_error)

#### Defined in

[packages/ipc-server/src/base-connection.ts:69](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L69)

___

### \_events

• **\_events**: `any`

#### Defined in

[packages/ipc-server/src/client.ts:37](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L37)

___

### \_payload

• **\_payload**: `any`

#### Defined in

[packages/ipc-server/src/client.ts:36](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L36)

___

### \_promise

• **\_promise**: `any`

#### Defined in

[packages/ipc-server/src/client.ts:34](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L34)

___

### \_requests

• **\_requests**: `any` = `{}`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_requests](IPCBaseConnection.md#_requests)

#### Defined in

[packages/ipc-server/src/base-connection.ts:75](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L75)

___

### \_retries

• **\_retries**: `number`

#### Defined in

[packages/ipc-server/src/client.ts:35](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L35)

___

### id

• **id**: `string`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[id](IPCBaseConnection.md#id)

#### Defined in

[packages/ipc-server/src/base-connection.ts:66](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L66)

___

### options

• **options**: [`IPCClientOptions`](../interfaces/IPCClientOptions.md)

#### Defined in

[packages/ipc-server/src/client.ts:39](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L39)

___

### socket

• **socket**: `undefined` \| `Socket`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[socket](IPCBaseConnection.md#socket)

#### Defined in

[packages/ipc-server/src/base-connection.ts:68](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L68)

___

### status

• **status**: [`IPCClientStatus`](../enums/IPCClientStatus.md)

#### Defined in

[packages/ipc-server/src/client.ts:33](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L33)

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

[packages/ipc-server/src/base-connection.ts:303](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L303)

___

### \_init

▸ **_init**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/client.ts:167](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L167)

___

### \_nonce

▸ **_nonce**(): `string`

#### Returns

`string`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_nonce](IPCBaseConnection.md#_nonce)

#### Defined in

[packages/ipc-server/src/base-connection.ts:159](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L159)

___

### \_onClose

▸ **_onClose**(): `void`

#### Returns

`void`

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[_onClose](IPCBaseConnection.md#_onclose)

#### Defined in

[packages/ipc-server/src/client.ts:82](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L82)

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

[packages/ipc-server/src/client.ts:75](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L75)

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

[packages/ipc-server/src/base-connection.ts:261](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L261)

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

[packages/ipc-server/src/client.ts:196](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L196)

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

[packages/ipc-server/src/base-connection.ts:181](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L181)

___

### \_read

▸ **_read**(): `void`

#### Returns

`void`

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_read](IPCBaseConnection.md#_read)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_readFromBuffer](IPCBaseConnection.md#_readfrombuffer)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[_readToBuffer](IPCBaseConnection.md#_readtobuffer)

#### Defined in

[packages/ipc-server/src/base-connection.ts:163](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L163)

___

### \_ready

▸ **_ready**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/client.ts:121](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L121)

___

### \_setStatus

▸ **_setStatus**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`IPCClientStatus`](../enums/IPCClientStatus.md) |

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/client.ts:191](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L191)

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

[packages/ipc-server/src/base-connection.ts:271](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L271)

___

### \_tryWrite

▸ **_tryWrite**(`op`, `data?`, `nonce?`, `retries?`): `Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `op` | `number` | `undefined` |
| `data?` | `any` | `undefined` |
| `nonce?` | `string` | `undefined` |
| `retries` | `number` | `0` |

#### Returns

`Promise`\<`undefined` \| `boolean` \| `Error`\>

#### Overrides

[IPCBaseConnection](IPCBaseConnection.md).[_tryWrite](IPCBaseConnection.md#_trywrite)

#### Defined in

[packages/ipc-server/src/client.ts:246](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L246)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[close](IPCBaseConnection.md#close)

#### Defined in

[packages/ipc-server/src/base-connection.ts:117](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/base-connection.ts#L117)

___

### connect

▸ **connect**(`data?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/ipc-server/src/client.ts:51](https://github.com/isdk/ipc-server.js/blob/c766f9a27898bb3203c84d53484b937191582605/src/client.ts#L51)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[readBuffer](IPCBaseConnection.md#readbuffer)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[send](IPCBaseConnection.md#send)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[sendByType](IPCBaseConnection.md#sendbytype)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[setMaxListeners](IPCBaseConnection.md#setmaxlisteners)

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

#### Inherited from

[IPCBaseConnection](IPCBaseConnection.md).[listenerCount](IPCBaseConnection.md#listenercount-1)

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:74
