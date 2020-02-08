const github = require('@actions/github');
const core = require('@actions/core');
const process = require('process');


async function run() {
    console.log("Create Pull Request")
    const repo = core.getInput('repo', { required: false });
    const owner = core.getInput('owner', { required: false });
    console.log("Read Owner: '%s'", owner)
    console.log("Current RepoEnv '%s'", process.env.GITHUB_REPOSITORY)
    if (repo == undefined)
        repo = process.env.GITHUB_REPOSITORY.split('/')[1];

    if (owner == undefined)
        owner = process.env.GITHUB_REPOSITORY.split('/')[0];

    console.log("create/update Pull Request for repo %s from owner %s", repo, owner)
    core.setOutput('shaFilePath', repo);
}

run();
