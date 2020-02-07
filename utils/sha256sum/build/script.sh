#!/bin/sh

# npm i -g @zeit/ncc

npm install
npm run package
chown 1000:1000 ./dist/index.js
