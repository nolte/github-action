const core = require('@actions/core');
const glob = require('@actions/glob');
var sha256File = require('sha256-file');
currentPath = process.env['GITHUB_WORKSPACE']
const patterns = [currentPath + '/dist/**.tgz']
async function run() {
    console.log("start");
    const globber = await glob.create(patterns.join('\n'))
    const files = await globber.glob()
    files.forEach(function (file) {
        hash = sha256File(file);
        currentFileName = path.basename(file);
        console.log(hash + " " + currentFileName);
        core.setOutput('sha.' + currentFileName, hash);
    });
    console.log("end ");
}
run()
