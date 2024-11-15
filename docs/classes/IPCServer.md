[**@isdk/ipc-server**](../README.md) • **Docs**

***

[@isdk/ipc-server](../globals.md) / IPCServer

# Class: IPCServer

## Extends

- `EventEmitter`

## Constructors

### new IPCServer()

> **new IPCServer**(`options`): [`IPCServer`](IPCServer.md)

#### Parameters

• **options**: `Partial`\<[`IPCServerOptions`](../interfaces/IPCServerOptions.md)\> = `{}`

#### Returns

[`IPCServer`](IPCServer.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[packages/ipc-server/src/server.ts:36](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L36)

## Properties

### connections

> **connections**: [`IPCConnection`](IPCConnection.md)[] = `[]`

#### Defined in

[packages/ipc-server/src/server.ts:32](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L32)

***

### isReady

> **isReady**: `boolean` = `false`

#### Defined in

[packages/ipc-server/src/server.ts:34](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L34)

***

### options

> **options**: `Partial`\<[`IPCServerOptions`](../interfaces/IPCServerOptions.md)\> = `{}`

#### Defined in

[packages/ipc-server/src/server.ts:36](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L36)

***

### server

> **server**: `undefined` \| `Server`

#### Defined in

[packages/ipc-server/src/server.ts:31](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L31)

***

### subscriptions

> **subscriptions**: `object` = `{}`

#### Index Signature

 \[`event`: `string`\]: [`IPCConnection`](IPCConnection.md)[]

#### Defined in

[packages/ipc-server/src/server.ts:33](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L33)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`EventEmitter.defaultMaxListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

## Methods

### \_onClose()

> **\_onClose**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:137](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L137)

***

### \_onConnection()

> **\_onConnection**(`socket`): `void`

#### Parameters

• **socket**: `Socket`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:144](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L144)

***

### \_onError()

> **\_onError**(`e`): `void`

#### Parameters

• **e**: `Error`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:131](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L131)

***

### \_onListening()

> **\_onListening**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:122](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L122)

***

### \_onRequest()

> **\_onRequest**(`this`, `request`, `response`, `connection`): `Promise`\<`void`\>

#### Parameters

• **this**: `Event`

• **request**: `any`

• **response**

• **connection**: [`IPCConnection`](IPCConnection.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ipc-server/src/server.ts:158](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L158)

***

### broadcast()

> **broadcast**(`data`): `Promise`\<`void`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ipc-server/src/server.ts:93](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L93)

***

### close()

> **close**(`allowReconnect`): `Promise`\<[`IPCServer`](IPCServer.md)\>

#### Parameters

• **allowReconnect**: `boolean` = `false`

#### Returns

`Promise`\<[`IPCServer`](IPCServer.md)\>

#### Defined in

[packages/ipc-server/src/server.ts:85](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L85)

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

`EventEmitter.emit`

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

`EventEmitter.emitAsync`

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

`EventEmitter.listenerCount`

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

`EventEmitter.listeners`

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

`EventEmitter.off`

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

`EventEmitter.on`

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

`EventEmitter.once`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

***

### pause()

> **pause**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:110](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L110)

***

### ping()

> **ping**(`data`?, `timeout`?): `Promise`\<`PromiseSettledResult`\<`object`\>[]\>

#### Parameters

• **data?**: `any`

• **timeout?**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`PromiseSettledResult`\<`object`\>[]\>

#### Defined in

[packages/ipc-server/src/server.ts:106](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L106)

***

### publish()

> **publish**(`request`): `Promise`\<`void`\>

#### Parameters

• **request**

• **request.message**: `any`

• **request.pub**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ipc-server/src/server.ts:179](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L179)

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

`EventEmitter.removeAllListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

***

### resume()

> **resume**(): `void`

#### Returns

`void`

#### Defined in

[packages/ipc-server/src/server.ts:116](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L116)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

• **n**: `number`

#### Returns

`EventEmitter`

#### Inherited from

`EventEmitter.setMaxListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

***

### start()

> **start**(): `Promise`\<[`IPCServer`](IPCServer.md)\>

#### Returns

`Promise`\<[`IPCServer`](IPCServer.md)\>

#### Defined in

[packages/ipc-server/src/server.ts:54](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L54)

***

### subscribe()

> **subscribe**(`events`, `connection`): `boolean`

#### Parameters

• **events**: `string` \| `string`[]

• **connection**: [`IPCConnection`](IPCConnection.md)

#### Returns

`boolean`

#### Defined in

[packages/ipc-server/src/server.ts:186](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L186)

***

### survey()

> **survey**(`data`?, `timeout`?): `Promise`\<`any`[]\>

#### Parameters

• **data?**: `any`

• **timeout?**: `number` = `DEFAULT_TIMEOUT`

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ipc-server/src/server.ts:99](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L99)

***

### unsubscribe()

> **unsubscribe**(`events`, `connection`): `boolean`

#### Parameters

• **events**: `string` \| `string`[]

• **connection**: [`IPCConnection`](IPCConnection.md)

#### Returns

`boolean`

#### Defined in

[packages/ipc-server/src/server.ts:201](https://github.com/isdk/ipc-server.js/blob/64a46f715f59f19fdab332a9cff994e930e96d0d/src/server.ts#L201)

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

`EventEmitter.listenerCount`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:74
