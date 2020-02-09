
const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function main() {
    console.log("Load Github Release informations")
    const subPath = core.getInput('repo', { required: true });
    const release_id = core.getInput('releaseId', { required: true });

    const owner = subPath.split("/")[0]
    const repo = subPath.split("/")[1]
    github.repos.getRelease({
        owner,
        repo,
        release_id
    }).then(({ data }) => {
        console.log(data)
        core.setOutput('url', data.url);
        core.setOutput('title', data.title);
        core.setOutput('body', data.body);
    });

}
main().catch((e) => core.setFailed(e.message));
