#!/usr/bin/env bash

shopt -s failglob
set -eu -o pipefail

echo "Begin: Setup AWS"

# Only install AWS CLI if deployed from Bitbucket
if [ "${BITBUCKET_BRANCH:-}" ]; then
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  unzip -qq awscliv2.zip
  ./aws/install -i /usr/local/aws-cli -b /usr/local/bin
fi

echo "Exporting env vars"
export AWS_PROFILE="${AWS_PROFILE:-"baseline-webpage"}"
echo "AWS Profile: [$AWS_PROFILE]"

export AWS_REGION="${AWS_REGION:-"ap-southeast-2"}"
echo "AWS Region: [$AWS_REGION]"

export AWS_HOME="/usr/local/bin/aws"
export PATH="${AWS_HOME:-}:$PATH"

if [ "$AWS_ACCESS_KEY_ID" == "" ] || [ "$AWS_SECRET_ACCESS_KEY" == "" ]; then
  # These can be used if master and prod are in different accounts or the IAM roles have different access
  if [ "$BITBUCKET_BRANCH" == "prod" ]; then
    export AWS_ACCESS_KEY_ID="${PROD_AWS_ACCOUNT_ACCESS_KEY_ID}"
    export AWS_SECRET_ACCESS_KEY="${PROD_AWS_ACCOUNT_SECRET_ACCESS_KEY}"
  else
    export AWS_ACCESS_KEY_ID="${NON_AWS_ACCOUNT_ACCESS_KEY_ID}"
    export AWS_SECRET_ACCESS_KEY="${NON_AWS_ACCOUNT_SECRET_ACCESS_KEY}"
  fi
fi

if [ "$AWS_ACCESS_KEY_ID" == "" ] || [ "$AWS_SECRET_ACCESS_KEY" == "" ]; then
  echo "Warning: No AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY provided."
  echo "You will not be able to deploy some of the AWS components of the environment."
fi

aws --version
aws configure set cli_follow_urlparam false
aws configure set region "${AWS_REGION:-}"

if ! aws configure list-profiles | grep -cq "${AWS_PROFILE}" ; then
  echo "[profile $AWS_PROFILE]" >>~/.aws/config
  echo "region=${AWS_REGION:-}" >>~/.aws/config
else
  echo "Profile exists"
fi

# by setting AWS_PROFILE, the following functions relate to it
aws configure set aws_access_key_id "${AWS_ACCESS_KEY_ID:-}"
aws configure set aws_secret_access_key "${AWS_SECRET_ACCESS_KEY:-}"

echo "Current user:"
aws iam get-user

echo "Finish: Setup AWS"
