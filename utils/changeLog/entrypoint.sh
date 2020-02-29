
#!/bin/sh -l
ghtoken=$1
ghProject=$2
sinceTag=$3
echo "Create Changelog from $ghProject since $sinceTag"

github_changelog_generator \
    --token ${ghtoken} \
    --project ${ghProject} \
    --since-tag ${sinceTag} \
    --no-unreleased
