import * as cdk from 'aws-cdk-lib';
import * as emr from 'aws-cdk-lib/aws-emr';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as servicecatalog from 'aws-cdk-lib/aws-servicecatalog';
import { Construct } from 'constructs';
/**
 * Interface for Service Catalog of EMR cluster templates.
 */
export interface EmrStudioDeveloperStackProps {
  /**
                                                   * The provider name in a Service Catalog for EMR cluster templates.
                                                   *
                                                   * @default - 'scott.hsieh'
                                                   */
  readonly providerName?: string;
  /**
   * an IAM group you wish to associate with the Portfolio for EMR cluster template.
   */
  readonly group?: iam.IGroup;
  /**
   * an IAM role you wish to associate with the Portfolio for EMR cluster template.
   */
  readonly role?: iam.IRole;
  /**
   * an IAM user you wish to associate with the Portfolio for EMR cluster template.
   */
  readonly user?: iam.IUser;
}

/**
 * Creates a Service Catalog for EMR cluster templates.
 *
 * For detail, please refer to [Create AWS CloudFormation templates for Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-cluster-templates.html).
 *
 * ```ts
 * const emrClusterTemplatePortfolio = new EmrStudioDeveloperStack(this, 'ClusterTempalte');
 * ```
 */
export class EmrStudioDeveloperStack extends Construct {
  /**
                                                   * The representative of the service catalog for EMR cluster tempaltes.
                                                   */
  public readonly portfolio: servicecatalog.Portfolio;
  /**
                                                   * The representative of the product for demo purpose.
                                                   */
  public readonly product: servicecatalog.Product;
  constructor(scope: Construct, name: string, props?: EmrStudioDeveloperStackProps) {
    super(scope, name);
    if (props?.providerName === undefined) {
      console.log('`providerName` for the `EmrStudioDeveloperStack` construct is not defined, therefore, the default value \'scott.hsieh\' will be set.');
    }
    if (props?.user === undefined) {
      console.log('`user` for the `EmrStudioDeveloperStack` construct is not defined, therefore, the default value, an IAM user named \'Administrator\' with the `AdministratorAccess` power, will be set.');
    }
    if (props?.role === undefined) {
      console.log('`role` for the `EmrStudioDeveloperStack` construct is not defined, therefore, the default value, an IAM user named \'Administrator\' with the `AdministratorAccess` power, will be set.');
    }
    if (props?.group === undefined) {
      console.log('`group` for the `EmrStudioDeveloperStack` construct is not defined, therefore, the default value, an IAM user named \'Administrator\' with the `AdministratorAccess` power, will be set.');
    }
    const providerName: string = (props?.providerName !== undefined) ? props.providerName : 'scott.hsieh';

    this.portfolio = new servicecatalog.Portfolio(this, 'Portfolio', {
      displayName: 'EMR Studio Developers Stack',
      providerName: providerName,
      description: 'A stack with a variety of pre-defined EMR clusters for developers.',
      messageLanguage: servicecatalog.MessageLanguage.EN,
    });
    this.product = new servicecatalog.CloudFormationProduct(this, 'MyFirstProduct', {
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
    this.portfolio.addProduct(this.product);
    if (props !== undefined) {
      if (props!.group !== undefined) {
        this.portfolio.giveAccessToGroup(props!.group);
      }
      if (props!.role !== undefined) {
        this.portfolio.giveAccessToRole(props!.role);
      }
      if (props!.user !== undefined) {
        this.portfolio.giveAccessToUser(props!.user);
      }
    } else {
      this.portfolio.giveAccessToUser(iam.User.fromUserName(this, 'AdminUser', 'Administrator'));
    }
    new cdk.CfnOutput(this, 'OEmrStudioPortfolioArn', { value: this.portfolio.portfolioArn, description: 'The ARN of the portfolio.' });
    new cdk.CfnOutput(this, 'OEmrStudioPortfolioProductArn', { value: this.product.productArn, description: 'The ARN of the product.' });
  }
}

/**
 * Creates a CloudFormation template which will be a Product under a Portfolio of AWS Service Catalog. This is for creating an EMR cluster via cluster template in the EMR Studio, created by the `EmrServerless` construct, on the AWS Console.
 *
 * And you don't have control via the `EmrServerless` construct by now. The documentation is for you to grasp the architecture of the `EmrServerless` more easily.
 *
 * For detail, please refer to [Create AWS CloudFormation templates for Amazon EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-cluster-templates.html).
 *
 * ```ts
 * const product = new servicecatalog.CloudFormationProduct(this, 'MyFirstProduct', {
 *    productName: 'EMR_6.6.0',
 *    owner: 'scott.hsieh',
 *    description: 'EMR cluster with 6.6.0 version',
 *    productVersions: [
 *      {
 *        productVersionName: 'v1',
 *        validateTemplate: true,
 *        cloudFormationTemplate: servicecatalog.CloudFormationTemplate.fromProductStack(new EmrClusterTemplateStack(this, 'EmrStudio')),
 *      },
 * ],
 * });
 * ```
 */
export class EmrClusterTemplateStack extends servicecatalog.ProductStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const bidPrice = new cdk.CfnParameter(this, 'BidPrice', {
      type: 'String',
      default: '0.186',
    });
    const clusterName = new cdk.CfnParameter(this, 'ClusterName', {
      type: 'String',
      default: 'Example_Two_Node_Cluster',
    });
    const ec2SubnetId = new cdk.CfnParameter(this, 'Ec2SubnetId', {
      type: 'String',
      default: 'subnet-3571a36c',
      description: 'Buddy, the default value is one of the subnets in scott.hsieh\'s account, you gotta type your own.',
    });
    const emrRelease = new cdk.CfnParameter(this, 'EmrRelease', {
      type: 'String',
      default: 'emr-7.1.0',
      allowedValues: [
        'emr-7.1.0',
        'emr-7.0.0',
      ],
    });
    const masterInstanceType = new cdk.CfnParameter(this, 'MasterInstanceType', {
      type: 'String',
      default: 'c7g.xlarge',
      allowedValues: [
        'm7g.xlarge',
        'm7g.2xlarge',
        'c7g.xlarge',
        'c7g.2xlarge',
      ],
    });
    const coreInstanceType = new cdk.CfnParameter(this, 'CoreInstanceType', {
      type: 'String',
      default: 'c7g.xlarge',
      allowedValues: [
        'm7g.xlarge',
        'm7g.2xlarge',
        'c7g.xlarge',
        'c7g.2xlarge',
      ],
    });
    const clusterTemplate = new emr.CfnCluster(this, 'TemplateCluster', {
      name: clusterName.valueAsString,
      applications: [
        { name: 'Hadoop' },
        { name: 'Spark' },
        { name: 'Livy' },
        { name: 'JupyterHub' },
        { name: 'JupyterEnterpriseGateway' },
        { name: 'Hive' },
      ],
      ebsRootVolumeSize: 10,
      jobFlowRole: 'EMR_EC2_DefaultRole',
      serviceRole: 'EMR_DefaultRole',
      releaseLabel: emrRelease.valueAsString,
      visibleToAllUsers: true,
      configurations: [{
        classification: 'hive-site',
        configurationProperties: {
          'hive.metastore.client.factory.class': 'com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory',
        },
      },
      {
        classification: 'spark-hive-site',
        configurationProperties: {
          'hive.metastore.client.factory.class': 'com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory',
        },
      }],
      logUri: `s3n://aws-logs-${cdk.Aws.ACCOUNT_ID}-${cdk.Aws.REGION}/elasticmapreduce/`,
      instances: {
        terminationProtected: false,
        ec2SubnetId: ec2SubnetId.valueAsString,
        masterInstanceGroup: {
          market: 'ON_DEMAND',
          instanceCount: 1,
          instanceType: masterInstanceType.valueAsString,
        },
        coreInstanceGroup: {
          instanceCount: 1,
          instanceType: coreInstanceType.valueAsString,
          bidPrice: bidPrice.valueAsString,
          market: 'SPOT',
          name: 'Core',
        },
      },
    });
    new cdk.CfnOutput(this, 'ClusterId', { value: clusterTemplate.ref, description: 'The ID of the EMR Cluster' });
  }
}