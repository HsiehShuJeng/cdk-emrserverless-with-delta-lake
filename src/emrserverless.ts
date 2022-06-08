import * as cdk from 'aws-cdk-lib';
import * as emrserverlss from 'aws-cdk-lib/aws-emrserverless';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { WorkSpaceBucket, EmrServerlessBucket } from './buckets';
import { EmrStudio } from './emr-studio';
import { EmrStudioDeveloperStackProps } from './emr-studio-cluster-templates';


export interface EmrServerlessProps {
  /**
     * The subnet IDs for the EMR studio.
     * You can select the subnets from the default VPC in your AWS account.
     */
  readonly subnetIds: Array<string>;
  /**
   * Options for which kind of identity will be associated with the Product of the Porfolio in AWS Service Catalog for EMR cluster templates.
   *
   * You can choose either an IAM group, IAM role, or IAM user. If you leave it empty, an IAM user named `Administrator` with the `AdministratorAccess` power needs to be created first.
   */
  readonly serviceCatalogProps?: EmrStudioDeveloperStackProps;
}

/**
 * Creates an EMR Studio, an EMR cluster template for the studio, and an EMR Serverless application.
 *
 * ```ts
 * new EmrServerless(this, 'EmrServerless', {
 *      subnetIds: ['subnet-aaa11222', 'subnet-bbb44555', 'subnet-ccc66777']
 * });
 * ```
 */
export class EmrServerless extends Construct {
  constructor(scope: Construct, name: string, props: EmrServerlessProps) {
    super(scope, name);
    const workspaceBucket = new WorkSpaceBucket(this, 'EmrStudio');
    const emrServerlessBucket = new EmrServerlessBucket(this, 'EmrServerless');
    new EmrStudio(this, 'QuickDemo', {
      workSpaceBucket: workspaceBucket,
      subnetIds: props.subnetIds,
      serviceCatalogProps: props?.serviceCatalogProps,
    });
    new ServerlessJobRole(this, 'ExecutionJob', { emrServerlessBucket: emrServerlessBucket.bucketEntity });
    const serverlessApplication = new emrserverlss.CfnApplication(this, 'application', {
      name: 'Emr-Serverless-Quick-Launch-Application',
      releaseLabel: 'emr-6.6.0',
      type: 'Spark',
      initialCapacity: [
        {
          key: 'Driver',
          value: {
            workerCount: 1,
            workerConfiguration: {
              cpu: '2 vCPU',
              memory: '4 GB',
              disk: '20 GB',
            },
          },
        },
        {
          key: 'Executor',
          value: {
            workerCount: 2,
            workerConfiguration: {
              cpu: '4 vCPU',
              memory: '8 GB',
              disk: '20 GB',
            },
          },
        },
      ],
      maximumCapacity: {
        cpu: '12 vCPU',
        memory: '60 GB',
        disk: '1024 GB',
      },
      autoStartConfiguration: {
        enabled: true,
      },
      autoStopConfiguration: {
        enabled: true,
        idleTimeoutMinutes: 1,
      },
    });
    new cdk.CfnOutput(this, 'OEmrServerlessApplictionId', { value: serverlessApplication.attrApplicationId, description: 'The ID of the EMR Serverless application' });
  }
}

/**
 * Options for the execution job role of EMR Serverless.
 */
export interface ServerlessJobRoleProps {
  /**
         * The EMR Serverless bucket.
         */
  readonly emrServerlessBucket: s3.Bucket;
}

/**
 * Creates an execution job role for EMR Serverless.
 *
 * For detail, please refer to [Create a job runtime role](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/getting-started.html#gs-runtime-role).
 *
 * ```ts
 * const emrServerlessBucket = new EmrServerlessBucket(this, 'EmrServerlessStorage');
 * const emrServerlessJobRole = new ServerlessJobRole(this, 'EmrServerlessJob', {emrServerlessBucket: emrServerlessBucket});
 * ```
 */
export class ServerlessJobRole extends Construct {
  /**
         * The representative of the execution role for EMR Serverless.
         */
  public readonly entity: iam.Role;
  constructor(scope: Construct, name: string, props: ServerlessJobRoleProps) {
    super(scope, name);
    this.entity = new iam.Role(this, 'JobRole', {
      roleName: 'Emr-Serverless-Job-Role',
      assumedBy: new iam.ServicePrincipal('emr-serverless.amazonaws.com'),
      inlinePolicies: {
        ['emr-serverless-job-policy']: new iam.PolicyDocument({
          assignSids: true,
          statements: [new iam.PolicyStatement({
            sid: 'ReadAccessForEMRSamples',
            effect: iam.Effect.ALLOW,
            actions: ['s3:GetObject', 's3:ListBucket'],
            resources: [`arn:${cdk.Aws.PARTITION}:s3:::*.elasticmapreduce`, 'arn:aws:s3:::*.elasticmapreduce/*'],
          }), new iam.PolicyStatement({
            sid: 'FullAccessToOutputBucket',
            effect: iam.Effect.ALLOW,
            actions: [
              's3:PutObject',
              's3:GetObject',
              's3:ListBucket',
              's3:DeleteObject',
            ],
            resources: [
              `${props.emrServerlessBucket.bucketArn}`,
              `${props.emrServerlessBucket.bucketArn}/*`,
            ],
          }), new iam.PolicyStatement(
            {
              sid: 'GlueCreateAndReadDataCatalog',
              effect: iam.Effect.ALLOW,
              actions: [
                'glue:GetDatabase',
                'glue:CreateDatabase',
                'glue:GetDataBases',
                'glue:CreateTable',
                'glue:GetTable',
                'glue:UpdateTable',
                'glue:DeleteTable',
                'glue:GetTables',
                'glue:GetPartition',
                'glue:GetPartitions',
                'glue:CreatePartition',
                'glue:BatchCreatePartition',
                'glue:GetUserDefinedFunctions',
              ],
              resources: ['*'],
            },
          )],
        }),
      },
    });
    new cdk.CfnOutput(this, 'OEmrServerlessJobRoleArn', { value: this.entity.roleArn, description: 'The ARN of the EMR Serverless job role.' });
  }
}