#!/usr/bin/env bash

echo "Changing project to [$1]"

sed -i '' -e "s|baseline-webpage|$1|g" serverless.yml
echo 'Updated [serverless.yml]'

sed -i '' -e "s|baseline-webpage|$1|g" package.json
echo 'Updated [package.json]'

sed -i '' -e "s|baseline-webpage|$1|g" .github/workflows/deploy.yml
echo 'Updated [.github/workflows/deploy.yml]'

sed -i '' -e "s|baseline-webpage|$1|g" scripts/setup-aws.sh
echo 'Updated [scripts/setup-aws.sh]'

sed -i '' -e "s|baseline-webpage|$1|g" scripts/rename.sh
echo 'Updated [scripts/rename.sh]'

echo "Done"