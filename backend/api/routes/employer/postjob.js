const express = require('express');
const router = express.Router();

const env = require('dotenv').config({
    path: './src/Config.env'
});

const sha1 = require('sha1');
const mysql = require('mysql');

const mypool = mysql.createPool({
    host: process.env.Db_Host,
    user: process.env.Db_User,
    password: process.env.Db_Password,
    database: process.env.Db_Source,
    port: process.env.Db_Port
});

router.post('/', (req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.body)

    // STORE JSON inside DB
    res.send({
        received: req.body
    })
})

module.exports = router;