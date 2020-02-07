const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');
var sha256File = require('sha256-file');

currentPath = process.env['GITHUB_WORKSPACE']

//passsing directoryPath and callback function
fs.readdir(currentPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});

try {
    // `who-to-greet` input defined in action metadata file

    console.log(`The event payload: ${currentPath}`);
} catch (error) {
    core.setFailed(error.message);
}
