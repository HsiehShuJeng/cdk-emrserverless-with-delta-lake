import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as emr from 'aws-cdk-lib/aws-emr';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { WorkSpaceBucket } from './buckets';
import { EmrStudioDeveloperStack, EmrStudioDeveloperStackProps } from './emr-studio-cluster-templates';
import { EmrStudioEngineSecurityGroup, EmrStudioWorkspaceSecurityGroup } from './emr-studio-sgs';

/**
 * What kind of authentication the Studio uses.
 */
export enum StudioAuthMode {
  /**
                                                         * the Studio authenticates users using AWS SSO.
                                                         */
  AWS_SSO = 'SSO',
  /**
                                                         * the Studio authenticates users using AWS IAM.
                                                         */
  AWS_IAM = 'IAM'
}

/**
 * Options for the EMR Studio, mainly for EMR Serverless applications.
 */
export interface EmrStudioProps {
  /**
                                                 * The custom construct as the workspace S3 bucket.
                                                 **/
  readonly workSpaceBucket: WorkSpaceBucket;
  /**
     * The subnet IDs for the EMR studio.
     * You can select the subnets from the default VPC in your AWS account.
     */
  readonly subnetIds?: Array<string>;
  /**
                                                 * Specifies whether the Studio authenticates users using AWS SSO or IAM.
                                                 *
                                                 * @default - StudioAuthMode.AWS_IAM.
                                                 **/
  readonly authMode?: StudioAuthMode;
  /**
                                                         * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
                                                         *
                                                         * @default - a security group created by `EmrStudioEngineSecurityGroup`.
                                                         */
  readonly engineSecurityGroupId?: string;
  /**
                                                         * The ID of the security group used by the workspace.
                                                         *
                                                         *  @default - a security group created by `EmrStudioWorkspaceSecurityGroup`.
                                                         */
  readonly workSpaceSecurityGroupId?: string;
  /**
                                                         * A descriptive name for the Amazon EMR Studio.
                                                         *
                                                         * @default - 'emr-sutdio-quicklaunch'
                                                         */
  readonly studioName?: string;
  /**
                                                         * Used by the EMR Studio.
                                                         *
                                                         * @default - 'The default VPC will be used.'
                                                         */
  readonly vpcId?: string;
  /**
                                                         * A detailed description of the Amazon EMR Studio.
                                                         *
                                                         * @default - 'EMR Studio Quick Launch - by scott.hsieh'
                                                         */
  readonly description?: string;
  /**
                                                         * The custom service role for the EMR Studio.
                                                         *
                                                         * @link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html
                                                         * @default - established by the construct, EmrStudioServiceRole.
                                                         */
  /**
                                              * A name for the service role of an EMR Studio. For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference.
                                              *
                                              * IMPORTANT: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
                                              *
                                              * If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
                                              *
                                              * @default - 'emr-studio-service-role'
                                              */
  readonly serviceRoleName?: string;
  readonly serviceRoleArn?: string;
  /**
                                                         * The custom user role for the EMR Studio when authentication is AWS SSO.
                                                         *
                                                         * Currently, if you choose to establish an EMR serverless application where the authentication mechanism used by the EMR Studio is AWS SSO, you need to create a user role by yourself and assign the role arn to this argument if AWS SSO is chosen as authentication for the EMR Studio;
                                                         *
                                                         * @link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-permissions.html
                                                         */
  readonly userRoleArn?: string;
  /**
   * Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates.
   *
   * You can choose either an IAM group, IAM role, or IAM user. If you leave it empty, an IAM user named `Administrator` with the `AdministratorAccess` power needs to be created first.
   */
  readonly serviceCatalogProps?: EmrStudioDeveloperStackProps;
}

/**
 * Creates an EMR Studio for EMR Serverless applications.
 *
 * The Studio is not only for EMR Serverless applications but also for launching an EMR cluster via a cluster template created in this constrcut to check out results transformed by EMR serverless applications.
 *
 * For what Studio can do further, please refer to [Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html).
 *
 * ```ts
 * const workspaceBucket = new WorkSpaceBucket(this, 'EmrStudio');
 * const emrStudio = new EmrStudio(this, '', {
 *    workSpaceBucket: workspaceBucket,
 *    subnetIds: ['subnet1', 'subnet2', 'subnet3']
 * });
 * ```
 */
