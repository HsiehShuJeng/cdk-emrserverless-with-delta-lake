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
    providerName?: string;
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
        if (props === undefined) {
            console.log('`providerName` is not defined, therefore, the default value \'scott.hsieh\' will be set.');
        }
        const providerName: string = (props !== undefined) ? props.providerName! : 'scott.hsieh';

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
        this.portfolio.giveAccessToUser(iam.User.fromUserName(this, 'AdminUser', 'Administrator'));
        new cdk.CfnOutput(this, 'OEmrStudioPortfolioArn', { value: this.portfolio.portfolioArn, description: 'The ARN of the portfolio.' });
        new cdk.CfnOutput(this, 'OEmrStudioPortfolioProductArn', { value: this.product.productArn, description: 'The ARN of the product.' });
    }
}


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
        });
        const emrRelease = new cdk.CfnParameter(this, 'EmrRelease', {
            type: 'String',
            default: 'emr-6.6.0',
            allowedValues: ['emr-6.6.0',
                'emr-6.5.0',
                'emr-6.4.0',
                'emr-6.3.1',
                'emr-6.2.1',
                'emr-6.2.0'],
        });
        const masterInstanceType = new cdk.CfnParameter(this, 'MasterInstanceType', {
            type: 'String',
            default: 'c5.xlarge',
            allowedValues: [
                'm5.xlarge',
                'm5.2xlarge',
                'c5.xlarge',
                'c5.2xlage',
            ],
        });
        const coreInstanceType = new cdk.CfnParameter(this, 'CoreInstanceType', {
            type: 'String',
            default: 'c5.xlarge',
            allowedValues: [
                'm5.xlarge',
                'm5.2xlarge',
                'c5.xlarge',
                'c5.2xlage',
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