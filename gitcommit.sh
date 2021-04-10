#!/bin/bash
echo "Commit message: $1"
echo "Branch name: $2"
/usr/bin/git add .
/usr/bin/git commit -m "$1"
/usr/bin/git push origin $2
