#!/bin/bash


while [ true ]; do
    sleep 30s
    echo "Restarting heroku"
    heroku restart
done



