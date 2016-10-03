#!/usr/bin/env bash

# Make sure vi are in the root directory
cd $(dirname $0) && cd ../

node_modules/webpack-dev-server/bin/webpack-dev-server.js -d
