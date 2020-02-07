
const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function main() {
    await core.group('install bump2version', async () => {
        await exec.exec('pip', ['install', 'bump2version']);
        await exec.exec('pip', ['freeze', '--local']);
    });
}
main().catch((e) => core.setFailed(e.message));
