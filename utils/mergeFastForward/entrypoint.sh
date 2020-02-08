#!/bin/sh
set -e
echo "Fast Foward Merge at $GITHUB_REPOSITORY..."


if [[ -z "$GITHUB_TOKEN" ]]; then
	echo "Set the GITHUB_TOKEN env variable."
	exit 1
fi

URI=https://api.github.com
API_HEADER="Accept: application/vnd.github.v3+json"
AUTH_HEADER="Authorization: token $GITHUB_TOKEN"

if [[ "$baseBranch" != "$headBranch" ]]; then
	echo "PRs from forks are not supported at the moment."
	exit 1
fi

git remote set-url origin https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git

set -o xtrace

# make sure branches are up-to-date
git fetch origin $baseBranch
git fetch origin $headBranch

# merge
git checkout -b $baseBranch origin/$headBranch
git checkout -b $headBranch origin/$headBranch

git checkout $headBranch

git merge $baseBranch --ff --no-commit


git push --force-with-lease
