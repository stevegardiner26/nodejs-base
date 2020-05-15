#!/bin/bash
node node_modules/db-migrate/bin/db-migrate create seed --config ./config/db.json -e dev
