#!/bin/bash


git restore .
git pull origin main

docker build . -t leeblock_react

docker-compose down
docker-compose up -d

docker image prune -f

docker-compose ps

