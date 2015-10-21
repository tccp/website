#!/bin/bash

timestamp=$(date +%Y%m%d%H%M)
echo "Attemping to upload tcc/_site directory to unixs at public/deploys/build${timestamp}..."
scp -r tcc/_site/ tcp@unixs.cssd.pitt.edu:public/deploys/build${timestamp}
echo "Attemping to link the new build..."
ssh tcp@unixs.cssd.pitt.edu "rm -f /afs/pitt.edu/home/t/c/tcp/public/html && ln -s /afs/pitt.edu/home/t/c/tcp/public/deploys/build${timestamp} /afs/pitt.edu/home/t/c/tcp/public/html"

