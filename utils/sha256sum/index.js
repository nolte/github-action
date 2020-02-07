const core = require('@actions/core');
const glob = require('@actions/glob');
const path = require("path");
const write = require('write');

var sha256File = require('sha256-file');

async function run() {
    const subPath = core.getInput('path', { required: true });
    const shaOutFile = core.getInput('shaOutFile', { required: true });
    const filesBaseDirectory = path.join(process.env['GITHUB_WORKSPACE'], subPath);
    const patterns = [path.join(filesBaseDirectory, '/**.tgz')]
    console.log("Calculate SHA256Hash from files %s", filesBaseDirectory);
    const globber = await glob.create(patterns.join('\n'))
    const files = await globber.glob()
    shaOutputFile = path.join(filesBaseDirectory, shaOutFile);
    files.forEach(function (file) {
        hash = sha256File(file);
        currentFileName = path.basename(file);
        console.log("File: %s sha256: %s ", currentFileName, hash);
        core.setOutput('sha.' + currentFileName, hash);
        write.sync(shaOutputFile, hash + " " + currentFileName, { newline: true });
    });
    core.setOutput('shaFilePath', shaOutputFile);
    console.log("SHA256Hash file generated at %s", shaOutputFile);
}
run()
