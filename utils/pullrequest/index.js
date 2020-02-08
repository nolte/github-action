const github = require('@actions/github');
const core = require('@actions/core');


async function run() {
    console.log("Create Pull Request")
    const repo = core.getInput('repo', { required: true });
    console.log("create/update Pull Request for repo %s", repo)
    core.setOutput('shaFilePath', repo);
}

run();
