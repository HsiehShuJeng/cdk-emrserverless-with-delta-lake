export * from './emr-studio';
// export * from './emrserverless';
export * from './workspace-bucket';

// import * as cdk from 'aws-cdk-lib';
// import { EmrStudio } from './emr-studio';
// import { WorkSpaceBucket } from './workspace-bucket';


// function main() {
//   const app = new cdk.App();
//   const stack = new cdk.Stack(app, 'testStack', {
//     stackName: 'emr-studio-stack',
//     env: {
//       region: 'ap-northeast-1',
//       account: '',
//     },
//   });
//   const workspaceBucket = new WorkSpaceBucket(stack, 'EmrStudio');
//   new EmrStudio(stack, 'QuickDemo', {
//     workSpaceBucket: workspaceBucket,
//   });
//   app.synth();
// }

// main();

