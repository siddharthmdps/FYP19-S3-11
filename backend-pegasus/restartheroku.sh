#!/bin/bash


while [ true ]; do
    sleep 10m
    echo "Restarting heroku"
    heroku restart
done



