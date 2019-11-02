const {router, env, sha1, mysql, mypool} = require('../../util')

//student awards
//get
const getstudentaward = require('./getstudentawards')
router.get('/studentawards/:studentid', getstudentaward)

//post
const studentawards = require('./studentawards')
router.post('/studentawards', studentawards)

//student cert
//get
const getstudentcertificate = require('./getstudentcertificate')
router.get('/studentcertificate/:studentid', getstudentcertificate)

//post
const studentcertificate = require('./studentcertificate')
router.post('/studentcertificate', studentcertificate)

//student education
//get
const getstudenteducation = require('./getstudenteducation')
router.get('/studenteducation/:studentid', getstudenteducation)

//post
const studenteducation = require('./studenteducation')
router.post('/studenteducation', studenteducation)

//student job preference
//get
const getstudentjobpref = require('./getstudentjobpref')
router.get('/studentjobpref/:studentid', getstudentjobpref)

//post
const studentjobpref = require('./studentjobpref')
router.post('/studentjobpref', studentjobpref)

//student project
//get
const getstudentproject = require('./getstudentproject')
router.get('/studentproject/:studentid', getstudentproject)

//post
const studentproject = require('./studentproject')
router.post('/studentproject', studentproject)

//student work exp
//get
const getstudentworkexp = require('./getstudentworkexp')
router.get('/studentworkexp/:studentid', getstudentworkexp)

//post
const studentworkexp = require('./studentworkexp')
router.post('/studentworkexp', studentworkexp)

//student document
//get
const getstudentdocument = require('./getstudentdocument')
router.get('/studentdocument/:studentid', getstudentdocument)

//post
const studentdocument = require('./studentdocument')
router.post('/studentdocument', studentdocument)

router.get('/studentinfo/:studentid',(req, res, next) => {
    const studentid = req.params.studentid;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (studentid) {
            connection.query("SELECT ID as 'StudentID',FirstName,MiddleName,LastName,Email,Phone,Country,City,CurrentAddress,PostalCode,Nationality FROM student WHERE id = ?", [studentid], function(error, results, fields) {
                if (error) {
                    res.status(500).json({
                        message: error
                    });
                }
                if (results && results.length > 0) {
                    res.status(200).json({
                        PersonalParticulars: results[0]
                    });
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

router.post('/studentinfo/createStudent', (req, res, next) => {
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const currentaddress = req.body.currentaddress;
    const postalcode = req.body.postalcode;
    const nationality = req.body.nationality;
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
            connection.query('INSERT INTO pegasus.student (firstname, middlename, lastname, email, phone, country, city, currentaddress, postalcode, nationality, username, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstname, middlename, lastname, email, phone, country, city, currentaddress, postalcode, nationality, username, password], function(error, results, fields) {
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