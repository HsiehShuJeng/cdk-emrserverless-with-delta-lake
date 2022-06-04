# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudio <a name="EmrStudio" id="cdk-emrserverless-quickdemo.EmrStudio"></a>

#### Initializers <a name="Initializers" id="cdk-emrserverless-quickdemo.EmrStudio.Initializer"></a>

```typescript
import { EmrStudio } from 'cdk-emrserverless-quickdemo'

new EmrStudio(scope: Construct, name: string, props: EmrStudioProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps">EmrStudioProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-quickdemo.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-quickdemo.EmrStudio.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-quickdemo.EmrStudio.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-quickdemo.EmrStudioProps">EmrStudioProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-quickdemo.EmrStudio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-quickdemo.EmrStudio.isConstruct"></a>

```typescript
import { EmrStudio } from 'cdk-emrserverless-quickdemo'

EmrStudio.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-quickdemo.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudio.property.entity">entity</a></code> | <code>aws-cdk-lib.aws_emr.CfnStudio</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-quickdemo.EmrStudio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `entity`<sup>Required</sup> <a name="entity" id="cdk-emrserverless-quickdemo.EmrStudio.property.entity"></a>

```typescript
public readonly entity: CfnStudio;
```

- *Type:* aws-cdk-lib.aws_emr.CfnStudio

---


### EmrStudioServiceRole <a name="EmrStudioServiceRole" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole"></a>

Creates a default service role for an EMR Studio.

For detail, please refer to [Create an EMR Studio service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html).

```ts
const workSpaceBucket = new WorkSpaceBucket(this, 'WorkSpace');
const emrStudioServiceRole = new EmrStudioServiceRole(this, 'Service', {
      workSpaceBucket: workSpaceBucket
});
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer"></a>

```typescript
import { EmrStudioServiceRole } from 'cdk-emrserverless-quickdemo'

