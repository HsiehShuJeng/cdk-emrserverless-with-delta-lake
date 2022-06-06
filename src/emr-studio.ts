import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as emr from 'aws-cdk-lib/aws-emr';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { EmrStudioDeveloperStack } from './emr-studio-cluster-templates';
import { EmrStudioEngineSecurityGroup, EmrStudioWorkspaceSecurityGroup } from './emr-studio-sgs';
import { WorkSpaceBucket } from './workspace-bucket';

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

export interface EmrStudioProps {
  /**
                                           * The custom construct as the workspace S3 bucket.
                                           **/
  readonly workSpaceBucket: WorkSpaceBucket;
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
}

export class EmrStudio extends Construct {
  public readonly entity: emr.CfnStudio;
  constructor(scope: Construct, name: string, props: EmrStudioProps) {
    super(scope, name);
    const baseVpc = (props.vpcId !== undefined) ? ec2.Vpc.fromLookup(this, 'EmrBaseVpc', { vpcId: props!.vpcId }) : ec2.Vpc.fromLookup(this, 'DefaultVpc', { isDefault: true });
    if (props.vpcId !== undefined) {
      console.log('`vpcId` is not set for the EmrStudio construct, therefore, the default VPC is chosen.');
    }

    this.addProperTag(baseVpc);
    const workSpaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'Workspace', { vpc: baseVpc });
    const engineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'Engine', { vpc: baseVpc });
    workSpaceSecurityGroup.entity.connections.allowTo(engineSecurityGroup.entity, ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.');
    workSpaceSecurityGroup.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');
    this.addProperTag(workSpaceSecurityGroup);
    this.addProperTag(engineSecurityGroup);
    const subnetIds: Array<string> = ['subnet-a4bfe38c', 'subnet-278b3050', 'subnet-3571a36c'];
    subnetIds.forEach((subnetId, position) => {
      const subnet = ec2.Subnet.fromSubnetId(this, `EmrStudioSubnet${position}`, subnetId);
      this.addProperTag(subnet);
    });

    const serviceRoleName = props.serviceRoleName ?? 'emr-studio-service-role';
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
      subnetIds: ['subnet-a4bfe38c', 'subnet-278b3050', 'subnet-3571a36c'],
      vpcId: baseVpc.vpcId,
      workspaceSecurityGroupId: workspaceSecurityGroupId,

      // the properties below are optional
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
    new EmrStudioDeveloperStack(this, 'ClusterTempalte');

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