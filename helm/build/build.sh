#!/bin/bash

ACTION_PATH=${GITHUB_WORKSPACE:-.}/$1

BASE_DIR=$(dirname "$ACTION_PATH")

ERRORS=$(helm package "$ACTION_PATH" 2>&1)
if [ $? -eq 2 ]; then
	echo '::error::helm package tool failed to run'
	echo "$ERRORS"
	exit 2
fi