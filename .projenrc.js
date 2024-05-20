const { release } = require('os');
const projen = require('projen');

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
    'esbuild',
    'source-map-support',
  ],
  jsiiVersion: '5.4.x',
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
const exclusionLists = [
  commonExclusions,
  mavenExclusions,
  pythonDemoExclustions,
  javaDemoExclustions,
];
excludeFilesFrom(project, exclusionLists);
const requiredAwsEnv = {
  AWS_REGION: 'ap-northeast-1',
  AWS_ACCESS_KEY_ID: '${{ secrets.AWS_ACCESS_KEY_ID }}',
  AWS_SECRET_ACCESS_KEY: '${{ secrets.AWS_SECRET_ACCESS_KEY }}',
};

const releaseOverridingSteps = {
  'jobs.release.steps.4': {
    name: 'release',
    run: 'export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query \'Account\' | tr -d \'"\')\nexport CDK_DEFAULT_REGION=${AWS_REGION}\nnpx projen release',
  },
};

const buildOverridingSteps = {
  'jobs.build.steps.2': {
    name: 'Install dependencies',
    run: 'yarn install --frozen-lockfile',
  },
  'jobs.build.steps.3': {
    name: 'build',
    run: 'export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query \'Account\' | tr -d \'"\')\nexport CDK_DEFAULT_REGION=${AWS_REGION}\nnpx projen build',
  },
};

const approveOverridingSteps = {
  'jobs.approve.steps.0.uses': 'hmarr/auto-approve-action@v3.2.1',
};

setupWorkflow('build', requiredAwsEnv, buildOverridingSteps);
setupWorkflow('release', requiredAwsEnv, releaseOverridingSteps);
setupWorkflow('auto-approve', undefined, approveOverridingSteps);

project.package.addPackageResolutions('@types/jest@^27.4.1');
project.synth();


/**
 * Exclude files from the project's .npmignore and .gitignore.
 *
 * @param {Object} pjObject - The project object to apply the exclusions.
 * @param {Array<Array<string>>} exclusionList - An array of arrays, where each inner array contains a list of file patterns to exclude.
 */
function excludeFilesFrom(pjObject, exclusionList) {
  for (const exclusions of exclusionList) {
    pjObject.npmignore.exclude(...exclusions);
    pjObject.gitignore.exclude(...exclusions);
  }
}

/**
 * Set up a GitHub Actions workflow with the specified environment variables and step overrides.
 *
 * @param {string} workflowName - The name of the workflow to configure.
 * @param {Object} [envOverrides] - An object containing environment variables to override in the workflow.
 * @param {Object} stepsOverrides - An object where each key is a step identifier (e.g., 'jobs.build.steps.2') and each value is an object containing the step configuration to override.
 */
function setupWorkflow(workflowName, envOverrides, stepsOverrides) {
  const workflow = project.github.tryFindWorkflow(workflowName);

  for (const [step, override] of Object.entries(stepsOverrides)) {
    workflow.file.addOverride(step, override);
  }

  if (envOverrides) {
    workflow.file.addOverride(`jobs.${workflowName}.env`, envOverrides);
  }
}