export class EmrStudio extends Construct {
  public readonly entity: emr.CfnStudio;
  constructor(scope: Construct, name: string, props: EmrStudioProps) {
    super(scope, name);
    const baseVpc = (props.vpcId !== undefined) ? ec2.Vpc.fromLookup(this, 'EmrBaseVpc', { vpcId: props!.vpcId }) : ec2.Vpc.fromLookup(this, 'DefaultVpc', { isDefault: true });
    if (props.vpcId === undefined) {
      console.log('`vpcId` is not set for the EmrStudio construct, therefore, the default VPC is chosen.');
    }
    const defaultSubnetIds: Array<string> = [];
    baseVpc.publicSubnets.forEach((subnet) => {
      defaultSubnetIds.push(subnet.subnetId);
    });
    if (props.subnetIds === undefined) {
      console.log('`subnetIds` for the `EmrStudio` construct is not set, therefore, public subnets from the chosen VPC is chosen.');
    };
    const subnetIds: Array<string> = (props.subnetIds !== undefined) ? props.subnetIds : defaultSubnetIds;
    console.log(`${subnetIds.toString()} are selected for the EMR Studio`);
    const workSpaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'Workspace', { vpc: baseVpc });
    const engineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'Engine', { vpc: baseVpc });
    workSpaceSecurityGroup.entity.connections.allowTo(engineSecurityGroup.entity, ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.');
    workSpaceSecurityGroup.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');

    this.addProperTag(workSpaceSecurityGroup);
    this.addProperTag(engineSecurityGroup);
    const taggingExpert = new EmrStudioTaggingExpert(this, 'TaggingExpert');
    const lambdaInvoker = new cr.Provider(this, 'LambdaInvoker', {
      onEventHandler: taggingExpert.functionEntity,
      logRetention: logs.RetentionDays.THREE_MONTHS,
    });
    new cdk.CustomResource(this, 'TagVpcSubnetCr', {
      serviceToken: lambdaInvoker.serviceToken,
      resourceType: 'Custom::TagVpcSubnets',
      properties: {
        VpcId: baseVpc.vpcId,
        SubnetIds: subnetIds.toString(),
      },
    });

    const serviceRoleName = props.serviceRoleName ?? 'emr-studio-service-role';
    if (props.serviceRoleName == undefined) {
      console.log('`serviceRoleName` is set by default value: \'emr-studio-service-role\'');
    }
    const emrStudioServiceRole = new EmrStudioServiceRole(this, 'Service', {
      workSpaceBucket: props.workSpaceBucket,
      roleName: serviceRoleName,
    });
    const authMode = props.authMode ?? StudioAuthMode.AWS_IAM;
    const engineSecurityGroupId = props.engineSecurityGroupId ?? engineSecurityGroup.entity.securityGroupId;
    const workspaceSecurityGroupId = props.workSpaceSecurityGroupId ?? workSpaceSecurityGroup.entity.securityGroupId;
    const serviceRoleArn = (props.serviceRoleArn !== undefined) ? props.serviceRoleArn : emrStudioServiceRole!.roleEntity.roleArn;


    this.entity = new emr.CfnStudio(this, 'EmrStudio', {
      authMode: authMode,
      defaultS3Location: `s3://${props.workSpaceBucket.bucketEntity.bucketName}/`,
      engineSecurityGroupId: engineSecurityGroupId,
      name: props.studioName ?? 'emr-sutdio-quicklaunch',
      serviceRole: serviceRoleArn,
      subnetIds: subnetIds,
      vpcId: baseVpc.vpcId,
      workspaceSecurityGroupId: workspaceSecurityGroupId,
      description: props.description ?? 'EMR Studio Quick Launch - by scott.hsieh',
      tags: [{
        key: 'Purpose',
        value: 'Demo',
      },
      {
        key: 'DemoContributor',
        value: 'scott.hsieh',
      }],
      userRole: (props.authMode == StudioAuthMode.AWS_SSO) ? props.userRoleArn : undefined,
    });
    new EmrStudioDeveloperStack(this, 'ClusterTempalte', {
      providerName: props.serviceCatalogProps?.providerName,
      group: props.serviceCatalogProps?.group,
      user: props.serviceCatalogProps?.user,
      role: props.serviceCatalogProps?.role,
    });

    new cdk.CfnOutput(this, 'EmrStudioArn', { value: cdk.stringToCloudFormation(this.entity.getAtt('Arn')), description: 'The ARN of the EMR Studio' });
    new cdk.CfnOutput(this, 'EmrStudioId', { value: cdk.stringToCloudFormation(this.entity.getAtt('StudioId')), description: 'The ID of the Amazon EMR Studio.' });
    new cdk.CfnOutput(this, 'EmrStudioUrl', { value: cdk.stringToCloudFormation(this.entity.getAtt('Url')), description: 'The unique access URL of the Amazon EMR Studio.' });
  }
  /**
                           * Add `{'for-use-with-amazon-emr-managed-policies', 'true'}` to a specific construct.
                           *
                           * Please refer to [Create an EMR Studio service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html) for detail.
                           * @param entity a construct that is intended to be added the specific tag.
                           */
  private addProperTag = (entity: Construct) => {
    cdk.Tags.of(entity).add('for-use-with-amazon-emr-managed-policies', 'true');
  };
}

