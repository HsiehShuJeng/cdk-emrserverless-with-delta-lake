// A construct for the quick demo of EMR Serverless.
package cdkemrserverlesswithdeltalake

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/HsiehShuJeng/cdk-emrserverless-with-delta-lake/cdkemrserverlesswithdeltalake/v2/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsemr"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/aws-cdk-go/awscdk/v2/awslambda"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsservicecatalog"
	"github.com/aws/aws-cdk-go/awscdk/v2/cloudassemblyschema"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/HsiehShuJeng/cdk-emrserverless-with-delta-lake/cdkemrserverlesswithdeltalake/v2/internal"
)

// Creates a CloudFormation template which will be a Product under a Portfolio of AWS Service Catalog.
//
// This is for creating an EMR cluster via cluster template in the EMR Studio, created by the `EmrServerless` construct, on the AWS Console.
//
// And you don't have control via the `EmrServerless` construct by now. The documentation is for you to grasp the architecture of the `EmrServerless` more easily.
//
// For detail, please refer to [Create AWS CloudFormation templates for Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-cluster-templates.html).
//
// ```ts
// const product = new servicecatalog.CloudFormationProduct(this, 'MyFirstProduct', {
//     productName: 'EMR_6.6.0',
//     owner: 'scott.hsieh',
//     description: 'EMR cluster with 6.6.0 version',
//     productVersions: [
//       {
//         productVersionName: 'v1',
//         validateTemplate: true,
//         cloudFormationTemplate: servicecatalog.CloudFormationTemplate.fromProductStack(new EmrClusterTemplateStack(this, 'EmrStudio')),
//       },
// ],
// });
// ```.
type EmrClusterTemplateStack interface {
	awsservicecatalog.ProductStack
	// The AWS account into which this stack will be deployed.
	//
	// This value is resolved according to the following rules:
	//
	// 1. The value provided to `env.account` when the stack is defined. This can
	//     either be a concerete account (e.g. `585695031111`) or the
	//     `Aws.accountId` token.
	// 3. `Aws.accountId`, which represents the CloudFormation intrinsic reference
	//     `{ "Ref": "AWS::AccountId" }` encoded as a string token.
	//
	// Preferably, you should use the return value as an opaque string and not
	// attempt to parse it to implement your logic. If you do, you must first
	// check that it is a concerete value an not an unresolved token. If this
	// value is an unresolved token (`Token.isUnresolved(stack.account)` returns
	// `true`), this implies that the user wishes that this stack will synthesize
	// into a **account-agnostic template**. In this case, your code should either
	// fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
	// implement some other region-agnostic behavior.
	Account() *string
	// The ID of the cloud assembly artifact for this stack.
	ArtifactId() *string
	// Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.
	//
	// If the stack is environment-agnostic (either account and/or region are
	// tokens), this property will return an array with 2 tokens that will resolve
	// at deploy-time to the first two availability zones returned from CloudFormation's
	// `Fn::GetAZs` intrinsic function.
	//
	// If they are not available in the context, returns a set of dummy values and
	// reports them as missing, and let the CLI resolve them by calling EC2
	// `DescribeAvailabilityZones` on the target environment.
	//
	// To specify a different strategy for selecting availability zones override this method.
	AvailabilityZones() *[]*string
	// Indicates whether the stack requires bundling or not.
	BundlingRequired() *bool
	// Return the stacks this stack depends on.
	Dependencies() *[]awscdk.Stack
	// The environment coordinates in which this stack is deployed.
	//
	// In the form
	// `aws://account/region`. Use `stack.account` and `stack.region` to obtain
	// the specific values, no need to parse.
	//
	// You can use this value to determine if two stacks are targeting the same
	// environment.
	//
	// If either `stack.account` or `stack.region` are not concrete values (e.g.
	// `Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
	// `unknown-region` will be used respectively to indicate this stack is
	// region/account-agnostic.
	Environment() *string
	// Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.
	Nested() *bool
	// If this is a nested stack, returns it's parent stack.
	NestedStackParent() awscdk.Stack
	// If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.
	//
	// `undefined` for top-level (non-nested) stacks.
	NestedStackResource() awscdk.CfnResource
	// The tree node.
	Node() constructs.Node
	// Returns the list of notification Amazon Resource Names (ARNs) for the current stack.
	NotificationArns() *[]*string
	// The partition in which this stack is defined.
	Partition() *string
	// The AWS region into which this stack will be deployed (e.g. `us-west-2`).
	//
	// This value is resolved according to the following rules:
	//
	// 1. The value provided to `env.region` when the stack is defined. This can
	//     either be a concerete region (e.g. `us-west-2`) or the `Aws.region`
	//     token.
	// 3. `Aws.region`, which is represents the CloudFormation intrinsic reference
	//     `{ "Ref": "AWS::Region" }` encoded as a string token.
	//
	// Preferably, you should use the return value as an opaque string and not
	// attempt to parse it to implement your logic. If you do, you must first
	// check that it is a concerete value an not an unresolved token. If this
	// value is an unresolved token (`Token.isUnresolved(stack.region)` returns
	// `true`), this implies that the user wishes that this stack will synthesize
	// into a **region-agnostic template**. In this case, your code should either
	// fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
	// implement some other region-agnostic behavior.
	Region() *string
	// The ID of the stack.
	//
	// Example:
	//   // After resolving, looks like
	//   'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
	//
	StackId() *string
	// The concrete CloudFormation physical stack name.
	//
	// This is either the name defined explicitly in the `stackName` prop or
	// allocated based on the stack's location in the construct tree. Stacks that
	// are directly defined under the app use their construct `id` as their stack
	// name. Stacks that are defined deeper within the tree will use a hashed naming
	// scheme based on the construct path to ensure uniqueness.
	//
	// If you wish to obtain the deploy-time AWS::StackName intrinsic,
	// you can use `Aws.stackName` directly.
	StackName() *string
	// Synthesis method for this stack.
	Synthesizer() awscdk.IStackSynthesizer
	// Tags to be applied to the stack.
	Tags() awscdk.TagManager
	// The name of the CloudFormation template file emitted to the output directory during synthesis.
	//
	// Example value: `MyStack.template.json`
	TemplateFile() *string
	// Options for CloudFormation template (like version, transform, description).
	TemplateOptions() awscdk.ITemplateOptions
	// Whether termination protection is enabled for this stack.
	TerminationProtection() *bool
	// The Amazon domain suffix for the region in which this stack is defined.
	UrlSuffix() *string
	// Add a dependency between this stack and another stack.
	//
	// This can be used to define dependencies between any two stacks within an
	// app, and also supports nested stacks.
	AddDependency(target awscdk.Stack, reason *string)
	// Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.
	//
	// Duplicate values are removed when stack is synthesized.
	//
	// Example:
	//   declare const stack: Stack;
	//
	//   stack.addTransform('AWS::Serverless-2016-10-31')
	//
	// See: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html
	//
	AddTransform(transform *string)
	// Returns the naming scheme used to allocate logical IDs.
	//
	// By default, uses
	// the `HashedAddressingScheme` but this method can be overridden to customize
	// this behavior.
	//
	// In order to make sure logical IDs are unique and stable, we hash the resource
	// construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
	// a suffix to the path components joined without a separator (CloudFormation
	// IDs only allow alphanumeric characters).
	//
	// The result will be:
	//
	//    <path.join('')><md5(path.join('/')>
	//      "human"      "hash"
	//
	// If the "human" part of the ID exceeds 240 characters, we simply trim it so
	// the total ID doesn't exceed CloudFormation's 255 character limit.
	//
	// We only take 8 characters from the md5 hash (0.000005 chance of collision).
	//
	// Special cases:
	//
	// - If the path only contains a single component (i.e. it's a top-level
	//    resource), we won't add the hash to it. The hash is not needed for
	//    disamiguation and also, it allows for a more straightforward migration an
	//    existing CloudFormation template to a CDK stack without logical ID changes
	//    (or renames).
	// - For aesthetic reasons, if the last components of the path are the same
	//    (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
	//    resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
	//    instead of `L1L2PipelinePipeline<HASH>`
	// - If a component is named "Default" it will be omitted from the path. This
	//    allows refactoring higher level abstractions around constructs without affecting
	//    the IDs of already deployed resources.
	// - If a component is named "Resource" it will be omitted from the user-visible
	//    path, but included in the hash. This reduces visual noise in the human readable
	//    part of the identifier.
	AllocateLogicalId(cfnElement awscdk.CfnElement) *string
	// Create a CloudFormation Export for a value.
	//
	// Returns a string representing the corresponding `Fn.importValue()`
	// expression for this Export. You can control the name for the export by
	// passing the `name` option.
	//
	// If you don't supply a value for `name`, the value you're exporting must be
	// a Resource attribute (for example: `bucket.bucketName`) and it will be
	// given the same name as the automatic cross-stack reference that would be created
	// if you used the attribute in another Stack.
	//
	// One of the uses for this method is to *remove* the relationship between
	// two Stacks established by automatic cross-stack references. It will
	// temporarily ensure that the CloudFormation Export still exists while you
	// remove the reference from the consuming stack. After that, you can remove
	// the resource and the manual export.
	//
	// ## Example
	//
	// Here is how the process works. Let's say there are two stacks,
	// `producerStack` and `consumerStack`, and `producerStack` has a bucket
	// called `bucket`, which is referenced by `consumerStack` (perhaps because
	// an AWS Lambda Function writes into it, or something like that).
	//
	// It is not safe to remove `producerStack.bucket` because as the bucket is being
	// deleted, `consumerStack` might still be using it.
	//
	// Instead, the process takes two deployments:
	//
	// ### Deployment 1: break the relationship
	//
	// - Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
	//    stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
	//    remove the Lambda Function altogether).
	// - In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
	//    will make sure the CloudFormation Export continues to exist while the relationship
	//    between the two stacks is being broken.
	// - Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).
	//
	// ### Deployment 2: remove the bucket resource
	//
	// - You are now free to remove the `bucket` resource from `producerStack`.
	// - Don't forget to remove the `exportValue()` call as well.
	// - Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).
	ExportValue(exportedValue interface{}, options *awscdk.ExportValueOptions) *string
	// Creates an ARN from components.
	//
	// If `partition`, `region` or `account` are not specified, the stack's
	// partition, region and account will be used.
	//
	// If any component is the empty string, an empty string will be inserted
	// into the generated ARN at the location that component corresponds to.
	//
	// The ARN will be formatted as follows:
	//
	//    arn:{partition}:{service}:{region}:{account}:{resource}{sep}}{resource-name}
	//
	// The required ARN pieces that are omitted will be taken from the stack that
	// the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
	// can be 'undefined'.
	FormatArn(components *awscdk.ArnComponents) *string
	// Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.
	//
	// This method is called when a `CfnElement` is created and used to render the
	// initial logical identity of resources. Logical ID renames are applied at
	// this stage.
	//
	// This method uses the protected method `allocateLogicalId` to render the
	// logical ID for an element. To modify the naming scheme, extend the `Stack`
	// class and override this method.
	GetLogicalId(element awscdk.CfnElement) *string
	// Look up a fact value for the given fact for the region of this stack.
	//
	// Will return a definite value only if the region of the current stack is resolved.
	// If not, a lookup map will be added to the stack and the lookup will be done at
	// CDK deployment time.
	//
	// What regions will be included in the lookup map is controlled by the
	// `@aws-cdk/core:target-partitions` context value: it must be set to a list
	// of partitions, and only regions from the given partitions will be included.
	// If no such context key is set, all regions will be included.
	//
	// This function is intended to be used by construct library authors. Application
	// builders can rely on the abstractions offered by construct libraries and do
	// not have to worry about regional facts.
	//
	// If `defaultValue` is not given, it is an error if the fact is unknown for
	// the given region.
	RegionalFact(factName *string, defaultValue *string) *string
	// Rename a generated logical identities.
	//
	// To modify the naming scheme strategy, extend the `Stack` class and
	// override the `allocateLogicalId` method.
	RenameLogicalId(oldId *string, newId *string)
	// Indicate that a context key was expected.
	//
	// Contains instructions which will be emitted into the cloud assembly on how
	// the key should be supplied.
	ReportMissingContextKey(report *cloudassemblyschema.MissingContext)
	// Resolve a tokenized value in the context of the current stack.
	Resolve(obj interface{}) interface{}
	// Splits the provided ARN into its components.
	//
	// Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
	// and a Token representing a dynamic CloudFormation expression
	// (in which case the returned components will also be dynamic CloudFormation expressions,
	// encoded as Tokens).
	SplitArn(arn *string, arnFormat awscdk.ArnFormat) *awscdk.ArnComponents
	// Convert an object, potentially containing tokens, to a JSON string.
	ToJsonString(obj interface{}, space *float64) *string
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrClusterTemplateStack
type jsiiProxy_EmrClusterTemplateStack struct {
	internal.Type__awsservicecatalogProductStack
}

func (j *jsiiProxy_EmrClusterTemplateStack) Account() *string {
	var returns *string
	_jsii_.Get(
		j,
		"account",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) ArtifactId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"artifactId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) AvailabilityZones() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"availabilityZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) BundlingRequired() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"bundlingRequired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Dependencies() *[]awscdk.Stack {
	var returns *[]awscdk.Stack
	_jsii_.Get(
		j,
		"dependencies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Environment() *string {
	var returns *string
	_jsii_.Get(
		j,
		"environment",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Nested() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"nested",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) NestedStackParent() awscdk.Stack {
	var returns awscdk.Stack
	_jsii_.Get(
		j,
		"nestedStackParent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) NestedStackResource() awscdk.CfnResource {
	var returns awscdk.CfnResource
	_jsii_.Get(
		j,
		"nestedStackResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) NotificationArns() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"notificationArns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Partition() *string {
	var returns *string
	_jsii_.Get(
		j,
		"partition",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Region() *string {
	var returns *string
	_jsii_.Get(
		j,
		"region",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) StackId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) StackName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stackName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Synthesizer() awscdk.IStackSynthesizer {
	var returns awscdk.IStackSynthesizer
	_jsii_.Get(
		j,
		"synthesizer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) Tags() awscdk.TagManager {
	var returns awscdk.TagManager
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) TemplateFile() *string {
	var returns *string
	_jsii_.Get(
		j,
		"templateFile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) TemplateOptions() awscdk.ITemplateOptions {
	var returns awscdk.ITemplateOptions
	_jsii_.Get(
		j,
		"templateOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) TerminationProtection() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"terminationProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrClusterTemplateStack) UrlSuffix() *string {
	var returns *string
	_jsii_.Get(
		j,
		"urlSuffix",
		&returns,
	)
	return returns
}


func NewEmrClusterTemplateStack(scope constructs.Construct, id *string) EmrClusterTemplateStack {
	_init_.Initialize()

	j := jsiiProxy_EmrClusterTemplateStack{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack",
		[]interface{}{scope, id},
		&j,
	)

	return &j
}

func NewEmrClusterTemplateStack_Override(e EmrClusterTemplateStack, scope constructs.Construct, id *string) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack",
		[]interface{}{scope, id},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrClusterTemplateStack_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Return whether the given object is a Stack.
//
// We do attribute detection since we can't reliably use 'instanceof'.
func EmrClusterTemplateStack_IsStack(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack",
		"isStack",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Looks up the first stack scope in which `construct` is defined.
//
// Fails if there is no stack up the tree.
func EmrClusterTemplateStack_Of(construct constructs.IConstruct) awscdk.Stack {
	_init_.Initialize()

	var returns awscdk.Stack

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack",
		"of",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) AddDependency(target awscdk.Stack, reason *string) {
	_jsii_.InvokeVoid(
		e,
		"addDependency",
		[]interface{}{target, reason},
	)
}

func (e *jsiiProxy_EmrClusterTemplateStack) AddTransform(transform *string) {
	_jsii_.InvokeVoid(
		e,
		"addTransform",
		[]interface{}{transform},
	)
}

func (e *jsiiProxy_EmrClusterTemplateStack) AllocateLogicalId(cfnElement awscdk.CfnElement) *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"allocateLogicalId",
		[]interface{}{cfnElement},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) ExportValue(exportedValue interface{}, options *awscdk.ExportValueOptions) *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"exportValue",
		[]interface{}{exportedValue, options},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) FormatArn(components *awscdk.ArnComponents) *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"formatArn",
		[]interface{}{components},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) GetLogicalId(element awscdk.CfnElement) *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"getLogicalId",
		[]interface{}{element},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) RegionalFact(factName *string, defaultValue *string) *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"regionalFact",
		[]interface{}{factName, defaultValue},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) RenameLogicalId(oldId *string, newId *string) {
	_jsii_.InvokeVoid(
		e,
		"renameLogicalId",
		[]interface{}{oldId, newId},
	)
}

func (e *jsiiProxy_EmrClusterTemplateStack) ReportMissingContextKey(report *cloudassemblyschema.MissingContext) {
	_jsii_.InvokeVoid(
		e,
		"reportMissingContextKey",
		[]interface{}{report},
	)
}

func (e *jsiiProxy_EmrClusterTemplateStack) Resolve(obj interface{}) interface{} {
	var returns interface{}

	_jsii_.Invoke(
		e,
		"resolve",
		[]interface{}{obj},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) SplitArn(arn *string, arnFormat awscdk.ArnFormat) *awscdk.ArnComponents {
	var returns *awscdk.ArnComponents

	_jsii_.Invoke(
		e,
		"splitArn",
		[]interface{}{arn, arnFormat},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) ToJsonString(obj interface{}, space *float64) *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toJsonString",
		[]interface{}{obj, space},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrClusterTemplateStack) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Creates an EMR Studio, an EMR cluster template for the studio, and an EMR Serverless application.
//
// ```ts
// // the quickiest deployment
// new EmrServerless(this, 'EmrServerless');
//
// // custom deployment references
// new EmrServerless(this, 'EmrServerless', {
//     vpcId: 'vpc-idididid',
// });
//
// new EmrServerless(this, 'EmrServerless', {
//     vpcId: 'vpc-idididid',
//     subnetIds: ['subnet-eeeee', 'subnet-fffff']
// });
//
// const myRole = new iam.Role.fromRoleName('MyRole');
// new EmrServerless(this, 'EmrServerless', {
//     serviceCatalogProps: {
//         role: myRole
//     }
// });
//
// const myUser = new iam.Role.fromUserName('MyUser');
// new EmrServerless(this, 'EmrServerless', {
//     vpcId: 'vpc-idididid',
//     subnetIds: ['subnet-eeeee', 'subnet-fffff'],
//     serviceCatalogProps: {
//         user: myUser
//     }
// });
//
// const myGroup = new iam.Group.fromGroupName('MyGroup');
// new EmrServerless(this, 'EmrServerless', {
//     serviceCatalogProps: {
//         group: myGroup
//     }
// });
// ```.
type EmrServerless interface {
	constructs.Construct
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrServerless
type jsiiProxy_EmrServerless struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrServerless) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewEmrServerless(scope constructs.Construct, name *string, props *EmrServerlessProps) EmrServerless {
	_init_.Initialize()

	j := jsiiProxy_EmrServerless{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrServerless",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrServerless_Override(e EmrServerless, scope constructs.Construct, name *string, props *EmrServerlessProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrServerless",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrServerless_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrServerless",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrServerless) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Creates a bucket for EMR Serverless applications.
//
// ```ts
// const emrServerlessBucket = new EmrServerlessBucket(this, 'EmrServerless');
// ```.
type EmrServerlessBucket interface {
	constructs.Construct
	BucketEntity() awss3.Bucket
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrServerlessBucket
type jsiiProxy_EmrServerlessBucket struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrServerlessBucket) BucketEntity() awss3.Bucket {
	var returns awss3.Bucket
	_jsii_.Get(
		j,
		"bucketEntity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrServerlessBucket) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewEmrServerlessBucket(scope constructs.Construct, name *string, props *EmrServerlessBucketProps) EmrServerlessBucket {
	_init_.Initialize()

	j := jsiiProxy_EmrServerlessBucket{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrServerlessBucket",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrServerlessBucket_Override(e EmrServerlessBucket, scope constructs.Construct, name *string, props *EmrServerlessBucketProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrServerlessBucket",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrServerlessBucket_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrServerlessBucket",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrServerlessBucket) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Properties for the EMR Serverless bucket.
type EmrServerlessBucketProps struct {
	// The bucket name for EMR Serverless applications.
	BucketName *string `field:"optional" json:"bucketName" yaml:"bucketName"`
	// Policy to apply when the bucket is removed from this stack.
	RemovalPolicy awscdk.RemovalPolicy `field:"optional" json:"removalPolicy" yaml:"removalPolicy"`
}

type EmrServerlessProps struct {
	// Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates.
	//
	// You can choose either an IAM group, IAM role, or IAM user. If you leave it empty, an IAM user named `Administrator` with the `AdministratorAccess` power needs to be created first.
	ServiceCatalogProps *EmrStudioDeveloperStackProps `field:"optional" json:"serviceCatalogProps" yaml:"serviceCatalogProps"`
	// The subnet IDs for the EMR studio.
	//
	// You can select the subnets from the default VPC in your AWS account.
	SubnetIds *[]*string `field:"optional" json:"subnetIds" yaml:"subnetIds"`
	// Used by the EMR Studio.
	VpcId *string `field:"optional" json:"vpcId" yaml:"vpcId"`
}

// Creates an EMR Studio for EMR Serverless applications.
//
// The Studio is not only for EMR Serverless applications but also for launching an EMR cluster via a cluster template created in this constrcut to check out results transformed by EMR serverless applications.
//
// For what Studio can do further, please refer to [Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html).
//
// ```ts
// const workspaceBucket = new WorkSpaceBucket(this, 'EmrStudio');
// const emrStudio = new EmrStudio(this, '', {
//     workSpaceBucket: workspaceBucket,
//     subnetIds: ['subnet1', 'subnet2', 'subnet3']
// });
// ```.
type EmrStudio interface {
	constructs.Construct
	Entity() awsemr.CfnStudio
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrStudio
type jsiiProxy_EmrStudio struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrStudio) Entity() awsemr.CfnStudio {
	var returns awsemr.CfnStudio
	_jsii_.Get(
		j,
		"entity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudio) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewEmrStudio(scope constructs.Construct, name *string, props *EmrStudioProps) EmrStudio {
	_init_.Initialize()

	j := jsiiProxy_EmrStudio{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudio",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrStudio_Override(e EmrStudio, scope constructs.Construct, name *string, props *EmrStudioProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudio",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrStudio_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrStudio",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrStudio) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Creates a Service Catalog for EMR cluster templates.
//
// For detail, please refer to [Create AWS CloudFormation templates for Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-cluster-templates.html).
//
// ```ts
// const emrClusterTemplatePortfolio = new EmrStudioDeveloperStack(this, 'ClusterTempalte');
// ```.
type EmrStudioDeveloperStack interface {
	constructs.Construct
	// The tree node.
	Node() constructs.Node
	// The representative of the service catalog for EMR cluster tempaltes.
	Portfolio() awsservicecatalog.Portfolio
	// The representative of the product for demo purpose.
	Product() awsservicecatalog.Product
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrStudioDeveloperStack
type jsiiProxy_EmrStudioDeveloperStack struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrStudioDeveloperStack) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudioDeveloperStack) Portfolio() awsservicecatalog.Portfolio {
	var returns awsservicecatalog.Portfolio
	_jsii_.Get(
		j,
		"portfolio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudioDeveloperStack) Product() awsservicecatalog.Product {
	var returns awsservicecatalog.Product
	_jsii_.Get(
		j,
		"product",
		&returns,
	)
	return returns
}


func NewEmrStudioDeveloperStack(scope constructs.Construct, name *string, props *EmrStudioDeveloperStackProps) EmrStudioDeveloperStack {
	_init_.Initialize()

	j := jsiiProxy_EmrStudioDeveloperStack{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrStudioDeveloperStack_Override(e EmrStudioDeveloperStack, scope constructs.Construct, name *string, props *EmrStudioDeveloperStackProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrStudioDeveloperStack_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrStudioDeveloperStack) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Interface for Service Catalog of EMR cluster templates.
type EmrStudioDeveloperStackProps struct {
	// an IAM group you wish to associate with the Portfolio for EMR cluster template.
	Group awsiam.IGroup `field:"optional" json:"group" yaml:"group"`
	// The provider name in a Service Catalog for EMR cluster templates.
	ProviderName *string `field:"optional" json:"providerName" yaml:"providerName"`
	// an IAM role you wish to associate with the Portfolio for EMR cluster template.
	Role awsiam.IRole `field:"optional" json:"role" yaml:"role"`
	// an IAM user you wish to associate with the Portfolio for EMR cluster template.
	User awsiam.IUser `field:"optional" json:"user" yaml:"user"`
}

// Created an engine security group for EMR notebooks.
//
// For detail, plrease refer to [Engine security group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-security-groups.html#emr-studio-security-group-instructions).
//
// ```ts
// const workSpaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'Workspace', { vpc: baseVpc });
// const engineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'Engine', { vpc: baseVpc });
// workSpaceSecurityGroup.entity.connections.allowTo(engineSecurityGroup.entity, ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.');
// workSpaceSecurityGroup.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');
// ```.
type EmrStudioEngineSecurityGroup interface {
	constructs.Construct
	// The representative of the security group as the EMR Studio engine security group.
	Entity() awsec2.SecurityGroup
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrStudioEngineSecurityGroup
type jsiiProxy_EmrStudioEngineSecurityGroup struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrStudioEngineSecurityGroup) Entity() awsec2.SecurityGroup {
	var returns awsec2.SecurityGroup
	_jsii_.Get(
		j,
		"entity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudioEngineSecurityGroup) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewEmrStudioEngineSecurityGroup(scope constructs.Construct, name *string, props *EmrStudioEngineSecurityGroupProps) EmrStudioEngineSecurityGroup {
	_init_.Initialize()

	j := jsiiProxy_EmrStudioEngineSecurityGroup{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrStudioEngineSecurityGroup_Override(e EmrStudioEngineSecurityGroup, scope constructs.Construct, name *string, props *EmrStudioEngineSecurityGroupProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrStudioEngineSecurityGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrStudioEngineSecurityGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Interface for engine security group of EMR Studio.
type EmrStudioEngineSecurityGroupProps struct {
	// The VPC in which to create the engine security group for EMR Studio.
	Vpc awsec2.IVpc `field:"required" json:"vpc" yaml:"vpc"`
}

// Options for the EMR Studio, mainly for EMR Serverless applications.
type EmrStudioProps struct {
	// The custom construct as the workspace S3 bucket.
	WorkSpaceBucket WorkSpaceBucket `field:"required" json:"workSpaceBucket" yaml:"workSpaceBucket"`
	// Specifies whether the Studio authenticates users using AWS SSO or IAM.
	AuthMode StudioAuthMode `field:"optional" json:"authMode" yaml:"authMode"`
	// A detailed description of the Amazon EMR Studio.
	Description *string `field:"optional" json:"description" yaml:"description"`
	// The ID of the Amazon EMR Studio Engine security group.
	//
	// The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
	EngineSecurityGroupId *string `field:"optional" json:"engineSecurityGroupId" yaml:"engineSecurityGroupId"`
	// Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates.
	//
	// You can choose either an IAM group, IAM role, or IAM user. If you leave it empty, an IAM user named `Administrator` with the `AdministratorAccess` power needs to be created first.
	ServiceCatalogProps *EmrStudioDeveloperStackProps `field:"optional" json:"serviceCatalogProps" yaml:"serviceCatalogProps"`
	ServiceRoleArn *string `field:"optional" json:"serviceRoleArn" yaml:"serviceRoleArn"`
	// A name for the service role of an EMR Studio.
	//
	// For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference.
	//
	// IMPORTANT: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
	//
	// If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
	ServiceRoleName *string `field:"optional" json:"serviceRoleName" yaml:"serviceRoleName"`
	// A descriptive name for the Amazon EMR Studio.
	StudioName *string `field:"optional" json:"studioName" yaml:"studioName"`
	// The subnet IDs for the EMR studio.
	//
	// You can select the subnets from the default VPC in your AWS account.
	SubnetIds *[]*string `field:"optional" json:"subnetIds" yaml:"subnetIds"`
	// The custom user role for the EMR Studio when authentication is AWS SSO.
	//
	// Currently, if you choose to establish an EMR serverless application where the authentication mechanism used by the EMR Studio is AWS SSO, you need to create a user role by yourself and assign the role arn to this argument if AWS SSO is chosen as authentication for the EMR Studio;.
	UserRoleArn *string `field:"optional" json:"userRoleArn" yaml:"userRoleArn"`
	// Used by the EMR Studio.
	VpcId *string `field:"optional" json:"vpcId" yaml:"vpcId"`
	// The ID of the security group used by the workspace.
	WorkSpaceSecurityGroupId *string `field:"optional" json:"workSpaceSecurityGroupId" yaml:"workSpaceSecurityGroupId"`
}

// Creates a default service role for an EMR Studio.
//
// For detail, please refer to [Create an EMR Studio service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html).
//
// ```ts
// const workSpaceBucket = new WorkSpaceBucket(this, 'WorkSpace');
// const emrStudioServiceRole = new EmrStudioServiceRole(this, 'Service', {
//       workSpaceBucket: workSpaceBucket
// });
// ```.
type EmrStudioServiceRole interface {
	constructs.Construct
	// The tree node.
	Node() constructs.Node
	// The representative of the default service role for EMR Studio.
	RoleEntity() awsiam.Role
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrStudioServiceRole
type jsiiProxy_EmrStudioServiceRole struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrStudioServiceRole) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudioServiceRole) RoleEntity() awsiam.Role {
	var returns awsiam.Role
	_jsii_.Get(
		j,
		"roleEntity",
		&returns,
	)
	return returns
}


func NewEmrStudioServiceRole(scope constructs.Construct, name *string, props *EmrStudioServiceRoleProps) EmrStudioServiceRole {
	_init_.Initialize()

	j := jsiiProxy_EmrStudioServiceRole{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioServiceRole",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrStudioServiceRole_Override(e EmrStudioServiceRole, scope constructs.Construct, name *string, props *EmrStudioServiceRoleProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioServiceRole",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrStudioServiceRole_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrStudioServiceRole",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrStudioServiceRole) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Properties for defining the [service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html) of an EMR Studio.
type EmrStudioServiceRoleProps struct {
	// The custom construct as the workspace S3 bucket.
	WorkSpaceBucket WorkSpaceBucket `field:"required" json:"workSpaceBucket" yaml:"workSpaceBucket"`
	// A name for the service role of an EMR Studio.
	//
	// For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference.
	//
	// IMPORTANT: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
	//
	// If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
	RoleName *string `field:"optional" json:"roleName" yaml:"roleName"`
}

// Creates a Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment.
//
// For detail on the tag, please refer to [How to create a service role for EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html#emr-studio-service-role-instructions)
type EmrStudioTaggingExpert interface {
	constructs.Construct
	// The repesentative of the Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment.
	FunctionEntity() awslambda.Function
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrStudioTaggingExpert
type jsiiProxy_EmrStudioTaggingExpert struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrStudioTaggingExpert) FunctionEntity() awslambda.Function {
	var returns awslambda.Function
	_jsii_.Get(
		j,
		"functionEntity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudioTaggingExpert) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewEmrStudioTaggingExpert(scope constructs.Construct, name *string) EmrStudioTaggingExpert {
	_init_.Initialize()

	j := jsiiProxy_EmrStudioTaggingExpert{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert",
		[]interface{}{scope, name},
		&j,
	)

	return &j
}

func NewEmrStudioTaggingExpert_Override(e EmrStudioTaggingExpert, scope constructs.Construct, name *string) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert",
		[]interface{}{scope, name},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrStudioTaggingExpert_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrStudioTaggingExpert) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Created a workspace security group for EMR Studio.
//
// For detail, plrease refer to [Workspace security group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-security-groups.html#emr-studio-security-group-instructions).
//
// ```ts
// const workSpaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'Workspace', { vpc: baseVpc });
// const engineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'Engine', { vpc: baseVpc });
// workSpaceSecurityGroup.entity.connections.allowTo(engineSecurityGroup.entity, ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.');
// workSpaceSecurityGroup.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');
// ```.
type EmrStudioWorkspaceSecurityGroup interface {
	constructs.Construct
	// The representative of the security group as the EMR Studio workspace security group.
	Entity() awsec2.SecurityGroup
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for EmrStudioWorkspaceSecurityGroup
type jsiiProxy_EmrStudioWorkspaceSecurityGroup struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_EmrStudioWorkspaceSecurityGroup) Entity() awsec2.SecurityGroup {
	var returns awsec2.SecurityGroup
	_jsii_.Get(
		j,
		"entity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_EmrStudioWorkspaceSecurityGroup) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewEmrStudioWorkspaceSecurityGroup(scope constructs.Construct, name *string, props *EmrStudioWorkspaceSecurityGroupProps) EmrStudioWorkspaceSecurityGroup {
	_init_.Initialize()

	j := jsiiProxy_EmrStudioWorkspaceSecurityGroup{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewEmrStudioWorkspaceSecurityGroup_Override(e EmrStudioWorkspaceSecurityGroup, scope constructs.Construct, name *string, props *EmrStudioWorkspaceSecurityGroupProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup",
		[]interface{}{scope, name, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func EmrStudioWorkspaceSecurityGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_EmrStudioWorkspaceSecurityGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Interface for workspace security group of EMR Studio.
type EmrStudioWorkspaceSecurityGroupProps struct {
	// The VPC in which to create workspace security group for EMR Studio.
	Vpc awsec2.IVpc `field:"required" json:"vpc" yaml:"vpc"`
}

// Creates an execution job role for EMR Serverless.
//
// For detail, please refer to [Create a job runtime role](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/getting-started.html#gs-runtime-role).
//
// ```ts
// const emrServerlessBucket = new EmrServerlessBucket(this, 'EmrServerlessStorage');
// const emrServerlessJobRole = new ServerlessJobRole(this, 'EmrServerlessJob', {emrServerlessBucket: emrServerlessBucket});
// ```.
type ServerlessJobRole interface {
	constructs.Construct
	// The representative of the execution role for EMR Serverless.
	Entity() awsiam.Role
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for ServerlessJobRole
type jsiiProxy_ServerlessJobRole struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_ServerlessJobRole) Entity() awsiam.Role {
	var returns awsiam.Role
	_jsii_.Get(
		j,
		"entity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ServerlessJobRole) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewServerlessJobRole(scope constructs.Construct, name *string, props *ServerlessJobRoleProps) ServerlessJobRole {
	_init_.Initialize()

	j := jsiiProxy_ServerlessJobRole{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.ServerlessJobRole",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewServerlessJobRole_Override(s ServerlessJobRole, scope constructs.Construct, name *string, props *ServerlessJobRoleProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.ServerlessJobRole",
		[]interface{}{scope, name, props},
		s,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func ServerlessJobRole_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.ServerlessJobRole",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_ServerlessJobRole) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

// Options for the execution job role of EMR Serverless.
type ServerlessJobRoleProps struct {
	// The EMR Serverless bucket.
	EmrServerlessBucket awss3.Bucket `field:"required" json:"emrServerlessBucket" yaml:"emrServerlessBucket"`
}

// What kind of authentication the Studio uses.
type StudioAuthMode string

const (
	// the Studio authenticates users using AWS SSO.
	StudioAuthMode_AWS_SSO StudioAuthMode = "AWS_SSO"
	// the Studio authenticates users using AWS IAM.
	StudioAuthMode_AWS_IAM StudioAuthMode = "AWS_IAM"
)

type WorkSpaceBucket interface {
	constructs.Construct
	BucketEntity() awss3.Bucket
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for WorkSpaceBucket
type jsiiProxy_WorkSpaceBucket struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_WorkSpaceBucket) BucketEntity() awss3.Bucket {
	var returns awss3.Bucket
	_jsii_.Get(
		j,
		"bucketEntity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WorkSpaceBucket) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewWorkSpaceBucket(scope constructs.Construct, name *string, props *WorkSpaceBucketProps) WorkSpaceBucket {
	_init_.Initialize()

	j := jsiiProxy_WorkSpaceBucket{}

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.WorkSpaceBucket",
		[]interface{}{scope, name, props},
		&j,
	)

	return &j
}

func NewWorkSpaceBucket_Override(w WorkSpaceBucket, scope constructs.Construct, name *string, props *WorkSpaceBucketProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-emrserverless-with-delta-lake.WorkSpaceBucket",
		[]interface{}{scope, name, props},
		w,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func WorkSpaceBucket_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-emrserverless-with-delta-lake.WorkSpaceBucket",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WorkSpaceBucket) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		w,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

type WorkSpaceBucketProps struct {
	// The bucket name for the workspace of an EMR Studio.
	BucketName *string `field:"optional" json:"bucketName" yaml:"bucketName"`
	// Policy to apply when the bucket is removed from this stack.
	RemovalPolicy awscdk.RemovalPolicy `field:"optional" json:"removalPolicy" yaml:"removalPolicy"`
}

