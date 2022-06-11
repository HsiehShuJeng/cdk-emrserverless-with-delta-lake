const { ProjectType } = require('projen');
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
  constructsVersion: '10.1.25',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  name: 'cdk-emrserverless-with-delta-lake',
  repositoryUrl: 'https://github.com/HsiehShuJeng/cdk-emrserverless-with-delta-lake.git',
  deps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
    // '@types/prettier@2.6.0', // for detail, see https://stackoverflow.com/questions/72222305/aws-cdk-2-0-init-app-fails-to-build-with-prettier-issues-which-is-from-jest-sna
    'esbuild',
    'source-map-support',
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
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
/**
 * The automatic upgrading workflow failed all the times at the PR step.
 * The following alternation on the main-upgraded workflow is for making the workflow runnable.
 *
 * This link might be connected to the issue I encountered:
 *  https://github.blog/changelog/2021-02-19-github-actions-workflows-triggered-by-dependabot-prs-will-run-with-read-only-permissions/
 */
const customizeUpgradeMainOrNote = true;
if (customizeUpgradeMainOrNote == true) {
  const upgradeMainFlow = project.github.tryFindWorkflow('upgrade-main');
  upgradeMainFlow.file.addOverride('jobs.pr.steps', [{
    id: 'setup',
    run:
      `if ! [[ -z \"$\{\{ secrets.PROJEN_GITUHB_TOKEN \}\}\" ]]; then
    echo "PROJEN_GITHUB_TOKEN exists."
    echo ::set-output has_token=true
  else
    echo "PROJEN_GITHUB_TOKEN doesn't exist."
    echo ::set-output has_token=false
  fi
  jq -nc '{\"state\": \"pending\", \"context\": \"go tests\"}' | \
  curl -sL -X POST -d @- \
     -H "Content-Type: application/json" \
     -H "Authorization: token $\{\{ secrets.GITHUB_TOKEN \}\}" \
     "$\{\{ github.event.pull_request.statuses_url \}\}"`,
    if: 'github.event_name == \'pull_request\'',
  }, {
    name: 'Checkout',
    if: 'github.event_name == \'push\' && steps.setup.outputs.has_token == \'true\'',
    uses: 'actions/checkout@v3',
    with: {
      token: '${{ secrets.PROJEN_GITHUB_TOKEN }}',
      ref: 'main',
    },
  }, {
    name: 'Checkout',
    if: 'github.event_name == \'push\' || steps.setup.outputs.has_token != \'true\'',
    uses: 'actions/checkout@v3',
    with: {
      ref: 'main',
    },
  }, {
    name: 'Download patch',
    uses: 'actions/download-artifact@v3',
    with: {
      name: '.repo.patch',
      path: '${{ runner.temp }}',
    },
  }, {
    name: 'Apply patch',
    run: '[ -s ${{ runner.temp }}/.repo.patch ] && git apply ${{ runner.temp }}/.repo.patch || echo \"Empty patch. Skipping.\"',
  }, {
    name: 'Set git identity',
    run: 'git config user.name \"github-actions\"\ngit config user.email \"github-actions@github.com\"',
  }, {
    name: 'Create Pull Request',
    id: 'create-pr',
    uses: 'peter-evans/create-pull-request@v3',
    with: {
      'token': '${{ secrets.PROJEN_GITHUB_TOKEN }}',
      'commit-message': 'chore(deps): upgrade dependencies\n\nUpgrades project dependencies. See details in [workflow run].\n\n[Workflow Run]: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}\n\n------\n\n*Automatically created by projen via the "upgrade-main" workflow*',
      'branch': 'github-actions/upgrade-main',
      'title': '\"chore(deps): upgrade dependencies\"',
      'labels': 'auto-approve,auto-merge',
      'body': 'Upgrades project dependencies. See details in [workflow run].\n\n[Workflow Run]: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}\n\n------\n\n*Automatically created by projen via the "upgrade-main" workflow*',
      'author': 'github-actions <github-actions@github.com>',
      'committer': 'github-actions <github-actions@github.com>',
      'signoff': true,
    },
  }]);
}

project.synth();