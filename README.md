# Baseline Webpage

A simple React static site that is deployed to AWS using serverless.

![serverless](https://camo.githubusercontent.com/dcd998f0b6567f17873812fa9bcc9767d63c056862c19024ccbfe5ec7cefe2eb/687474703a2f2f7075626c69632e7365727665726c6573732e636f6d2f6261646765732f76332e737667)
![node](https://img.shields.io/badge/node.js-16.x-brightgreen?style=plastic)
![platform](https://img.shields.io/badge/platform-AWS-blue?style=plastic)
![pm](https://img.shields.io/badge/pm-npm-yellow?style=plastic)
![framework](https://img.shields.io/badge/framework-React-pink?style=plastic)
![CDN](https://img.shields.io/badge/CDN-Cloudfront-blue?style=plastic)
![license](https://img.shields.io/badge/license-MIT-brightgreen?style=plastic)
![types](https://img.shields.io/badge/types-TypeScript-blue?style=plastic)

## Goals

- Deploy quickly with minimal effort
- Everything you need to start building straight away with production quality
- Support deployment from local, Bitbucket & GitHub
- Deploy and test ideas before you buy that perfect domain name
- Prod, staging and local environments separated from the start

## Features

- ⚡️ Serverless
- 💰 Cost friendly - only pay for what you use
- 🌏 Fast and global CDN with Cloudfront
- ✨ Automatic cache invalidation (1000 free per month - [check pricing](https://aws.amazon.com/cloudfront/pricing/))
- 👉 Redirect HTTP to HTTPS
- 🚀 Ready to use Bitbucket Pipeline and Github Action
- ⌨️ Deploy from your local machine (optional)
- 🤝 HTTP2 support
- 🗜 Gzip and Brotli compression
- 🏗 Modern tools Typescript, React, Serverless Framework
- 🔐 HTTPS/TLS support
- 💻 Team Collaboration - Great for a single developer or a whole team
- 🥞 Perfect for a Jamstack
- 🏎 Fast Deployments - deploy changes quicker!
- ☎️ Minimal configuration required to get started
- 🛣 DNS with Route53
- ✅ Free SSL/TLS with [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/pricing/?nc=sn&loc=3) when using Route53
- 🎬 Test new ideas quickly and single command tear down when you are done, no mess
- 🔑 Support AWS CLI Profiles - no need to use default for everything!

## Lighthouse Scores

Start with a perfect score!

🎉
![Lighthouse Performance](https://img.shields.io/badge/performance-100-brightgreen?style=plastic)
![Lighthouse Accessibility](https://img.shields.io/badge/accessibility-100-brightgreen.svg?style=plastic)
![Lighthouse Best Practices](https://img.shields.io/badge/best%20practices-100-brightgreen.svg?style=plastic)
![Lighthouse SEO](https://img.shields.io/badge/SEO-100-brightgreen.svg?style=plastic)
🎉

## Demo

See Baseline Webpage in action

[<img width="697" alt="Demo video" src="https://github-production-user-asset-6210df.s3.amazonaws.com/72828539/245375638-4a7666ea-6052-420d-a6ad-fc1157bd6d3d.png">](https://youtu.be/9CR89RysSmc)

## Local Requirements

- Node.js 16 [(we suggest using nvm)](https://github.com/nvm-sh/nvm#install--update-script)
- NPM version 7+ [installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [AWS CLI v2](https://aws.amazon.com/cli) (only required for local deployment)

## Project Setup

1. `npx baseline-webpage@latest my-app` where `my-app` is the name of your app
2. `cd my-app` and `npm run aws:profile` which will configure AWS CLI with a new profile and is only required for deploying from local (if you have issues please update aws cli)

## Run Locally

1. `npm start`

## Deploying

1. `npm run deploy:staging`
2. The output from the deploy will show `WebsiteUrl` that the site was deployed to. If you need to find it again you can run `npm run info:staging`

## Deploy a Change

1. `npm run deploy:staging`
2. Allow some time for the Cloudfront cache invalidation to finish to see changes in browser

## Adding a Domain

- Deploy first
- Set up a Route53 Hosted zone for the desired domain name
- Create a _single_ ACM certificate for `*.$DOMAIN_NAME` & `$DOMAIN_NAME`
- Add an "Alternate domain name" to the Distribution that matches your buckets name
- Edit Route53 and point the domain with an A record to the Distribution

## Remove Stack

To destroy the deployed stack so it is no longer on AWS run `npm run remove:staging`.

## Environment Flag

You can add checks in the code to determine if you are in a deployed or development environment. Development will only be for locally run code. Currently cannot tell the difference between deployed staging and prod.

- `process.env.NODE_ENV === 'production'`
- `process.env.NODE_ENV === 'development'`

## Pipeline Variables

The main and prod branches will trigger the action/pipeline to deploy. The stage is determined by the branch name being "prod" or not.

### GitHub

Create two Actions secrets with the AWS account keys you will deploy with:

- AWS_ACCESS_KEY_ID = xxxx
- AWS_SECRET_ACCESS_KEY = xxxx

### Bitbucket

If you are using the BitBucket pipeline deployment then you will need to set these pipeline environment variables in BitBucket:

- AWS_ACCESS_KEY_ID = xxxx
- AWS_SECRET_ACCESS_KEY = xxxx
- AWS_PROFILE = baseline-webpage
- REGION = ap-southeast-2

Optionally these can be used if staging and prod are in different accounts or the IAM roles have different access:

- PROD_AWS_ACCOUNT_ACCESS_KEY_ID = xxxx
- PROD_AWS_ACCOUNT_SECRET_ACCESS_KEY = xxxx
- NON_AWS_ACCOUNT_ACCESS_KEY_ID = xxxx
- NON_AWS_ACCOUNT_SECRET_ACCESS_KEY = xxxx

## Baseline

If you would like to learn more about what we do please visit [Baseline](https://baselinejs.com/)

## License

Baseline Webpage is [MIT licensed](./LICENSE).
