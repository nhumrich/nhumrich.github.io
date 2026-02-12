#!/usr/bin/env bash
set -e
acbuild --debug begin

acbuild --debug set-name python-base2
acbuild --debug label add language python
acbuild --debug dep add quay.aci

acbuild --debug run apk update
acbuild --debug run apk add python3
acbuild --debug run python3 -- --version

acbuild --debug set-exec -- /usr/bin/python3

acbuild --debug write --overwrite python-base2.aci
acbuild end

