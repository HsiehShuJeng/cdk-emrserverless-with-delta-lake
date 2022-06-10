package cdkemrserverlesswithdeltalake

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrClusterTemplateStack",
		reflect.TypeOf((*EmrClusterTemplateStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addTransform", GoMethod: "AddTransform"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "availabilityZones", GoGetter: "AvailabilityZones"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "environment", GoGetter: "Environment"},
			_jsii_.MemberMethod{JsiiMethod: "exportValue", GoMethod: "ExportValue"},
			_jsii_.MemberMethod{JsiiMethod: "formatArn", GoMethod: "FormatArn"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "notificationArns", GoGetter: "NotificationArns"},
			_jsii_.MemberProperty{JsiiProperty: "partition", GoGetter: "Partition"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "regionalFact", GoMethod: "RegionalFact"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "reportMissingContextKey", GoMethod: "ReportMissingContextKey"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "splitArn", GoMethod: "SplitArn"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberProperty{JsiiProperty: "terminationProtection", GoGetter: "TerminationProtection"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "urlSuffix", GoGetter: "UrlSuffix"},
		},
		func() interface{} {
			j := jsiiProxy_EmrClusterTemplateStack{}
			_jsii_.InitJsiiProxy(&j.Type__awsservicecatalogProductStack)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrServerless",
		reflect.TypeOf((*EmrServerless)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrServerless{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrServerlessBucket",
		reflect.TypeOf((*EmrServerlessBucket)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "bucketEntity", GoGetter: "BucketEntity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrServerlessBucket{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrServerlessBucketProps",
		reflect.TypeOf((*EmrServerlessBucketProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrServerlessProps",
		reflect.TypeOf((*EmrServerlessProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrStudio",
		reflect.TypeOf((*EmrStudio)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "entity", GoGetter: "Entity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrStudio{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStack",
		reflect.TypeOf((*EmrStudioDeveloperStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "portfolio", GoGetter: "Portfolio"},
			_jsii_.MemberProperty{JsiiProperty: "product", GoGetter: "Product"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrStudioDeveloperStack{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrStudioDeveloperStackProps",
		reflect.TypeOf((*EmrStudioDeveloperStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroup",
		reflect.TypeOf((*EmrStudioEngineSecurityGroup)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "entity", GoGetter: "Entity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrStudioEngineSecurityGroup{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrStudioEngineSecurityGroupProps",
		reflect.TypeOf((*EmrStudioEngineSecurityGroupProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrStudioProps",
		reflect.TypeOf((*EmrStudioProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrStudioServiceRole",
		reflect.TypeOf((*EmrStudioServiceRole)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "roleEntity", GoGetter: "RoleEntity"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrStudioServiceRole{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrStudioServiceRoleProps",
		reflect.TypeOf((*EmrStudioServiceRoleProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrStudioTaggingExpert",
		reflect.TypeOf((*EmrStudioTaggingExpert)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "functionEntity", GoGetter: "FunctionEntity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrStudioTaggingExpert{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroup",
		reflect.TypeOf((*EmrStudioWorkspaceSecurityGroup)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "entity", GoGetter: "Entity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_EmrStudioWorkspaceSecurityGroup{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.EmrStudioWorkspaceSecurityGroupProps",
		reflect.TypeOf((*EmrStudioWorkspaceSecurityGroupProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.ServerlessJobRole",
		reflect.TypeOf((*ServerlessJobRole)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "entity", GoGetter: "Entity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_ServerlessJobRole{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.ServerlessJobRoleProps",
		reflect.TypeOf((*ServerlessJobRoleProps)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"cdk-emrserverless-with-delta-lake.StudioAuthMode",
		reflect.TypeOf((*StudioAuthMode)(nil)).Elem(),
		map[string]interface{}{
			"AWS_SSO": StudioAuthMode_AWS_SSO,
			"AWS_IAM": StudioAuthMode_AWS_IAM,
		},
	)
	_jsii_.RegisterClass(
		"cdk-emrserverless-with-delta-lake.WorkSpaceBucket",
		reflect.TypeOf((*WorkSpaceBucket)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "bucketEntity", GoGetter: "BucketEntity"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_WorkSpaceBucket{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"cdk-emrserverless-with-delta-lake.WorkSpaceBucketProps",
		reflect.TypeOf((*WorkSpaceBucketProps)(nil)).Elem(),
	)
}
