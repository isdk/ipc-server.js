[@isdk/ipc-server](../README.md) / [Exports](../modules.md) / IPCServer

# Class: IPCServer

## Hierarchy

- `EventEmitter`

  ↳ **`IPCServer`**

## Table of contents

### Constructors

- [constructor](IPCServer.md#constructor)

### Properties

- [connections](IPCServer.md#connections)
- [options](IPCServer.md#options)
- [server](IPCServer.md#server)
- [defaultMaxListeners](IPCServer.md#defaultmaxlisteners)

### Methods

- [\_onClose](IPCServer.md#_onclose)
- [\_onConnection](IPCServer.md#_onconnection)
- [\_onError](IPCServer.md#_onerror)
- [\_onListening](IPCServer.md#_onlistening)
- [broadcast](IPCServer.md#broadcast)
- [close](IPCServer.md#close)
- [emit](IPCServer.md#emit)
- [emitAsync](IPCServer.md#emitasync)
- [listenerCount](IPCServer.md#listenercount)
- [listeners](IPCServer.md#listeners)
- [off](IPCServer.md#off)
- [on](IPCServer.md#on)
- [once](IPCServer.md#once)
- [pause](IPCServer.md#pause)
- [ping](IPCServer.md#ping)
- [removeAllListeners](IPCServer.md#removealllisteners)
- [resume](IPCServer.md#resume)
- [setMaxListeners](IPCServer.md#setmaxlisteners)
- [start](IPCServer.md#start)
- [survey](IPCServer.md#survey)
- [listenerCount](IPCServer.md#listenercount-1)

## Constructors

### constructor

• **new IPCServer**(`options?`): [`IPCServer`](IPCServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`IPCServerOptions`](../interfaces/IPCServerOptions.md)\> |

#### Returns

[`IPCServer`](IPCServer.md)

#### Overrides

EventEmitter.constructor

#### Defined in

[packages/ipc-server/src/server.ts:34](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L34)

## Properties

### connections

• **connections**: `IPCConnection`[] = `[]`

#### Defined in

[packages/ipc-server/src/server.ts:32](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L32)

___

### options

• **options**: `Partial`\<[`IPCServerOptions`](../interfaces/IPCServerOptions.md)\> = `{}`

#### Defined in

[packages/ipc-server/src/server.ts:34](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L34)

___

### server

• **server**: `undefined` \| `Server`

#### Defined in

[packages/ipc-server/src/server.ts:31](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L31)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_onClose

▸ **_onClose**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:133](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L133)

___

### \_onConnection

▸ **_onConnection**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:139](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L139)

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

[packages/ipc-server/src/server.ts:127](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L127)

___

### \_onListening

▸ **_onListening**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:119](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L119)

___

### broadcast

▸ **broadcast**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ipc-server/src/server.ts:90](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L90)

___

### close

▸ **close**(`allowReconnect?`): `Promise`\<[`IPCServer`](IPCServer.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allowReconnect` | `boolean` | `false` |

#### Returns

`Promise`\<[`IPCServer`](IPCServer.md)\>

#### Defined in

[packages/ipc-server/src/server.ts:82](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L82)

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

EventEmitter.emit

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

EventEmitter.emitAsync

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

EventEmitter.listenerCount

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

EventEmitter.listeners

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

EventEmitter.off

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

EventEmitter.on

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

EventEmitter.once

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:24

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:107](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L107)

___

### ping

▸ **ping**(`data?`, `timeout?`): `Promise`\<`PromiseSettledResult`\<\{ `id`: `string` = c.id; `ping`: `number`  }\>[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data?` | `any` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`PromiseSettledResult`\<\{ `id`: `string` = c.id; `ping`: `number`  }\>[]\>

#### Defined in

[packages/ipc-server/src/server.ts:103](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L103)

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

EventEmitter.removeAllListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:51

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:113](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L113)

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

EventEmitter.setMaxListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:52

___

### start

▸ **start**(): `Promise`\<[`IPCServer`](IPCServer.md)\>

#### Returns

`Promise`\<[`IPCServer`](IPCServer.md)\>

#### Defined in

[packages/ipc-server/src/server.ts:51](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L51)

___

### survey

▸ **survey**(`data?`, `timeout?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data?` | `any` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ipc-server/src/server.ts:96](https://github.com/isdk/ipc-server.js/blob/c972214e727e2be9fff435b018f1d11bff9c9b57/src/server.ts#L96)

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

EventEmitter.listenerCount

#### Defined in

node_modules/.pnpm/events-ex@2.0.0/node_modules/events-ex/lib/event-emitter.d.ts:74
