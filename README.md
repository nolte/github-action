# Collection of Reuseable Github Actions

This Repository represent a set of different [GitHub Actions](https://help.github.com/en/actions). 

## Usage

Create a [Github Workflow](https://guides.github.com/introduction/flow/) File, for handle the different build steps.

```yaml
jobs:
  helmbuild:
    ...
    steps:
      ...
      - name: Run package
        uses: nolte/github-action/helm/build@master
      ...
    ...
  ...
```


# Links

* [persisting-workflow-data-using-artifacts](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)
