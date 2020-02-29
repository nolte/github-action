


      docker run -it --rm -v "$(pwd)":/usr/local/src/your-app ferrarimarco/github-changelog-generator:1.15.0.pre.beta --user ${CIRCLE_PROJECT_USERNAME} --project ${CIRCLE_PROJECT_REPONAME} --token ${GITHUB_TOKEN} --since-tag $LAST_VERSION --no-unreleased
