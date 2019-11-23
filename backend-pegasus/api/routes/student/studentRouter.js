const {containsNull, router, mypool} = require('../../util')

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

//delete
const delstudentawards = require('./deletestudentawards')
router.delete('/deletestudentawards/:StudentID', delstudentawards)

//student cert
//get
const getstudentcertificate = require('./getstudentcertificate')
router.get('/studentcertificate/:studentid', getstudentcertificate)

//put
const studentcertificate = require('./studentcertificate')
router.put('/putstudentcertificate', studentcertificate)

//delete
const delstudentcertificate = require('./deletestudentcertificate')
router.delete('/deletestudentcertificate/:StudentID', delstudentcertificate)

//student education
//get
const getstudenteducation = require('./getstudenteducation')
router.get('/studenteducation/:studentid', getstudenteducation)

//put
const studenteducation = require('./studenteducation')
router.put('/putstudenteducation', studenteducation)

//delete
const delstudenteducation = require('./deletestudenteducation')
router.delete('/deletestudenteducation/:StudentID', delstudenteducation)

//student job preference
//get
const getstudentjobpref = require('./getstudentjobpref')
router.get('/studentjobpref/:studentid', getstudentjobpref)

//put
const studentjobpref = require('./studentjobpref')
router.put('/putstudentjobpref', studentjobpref)

//delete
const delstudentjobpref = require('./deletestudentjobpref')
router.delete('/deletestudentjobpref/:StudentID', delstudentjobpref)

//student project
//get
const getstudentproject = require('./getstudentproject')
router.get('/studentproject/:studentid', getstudentproject)

//put
const studentproject = require('./studentproject')
router.put('/putstudentproject', studentproject)

//delete
const delstudentproject = require('./deletestudentproject')
router.delete('/deletestudentproject/:StudentID', delstudentproject)

//student work exp
//get
const getstudentworkexp = require('./getstudentworkexp')
router.get('/studentworkexp/:studentid', getstudentworkexp)

//put
const studentworkexp = require('./studentworkexp')
router.put('/putstudentworkexp', studentworkexp)

//delete
const delstudentworkexp = require('./deletestudentworkexp')
router.delete('/deletestudentworkexp/:StudentID', delstudentworkexp)

//student document
//get
const getstudentdocument = require('./getstudentdocument')
router.get('/studentdocument/:studentid', getstudentdocument)

//put
const studentdocument = require('./studentdocument')
router.put('/putstudentdocument', studentdocument)

//delete
const delstudentdocument = require('./deletestudentdocument')
router.delete('/deletestudentdocument/:StudentID', delstudentdocument)

//student skills
//get
const getstudentskills = require('./getstudentskills')
router.get('/studentskills/:studentid', getstudentskills)

//put
const studentskills = require('./studentskills')
router.put('/putstudentskills', studentskills)

const submitpoll = require('./submitpoll')
router.put('/submitpoll/:pollID&:choice', submitpoll)

//delete
const delstudentskills = require('./deletestudentskills')
router.delete('/deletestudentskills/:StudentID', delstudentskills)

//submit poll
// const submitpoll = require('./submitpoll')
// router.put('/submitpoll/:pollID&:choice', submitpoll)

//gt all student details
const getallstudentdetails = require('./getallstudentdetails')
router.get('/getallstudentdetails/:studentid', getallstudentdetails)

//get recommendedlist
const getrecommendedjoblist = require('./getrecommendedjoblist')
router.get('/getrecommendedjoblist/:studentid', getrecommendedjoblist)

//get appliedjobs
const getappliedjoblist = require('./getappliedjoblist')
router.get('/getappliedjoblist/:studentid', getappliedjoblist)

//get savedjobs
const getsavedjoblist = require('./getsavedjoblist')
router.get('/getsavedjoblist/:studentid', getsavedjoblist)

//get jobapplicationstatus
const getjobapplicationstatus = require('./getjobapplicationstatus')
router.get('/getjobapplicationstatus/:studentid/:jobid', getjobapplicationstatus)

//get recommendedlist
const getrecommendedjoblistempty = require('./getrecommendedjoblist')
router.get('/getrecommendedjoblist/', getrecommendedjoblistempty)

//get appliedjobs
const getappliedjoblistempty = require('./getappliedjoblist')
router.get('/getappliedjoblist/', getappliedjoblistempty)

//get savedjobs
const getsavedjoblistempty = require('./getsavedjoblist')
router.get('/getsavedjoblist/', getsavedjoblistempty)

//get jobapplicationstatus
const getjobapplicationstatusempty = require('./getjobapplicationstatus')
router.get('/getjobapplicationstatus/', getjobapplicationstatusempty)

//post applysavejob
const applysavejob = require('./applysavejob')
router.post('/applysavejob', applysavejob)

//delete unsavejob
const unsavejob = require('./unsavejob')
router.delete('/unsavejob/:StudentID/:JobID', unsavejob)

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
            connection.query("SELECT ID as 'StudentID',FirstName,MiddleName,LastName,Email,Phone,Country,City,CurrentAddress,PostalCode,Nationality,Availability,LinkedIn,ProfileImage FROM student WHERE id = ?", [studentid], function(error, results, fields) {
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
        else {
            if (username && fullname && email && password && usertype) {
                connection.query('INSERT INTO pegasus.student (firstname, middlename, lastname, email, phone, country, city, currentaddress, postalcode, nationality, availability, linkedin, username, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstname, middlename, lastname, email, phone, country, city, currentaddress, postalcode, nationality, availability, linkedin, username, password], function(error, results, fields) {
                    if (error) {
                        res.status(500).json({
                            message: error
                        });
                    }
                    if (results) {
                        res.status(200).json({
                            message: "Success"
                        });    
                    }
                    else if (!results) {
                        res.status(500).json({
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
        }
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

    if( containsNull(req.body) ){ res.send('Error: request contains null') 
    }else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        mypool.getConnection(function(err,connection) {
            if (err) {
                connection.release();
                  console.log(' Error getting mysql_pool connection: ' + err);
                  throw err;
            }
            else {
                if (firstname && email && currentaddress) {
                    connection.query(`UPDATE pegasus.student SET firstname = "${firstname}", middlename = "${middlename}", lastname = "${lastname}", email = "${email}", phone = "${phone}", country = "${country}", city = "${city}", currentaddress = "${currentaddress}", postalcode = "${postalcode}", nationality = "${nationality}", availability = "${availability}", linkedin = "${linkedin}" WHERE id = "${studentid}"`, function(error, results, fields) {
                        if (error) {
                            res.status(500).json({
                                message: error
                            });
                        }
                        res.status(200).json({
                            message: "Success"
                        }); 
                    });
                } else {
                    res.status(400).json({
                        message: "Bad Request! Invalid POST request!"
                    });
                }
                connection.release(); 
            }    
        });
    }
});


module.exports = router;
