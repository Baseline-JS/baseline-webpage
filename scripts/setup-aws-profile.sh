#!/usr/bin/env bash

printf "Setup an AWS profile for [\033[32m$1\033[39m]\n"

echo "Enter the AWS Access Key: "
read AWS_ACCESS_KEY_ID
echo "Enter the AWS Secret Key: "
read -s AWS_SECRET_ACCESS_KEY
echo "AWS Session Token (optional): "
read -s AWS_SESSION_TOKEN

echo "Configuring AWS...."
# If you specify a profile with --profile on an individual command, that overrides the setting specified in the environment variable for only that command.
aws configure set aws_access_key_id "${AWS_ACCESS_KEY_ID:-}" --profile $1
aws configure set aws_secret_access_key "${AWS_SECRET_ACCESS_KEY:-}" --profile $1
aws configure set aws_session_token "${AWS_SESSION_TOKEN:-}" --profile $1
echo "Done"