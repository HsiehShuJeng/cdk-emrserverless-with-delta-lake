import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface WorkSpaceBucketProps {
  /**
             * The bucket name for the workspace of an EMR Studio.
             *
             * @default - 'emr-studio-workspace-bucket-AWS::AccountId'
             */
  readonly bucketName?: string;
  /**
             * Policy to apply when the bucket is removed from this stack.
             *
             * @default - The bucket will be deleted.
             */
  readonly removalPolicy?: cdk.RemovalPolicy;
}

export class WorkSpaceBucket extends Construct {
  public readonly bucketEntity: s3.Bucket;
  constructor(scope: Construct, name: string, props?: WorkSpaceBucketProps) {
    super(scope, name);
    const removalPolicy = (props !== undefined) ? props.removalPolicy : cdk.RemovalPolicy.DESTROY;
    const bucketName = (props !== undefined) ? props.bucketName : `emr-studio-workspace-bucket-${cdk.Aws.ACCOUNT_ID}`;
    this.bucketEntity = new s3.Bucket(this, 'WorkSpaceBucket', {
      bucketName: bucketName,
      removalPolicy: removalPolicy,
      autoDeleteObjects: (removalPolicy !== cdk.RemovalPolicy.RETAIN) ? true : false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });
    new cdk.CfnOutput(this, 'OWorkspaceBucket', { value: this.bucketEntity.bucketArn, description: 'The ARN of the workspace bucket.' });
  }
}