# 

* [medium.com tutorial](https://medium.com/@mattiaperi/create-a-public-helm-chart-repository-with-github-pages-49b180dbb417)

## Usage

```bash

helm repo add nolte https://nolte.github.io/helm-charts/

```

## Add new Charts


```
helm repo index --url https://nolte.github.io/helm-charts/ --merge index.yaml .
```