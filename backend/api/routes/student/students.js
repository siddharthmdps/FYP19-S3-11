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

router.get('/',(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        connection.query('SELECT * FROM students', function(error, rows, fields) {
            if (error) {
                res.status(500).json({
                    message: error
                });
            }
            if (rows && rows.length > 0) {
                res.send(rows);   
            }
            else if (!rows || rows.length == 0) {
                res.status(200).json({
                    message: "Failed!"
                });
            }
        });
    });
});

router.get('/:studentid',(req, res, next) => {
    const studentid = req.params.studentid;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (studentid) {
            connection.query('SELECT * FROM students WHERE studentid = ?', [studentid], function(error, results, fields) {
                if (error) {
                    res.status(500).json({
                        message: error
                    });
                }
                if (results && results.length > 0) {
                    res.send(results); 
                }
                else if (!results || results.length == 0) {
                    res.status(200).json({
                        message: "Failed!"
                    });
                }
            });
        }
    });
});

router.post('/', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const address = req.body.address;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && fullname && email && password && usertype) {
            connection.query('INSERT INTO students (name, email, phone, country, city, address) VALUES(?, ?, ?, ?, ?, ?)', [name, email, phone, country, city, address], function(error, results, fields) {
                if (error) {
                    res.status(500).json({
                        message: error
                    });
                }
                if (results && results.length > 0) {
                    res.status(200).json({
                    message: "Success! User created for " + fullname + "!"
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