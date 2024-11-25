#!/bin/bash

# Pull the latest changes from the repository
echo "Pulling latest changes from git..."
docker-compose down
git pull origin main

# Rebuild the Docker image and restart the container
echo "Rebuilding Docker image and restarting container..."
docker build . -t leeblock_react

# docker-compose build --no-cache
docker-compose up -d

# Output the running status
docker-compose ps

echo "Deployment complete!"
