const core = require('@actions/core');
const github = require('@actions/github');
const { readdirSync } = require('fs')
var sha256File = require('sha256-file');



try {
    // `who-to-greet` input defined in action metadata file
    currentPath = process.env['GITHUB_WORKSPACE']
    console.log(`The event payload: ${currentPath}`);
} catch (error) {
    core.setFailed(error.message);
}
