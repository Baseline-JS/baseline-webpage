#!/usr/bin/env bash

echo "Changing project to [$1]"

sed -i '' -e "s|baseline-webpage|$1|g" serverless.yml >/dev/null 2>&1
echo 'Updated [serverless.yml]'

sed -i '' -e "s|baseline-webpage|$1|g" package.json >/dev/null 2>&1
echo 'Updated [package.json]'

sed -i '' -e "s|baseline-webpage|$1|g" .github/workflows/deploy.yml >/dev/null 2>&1
echo 'Updated [.github/workflows/deploy.yml]'

sed -i '' -e "s|baseline-webpage|$1|g" scripts/setup-aws.sh >/dev/null 2>&1
echo 'Updated [scripts/setup-aws.sh]'

sed -i '' -e "s|baseline-webpage|$1|g" scripts/rename.sh >/dev/null 2>&1
echo 'Updated [scripts/rename.sh]'

echo "Done"
