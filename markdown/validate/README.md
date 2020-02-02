# Validate Markdown

GithubAction for [remarkjs/remark-validate-links](https://github.com/remarkjs/remark-validate-links)

```bash
  docker build -t nolte/nolte/remark-validate-links .
```

**Local Run**
```bash
docker run --rm -v $(pwd):/src:ro nolte/remark-validate-links


docs/IAM_GROUP.md: no issues found
docs/IAM_GROUP_MEMBERSHIP.md: no issues found
docs/IAM_GROUP_POLICY.md: no issues found
docs/IAM_GROUP_POLICY_ATTACHMENT.md: no issues found
docs/IAM_GROUP_USER_ATTACHMENT.md: no issues found
docs/IAM_POLICY.md: no issues found
docs/IAM_USER.md: no issues found
docs/IAM_USER_POLICY_ATTACHMENT.md: no issues found
docs/S3_BUCKET.md: no issues found
docs/github/CODE_OF_CONDUCT.md
      8:42-8:90  warning  Link to unknown file: `amanda@amandasouza.app`  missing-file  remark-validate-links
  49:141-49:189  warning  Link to unknown file: `amanda@amandasouza.app`  missing-file  remark-validate-links

docs/github/CONTRIBUTING.md: no issues found
docs/github/ISSUE_TEMPLATE.md: no issues found
docs/github/PULL_REQUEST_TEMPLATE.md: no issues found

```
