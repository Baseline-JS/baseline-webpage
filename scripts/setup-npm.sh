#!/usr/bin/env bash

shopt -s failglob
set -eu -o pipefail

echo "Begin: setup npm"

export NODE_OPTIONS=--max-old-space-size=6144
npm config set user 0
npm config set unsafe-perm true

npm install -g npm@7

echo "Finish: setup npm"
