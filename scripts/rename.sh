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

RANDOM_VAL=$RANDOM
echo
echo "Setting Random Bucket Id Value to [$RANDOM_VAL]"

sed -i '' -e "s|bsln-bucket-id|$RANDOM_VAL|g" package.json >/dev/null 2>&1
echo 'Updated [package.json]'

sed -i '' -e "s|bsln-bucket-id|$RANDOM_VAL|g" scripts/deploy.sh >/dev/null 2>&1
echo 'Updated [scripts/deploy.sh]'

echo "Done"
