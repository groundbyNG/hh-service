#!/bin/bash

trap 'killall' INT

killall() {
    trap '' INT TERM     # ignore INT and TERM while shutting down
    echo "**** Shutting down... ****"     # added double quotes
    kill -TERM 0         # fixed order, send TERM not INT
    wait
    echo DONE
}

# REPL SET NAME 
# configrs  - config
# shardrs   - shards
#
# PORTS:
# 27000 - config
# 27001 - shard #1
# 27002 - shard #2
# 27003 - mongos

if [[ ! -d ./data ]]
  then
    mkdir -p ./data/instance1
    mkdir -p ./data/instance2
    mkdir -p ./data/config1
    mongod --configsvr --replSet configrs --dbpath data/config1 --port 27000 \
    & sleep 10 && mongosh --port 27000 scripts/initConfig.js \
    & mongod --shardsvr --replSet shardrs --dbpath data/instance1 --port 27001 \
    & mongod --shardsvr --replSet shardrs --dbpath data/instance2 --port 27002 \
    & sleep 10 && mongosh --port 27001 scripts/initShards.js \
    & sleep 20 && mongos --configdb configrs/localhost:27000 --port 27003 \
    & sleep 30 && mongosh --port 27003 scripts/initDB.js
  else
    mongod --configsvr --replSet configrs --dbpath data/config1 --port 27000 \
    & mongod --shardsvr --replSet shardrs --dbpath data/instance1 --port 27001 \
    & mongod --shardsvr --replSet shardrs --dbpath data/instance2 --port 27002 \
    & sleep 20 && mongos --configdb configrs/localhost:27000 --port 27003
fi

cat