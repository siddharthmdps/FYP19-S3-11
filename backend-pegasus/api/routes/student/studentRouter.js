const {router, env, sha1, mysql, mypool} = require('../../util')

// get
const getJobSearchResults = require('./searchjob')
router.get('/searchjob/:keyword', getJobSearchResults)

//student awards
//get
const getstudentaward = require('./getstudentawards')
router.get('/studentawards/:studentid', getstudentaward)

//put
const studentawards = require('./studentawards')
router.put('/putstudentawards', studentawards)

//student cert
//get
const getstudentcertificate = require('./getstudentcertificate')
router.get('/studentcertificate/:studentid', getstudentcertificate)

//put
const studentcertificate = require('./studentcertificate')
router.put('/putstudentcertificate', studentcertificate)

//student education
//get
const getstudenteducation = require('./getstudenteducation')
router.get('/studenteducation/:studentid', getstudenteducation)

//put
const studenteducation = require('./studenteducation')
router.put('/putstudenteducation', studenteducation)

//student job preference
//get
const getstudentjobpref = require('./getstudentjobpref')
router.get('/studentjobpref/:studentid', getstudentjobpref)

//put
const studentjobpref = require('./studentjobpref')
router.put('/putstudentjobpref', studentjobpref)

//student project
//get
const getstudentproject = require('./getstudentproject')
router.get('/studentproject/:studentid', getstudentproject)

//put
const studentproject = require('./studentproject')
router.put('/putstudentproject', studentproject)

//student work exp
//get
const getstudentworkexp = require('./getstudentworkexp')
router.get('/studentworkexp/:studentid', getstudentworkexp)

//put
const studentworkexp = require('./studentworkexp')
router.put('/putstudentworkexp', studentworkexp)

//student document
//get
const getstudentdocument = require('./getstudentdocument')
router.get('/studentdocument/:studentid', getstudentdocument)

//put
const studentdocument = require('./studentdocument')
router.put('/putstudentdocument', studentdocument)

//student skills
//get
const getstudentskills = require('./getstudentskills')
router.get('/studentskills/:studentid', getstudentskills)

//put
const studentskills = require('./studentskills')
router.put('/putstudentskills', studentskills)

//gt all student details
const getallstudentdetails = require('./getallstudentdetails')
router.get('/getallstudentdetails/:studentid', getallstudentdetails)

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
            connection.query("SELECT ID as 'StudentID',FirstName,MiddleName,LastName,Email,Phone,Country,City,CurrentAddress,PostalCode,Nationality,Availability, LinkedIn FROM student WHERE id = ?", [studentid], function(error, results, fields) {
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
            connection.release();
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
    const availability = req.body.Availability;
    const linkedin = req.body.LinkedIn;
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
            connection.query('INSERT INTO pegasus.student (firstname, middlename, lastname, email, phone, country, city, currentaddress, postalcode, nationality, availability, linkedin, username, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstname, middlename, lastname, email, phone, country, city, currentaddress, postalcode, nationality, availability, linkedin, username, password], function(error, results, fields) {
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

router.put('/studentinfo/updateStudent', (req, res, next) => {
    const studentid = req.body.StudentID;
    const firstname = req.body.FirstName;
    const middlename = req.body.MiddleName;
    const lastname = req.body.LastName;
    const email = req.body.Email;
    const phone = req.body.Phone;
    const country = req.body.Country;
    const city = req.body.City;
    const currentaddress = req.body.CurrentAddress;
    const postalcode = req.body.PostalCode;
    const nationality = req.body.Nationality;
    const availability = req.body.Availability;
    const linkedin = req.body.LinkedIn;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && fullname && email && password && usertype) {
            connection.query(`UPDATE pegasus.student SET firstname = "${firstname}", middlename = "${middlename}", lastname = "${lastname}", email = "${email}", phone = "${phone}", country = "${country}", city = "${city}", currentaddress = "${currentaddress}", postalcode = "${postalcode}", nationality = "${nationality}", availability = "${availability}", linkedin = "${linkedin}" WHERE studentid = "${studentid}"`, function(error, results, fields) {
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