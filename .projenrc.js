const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'user',
  authorAddress: 'user@domain.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'cdk-emrserverless-quickdemo',
  repositoryUrl: 'scott:HsiehShuJeng/cdk-emrserverless-quickdemo.git',

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();