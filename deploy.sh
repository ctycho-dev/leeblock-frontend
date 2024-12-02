#!/bin/bash


git restore .
git pull origin main

docker build . -t leeblock_react

docker-compose down
docker-compose up -d

docker-compose ps

