<div align="center">

[![Visit Lambda](./header.png)](https://lambdalabs.com)

# [Lambda](https://lambdalabs.com)<a id="lambda"></a>

API for interacting with the Lambda GPU Cloud

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`lambda.fileSystem.getList`](#lambdafilesystemgetlist)
  * [`lambda.instance.createInstances`](#lambdainstancecreateinstances)
  * [`lambda.instance.getDetails`](#lambdainstancegetdetails)
  * [`lambda.instance.listRunningInstances`](#lambdainstancelistrunninginstances)
  * [`lambda.instance.restartInstances`](#lambdainstancerestartinstances)
  * [`lambda.instance.terminateInstance`](#lambdainstanceterminateinstance)
  * [`lambda.instanceType.getList`](#lambdainstancetypegetlist)
  * [`lambda.key.addSshKey`](#lambdakeyaddsshkey)
  * [`lambda.key.getList`](#lambdakeygetlist)
  * [`lambda.sSHKey.remove`](#lambdasshkeyremove)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Lambda&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Lambda } from "lambda-typescript-sdk";

const lambda = new Lambda({
  // Defining the base path is optional and defaults to https://cloud.lambdalabs.com/api/v1
  // basePath: "https://cloud.lambdalabs.com/api/v1",
  accessToken: "ACCESS_TOKEN",
});

const getListResponse = await lambda.fileSystem.getList();

console.log(getListResponse);
```

## Reference<a id="reference"></a>


### `lambda.fileSystem.getList`<a id="lambdafilesystemgetlist"></a>

Retrieve the list of file systems

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await lambda.fileSystem.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[FileSystemGetListResponse](./models/file-system-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-systems` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.instance.createInstances`<a id="lambdainstancecreateinstances"></a>

Launches one or more instances of a given instance type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInstancesResponse = await lambda.instance.createInstances({
  region_name: "us-tx-1",
  instance_type_name: "gpu_1x_a100",
  ssh_key_names: ["macbook-pro"],
  quantity: 1,
  name: "training-node-1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### region_name: `string`<a id="region_name-string"></a>

Short name of a region

##### instance_type_name: `string`<a id="instance_type_name-string"></a>

Name of an instance type

##### ssh_key_names: `string`[]<a id="ssh_key_names-string"></a>

Names of the SSH keys to allow access to the instances. Currently, exactly one SSH key must be specified.

##### file_system_names: `string`[]<a id="file_system_names-string"></a>

Names of the file systems to attach to the instances. Currently, only one (if any) file system may be specified.

##### quantity: `number`<a id="quantity-number"></a>

Number of instances to launch

##### name: `string`<a id="name-string"></a>

User-provided name for the instance

#### 🔄 Return<a id="🔄-return"></a>

[InstanceCreateInstancesResponse](./models/instance-create-instances-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/instance-operations/launch` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.instance.getDetails`<a id="lambdainstancegetdetails"></a>

Retrieves details of a specific instance, including whether or not the instance is running.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await lambda.instance.getDetails({
  id: "0920582c7ff041399e34823a0be62549",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique identifier (ID) of the instance

#### 🔄 Return<a id="🔄-return"></a>

[InstanceGetDetailsResponse](./models/instance-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/instances/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.instance.listRunningInstances`<a id="lambdainstancelistrunninginstances"></a>

Retrieves a detailed list of running instances.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRunningInstancesResponse =
  await lambda.instance.listRunningInstances();
```

#### 🔄 Return<a id="🔄-return"></a>

[InstanceListRunningInstancesResponse](./models/instance-list-running-instances-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/instances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.instance.restartInstances`<a id="lambdainstancerestartinstances"></a>

Restarts the given instances.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restartInstancesResponse = await lambda.instance.restartInstances({
  instance_ids: ["0920582c7ff041399e34823a0be62549"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### instance_ids: `string`[]<a id="instance_ids-string"></a>

The unique identifiers (IDs) of the instances to restart

#### 🔄 Return<a id="🔄-return"></a>

[InstanceRestartInstancesResponse](./models/instance-restart-instances-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/instance-operations/restart` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.instance.terminateInstance`<a id="lambdainstanceterminateinstance"></a>

Terminates a given instance.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const terminateInstanceResponse = await lambda.instance.terminateInstance({
  instance_ids: ["0920582c7ff041399e34823a0be62549"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### instance_ids: `string`[]<a id="instance_ids-string"></a>

The unique identifiers (IDs) of the instances to terminate

#### 🔄 Return<a id="🔄-return"></a>

[InstanceTerminateInstanceResponse](./models/instance-terminate-instance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/instance-operations/terminate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.instanceType.getList`<a id="lambdainstancetypegetlist"></a>

Returns a detailed list of the instance types offered by Lambda GPU Cloud. The details include the regions, if any, in which each instance type is currently available.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await lambda.instanceType.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[InstanceTypeGetListResponse](./models/instance-type-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/instance-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.key.addSshKey`<a id="lambdakeyaddsshkey"></a>

Add an SSH key

To use an existing key pair, enter the public key for the `public_key` property of the request body.

To generate a new key pair, omit the `public_key` property from the request body. Save the `private_key` from the response somewhere secure. For example, with curl:

```
curl https://cloud.lambdalabs.com/api/v1/ssh-keys \
  --fail \
  -u ${LAMBDA_API_KEY}: \
  -X POST \
  -d '{"name": "new key"}' \
  | jq -r '.data.private_key' > key.pem

chmod 400 key.pem
```

Then, after you launch an instance with `new key` attached to it:
```
ssh -i key.pem <instance IP>
```


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addSshKeyResponse = await lambda.key.addSshKey({
  name: "macbook-pro",
  public_key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDfKpav4ILY54InZe27G user",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the SSH key

##### public_key: `string`<a id="public_key-string"></a>

Public key for the SSH key

#### 🔄 Return<a id="🔄-return"></a>

[KeyAddSshKeyResponse](./models/key-add-ssh-key-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ssh-keys` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.key.getList`<a id="lambdakeygetlist"></a>

Retrieve the list of SSH keys

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await lambda.key.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[KeyGetListResponse](./models/key-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ssh-keys` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `lambda.sSHKey.remove`<a id="lambdasshkeyremove"></a>

Delete an SSH key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await lambda.sSHKey.remove({
  id: "0920582c7ff041399e34823a0be62548",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique identifier (ID) of the SSH key

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ssh-keys/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
