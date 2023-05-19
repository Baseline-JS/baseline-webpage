#!/usr/bin/env bash
shopt -s failglob
set -eu -o pipefail

# Get Path to root directory assuming this script sits 1 folder above root
PARENT_PATH="$(
  cd "$(dirname "${BASH_SOURCE[0]}")"
  pwd -P
)/.."
cd "$PARENT_PATH"

if [ "${BITBUCKET_BRANCH:-${GITHUB_REF##*/}}" == "prod" ]; then
  npx serverless deploy --verbose --stage prod --region "$AWS_REGION" --aws-profile "$AWS_PROFILE"
else
  npx serverless deploy --verbose --stage staging --region "$AWS_REGION" --aws-profile "$AWS_PROFILE"
fi

echo "Done!"
