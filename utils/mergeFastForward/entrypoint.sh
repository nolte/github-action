#!/bin/sh
set -e
echo "2Fast Foward Merge at $GITHUB_REPOSITORY..."
echo $INPUT_HEADBRANCH
echo $INPUT_BASEBRANCH

if [[ -z "$GITHUB_TOKEN" ]]; then
	echo "Set the GITHUB_TOKEN env variable."
	exit 1
fi

URI=https://api.github.com
API_HEADER="Accept: application/vnd.github.v3+json"
AUTH_HEADER="Authorization: token $GITHUB_TOKEN"

git remote set-url origin https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git

set -o xtrace

# make sure branches are up-to-date
git fetch origin master
git fetch origin develop

git checkout -b develop origin/develop

git merge origin/master --ff --no-commit

git push --force-with-lease
