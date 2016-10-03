#!/usr/bin/env bash

# Make sure vi are in the root directory
cd $(dirname $0) && cd ../

read -p "Symlink your local Git hooks to the ones in this repo [y/n]? " -n 1 -r
echo # New line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  rm -rf .git/hooks
  ln -s ../git-hooks .git/hooks
  echo "** Done! **"
fi