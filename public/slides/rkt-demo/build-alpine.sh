#!/bin/bash -e
acbuild --debug begin

acbuild --debug set-name python-base
acbuild --debug label add language python
acbuild --debug dep add quay.io/coreos/alpine-sh

acbuild --debug run apk update
acbuild --debug run apk add python3
acbuild --debug run python3 -- --version

acbuild --debug set-exec -- /usr/bin/python3

acbuild --debug write --overwrite python-base.aci
acbuild end

