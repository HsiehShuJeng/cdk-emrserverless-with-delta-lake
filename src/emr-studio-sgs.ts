import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

/**
 * Interface for engine security group of EMR Studio
 */
export interface EmrStudioEngineSecurityGroupProps {
  /**
                   * The VPC in which to create the engine security group for EMR Studio.
                   *
                   * @default - default VPC in an AWS account.
                   */
  readonly vpc: ec2.IVpc;
  /**
           * The workspace security group for EMR Studio.
           *
           * @default - a workspace security group created by `EmrStudioWorkspaceSecurityGroup`.
           */
  readonly workspaceSg: ec2.SecurityGroup;
}
/**
 * Created an engine security group for EMR notebooks.
 *
 * For detail, plrease refer to [Engine security group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-security-groups.html#emr-studio-security-group-instructions).
 *
 * ```ts
 * const defaultVpc = ec2.Vpc.fromLookup(this, 'DefaultVpc', { isDefault: true });
 * const emrStudioWorkspaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'EmrNotebok', {
 *      vpc: defaultVpc,
 * });
 * const emrStudioEngineSecurityGroup = new EmrStudioEngineSecurityGroup(this, 'EmrNotebok', {
 *      vpc: defaultVpc,
 *      workspaceSg: emrStudioWorkspaceSecurityGroup.entity
 * });
 * ```
 */
export class EmrStudioEngineSecurityGroup extends Construct {
  /**
                   * The representative of the security group as the EMR Studio engine security group.
                   */
  public readonly entity: ec2.SecurityGroup;
  constructor(scope: Construct, name: string, props: EmrStudioEngineSecurityGroupProps) {
    super(scope, name);
    this.entity = new ec2.SecurityGroup(this, 'SecurityGroup', {
      securityGroupName: `DefaultEngineSecurityGroup-${cdk.Aws.ACCOUNT_ID}`,
      vpc: props.vpc,
      allowAllOutbound: false,
      description: 'Engine SG for EMR Studio',
    });
    this.entity.addIngressRule(ec2.Peer.securityGroupId(props.workspaceSg.securityGroupId), ec2.Port.tcp(18888), 'Allow traffic from any resources in the Workspace security group for EMR Studio.');
    cdk.Tags.of(this.entity).add('Name', `DefaultEngineSecurityGroup-${cdk.Aws.ACCOUNT_ID}`);
    new cdk.CfnOutput(this, 'OEmrEngineSecurityGroupId', { value: this.entity.securityGroupId, description: 'The sg ID of the engine security group for EMR Studio' });
  }
  public addIngress4WorkSpace = (workspaceSg: ec2.SecurityGroup) => {
    this.entity.addIngressRule(ec2.Peer.securityGroupId(workspaceSg.securityGroupId), ec2.Port.tcp(18888), 'Allow traffic from any resources in the Workspace security group for EMR Studio.');
  };
}

/**
 * Interface for workspace security group of EMR Studio
 */
export interface EmrStudioWorkspaceSecurityGroupProps {
  /**
                   * The VPC in which to create workspace security group for EMR Studio.
                   *
                   * @default - default VPC in an AWS account.
                   */
  readonly vpc: ec2.IVpc;
}

/**
 * Created a workspace security group for EMR Studio.
 *
 * For detail, plrease refer to [Workspace security group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-security-groups.html#emr-studio-security-group-instructions).
 *
 * ```ts
 * const defaultVpc = ec2.Vpc.fromLookup(this, 'DefaultVpc', { isDefault: true });
 * const emrStudioWorkspaceSecurityGroup = new EmrStudioWorkspaceSecurityGroup(this, 'EmrNotebok', {
 *      vpc: defaultVpc,
 * });
 * ```
 */
export class EmrStudioWorkspaceSecurityGroup extends Construct {
  /**
                   * The representative of the security group as the EMR Studio workspace security group.
                   */
  public readonly entity: ec2.SecurityGroup;
  constructor(scope: Construct, name: string, props: EmrStudioWorkspaceSecurityGroupProps) {
    super(scope, name);
    this.entity = new ec2.SecurityGroup(this, 'SecurityGroup', {
      securityGroupName: `DefaultWorkspaceSecurityGroupGit-${cdk.Aws.ACCOUNT_ID}`,
      vpc: props.vpc,
      allowAllOutbound: false,
      description: 'Workspace SG for EMR Studio',
    });
    cdk.Tags.of(this.entity).add('Name', `DefaultWorkspaceSecurityGroupGit-${cdk.Aws.ACCOUNT_ID}`);
    this.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(18888), 'Allow traffic to any resources in the Engine security group for EMR Studio.', true);
    this.entity.addEgressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow traffic to the internet to link publicly hosted Git repositories to Workspaces.');
    new cdk.CfnOutput(this, 'OEmrEngineSecurityGroupId', { value: this.entity.securityGroupId, description: 'The SG ID of the workspace security group for EMR Studio' });
  }
}