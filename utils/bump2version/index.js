
const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function main() {
    await core.group('install bump2version', async () => {
        await exec.exec('pip', ['install', 'bump2version']);
        await exec.exec('pip', ['freeze', '--local']);
    });
    const currentVersion = core.getInput('currentVersion');
    const part = core.getInput('part');
    const ARGS = [
        '--current-version', currentVersion, part
    ];
    const ret = await exec.exec('bump2version', ARGS, { ignoreReturnCode: push });
}
main().catch((e) => core.setFailed(e.message));
