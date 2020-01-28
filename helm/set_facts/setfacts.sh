#!/bin/sh

CHART_YAML=/github/workspace/Chart.yaml

CHARTVERSION=$(yq r ${CHART_YAML} version)
CHARTAPPVERSION=$(yq r ${CHART_YAML} appVersion)
CHARTNAME=$(yq r ${CHART_YAML} name)

echo ::set-env name=CHARTVERSION::"${CHARTVERSION}"
echo ::set-env name=CHARTAPPVERSION::"${CHARTAPPVERSION}"
echo ::set-env name=CHARTNAME::"${CHARTNAME}"

echo ::set-output name=CHARTVERSION::"${CHARTVERSION}"
echo ::set-output name=CHARTAPPVERSION::"${CHARTAPPVERSION}"
echo ::set-output name=CHARTNAME::"${CHARTNAME}"