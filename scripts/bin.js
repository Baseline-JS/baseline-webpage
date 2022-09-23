#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const { exec } = require('child_process');

const projectName = process.argv[2];
console.log(`Project Name [${projectName}]`);

const webpagePath = process.mainModule.path.replace('/scripts', '');

const cwd = process.cwd();

const sourceFile = `${webpagePath}/`;
const destination = `${cwd}/${projectName}`;

(async () => {
  const mkdirPath = `${cwd}/${projectName}`;

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

    console.log('\nRenaming project');
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
      if (file.search('.git') < 0) {
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
