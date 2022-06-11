const { ProjectType } = require('projen');
const projen = require('projen');
const { GithubCredentials } = require('projen/lib/github');

const project = new projen.awscdk.AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  description: 'A construct for the quick demo of EMR Serverless.',
  keywords: [
    'aws',
    'cdk',
    'emr-studio',
    'emr',
    'delta-lake',
    'emr-serverless',
    'serverless',
    'scott.hsieh',
    'emr-notebooks',
    'emr-studio',
    'aws-service-catalog',
  ],
  cdkVersion: '2.27.0',
  constructsVersion: '10.1.35',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  name: 'cdk-emrserverless-with-delta-lake',
  repositoryUrl: 'https://github.com/HsiehShuJeng/cdk-emrserverless-with-delta-lake.git',
  deps: [
    'aws-cdk-lib',
    'constructs@^10.1.35',
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs@^10.1.35',
    // '@types/prettier@2.6.0', // for detail, see https://stackoverflow.com/questions/72222305/aws-cdk-2-0-init-app-fails-to-build-with-prettier-issues-which-is-from-jest-sna
    'esbuild',
    'source-map-support',
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs@^10.1.35',
  ],
  eslint: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['HsiehShuJeng'],
  },
  releaseToNpm: true,
  publishToPypi: {
    distName: 'cdk_emrserverless_with_delta_lake',
    module: 'cdk_emrserverless_with_delta_lake',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'cdk-emrserverless-quickdemo-with-delta-lake',
    javaPackage: 'io.github.hsiehshujeng.cdk.emrserverless.quickdemo',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Cdk',
    packageId: 'Emrserverless.With.Delta.Lake',
  },
  publishToGo: {
    moduleName: 'github.com/HsiehShuJeng/cdk-emrserverless-with-delta-lake-go',
  },
});
const mavenExclusions = ['public.pem', 'private.pem'];
const pythonDemoExclustions = [
  '*.swp',
  'package-lock.json',
  '__pycache__',
  '.pytest_cache',
  '.env',
  '.venv',
  '*.egg-info',
];
const javaDemoExclustions = [
  '.classpath.txt',
  'target/',
  '.classpath',
  '.project',
  '.idea',
  '.settings',
  '.vscode/',
  '*.iml',
];
const commonExclusions = ['cdk.context.json', 'yarn-error.log', 'cdk.out', '.cdk.staging', '.DS_Store'];
project.npmignore.exclude(...commonExclusions);
project.gitignore.exclude(...commonExclusions);
project.npmignore.exclude(...mavenExclusions);
project.gitignore.exclude(...mavenExclusions);
project.npmignore.exclude(...pythonDemoExclustions);
project.gitignore.exclude(...pythonDemoExclustions);
project.npmignore.exclude(...javaDemoExclustions);
project.gitignore.exclude(...javaDemoExclustions);
const githubWorkflowRoot = './.github/workflows';
const releaseWorkflow = project.tryFindFile(
  `${githubWorkflowRoot}/release.yml`,
);
releaseWorkflow.addOverride('jobs.release.env', {
  AWS_REGION: 'ap-northeast-1',
  AWS_ACCESS_KEY_ID: '${{ secrets.AWS_ACCESS_KEY_ID }}',
  AWS_SECRET_ACCESS_KEY: '${{ secrets.AWS_SECRET_ACCESS_KEY }}',
});
releaseWorkflow.addOverride('jobs.release.steps.3', {
  name: 'release',
  run: 'export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query \'Account\' | tr -d \'"\')\nexport CDK_DEFAULT_REGION=${AWS_REGION}\nnpx projen release',
});
const buildWorkFlow = project.github.tryFindWorkflow('build');
buildWorkFlow.file.addOverride('jobs.build.env', {
  AWS_REGION: 'ap-northeast-1',
  AWS_ACCESS_KEY_ID: '${{ secrets.AWS_ACCESS_KEY_ID }}',
  AWS_SECRET_ACCESS_KEY: '${{ secrets.AWS_SECRET_ACCESS_KEY }}',
});
buildWorkFlow.file.addOverride('jobs.build.steps.2', {
  name: 'build',
  run: 'export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query \'Account\' | tr -d \'"\')\nexport CDK_DEFAULT_REGION=${AWS_REGION}\nnpx projen build',
});
project.synth();