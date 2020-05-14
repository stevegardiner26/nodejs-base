#!/bin/bash

node node_modules/db-migrate/bin/db-migrate db:create u_net
npm run migrate_up_dev
echo "Completed"
