const {router, env, sha1, mysql, mypool} = require('../../util')

// SUB-ROUTES
// http://servername/employer/*
// GET
const getJobList = require('./joblist')
router.get('/joblist/:id', getJobList)
const getJobView = require('./jobview')
router.get('/jobview/:jobID', getJobView)

// GET All
const getalljobs = require('./getalljobs')
router.get('/getalljobs', getalljobs)

// POST
const postjob = require('./postjob')
router.post('/postjob', postjob)


// http://servername/employer
// to provide employer info
router.get('/employerinfo/:id',(req, res) => {
    const empID = req.params.id
    console.log(`Request for employer info, empID ${empID}`)
    
    if( !empID ) {
        res.send ('Please provide employer ID')
    }
    else {
        mypool.getConnection( (error, connection) => {
            if(error) {
                connection.release()
                console.log(`Error getting mysql_pool connection: ${error}`)
                throw error
            }
            else {
                var queryString = `SELECT companyname, companyphone, companyemail, companydescription, companyaddress, industry FROM pegasus.employer WHERE id=${empID}`
                connection.query( queryString, (error, rows, fields) => {
                    if(error) {
                        res.status(500).json({ message: error })
                    }
                    if(rows && rows.length > 0) {
                        res.status(200).json({
                            message: 'success',
                            body: rows
                        })
                    }
                    else if( !rows || rows.length == 0 ) {
                        res.status(200).json({
                            message: 'Not found'
                        })
                    }
                } )
            }
            connection.release()
        } )
    }
})

router.post('/employerinfo/createEmployer', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const companyname = req.body.companyname;
    const companyemail = req.body.companyemail;
    const companyphone = req.body.companyphone;
    const companydescription = req.body.companydescription;
    const companyaddress = req.body.companyaddress;
    const industry = req.body.industry;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && companyname && companyemail && password && companyaddress && companyphone) {
            connection.query('INSERT INTO pegasus.employer (username, password, companyname, companyphone, companyemail, companydescription, companyaddress, industry) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [username, password, companyname, companyphone, companyemail, companydescription, companyaddress, industry], function(error, results, fields) {
                if (error) {
                    res.status(500).json({
                        message: error
                    });
                }
                if (results && results.length > 0) {
                    res.status(200).json({
                    message: "Success! Employer created for " + companyname + "!"
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

const updateprofile = require('./updateprofile')
router.put('/:id', updateprofile)

module.exports = router