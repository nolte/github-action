const core = require('@actions/core');
const glob = require('@actions/glob');
var sha256File = require('sha256-file');

const patterns = ['dist/tar.gz', 'dist/tar.bz', 'dist/tgz']
const globber = glob.create(patterns.join('\n'))
const files = globber.glob()
files.forEach(function (file) {
    hash = sha256File(file);
    console.log(hash + " " + file);
    core.setOutput('sha.' + file, hash);
});
