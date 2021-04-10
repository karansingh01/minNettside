#!/bin/bash
echo "Branch name: $1"
/usr/bin/git add .
/usr/bin/git commit -m "$1"
/usr/bin/git push origin master
