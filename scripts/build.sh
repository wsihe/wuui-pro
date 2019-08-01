#!/bin/bash -ex

BUILD_ENV=${1}

npm install

VERSION=$(grep '"version":' package.json | cut -d\" -f4)
if [[ "x$BUILD_ENV" != "xrelease" ]]
then
    VERSION="${VERSION}-dev"
fi

DATE=`date '+%Y-%m-%d %H:%M:%S'`
HASH=`git rev-parse --short=10 HEAD`

echo "=========================================="
echo "Going to release version: v${VERSION} commit hash: ${HASH}"
echo "=========================================="