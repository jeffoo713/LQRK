#!/bin/bash

set -e

# Use the "postgres" service account to execute command
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE user_service_development;
  CREATE DATABASE user_service_test;
  CREATE DATABASE liquor_service_development;
  CREATE DATABASE liquor_service_test;
EOSQL
