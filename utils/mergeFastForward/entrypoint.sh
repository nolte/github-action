#!/bin/sh
set -e
echo "2Fast Foward Merge at $GITHUB_REPOSITORY..."
echo $INPUT_HEADBRANCH
echo $INPUT_BASEBRANCH

if [[ -z "$GITHUB_TOKEN" ]]; then
	echo "Set the GITHUB_TOKEN env variable."
	exit 1
fi

set -o xtrace

git config --global user.email "action@github.com"
git config --global user.name "GitHub Action"

git clone https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git /tmp/repo

cd /tmp/repo

# make sure branches are up-to-date
git checkout develop
#git pull origin master --allow-unrelated-histories
#
#git checkout -b develop origin/develop
#git pull origin develop --allow-unrelated-histories
#
#git rebase origin/master

git rebase origin/master
#git merge origin/master --ff --no-commit
#git commit -m "reintegrate master"
git push origin develop