new EmrStudioServiceRole(scope: Construct, name: string, props: EmrStudioServiceRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps">EmrStudioServiceRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps">EmrStudioServiceRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.isConstruct"></a>

```typescript
import { EmrStudioServiceRole } from 'cdk-emrserverless-quickdemo'

EmrStudioServiceRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRole.property.roleEntity">roleEntity</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The representative of the default service role for EMR Studio. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleEntity`<sup>Required</sup> <a name="roleEntity" id="cdk-emrserverless-quickdemo.EmrStudioServiceRole.property.roleEntity"></a>

```typescript
public readonly roleEntity: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The representative of the default service role for EMR Studio.

---


### WorkSpaceBucket <a name="WorkSpaceBucket" id="cdk-emrserverless-quickdemo.WorkSpaceBucket"></a>

#### Initializers <a name="Initializers" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer"></a>

```typescript
import { WorkSpaceBucket } from 'cdk-emrserverless-quickdemo'

new WorkSpaceBucket(scope: Construct, name: string, props?: WorkSpaceBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucketProps">WorkSpaceBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-quickdemo.WorkSpaceBucketProps">WorkSpaceBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.isConstruct"></a>

```typescript
import { WorkSpaceBucket } from 'cdk-emrserverless-quickdemo'

WorkSpaceBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket.property.bucketEntity">bucketEntity</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucketEntity`<sup>Required</sup> <a name="bucketEntity" id="cdk-emrserverless-quickdemo.WorkSpaceBucket.property.bucketEntity"></a>

```typescript
public readonly bucketEntity: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### EmrStudioProps <a name="EmrStudioProps" id="cdk-emrserverless-quickdemo.EmrStudioProps"></a>

#### Initializer <a name="Initializer" id="cdk-emrserverless-quickdemo.EmrStudioProps.Initializer"></a>

```typescript
import { EmrStudioProps } from 'cdk-emrserverless-quickdemo'

const emrStudioProps: EmrStudioProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.workSpaceBucket">workSpaceBucket</a></code> | <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket">WorkSpaceBucket</a></code> | The custom construct as the workspace S3 bucket. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.authMode">authMode</a></code> | <code><a href="#cdk-emrserverless-quickdemo.StudioAuthMode">StudioAuthMode</a></code> | Specifies whether the Studio authenticates users using AWS SSO or IAM. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.description">description</a></code> | <code>string</code> | A detailed description of the Amazon EMR Studio. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>string</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.serviceRoleName">serviceRoleName</a></code> | <code>string</code> | A name for the service role of an EMR Studio. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.studioName">studioName</a></code> | <code>string</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.userRoleArn">userRoleArn</a></code> | <code>string</code> | The custom user role for the EMR Studio when authentication is AWS SSO. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.vpcId">vpcId</a></code> | <code>string</code> | Used by the EMR Studio. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioProps.property.workSpaceSecurityGroupId">workSpaceSecurityGroupId</a></code> | <code>string</code> | The ID of the security group used by the workspace. |

---

##### `workSpaceBucket`<sup>Required</sup> <a name="workSpaceBucket" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.workSpaceBucket"></a>

```typescript
public readonly workSpaceBucket: WorkSpaceBucket;
```

- *Type:* <a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket">WorkSpaceBucket</a>

The custom construct as the workspace S3 bucket.

---

##### `authMode`<sup>Optional</sup> <a name="authMode" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.authMode"></a>

```typescript
public readonly authMode: StudioAuthMode;
```

- *Type:* <a href="#cdk-emrserverless-quickdemo.StudioAuthMode">StudioAuthMode</a>
- *Default:* StudioAuthMode.AWS_IAM.

Specifies whether the Studio authenticates users using AWS SSO or IAM.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 'EMR Studio Quick Launch - by scott.hsieh'

A detailed description of the Amazon EMR Studio.

---

##### `engineSecurityGroupId`<sup>Optional</sup> <a name="engineSecurityGroupId" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.engineSecurityGroupId"></a>

```typescript
public readonly engineSecurityGroupId: string;
```

- *Type:* string
- *Default:* a security group created by `EmrStudioEngineSecurityGroup`.

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `serviceRoleName`<sup>Optional</sup> <a name="serviceRoleName" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.serviceRoleName"></a>

```typescript
public readonly serviceRoleName: string;
```

- *Type:* string
- *Default:* 'emr-studio-service-role'

A name for the service role of an EMR Studio.

For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference.

IMPORTANT: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.

---

##### `studioName`<sup>Optional</sup> <a name="studioName" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.studioName"></a>

```typescript
public readonly studioName: string;
```

- *Type:* string
- *Default:* 'emr-sutdio-quicklaunch'

A descriptive name for the Amazon EMR Studio.

---

##### `userRoleArn`<sup>Optional</sup> <a name="userRoleArn" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.userRoleArn"></a>

```typescript
public readonly userRoleArn: string;
```

- *Type:* string

The custom user role for the EMR Studio when authentication is AWS SSO.

Currently, if you choose to establish an EMR serverless application where the authentication mechanism used by the EMR Studio is AWS SSO, you need to create a user role by yourself and assign the role arn to this argument if AWS SSO is chosen as authentication for the EMR Studio;

> [https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-permissions.html](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-permissions.html)

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string
- *Default:* 'The default VPC will be used.'

Used by the EMR Studio.

---

##### `workSpaceSecurityGroupId`<sup>Optional</sup> <a name="workSpaceSecurityGroupId" id="cdk-emrserverless-quickdemo.EmrStudioProps.property.workSpaceSecurityGroupId"></a>

```typescript
public readonly workSpaceSecurityGroupId: string;
```

- *Type:* string
- *Default:* a security group created by `EmrStudioWorkspaceSecurityGroup`.

The ID of the security group used by the workspace.

---

### EmrStudioServiceRoleProps <a name="EmrStudioServiceRoleProps" id="cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps"></a>

#### Initializer <a name="Initializer" id="cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps.Initializer"></a>

```typescript
import { EmrStudioServiceRoleProps } from 'cdk-emrserverless-quickdemo'

const emrStudioServiceRoleProps: EmrStudioServiceRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps.property.workSpaceBucket">workSpaceBucket</a></code> | <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket">WorkSpaceBucket</a></code> | The custom construct as the workspace S3 bucket. |
| <code><a href="#cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps.property.roleName">roleName</a></code> | <code>string</code> | A name for the service role of an EMR Studio. |

---

##### `workSpaceBucket`<sup>Required</sup> <a name="workSpaceBucket" id="cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps.property.workSpaceBucket"></a>

```typescript
public readonly workSpaceBucket: WorkSpaceBucket;
```

- *Type:* <a href="#cdk-emrserverless-quickdemo.WorkSpaceBucket">WorkSpaceBucket</a>

The custom construct as the workspace S3 bucket.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="cdk-emrserverless-quickdemo.EmrStudioServiceRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* 'emr-studio-service-role'

A name for the service role of an EMR Studio.

For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference.

IMPORTANT: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.

---

### WorkSpaceBucketProps <a name="WorkSpaceBucketProps" id="cdk-emrserverless-quickdemo.WorkSpaceBucketProps"></a>

#### Initializer <a name="Initializer" id="cdk-emrserverless-quickdemo.WorkSpaceBucketProps.Initializer"></a>

```typescript
import { WorkSpaceBucketProps } from 'cdk-emrserverless-quickdemo'

const workSpaceBucketProps: WorkSpaceBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | The bucket name for the workspace of an EMR Studio. |
| <code><a href="#cdk-emrserverless-quickdemo.WorkSpaceBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="cdk-emrserverless-quickdemo.WorkSpaceBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* 'emr-studio-workspace-bucket-AWS::AccountId'

The bucket name for the workspace of an EMR Studio.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-emrserverless-quickdemo.WorkSpaceBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be deleted.

Policy to apply when the bucket is removed from this stack.

---



## Enums <a name="Enums" id="Enums"></a>

### StudioAuthMode <a name="StudioAuthMode" id="cdk-emrserverless-quickdemo.StudioAuthMode"></a>

What kind of authentication the Studio uses.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-quickdemo.StudioAuthMode.AWS_SSO">AWS_SSO</a></code> | the Studio authenticates users using AWS SSO. |
| <code><a href="#cdk-emrserverless-quickdemo.StudioAuthMode.AWS_IAM">AWS_IAM</a></code> | the Studio authenticates users using AWS IAM. |

---

##### `AWS_SSO` <a name="AWS_SSO" id="cdk-emrserverless-quickdemo.StudioAuthMode.AWS_SSO"></a>

the Studio authenticates users using AWS SSO.

---


##### `AWS_IAM` <a name="AWS_IAM" id="cdk-emrserverless-quickdemo.StudioAuthMode.AWS_IAM"></a>

the Studio authenticates users using AWS IAM.

---

