#!/bin/sh

echo 'Dropping an existing database...'
rails db:drop

echo 'Creating a new database...'
rails db:create

echo 'Running migration in the new database...'
rails db:migrate

echo 'Start data seeding...'
rails db:seed

echo 'Data seeding completed!'