const github = require('@actions/github');
const core = require('@actions/core');
const process = require('process');

const token = core.getInput('pull_request_token', { required: true });
const octokit = new github.GitHub(token);

async function run() {


    console.log("Create Pull Request")
    head = core.getInput('head', { required: true });
    base = core.getInput('base', { required: true });
    title = core.getInput('title', { required: true });
    body = core.getInput('body', { required: true });

    const response = octokit.pulls.create({
        'title': title,                 // Commit title, generally should be less than 74 characters
        'body': body,                   // Multi-line commit message
        'owner': github.context.repo.owner,                 // Username or Organization with permissions to initialize Pull Request
        'repo': github.context.repo.repo,                   // GitHub repository link or hash eg. `fancy-project`
        'head': head,                   // Where changes are implemented, eg. `your-name:feature-branch`
        'base': base,                   // Branch name where changes should be incorporated, eg. `master`
        'maintainer_can_modify': true,  // Not about to assume that maintainers do not want the option to modify
        'draft': false,                 // If `true` no notifications would be generated
    }).catch((e) => {
        const error_message = ['Failed to initialize Pull Request',
            ...error_message__base,
            ...gha_example,
        ];
        console.error(error_message.join('\n'));
        throw e;
    }).then(function (r) {
        // console.log(JSON.stringify(r['headers']));
        // console.log(JSON.stringify(r['data']));
        console.log(`Rate Limit Remaining -> ${r['headers']['x-ratelimit-remaining']}`);
        console.log(`Rate Limit Reset -> ${r['headers']['x-ratelimit-reset']}`);
        console.log(`Pull Request HTML URL -> ${r['data']['html_url']}`);
        console.log(`Pull Request Number -> ${r['data']['number']}`);
        console.log(`Pull Request State -> ${r['data']['state']}`);

        core.setOutput('pull_request_number', r['data']['number']);
        core.setOutput('pull_request_html_url', r['data']['html_url']);

        milestoneNumber = core.getInput('mileStoneNumber', { required: false });
        if (milestoneNumber != undefined) {
            console.log("Add %s to pull request %s", milestoneNumber, r['data']['number']);
            const issue = octokit.issues.update({
                owner: github.context.repo.owner,
                repo: github.context.repo.repo,
                issue_number: r['data']['number'],
                milestone: milestoneNumber,
            });
        } else {
            console.log("No milestone given");
        }

        return r;
    });

    console.log("create/update Pull Request for repo")
}

run();
