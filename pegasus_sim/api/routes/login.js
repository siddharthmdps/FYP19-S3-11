const express = require('express');
const router = express.Router();

const env = require('dotenv').config({
    path: './Config.env'
});
const sha1 = require('sha1');
const mysql = require('mysql');

const myConnection = mysql.createConnection({
    host: process.env.Db_Host,
    user: process.env.Db_User,
    password: process.env.Db_Password,
    database: process.env.Db_Source,
    port: process.env.Db_Port
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /login"
    });
});

router.post('/:username/:password', (req, res, next) => {
    const username = req.params.username;
    const password = sha1(req.params.password);
    myConnection.connect();

    if (username && password) {
		myConnection.query('SELECT FirstName, LastName, Email FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (error) {
                res.status(500).json({
                    message: error,
                    results: results
                });
            }
            if (results && results.length > 0) {
                res.status(200).json({
                   message: "Success! Hi, " + results[0].FirstName + "! Your Email Address is " + results[0].Email
                });    
            }
		});
	} else {
		res.status(400).json({
            message: "Bad Request! Enter username and password!"
        });
    }

    myConnection.end();
});

module.exports = router;