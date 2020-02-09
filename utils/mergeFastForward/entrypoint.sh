#!/bin/sh
set -e
echo "Fast Foward Merge at $GITHUB_REPOSITORY..."
echo $INPUT_HEADBRANCH

if [[ -z "$GITHUB_TOKEN" ]]; then
	echo "Set the GITHUB_TOKEN env variable."
	exit 1
fi

URI=https://api.github.com
API_HEADER="Accept: application/vnd.github.v3+json"
AUTH_HEADER="Authorization: token $GITHUB_TOKEN"

if [[ "$INPUT_BASEBRANCH" != "$INPUT_HEADBRANCH" ]]; then
	echo "PRs from forks are not supported at the moment."
	exit 1
fi

git remote set-url origin https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git

set -o xtrace

# make sure branches are up-to-date
git fetch origin $INPUT_BASEBRANCH
git fetch origin $INPUT_HEADBRANCH

# merge
git checkout -b $INPUT_BASEBRANCH origin/$INPUT_BASEBRANCH
git checkout -b $INPUT_HEADBRANCH origin/$INPUT_HEADBRANCH

git checkout $INPUT_HEADBRANCH

git merge $INPUT_BASEBRANCH --ff --no-commit


git push --force-with-lease
