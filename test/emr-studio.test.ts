import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { WorkSpaceBucket } from '../src/buckets';
import { EmrStudio } from '../src/emr-studio';

test('Test EmrStudio', () => {
  const app = new App();
  const testStack = new Stack(app, 'DummyStackAh', {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
  });
  const workSpaceBucket = new WorkSpaceBucket(testStack, 'WorkSpaceBucket');
  new EmrStudio(testStack, 'EmrStudio', {
    workSpaceBucket: workSpaceBucket,
    subnetIds: ['subnet1', 'subnet2', 'subnet3'],
  });
  const template = Template.fromStack(testStack);
  template.resourceCountIs('AWS::EC2::SecurityGroup', 2);
  template.hasResourceProperties('AWS::EC2::SecurityGroup', Match.objectEquals({
    GroupDescription: 'Workspace SG for EMR Studio',
    GroupName: {
      'Fn::Join': [
        '',
        [
          'DefaultWorkspaceSecurityGroupGit-',
          {
            Ref: 'AWS::AccountId',
          },
        ],
      ],
    },
    Tags: [
      {
        Key: 'for-use-with-amazon-emr-managed-policies',
        Value: 'true',
      },
      {
        Key: 'Name',
        Value: {
          'Fn::Join': [
            '',
            [
              'DefaultWorkspaceSecurityGroupGit-',
              {
                Ref: 'AWS::AccountId',
              },
            ],
          ],
        },
      },
    ],
    VpcId: 'vpc-12345',
  }));
  template.hasResourceProperties('AWS::EC2::SecurityGroup', Match.objectEquals({
    GroupDescription: 'Engine SG for EMR Studio',
    GroupName: {
      'Fn::Join': [
        '',
        [
          'DefaultEngineSecurityGroup-',
          {
            Ref: 'AWS::AccountId',
          },
        ],
      ],
    },
    Tags: [
      {
        Key: 'for-use-with-amazon-emr-managed-policies',
        Value: 'true',
      },
      {
        Key: 'Name',
        Value: {
          'Fn::Join': [
            '',
            [
              'DefaultEngineSecurityGroup-',
              {
                Ref: 'AWS::AccountId',
              },
            ],
          ],
        },
      },
    ],
    VpcId: 'vpc-12345',
  }));
});
