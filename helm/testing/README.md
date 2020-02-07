# Helm Chart Testing


Local Usage:

```bash
docker run \
    -v $(pwd):/charts/chart \
    --rm quay.io/helmpack/chart-testing \
    ct lint --all "--chart-dirs=/charts" --debug --validate-maintainers=false
```
