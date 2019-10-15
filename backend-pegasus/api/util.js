const express = require('express');
const router = express.Router({strict: true});

const env = require('dotenv').config({
    path: './src/Config.env'
});
const sha1 = require('sha1');
const mysql = require('mysql');

const mypool = mysql.createPool({
    host:       process.env.Db_Host,
    user:       process.env.Db_User,
    password:   process.env.Db_Password,
    database:   process.env.Db_Source,
    port:       process.env.Db_Port
});

module.exports = {express, router, env, sha1, mysql, mypool}

// copy this when importing
// const { router, env, sha1, mysql, mypool} = require('../../util')