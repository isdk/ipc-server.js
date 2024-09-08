[@isdk/ipc-server](README.md) / Exports

# @isdk/ipc-server

## Table of contents

### Enumerations

- [IPCClientStatus](enums/IPCClientStatus.md)
- [IPCMessageType](enums/IPCMessageType.md)

### Classes

- [IPCBaseConnection](classes/IPCBaseConnection.md)
- [IPCClient](classes/IPCClient.md)
- [IPCServer](classes/IPCServer.md)

### Interfaces

- [IPCClientOptions](interfaces/IPCClientOptions.md)
- [IPCPacketType](interfaces/IPCPacketType.md)
- [IPCServerOptions](interfaces/IPCServerOptions.md)

### Type Aliases

- [IPCPayloadData](modules.md#ipcpayloaddata)

### Variables

- [IPCEvents](modules.md#ipcevents)
- [IPCNetServerEvents](modules.md#ipcnetserverevents)
- [IPCNetSocketEvents](modules.md#ipcnetsocketevents)

### Functions

- [wait](modules.md#wait)

## Type Aliases

### IPCPayloadData

Ƭ **IPCPayloadData**: `any`

#### Defined in

[packages/ipc-server/src/base-connection.ts:53](https://github.com/isdk/ipc-server.js/blob/7e04835296f1f1152164b6258ff63ec1c337a0e2/src/base-connection.ts#L53)

## Variables

### IPCEvents

• `Const` **IPCEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CLOSE` | `string` |
| `CONNECT` | `string` |
| `DISCONNECT` | `string` |
| `ERROR` | `string` |
| `MESSAGE` | `string` |
| `READY` | `string` |
| `REQUEST` | `string` |
| `STATUS` | `string` |

#### Defined in

[packages/ipc-server/src/base-connection.ts:26](https://github.com/isdk/ipc-server.js/blob/7e04835296f1f1152164b6258ff63ec1c337a0e2/src/base-connection.ts#L26)

___

### IPCNetServerEvents

• `Const` **IPCNetServerEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CLOSE` | `string` |
| `CONNECTION` | `string` |
| `ERROR` | `string` |
| `LISTENING` | `string` |
| `SECURECONNECTION` | `string` |

#### Defined in

[packages/ipc-server/src/server.ts:11](https://github.com/isdk/ipc-server.js/blob/7e04835296f1f1152164b6258ff63ec1c337a0e2/src/server.ts#L11)

___

### IPCNetSocketEvents

• `Const` **IPCNetSocketEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CLOSE` | `string` |
| `DATA` | `string` |
| `DONE` | `string` |
| `DRAIN` | `string` |
| `ERROR` | `string` |
| `READY` | `string` |

#### Defined in

[packages/ipc-server/src/base-connection.ts:16](https://github.com/isdk/ipc-server.js/blob/7e04835296f1f1152164b6258ff63ec1c337a0e2/src/base-connection.ts#L16)

## Functions

### wait

▸ **wait**(`ms`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/ipc-server/src/base-connection.ts:305](https://github.com/isdk/ipc-server.js/blob/7e04835296f1f1152164b6258ff63ec1c337a0e2/src/base-connection.ts#L305)
