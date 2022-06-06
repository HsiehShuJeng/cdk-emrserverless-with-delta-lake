const { AwsCdkConstructLibrary, DependenciesUpgradeMechanism, NpmAccess, ProjectType } = require('projen');
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
    'delta-lake',
    'emr-serverless',
    'serverless',
    'scott.hsieh',
  ],
  catalog: {
    announce: true,
    twitter: 'fantasticHsieh',
  },
  cdkVersion: '2.27.0',
  constructsVersion: '10.1.25',
  cdkDependenciesAsDeps: true,
  defaultReleaseBranch: 'main',
  name: 'cdk-emrserverless-with-delta-lake',
  repositoryUrl: 'https://github.com/HsiehShuJeng/cdk-emrserverless-quickdemo.git',
  projectType: ProjectType.LIB,
  cdkAssert: true,
  cdkVersionPinning: false, // see https://www.matthewbonig.com/2021/04/06/automating-construct-publishing/
  deps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
    '@types/prettier@2.6.0', // for detail, see https://stackoverflow.com/questions/72222305/aws-cdk-2-0-init-app-fails-to-build-with-prettier-issues-which-is-from-jest-sna
    'esbuild',
    'source-map-support',
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  tsconfig: { include: ['src/**/*.ts', 'src/**.*.py'], compilerOptions: {} },


  npmAccess: NpmAccess.PUBLIC,

  eslint: true,
  projenUpgradeSecret: 'PROJEN_UPGRADE_SECRET',
  projenUpgradeAutoMerge: true,
  depsUpgrade: DependenciesUpgradeMechanism.dependabot({
    autoMerge: true,
    ignoreProjen: false,
  }),

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