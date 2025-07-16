# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrClusterTemplateStack <a name="EmrClusterTemplateStack" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack"></a>

Creates a CloudFormation template which will be a Product under a Portfolio of AWS Service Catalog.

This is for creating an EMR cluster via cluster template in the EMR Studio, created by the `EmrServerless` construct, on the AWS Console.

And you don't have control via the `EmrServerless` construct by now. The documentation is for you to grasp the architecture of the `EmrServerless` more easily.

For detail, please refer to [Create AWS CloudFormation templates for Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-cluster-templates.html).

```ts
const product = new servicecatalog.CloudFormationProduct(this, 'MyFirstProduct', {
   productName: 'EMR_6.6.0',
   owner: 'scott.hsieh',
   description: 'EMR cluster with 6.6.0 version',
   productVersions: [
     {
       productVersionName: 'v1',
       validateTemplate: true,
       cloudFormationTemplate: servicecatalog.CloudFormationTemplate.fromProductStack(new EmrClusterTemplateStack(this, 'EmrStudio')),
     },
],
});
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.Initializer"></a>

```typescript
import { EmrClusterTemplateStack } from 'cdk-emrserverless-with-delta-lake'

new EmrClusterTemplateStack(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.isConstruct"></a>

```typescript
import { EmrClusterTemplateStack } from 'cdk-emrserverless-with-delta-lake'

EmrClusterTemplateStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.isStack"></a>

```typescript
import { EmrClusterTemplateStack } from 'cdk-emrserverless-with-delta-lake'

EmrClusterTemplateStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.of"></a>

```typescript
import { EmrClusterTemplateStack } from 'cdk-emrserverless-with-delta-lake'

EmrClusterTemplateStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### EmrServerless <a name="EmrServerless" id="cdk-emrserverless-with-delta-lake.EmrServerless"></a>

Creates an EMR Studio, an EMR cluster template for the studio, and an EMR Serverless application.

```ts
// the quickiest deployment
new EmrServerless(this, 'EmrServerless');

// custom deployment references
new EmrServerless(this, 'EmrServerless', {
   vpcId: 'vpc-idididid',
});

new EmrServerless(this, 'EmrServerless', {
   vpcId: 'vpc-idididid',
   subnetIds: ['subnet-eeeee', 'subnet-fffff']
});

const myRole = new iam.Role.fromRoleName('MyRole');
new EmrServerless(this, 'EmrServerless', {
   serviceCatalogProps: {
       role: myRole
   }
});

const myUser = new iam.Role.fromUserName('MyUser');
new EmrServerless(this, 'EmrServerless', {
   vpcId: 'vpc-idididid',
   subnetIds: ['subnet-eeeee', 'subnet-fffff'],
   serviceCatalogProps: {
       user: myUser
   }
});

const myGroup = new iam.Group.fromGroupName('MyGroup');
new EmrServerless(this, 'EmrServerless', {
   serviceCatalogProps: {
       group: myGroup
   }
});
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrServerless.Initializer"></a>

```typescript
import { EmrServerless } from 'cdk-emrserverless-with-delta-lake'

new EmrServerless(scope: Construct, name: string, props?: EmrServerlessProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerless.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerless.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerless.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessProps">EmrServerlessProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrServerless.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrServerless.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrServerless.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrServerlessProps">EmrServerlessProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerless.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrServerless.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerless.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrServerless.isConstruct"></a>

```typescript
import { EmrServerless } from 'cdk-emrserverless-with-delta-lake'

EmrServerless.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrServerless.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerless.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrServerless.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### EmrServerlessBucket <a name="EmrServerlessBucket" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket"></a>

Creates a bucket for EMR Serverless applications.

```ts
const emrServerlessBucket = new EmrServerlessBucket(this, 'EmrServerless');
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer"></a>

```typescript
import { EmrServerlessBucket } from 'cdk-emrserverless-with-delta-lake'

new EmrServerlessBucket(scope: Construct, name: string, props?: EmrServerlessBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps">EmrServerlessBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps">EmrServerlessBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.isConstruct"></a>

```typescript
import { EmrServerlessBucket } from 'cdk-emrserverless-with-delta-lake'

EmrServerlessBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucket.property.bucketEntity">bucketEntity</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucketEntity`<sup>Required</sup> <a name="bucketEntity" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucket.property.bucketEntity"></a>

```typescript
public readonly bucketEntity: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


### EmrStudio <a name="EmrStudio" id="cdk-emrserverless-with-delta-lake.EmrStudio"></a>

Creates an EMR Studio for EMR Serverless applications.

The Studio is not only for EMR Serverless applications but also for launching an EMR cluster via a cluster template created in this constrcut to check out results transformed by EMR serverless applications.

For what Studio can do further, please refer to [Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html).

```ts
const workspaceBucket = new WorkSpaceBucket(this, 'EmrStudio');
const emrStudio = new EmrStudio(this, '', {
   workSpaceBucket: workspaceBucket,
   subnetIds: ['subnet1', 'subnet2', 'subnet3']
});
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrStudio.Initializer"></a>

```typescript
import { EmrStudio } from 'cdk-emrserverless-with-delta-lake'

new EmrStudio(scope: Construct, name: string, props: EmrStudioProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps">EmrStudioProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrStudio.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrStudio.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps">EmrStudioProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrStudio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrStudio.isConstruct"></a>

```typescript
import { EmrStudio } from 'cdk-emrserverless-with-delta-lake'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudio.property.entity">entity</a></code> | <code>aws-cdk-lib.aws_emr.CfnStudio</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrStudio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `entity`<sup>Required</sup> <a name="entity" id="cdk-emrserverless-with-delta-lake.EmrStudio.property.entity"></a>

```typescript
public readonly entity: CfnStudio;
```

- *Type:* aws-cdk-lib.aws_emr.CfnStudio

---


### EmrStudioDeveloperStack <a name="EmrStudioDeveloperStack" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack"></a>

Creates a Service Catalog for EMR cluster templates.

For detail, please refer to [Create AWS CloudFormation templates for Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-cluster-templates.html).

```ts
const emrClusterTemplatePortfolio = new EmrStudioDeveloperStack(this, 'ClusterTempalte');
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer"></a>

```typescript
import { EmrStudioDeveloperStack } from 'cdk-emrserverless-with-delta-lake'

new EmrStudioDeveloperStack(scope: Construct, name: string, props?: EmrStudioDeveloperStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps">EmrStudioDeveloperStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps">EmrStudioDeveloperStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.isConstruct"></a>

```typescript
import { EmrStudioDeveloperStack } from 'cdk-emrserverless-with-delta-lake'

EmrStudioDeveloperStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.property.portfolio">portfolio</a></code> | <code>aws-cdk-lib.aws_servicecatalog.Portfolio</code> | The representative of the service catalog for EMR cluster tempaltes. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.property.product">product</a></code> | <code>aws-cdk-lib.aws_servicecatalog.Product</code> | The representative of the product for demo purpose. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `portfolio`<sup>Required</sup> <a name="portfolio" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.property.portfolio"></a>

```typescript
public readonly portfolio: Portfolio;
```

- *Type:* aws-cdk-lib.aws_servicecatalog.Portfolio

The representative of the service catalog for EMR cluster tempaltes.

---

##### `product`<sup>Required</sup> <a name="product" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack.property.product"></a>

```typescript
public readonly product: Product;
```

- *Type:* aws-cdk-lib.aws_servicecatalog.Product

The representative of the product for demo purpose.

---


### EmrStudioEngineSecurityGroup <a name="EmrStudioEngineSecurityGroup" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup"></a>

Created an engine security group for EMR notebooks.

For detail, plrease refer to [Engine security group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-security-groups.html#emr-studio-security-group-instructions).

```ts
const workSpaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'Workspace', { vpc: baseVpc });
const engineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'Engine', { vpc: baseVpc });
workSpaceSecurityGroup.entity.connections.allowTo(engineSecurityGroup.entity, ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.');
workSpaceSecurityGroup.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer"></a>

```typescript
import { EmrStudioEngineSecurityGroup } from 'cdk-emrserverless-with-delta-lake'

new EmrStudioEngineSecurityGroup(scope: Construct, name: string, props: EmrStudioEngineSecurityGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps">EmrStudioEngineSecurityGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps">EmrStudioEngineSecurityGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.isConstruct"></a>

```typescript
import { EmrStudioEngineSecurityGroup } from 'cdk-emrserverless-with-delta-lake'

EmrStudioEngineSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.property.entity">entity</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | The representative of the security group as the EMR Studio engine security group. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `entity`<sup>Required</sup> <a name="entity" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup.property.entity"></a>

```typescript
public readonly entity: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

The representative of the security group as the EMR Studio engine security group.

---


### EmrStudioServiceRole <a name="EmrStudioServiceRole" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole"></a>

Creates a default service role for an EMR Studio.

For detail, please refer to [Create an EMR Studio service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html).

```ts
const workSpaceBucket = new WorkSpaceBucket(this, 'WorkSpace');
const emrStudioServiceRole = new EmrStudioServiceRole(this, 'Service', {
     workSpaceBucket: workSpaceBucket
});
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer"></a>

```typescript
import { EmrStudioServiceRole } from 'cdk-emrserverless-with-delta-lake'

new EmrStudioServiceRole(scope: Construct, name: string, props: EmrStudioServiceRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps">EmrStudioServiceRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps">EmrStudioServiceRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.isConstruct"></a>

```typescript
import { EmrStudioServiceRole } from 'cdk-emrserverless-with-delta-lake'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.property.roleEntity">roleEntity</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The representative of the default service role for EMR Studio. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleEntity`<sup>Required</sup> <a name="roleEntity" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRole.property.roleEntity"></a>

```typescript
public readonly roleEntity: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The representative of the default service role for EMR Studio.

---


### EmrStudioTaggingExpert <a name="EmrStudioTaggingExpert" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert"></a>

Creates a Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment.

For detail on the tag, please refer to [How to create a service role for EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html#emr-studio-service-role-instructions)

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.Initializer"></a>

```typescript
import { EmrStudioTaggingExpert } from 'cdk-emrserverless-with-delta-lake'

new EmrStudioTaggingExpert(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.isConstruct"></a>

```typescript
import { EmrStudioTaggingExpert } from 'cdk-emrserverless-with-delta-lake'

EmrStudioTaggingExpert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.property.functionEntity">functionEntity</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The repesentative of the Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `functionEntity`<sup>Required</sup> <a name="functionEntity" id="cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert.property.functionEntity"></a>

```typescript
public readonly functionEntity: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The repesentative of the Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment.

---


### EmrStudioWorkspaceSecurityGroup <a name="EmrStudioWorkspaceSecurityGroup" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup"></a>

Created a workspace security group for EMR Studio.

For detail, plrease refer to [Workspace security group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-security-groups.html#emr-studio-security-group-instructions).

```ts
const workSpaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'Workspace', { vpc: baseVpc });
const engineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'Engine', { vpc: baseVpc });
workSpaceSecurityGroup.entity.connections.allowTo(engineSecurityGroup.entity, ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.');
workSpaceSecurityGroup.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer"></a>

```typescript
import { EmrStudioWorkspaceSecurityGroup } from 'cdk-emrserverless-with-delta-lake'

new EmrStudioWorkspaceSecurityGroup(scope: Construct, name: string, props: EmrStudioWorkspaceSecurityGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps">EmrStudioWorkspaceSecurityGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps">EmrStudioWorkspaceSecurityGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.isConstruct"></a>

```typescript
import { EmrStudioWorkspaceSecurityGroup } from 'cdk-emrserverless-with-delta-lake'

EmrStudioWorkspaceSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.property.entity">entity</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | The representative of the security group as the EMR Studio workspace security group. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `entity`<sup>Required</sup> <a name="entity" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup.property.entity"></a>

```typescript
public readonly entity: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

The representative of the security group as the EMR Studio workspace security group.

---


### ServerlessJobRole <a name="ServerlessJobRole" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole"></a>

Creates an execution job role for EMR Serverless.

For detail, please refer to [Create a job runtime role](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/getting-started.html#gs-runtime-role).

```ts
const emrServerlessBucket = new EmrServerlessBucket(this, 'EmrServerlessStorage');
const emrServerlessJobRole = new ServerlessJobRole(this, 'EmrServerlessJob', {emrServerlessBucket: emrServerlessBucket});
```

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer"></a>

```typescript
import { ServerlessJobRole } from 'cdk-emrserverless-with-delta-lake'

new ServerlessJobRole(scope: Construct, name: string, props: ServerlessJobRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps">ServerlessJobRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps">ServerlessJobRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.isConstruct"></a>

```typescript
import { ServerlessJobRole } from 'cdk-emrserverless-with-delta-lake'

ServerlessJobRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRole.property.entity">entity</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The representative of the execution role for EMR Serverless. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `entity`<sup>Required</sup> <a name="entity" id="cdk-emrserverless-with-delta-lake.ServerlessJobRole.property.entity"></a>

```typescript
public readonly entity: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The representative of the execution role for EMR Serverless.

---


### WorkSpaceBucket <a name="WorkSpaceBucket" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket"></a>

#### Initializers <a name="Initializers" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer"></a>

```typescript
import { WorkSpaceBucket } from 'cdk-emrserverless-with-delta-lake'

new WorkSpaceBucket(scope: Construct, name: string, props?: WorkSpaceBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps">WorkSpaceBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps">WorkSpaceBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.isConstruct"></a>

```typescript
import { WorkSpaceBucket } from 'cdk-emrserverless-with-delta-lake'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket.property.bucketEntity">bucketEntity</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucketEntity`<sup>Required</sup> <a name="bucketEntity" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucket.property.bucketEntity"></a>

```typescript
public readonly bucketEntity: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### EmrServerlessBucketProps <a name="EmrServerlessBucketProps" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps"></a>

Properties for the EMR Serverless bucket.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps.Initializer"></a>

```typescript
import { EmrServerlessBucketProps } from 'cdk-emrserverless-with-delta-lake'

const emrServerlessBucketProps: EmrServerlessBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | The bucket name for EMR Serverless applications. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* 'emr-serverless-AWS::AccountId'

The bucket name for EMR Serverless applications.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be deleted.

Policy to apply when the bucket is removed from this stack.

---

### EmrServerlessProps <a name="EmrServerlessProps" id="cdk-emrserverless-with-delta-lake.EmrServerlessProps"></a>

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrServerlessProps.Initializer"></a>

```typescript
import { EmrServerlessProps } from 'cdk-emrserverless-with-delta-lake'

const emrServerlessProps: EmrServerlessProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessProps.property.serviceCatalogProps">serviceCatalogProps</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps">EmrStudioDeveloperStackProps</a></code> | Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessProps.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The subnet IDs for the EMR studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrServerlessProps.property.vpcId">vpcId</a></code> | <code>string</code> | Used by the EMR Studio. |

---

##### `serviceCatalogProps`<sup>Optional</sup> <a name="serviceCatalogProps" id="cdk-emrserverless-with-delta-lake.EmrServerlessProps.property.serviceCatalogProps"></a>

```typescript
public readonly serviceCatalogProps: EmrStudioDeveloperStackProps;
```

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps">EmrStudioDeveloperStackProps</a>

Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates.

You can choose either an IAM group, IAM role, or IAM user. If you leave it empty, an IAM user named `Administrator` with the `AdministratorAccess` power needs to be created first.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="cdk-emrserverless-with-delta-lake.EmrServerlessProps.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The subnet IDs for the EMR studio.

You can select the subnets from the default VPC in your AWS account.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="cdk-emrserverless-with-delta-lake.EmrServerlessProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string
- *Default:* 'The default VPC will be used.'

Used by the EMR Studio.

---

### EmrStudioDeveloperStackProps <a name="EmrStudioDeveloperStackProps" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps"></a>

Interface for Service Catalog of EMR cluster templates.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.Initializer"></a>

```typescript
import { EmrStudioDeveloperStackProps } from 'cdk-emrserverless-with-delta-lake'

const emrStudioDeveloperStackProps: EmrStudioDeveloperStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.group">group</a></code> | <code>aws-cdk-lib.aws_iam.IGroup</code> | an IAM group you wish to associate with the Portfolio for EMR cluster template. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.providerName">providerName</a></code> | <code>string</code> | The provider name in a Service Catalog for EMR cluster templates. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | an IAM role you wish to associate with the Portfolio for EMR cluster template. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.user">user</a></code> | <code>aws-cdk-lib.aws_iam.IUser</code> | an IAM user you wish to associate with the Portfolio for EMR cluster template. |

---

##### `group`<sup>Optional</sup> <a name="group" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.group"></a>

```typescript
public readonly group: IGroup;
```

- *Type:* aws-cdk-lib.aws_iam.IGroup

an IAM group you wish to associate with the Portfolio for EMR cluster template.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string
- *Default:* 'scott.hsieh'

The provider name in a Service Catalog for EMR cluster templates.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

an IAM role you wish to associate with the Portfolio for EMR cluster template.

---

##### `user`<sup>Optional</sup> <a name="user" id="cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps.property.user"></a>

```typescript
public readonly user: IUser;
```

- *Type:* aws-cdk-lib.aws_iam.IUser

an IAM user you wish to associate with the Portfolio for EMR cluster template.

---

### EmrStudioEngineSecurityGroupProps <a name="EmrStudioEngineSecurityGroupProps" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps"></a>

Interface for engine security group of EMR Studio.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps.Initializer"></a>

```typescript
import { EmrStudioEngineSecurityGroupProps } from 'cdk-emrserverless-with-delta-lake'

const emrStudioEngineSecurityGroupProps: EmrStudioEngineSecurityGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which to create the engine security group for EMR Studio. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* default VPC in an AWS account.

The VPC in which to create the engine security group for EMR Studio.

---

### EmrStudioProps <a name="EmrStudioProps" id="cdk-emrserverless-with-delta-lake.EmrStudioProps"></a>

Options for the EMR Studio, mainly for EMR Serverless applications.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.Initializer"></a>

```typescript
import { EmrStudioProps } from 'cdk-emrserverless-with-delta-lake'

const emrStudioProps: EmrStudioProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.workSpaceBucket">workSpaceBucket</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket">WorkSpaceBucket</a></code> | The custom construct as the workspace S3 bucket. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.authMode">authMode</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.StudioAuthMode">StudioAuthMode</a></code> | Specifies whether the Studio authenticates users using AWS SSO or IAM. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.description">description</a></code> | <code>string</code> | A detailed description of the Amazon EMR Studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>string</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.serviceCatalogProps">serviceCatalogProps</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps">EmrStudioDeveloperStackProps</a></code> | Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.serviceRoleName">serviceRoleName</a></code> | <code>string</code> | A name for the service role of an EMR Studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.studioName">studioName</a></code> | <code>string</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The subnet IDs for the EMR studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.userRoleArn">userRoleArn</a></code> | <code>string</code> | The custom user role for the EMR Studio when authentication is AWS SSO. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.vpcId">vpcId</a></code> | <code>string</code> | Used by the EMR Studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioProps.property.workSpaceSecurityGroupId">workSpaceSecurityGroupId</a></code> | <code>string</code> | The ID of the security group used by the workspace. |

---

##### `workSpaceBucket`<sup>Required</sup> <a name="workSpaceBucket" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.workSpaceBucket"></a>

```typescript
public readonly workSpaceBucket: WorkSpaceBucket;
```

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket">WorkSpaceBucket</a>

The custom construct as the workspace S3 bucket.

---

##### `authMode`<sup>Optional</sup> <a name="authMode" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.authMode"></a>

```typescript
public readonly authMode: StudioAuthMode;
```

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.StudioAuthMode">StudioAuthMode</a>
- *Default:* StudioAuthMode.AWS_IAM.

Specifies whether the Studio authenticates users using AWS SSO or IAM.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 'EMR Studio Quick Launch - by scott.hsieh'

A detailed description of the Amazon EMR Studio.

---

##### `engineSecurityGroupId`<sup>Optional</sup> <a name="engineSecurityGroupId" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.engineSecurityGroupId"></a>

```typescript
public readonly engineSecurityGroupId: string;
```

- *Type:* string
- *Default:* a security group created by `EmrStudioEngineSecurityGroup`.

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

---

##### `serviceCatalogProps`<sup>Optional</sup> <a name="serviceCatalogProps" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.serviceCatalogProps"></a>

```typescript
public readonly serviceCatalogProps: EmrStudioDeveloperStackProps;
```

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps">EmrStudioDeveloperStackProps</a>

Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates.

You can choose either an IAM group, IAM role, or IAM user. If you leave it empty, an IAM user named `Administrator` with the `AdministratorAccess` power needs to be created first.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `serviceRoleName`<sup>Optional</sup> <a name="serviceRoleName" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.serviceRoleName"></a>

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

##### `studioName`<sup>Optional</sup> <a name="studioName" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.studioName"></a>

```typescript
public readonly studioName: string;
```

- *Type:* string
- *Default:* 'emr-sutdio-quicklaunch'

A descriptive name for the Amazon EMR Studio.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The subnet IDs for the EMR studio.

You can select the subnets from the default VPC in your AWS account.

---

##### `userRoleArn`<sup>Optional</sup> <a name="userRoleArn" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.userRoleArn"></a>

```typescript
public readonly userRoleArn: string;
```

- *Type:* string

The custom user role for the EMR Studio when authentication is AWS SSO.

Currently, if you choose to establish an EMR serverless application where the authentication mechanism used by the EMR Studio is AWS SSO, you need to create a user role by yourself and assign the role arn to this argument if AWS SSO is chosen as authentication for the EMR Studio;

> [https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-permissions.html](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-permissions.html)

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string
- *Default:* 'The default VPC will be used.'

Used by the EMR Studio.

---

##### `workSpaceSecurityGroupId`<sup>Optional</sup> <a name="workSpaceSecurityGroupId" id="cdk-emrserverless-with-delta-lake.EmrStudioProps.property.workSpaceSecurityGroupId"></a>

```typescript
public readonly workSpaceSecurityGroupId: string;
```

- *Type:* string
- *Default:* a security group created by `EmrStudioWorkspaceSecurityGroup`.

The ID of the security group used by the workspace.

---

### EmrStudioServiceRoleProps <a name="EmrStudioServiceRoleProps" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps"></a>

Properties for defining the [service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html) of an EMR Studio.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps.Initializer"></a>

```typescript
import { EmrStudioServiceRoleProps } from 'cdk-emrserverless-with-delta-lake'

const emrStudioServiceRoleProps: EmrStudioServiceRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps.property.workSpaceBucket">workSpaceBucket</a></code> | <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket">WorkSpaceBucket</a></code> | The custom construct as the workspace S3 bucket. |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps.property.roleName">roleName</a></code> | <code>string</code> | A name for the service role of an EMR Studio. |

---

##### `workSpaceBucket`<sup>Required</sup> <a name="workSpaceBucket" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps.property.workSpaceBucket"></a>

```typescript
public readonly workSpaceBucket: WorkSpaceBucket;
```

- *Type:* <a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucket">WorkSpaceBucket</a>

The custom construct as the workspace S3 bucket.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps.property.roleName"></a>

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

### EmrStudioWorkspaceSecurityGroupProps <a name="EmrStudioWorkspaceSecurityGroupProps" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps"></a>

Interface for workspace security group of EMR Studio.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps.Initializer"></a>

```typescript
import { EmrStudioWorkspaceSecurityGroupProps } from 'cdk-emrserverless-with-delta-lake'

const emrStudioWorkspaceSecurityGroupProps: EmrStudioWorkspaceSecurityGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which to create workspace security group for EMR Studio. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* default VPC in an AWS account.

The VPC in which to create workspace security group for EMR Studio.

---

### ServerlessJobRoleProps <a name="ServerlessJobRoleProps" id="cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps"></a>

Options for the execution job role of EMR Serverless.

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps.Initializer"></a>

```typescript
import { ServerlessJobRoleProps } from 'cdk-emrserverless-with-delta-lake'

const serverlessJobRoleProps: ServerlessJobRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps.property.emrServerlessBucket">emrServerlessBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | The EMR Serverless bucket. |

---

##### `emrServerlessBucket`<sup>Required</sup> <a name="emrServerlessBucket" id="cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps.property.emrServerlessBucket"></a>

```typescript
public readonly emrServerlessBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

The EMR Serverless bucket.

---

### WorkSpaceBucketProps <a name="WorkSpaceBucketProps" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps"></a>

#### Initializer <a name="Initializer" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps.Initializer"></a>

```typescript
import { WorkSpaceBucketProps } from 'cdk-emrserverless-with-delta-lake'

const workSpaceBucketProps: WorkSpaceBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | The bucket name for the workspace of an EMR Studio. |
| <code><a href="#cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* 'emr-studio-workspace-bucket-AWS::AccountId'

The bucket name for the workspace of an EMR Studio.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be deleted.

Policy to apply when the bucket is removed from this stack.

---



## Enums <a name="Enums" id="Enums"></a>

### StudioAuthMode <a name="StudioAuthMode" id="cdk-emrserverless-with-delta-lake.StudioAuthMode"></a>

What kind of authentication the Studio uses.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-emrserverless-with-delta-lake.StudioAuthMode.AWS_SSO">AWS_SSO</a></code> | the Studio authenticates users using AWS SSO. |
| <code><a href="#cdk-emrserverless-with-delta-lake.StudioAuthMode.AWS_IAM">AWS_IAM</a></code> | the Studio authenticates users using AWS IAM. |

---

##### `AWS_SSO` <a name="AWS_SSO" id="cdk-emrserverless-with-delta-lake.StudioAuthMode.AWS_SSO"></a>

the Studio authenticates users using AWS SSO.

---


##### `AWS_IAM` <a name="AWS_IAM" id="cdk-emrserverless-with-delta-lake.StudioAuthMode.AWS_IAM"></a>

the Studio authenticates users using AWS IAM.

---

