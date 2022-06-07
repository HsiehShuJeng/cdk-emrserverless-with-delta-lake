export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query 'Account' | tr -d '\"')
echo ${CDK_DEFAULT_ACCOUNT}