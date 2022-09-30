#!/usr/bin/env bash

printf "Setup an AWS profile for [\033[32m%s\033[39m]\n" "$1"

printf "Enter the AWS Access Key: "
read -r AWS_ACCESS_KEY_ID
printf "Enter the AWS Secret Key: "
read -sr AWS_SECRET_ACCESS_KEY
printf "\nAWS Session Token (optional): "
read -sr AWS_SESSION_TOKEN
printf "\n"

echo "Configuring AWS...."
# If you specify a profile with --profile on an individual command, that overrides the setting specified in the environment variable for only that command.
aws configure set aws_access_key_id "${AWS_ACCESS_KEY_ID:-}" --profile "$1"
aws configure set aws_secret_access_key "${AWS_SECRET_ACCESS_KEY:-}" --profile "$1"
if [ "$AWS_SESSION_TOKEN" ]; then
    echo "Setting session token"
    aws configure set aws_session_token "${AWS_SESSION_TOKEN:-}" --profile "$1"
else
    EXISTING_SESSION=$(aws configure get aws_session_token --profile "$1")
    if [ "$EXISTING_SESSION" ]; then
        echo "Existing session token found, removing"
        aws configure set aws_session_token "" --profile "$1"
    else
        echo "No existing session token... ignoring"
    fi
fi

echo "Testing AWS Keys..."
IAM_RESULT=$(aws sts get-caller-identity --query "Account" --output text --profile "$1")
if [ "$IAM_RESULT" ]; then
    echo "Credentials work!"
else
    echo "AWS Keys did not work!"
fi

echo "Done"
