# Baseline Webpage

This is a simple React static site that is deployed to AWS.

## Goals

* Start with a pre-configured static React site
* Easily deploy to AWS with minimal effort
* Support deployment through local, Bitbucket & GitHub
* Be able to deploy without a domain
* Allow a dev and prod environment so work can be validated before releasing to prod

## Lighthouse Desktop Scores

![Lighthouse Performance](./assets/performance-100-brightgreen.svg)
![Lighthouse Accessibility](./assets/accessibility-100-brightgreen.svg)
![Lighthouse Best Practices](./assets/best-practices-100-brightgreen.svg)
![Lighthouse SEO](./assets/SEO-100-brightgreen.svg)

## Local Requirements

* [Yarn version 1](https://classic.yarnpkg.com/en/docs/install) `npm install -g yarn@1`
* Node.js 16 [(we suggest using nvm)](https://github.com/nvm-sh/nvm#install--update-script) 
* [AWS CLI](https://aws.amazon.com/cli) (only required for local deployment)

## Project Setup

1. `yarn`
2. `yarn rename your-project-name` which will update the profile used in all files
3. `yarn aws:profile` which will configure AWS CLI with a new profile and is only required for deploying from local (if you have issues please update aws cli)

## Run Locally

1. `yarn start`

## Deploying

1. `yarn deploy:dev`
2. Find the cloudfront domain that was deployed to by opening the AWS Console, navigating to Cloudformation and opening the outputs for this stack

## Deploy a Change

1. `yarn deploy:dev`
2. Allow some time for the Cloudfront cache invalidation to finish to see changes in browser

## Adding a Domain

* Deploy first
* Set up a Route53 Hosted zone for the desired domain name
* Create a *single* ACM certificate for `*.$DOMAIN_NAME` & `$DOMAIN_NAME` 
* Add an "Alternate domain name" to the Distribution that matches your buckets name
* Edit Route53 and point the domain with an A record to the Distribution

## Remove Stack
To destroy the deployed stack so it is no longer on AWS run `yarn remove:dev`.

## Environment Flag
You can add checks in the code to determine if you are in a deployed or development environment. Development will only be for locally run code. Currently cannot tell the difference between deployed staging and prod.

* `process.env.NODE_ENV === 'production'`
* `process.env.NODE_ENV === 'development'`

## Pipeline Variables
The main and prod branches will trigger the action/pipeline to deploy. The stage is determined by the branch name being "prod" or not.

### GitHub
Create two Actions secrets with the AWS account keys you will deploy with:

* AWS_ACCESS_KEY_ID = xxxx
* AWS_SECRET_ACCESS_KEY = xxxx

### Bitbucket
If you are using the BitBucket pipeline deployment then you will need to set these pipeline environment variables in BitBucket:

* AWS_ACCESS_KEY_ID = xxxx
* AWS_SECRET_ACCESS_KEY = xxxx
* PROFILE = baseline-webpage
* REGION = ap-southeast-2

Optionally these can be used if master and prod are in different accounts or the IAM roles have different access:

* PROD_AWS_ACCOUNT_ACCESS_KEY_ID = xxxx
* PROD_AWS_ACCOUNT_SECRET_ACCESS_KEY = xxxx
* NON_AWS_ACCOUNT_ACCESS_KEY_ID = xxxx
* NON_AWS_ACCOUNT_SECRET_ACCESS_KEY = xxxx

## Baseline

If you would like to learn more about what we do please visit [Devika Baseline](https://devikabaseline.com/)

## License
Baseline Webpage is [MIT licensed](./LICENSE).