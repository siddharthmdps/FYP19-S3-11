const {express, router, env, sha1, mysql, mypool} = require('../../util')

//student awards
//get
const getstudentaward = require('./studentawards')
router.get('/studentawards/:studentid', getstudentaward)

//post
const studentawards = require('./studentawards')
router.post('/studentawards', studentawards)

//student cert
//get
const getstudentcert = require('./studentcert')
router.get('/studentcert/:studentid', getstudentcert)

//post
const studentcert = require('./studentcert')
router.post('/studentcert', studentcert)

//student education
//get
const getstudenteducation = require('./studenteducation')
router.get('/studenteducation/:studentid', getstudenteducation)

//post
const studenteducation = require('./studenteducation')
router.post('/studenteducation', studenteducation)

router.get('/',(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        connection.query('SELECT firstname,lastname,email,phone,country,city,address FROM pegasus.student', function(error, rows, fields) {
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
            connection.query('SELECT firstname,lastname,email,phone,country,city,address FROM pegasus.student WHERE studentid = ?', [studentid], function(error, results, fields) {
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

router.post('/createStudent', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const address = req.body.address;
    const username = req.body.username;
    const password = req.body.password;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && fullname && email && password && usertype) {
            connection.query('INSERT INTO pegasus.student (name, email, phone, country, city, address, username, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [name, email, phone, country, city, address, username, password], function(error, results, fields) {
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