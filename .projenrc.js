const { AwsCdkConstructLibrary, NpmAccess, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  description: 'A construct for the quick demo of EMR Serverless.',
  keywords: [
    'aws',
    'cdk',
    'emr-studio',
    'emr',
    'emr-serverless',
    'serverless',
    'scott.hsieh',
  ],
  catalog: {
    announce: true,
    twitter: 'fantasticHsieh',
  },

  cdkVersion: '2.27.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-emrserverless-quickdemo',
  repositoryUrl: 'https://github.com/HsiehShuJeng/cdk-emrserverless-quickdemo.git',
  projectType: ProjectType.LIB,

  cdkDependencies: [
    'aws-cdk-lib',
  ],
  cdkAssert: true,
  cdkVersionPinning: false, // see https://www.matthewbonig.com/2021/04/06/automating-construct-publishing/
  deps: [
    'constructs@^10.1.25'
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs'
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs',
    'esbuild',
    'source-map-support',
  ],
  tsconfig: { include: ['src/**/*.ts', 'src/**.*.py'], compilerOptions: {} },


  npmAccess: NpmAccess.PUBLIC,

  eslint: true,
  projenUpgradeSecret: 'PROJEN_UPGRADE_SECRET',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['HsiehShuJeng'],
  },
  depsUpgradeAutoMerge: true,

  // publish to npm
  releaseToNpm: true,
  releaseWorkflow: true,
  releaseEveryCommit: true, //will run the release GitHub Action on each push to the defined

  // publish to PyPi
  publishToPypi: {
    distName: 'cdk_emrserverless_quickdemo',
    module: 'cdk_emrserverless_quickdemo',
  },

  // publish to Maven
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'cdk-emrserverless-quickdemo',
    javaPackage: 'io.github.hsiehshujeng.cdk.emrserverless.quickdemo',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },

  // publish to dotnet
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Cdk',
    packageId: 'Emrserverless.Quickdemo',
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
project.synth();