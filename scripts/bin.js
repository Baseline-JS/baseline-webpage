#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const projectName = process.argv[2];
console.log(`Project Name [${projectName}]`);

const webpagePath = process.mainModule.path.replace('/scripts', '');

const cwd = process.cwd();

const sourceFile = `${webpagePath}/`;
const destination = `${cwd}/${projectName}`;

async function checkNpmVersion() {
  const { stdout, stderr } = await exec('npm -v');
  const npmMajorVersion = parseInt(stdout[0]);
  if (npmMajorVersion < 7) {
    console.log("npm >=7 required, try 'npm install -g npm@7' ");
    exit();
  }
}

async function checkNodeVersion() {
  const { stdout, stderr } = await exec('node -v');
  const nodeMajorVersion = stdout.slice(1, stdout.search(/\./));
  if (nodeMajorVersion < 14) {
    console.log("node >=14 required, try 'nvm install 14 && nvm use 14' ");
    exit();
  }
}

(async () => {
  const mkdirPath = `${cwd}/${projectName}`;

  await checkNodeVersion();
  await checkNpmVersion();

  const isExistingFolder = fs.existsSync(mkdirPath);
  if (isExistingFolder) {
    console.log(
      'Folder already exists, use a different project name or install location, exiting.',
    );
    exit();
  } else {
    console.log('\nFolder does not exist, creating...');
    await fs.promises.mkdir(mkdirPath, {
      recursive: true,
    });
    console.log('Done.');
  }

  console.log('\nCopying files...');
  await copyFolderRecursiveSync(sourceFile, destination);
  console.log('Done.');

  console.log('\nInstalling npm packages...');
  exec(`cd ${destination} && npm install`, (err, stdout, stderr) => {
    if (err) {
      console.log(stdout);
      console.error(`exec error: ${err}`);
      return;
    }
    console.log('Done.');

    console.log('\nConfiguring project');
    exec(
      `cd ${destination} && npm run rename ${projectName}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
        console.log('Done.');

        console.log('\nFinished installing, time to run the code...');
        console.log(`$ cd ${projectName}`);
        console.log(`$ npm start`);
        console.log(`\nThanks for using Baseline ❤️\n`);
      },
    );
  });
})();

async function copyFileSync(source, destination) {
  var destinationFile = destination;
  if (fs.existsSync(destination)) {
    if (fs.lstatSync(destination).isDirectory()) {
      destinationFile = path.join(destination, path.basename(source));
    }
  }
  await fs.promises.copyFile(source, destinationFile);
}

async function copyFolderRecursiveSync(source, target, isRoot = true) {
  const files = [];
  const destination = path.join(target, isRoot ? '' : path.basename(source));
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach(async function (file) {
      if (file !== '.git' && file !== 'node_modules') {
        const filePath = path.join(source, file);
        if (fs.lstatSync(filePath).isDirectory()) {
          await copyFolderRecursiveSync(filePath, destination, false);
        } else {
          await copyFileSync(filePath, destination);
        }
      }
    });
  }
}
