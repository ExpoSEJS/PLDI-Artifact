#!/bin/bash
source ~/.bash_profile
ulimit -v 104857600
export NODE_PATH=$NODE_PATH:../FeatureTester/libs/
NO_COMPILE=1 EXPOSE_MAX_CONCURRENT=16 node ../FeatureTester/src/main.js ./scan_list ./out