/**
 * Properties for defining the [service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html) of an EMR Studio.
 */
export interface EmrStudioServiceRoleProps {
  /**
                                                 * The custom construct as the workspace S3 bucket.
                                                 **/
  readonly workSpaceBucket: WorkSpaceBucket;
  /**
                                                         * A name for the service role of an EMR Studio. For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference.
                                                         *
                                                         * IMPORTANT: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
                                                         *
                                                         * If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
                                                         *
                                                         * @default - 'emr-studio-service-role'
                                                         */
  readonly roleName?: string;
}


/**
 * Creates a default service role for an EMR Studio.
 *
 * For detail, please refer to [Create an EMR Studio service role](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html).
 *
 * ```ts
 * const workSpaceBucket = new WorkSpaceBucket(this, 'WorkSpace');
 * const emrStudioServiceRole = new EmrStudioServiceRole(this, 'Service', {
 *      workSpaceBucket: workSpaceBucket
 * });
 * ```
 */
export class EmrStudioServiceRole extends Construct {
  /**
                           * The representative of the default service role for EMR Studio.
                           */
  public readonly roleEntity: iam.Role;
  constructor(scope: Construct, name: string, props: EmrStudioServiceRoleProps) {
    super(scope, name);
    this.roleEntity = new iam.Role(this, 'IamRole', {
      roleName: (props !== undefined) ? props!.roleName : 'Emr-Studio-Quick-Demo-Service-Role',
      assumedBy: new iam.ServicePrincipal('elasticmapreduce.amazonaws.com', {
        conditions: {
          ['StringEquals']: {
            'aws:SourceAccount': cdk.Aws.ACCOUNT_ID,
          },
          ['ArnLike']: {
            'aws:SourceArn': `arn:aws:elasticmapreduce:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:*`,
          },
        },
      }),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonEMRServicePolicy_v2'),
      ],
      inlinePolicies: {
        ['emr-studio-quick-demo-additional-policy']: new iam.PolicyDocument({
          assignSids: true,
          statements: [
            new iam.PolicyStatement({
              sid: 'AllowEMRReadOnlyActions',
              effect: iam.Effect.ALLOW,
              actions: [
                'elasticmapreduce:ListInstances',
                'elasticmapreduce:DescribeCluster',
                'elasticmapreduce:ListSteps',
              ],
              resources: [
                '*',
              ],
            }),
            new iam.PolicyStatement({
              sid: 'AllowEC2ENIActionsWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:CreateNetworkInterfacePermission',
                'ec2:DeleteNetworkInterface',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:network-interface/*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:ResourceTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowEC2ENIAttributeAction',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:ModifyNetworkInterfaceAttribute',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:instance/*`,
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:network-interface/*`,
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:security-group/*`,
              ],
            }),
            new iam.PolicyStatement({
              sid: 'AllowEC2SecurityGroupActionsWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:AuthorizeSecurityGroupEgress',
                'ec2:AuthorizeSecurityGroupIngress',
                'ec2:RevokeSecurityGroupEgress',
                'ec2:RevokeSecurityGroupIngress',
                'ec2:DeleteNetworkInterfacePermission',
              ],
              resources: [
                '*',
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:ResourceTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowDefaultEC2SecurityGroupsCreationWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:AuthorizeSecurityGroupEgress',
                'ec2:AuthorizeSecurityGroupIngress',
                'ec2:RevokeSecurityGroupEgress',
                'ec2:RevokeSecurityGroupIngress',
                'ec2:DeleteNetworkInterfacePermission',
              ],
              resources: [
                '*',
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:RequestTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowDefaultEC2SecurityGroupsCreationInVPCWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:CreateSecurityGroup',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:vpc/*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:ResourceTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowAddingEMRTagsDuringDefaultSecurityGroupCreation',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:CreateTags',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:security-group/*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:RequestTag/for-use-with-amazon-emr-managed-policies': 'true',
                  'ec2:CreateAction': 'CreateSecurityGroup',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowEC2ENICreationWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:CreateNetworkInterface',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:network-interface/*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:RequestTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowEC2ENICreationInSubnetAndSecurityGroupWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:CreateNetworkInterface',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:subnet/*`,
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:security-group/*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:ResourceTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowAddingTagsDuringEC2ENICreation',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:CreateTags',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:ec2:*:*:network-interface/*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'ec2:CreateAction': 'CreateNetworkInterface',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowEC2ReadOnlyActions',
              effect: iam.Effect.ALLOW,
              actions: [
                'ec2:DescribeSecurityGroups',
                'ec2:DescribeNetworkInterfaces',
                'ec2:DescribeTags',
                'ec2:DescribeInstances',
                'ec2:DescribeSubnets',
                'ec2:DescribeVpcs',
              ],
              resources: [
                '*',
              ],
            }),
            new iam.PolicyStatement({
              sid: 'AllowSecretsManagerReadOnlyActionsWithEMRTags',
              effect: iam.Effect.ALLOW,
              actions: [
                'secretsmanager:GetSecretValue',
              ],
              resources: [
                `arn:${cdk.Aws.PARTITION}:secretsmanager:*:*:secret:*`,
              ],
              conditions: {
                ['StringEquals']: {
                  'aws:ResourceTag/for-use-with-amazon-emr-managed-policies': 'true',
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowWorkspaceCollaboration',
              effect: iam.Effect.ALLOW,
              actions: [
                'iam:GetUser',
                'iam:GetRole',
                'iam:ListUsers',
                'iam:ListRoles',
                'sso:GetManagedApplicationInstance',
                'sso-directory:SearchUsers',
              ],
              resources: [
                '*',
              ],
            }),
            new iam.PolicyStatement({
              sid: 'AllowWorkSpaceBucketPermissions',
              effect: iam.Effect.ALLOW,
              actions: [
                's3:PutObject',
                's3:GetObject',
                's3:GetEncryptionConfiguration',
                's3:ListBucket',
                's3:DeleteObject',
              ],
              resources: [
                `${props.workSpaceBucket.bucketEntity.bucketArn}`,
                `${props.workSpaceBucket.bucketEntity.bucketArn}/*`,
              ],
            }),
          ],
        }),
      },
    });
    new cdk.CfnOutput(this, 'OEmrStudioServiceRoleArn', { value: this.roleEntity.roleArn, description: 'The ARN of the servcie role used by the EMR Studio for quick demo.' });
  }
}

/**
 * Creates a Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment.
 *
 * For detail on the tag, please refer to [How to create a service role for EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-service-role.html#emr-studio-service-role-instructions)
 */
export class EmrStudioTaggingExpert extends Construct {
  /**
   * The repesentative of the Lambda function for the custom resource which can add necessary tag onto the VPC and subnets for the EMR Studio during deployment.
   */
  public readonly functionEntity: lambda.Function;
  constructor(scope: Construct, name: string) {
    super(scope, name);
    const lambdaRole = new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      description: 'An execution role for the Lambda function which tags specific resources for the EMR Studio.',
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AWSXRayDaemonWriteAccess'),
      ],
      roleName: 'Tagging-Expert-Role',
      inlinePolicies: {
        LambdaForBranchPolicy: new iam.PolicyDocument({
          assignSids: true,
          statements: [new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['ec2:CreateTags', 'ec2:DeleteTags'],
            resources: [`arn:${cdk.Aws.PARTITION}:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:vpc/*`,
              `arn:${cdk.Aws.PARTITION}:ec2:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:subnet/*`],
          })],
        }),
      },
    });
    this.functionEntity = new lambda.Function(this, 'Function', {
      functionName: 'emr-studio-tagging-specific-resources',
      description: 'Tags specific EC2 resources, i.e., the VPC and subnets for the EMR Studio.',
      logRetention: logs.RetentionDays.THREE_MONTHS,
      runtime: lambda.Runtime.PYTHON_3_12,
      architecture: lambda.Architecture.ARM_64,
      code: lambda.Code.fromInline('import json\r\nfrom typing import List\r\n\r\nimport boto3\r\nfrom botocore.exceptions import ClientError, ParamValidationError\r\n\r\n\r\ndef lambda_handler(event, context):\r\n    print(json.dumps(event, indent=4))\r\n    request_type = event["RequestType"]\r\n    props = event["ResourceProperties"]\r\n    vpc_id: str = props.get(\'VpcId\')\r\n    subnet_ids: List[str] = props.get(\'SubnetIds\').split(\',\')\r\n    resources_list = [vpc_id] + subnet_ids\r\n    ec2_client = boto3.client(\'ec2\')\r\n    if(request_type in [\'Create\']):\r\n        try:\r\n            response = ec2_client.create_tags(\r\n                Resources=resources_list,\r\n                Tags=[\r\n                    {\r\n                        \'Key\': \'for-use-with-amazon-emr-managed-policies\',\r\n                        \'Value\': \'true\'\r\n                    }\r\n                ]\r\n            )\r\n            metadata = response.get(\'ResponseMetadata\')\r\n            status_code = metadata.get(\'HTTPStatusCode\')\r\n            print(f\'HTTP status code: {status_code}\')\r\n            if status_code == 200:\r\n                resources = \',\'.join(resources_list)\r\n                tag_value = json.dumps({\r\n                    \'Key\': \'for-use-with-amazon-emr-managed-policies\',\r\n                    \'Value\': \'true\'\r\n                }, indent=4)\r\n                print(f\'{resources} has been added {tag_value}\')\r\n        except ClientError as e:\r\n            print(f\'Unexpected error: {e}\')\r\n        except ParamValidationError as e:\r\n            print(f\'Parameter validation error: {e}\')\r\n    if(request_type == \'Delete\'):\r\n        try:\r\n            response = ec2_client.delete_tags(\r\n                Resources=resources_list,\r\n                Tags=[\r\n                    {\r\n                        \'Key\': \'for-use-with-amazon-emr-managed-policies\',\r\n                        \'Value\': \'true\'\r\n                    }\r\n                ]\r\n            )\r\n            metadata = response.get(\'ResponseMetadata\')\r\n            status_code = metadata.get(\'HTTPStatusCode\')\r\n            print(f\'HTTP status code: {status_code}\')\r\n            if status_code == 200:\r\n                resources = \',\'.join(resources_list)\r\n                tag_value = json.dumps({\r\n                    \'Key\': \'for-use-with-amazon-emr-managed-policies\',\r\n                    \'Value\': \'true\'\r\n                }, indent=4)\r\n                print(f\'{resources} has been removed {tag_value}\')\r\n        except ClientError as e:\r\n            print(f\'Unexpected error: {e}\')\r\n        except ParamValidationError as e:\r\n            print(f\'Parameter validation error: {e}\')\r\n'),
      handler: 'index.lambda_handler',
      memorySize: 128,
      role: lambdaRole,
      timeout: cdk.Duration.seconds(20),
      tracing: lambda.Tracing.ACTIVE,
    });
  }
}