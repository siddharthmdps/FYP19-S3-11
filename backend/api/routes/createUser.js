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

router.post('/', (req, res, next) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = sha1(req.body.password);
    const usertype = req.body.usertype;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && firstname && lastname && email && password && usertype) {
            connection.query('INSERT INTO users (username, firstname, lastname, email, password, usertype) VALUES(?, ?, ?, ?, ?, ?)', [username, firstname, lastname, email, password, usertype], function(error, results, fields) {
                if (error) {
                    res.status(500).json({
                        message: error,
                        results: results
                    });
                }
                if (results && results.length > 0) {
                    res.status(200).json({
                    message: "Success! User created for " + results[0].FirstName + "! Your Email Address is " + results[0].Email
                    });    
                }
                else if (!results || results.length == 0) {
                    res.status(200).json({
                        message: "Failed!"
                    });
                }
            });
        } else {
            res.status(400).json({
                message: "Bad Request! Invalid POST request!"
            });
        }

        connection.release();     
    });
});


module.exports = router;