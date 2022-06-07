import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { WorkSpaceBucket } from '../src/buckets';

describe('Test WorkSpaceBucket', () => {
  test('WorkSpaceBucket', () => {
    const app = new cdk.App();
    const dummyStack = new cdk.Stack(app, 'DummyStack', {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
    });
    new WorkSpaceBucket(dummyStack, 'TestBucket');
    const template = Template.fromStack(dummyStack);
    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.hasResource('AWS::S3::Bucket', Match.objectLike({
      Properties: {
        BucketName: {
          'Fn::Join': [
            '',
            [
              'emr-studio-workspace-bucket-',
              {
                Ref: 'AWS::AccountId',
              },
            ],
          ],
        },
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: true,
          BlockPublicPolicy: true,
          IgnorePublicAcls: true,
          RestrictPublicBuckets: true,
        },
        Tags: [
          {
            Key: 'aws-cdk:auto-delete-objects',
            Value: 'true',
          },
        ],
      },
      UpdateReplacePolicy: 'Delete',
      DeletionPolicy: 'Delete',
    }));
    template.hasOutput('TestBucketOWorkspaceBucket8081224F', Match.objectEquals({
      Description: 'The ARN of the workspace bucket.',
      Value: {
        'Fn::GetAtt': [
          'TestBucketWorkSpaceBucketB99BA0E1',
          'Arn',
        ],
      },
    }));
  });
});
