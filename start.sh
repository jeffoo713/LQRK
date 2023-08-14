#!/bin/sh

echo "Start liquor service..."

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

echo "Create database if it doesn't exist..."
rails db:create

echo "Running db migration..."
rails db:migrate

echo "Starting Rails server on port 8882..."
rails s -p 8882 -b '0.0.0.0'