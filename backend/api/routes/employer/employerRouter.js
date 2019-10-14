const {router, env, sha1, mysql, mypool} = require('../../util')


// SUB-ROUTES
// http://servername/employer/*
// GET
router.get('/joblist', (req, res) => {
    const jobList = require('./dummyJSON/joblist.json') // dummy JSON
    res.send(jobList)
})

// POST
router.post('/postjob', (req, res) => { 
    console.log(`Received new job ad`,req.body)
    // STORE JSON (res.body) inside DB
    res.send({
        received: req.body
    })
})
router.post('/updateprofile', (req, res) => { 
    console.log(`Request to updte profile`, req.body)

    // UPDATE JSON inside DB
    res.send({
        received: req.body
    })
})



// http://servername/employer
router.get('/',(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // mypool.getConnection(function(err,connection) {
    //     if (err) {
	// 		connection.release();
	//   		console.log(' Error getting mysql_pool connection: ' + err);
	//   		throw err;
	//   	}
    //     connection.query('SELECT * FROM employerinformation', function(error, rows, fields) {
    //         if (error) {
    //             res.status(500).json({
    //                 message: error
    //             });
    //         }
    //         if (rows && rows.length > 0) {
    //             res.send(rows);   
    //         }
    //         else if (!rows || rows.length == 0) {
    //             res.status(200).json({
    //                 message: "Failed!"
    //             });
    //         }
    //     });
    // });
    res.send('Hello from EMPLOYER API')
});

// router.get('/:employerid',(req, res, next) => {
//     const employerid = req.params.employerid;
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     mypool.getConnection(function(err,connection) {
//         if (err) {
// 			connection.release();
// 	  		console.log(' Error getting mysql_pool connection: ' + err);
// 	  		throw err;
// 	  	}
//         if (employerid) {
//             connection.query('SELECT * FROM employerinformation WHERE employerid = ?', [employerid], function(error, results, fields) {
//                 if (error) {
//                     res.status(500).json({
//                         message: error
//                     });
//                 }
//                 if (results && results.length > 0) {
//                     res.send(results); 
//                 }
//                 else if (!results || results.length == 0) {
//                     res.status(200).json({
//                         message: "Failed!"
//                     });
//                 }
//             });
//         }
//     });
// });

router.post('/', (req, res, next) => {
    const companyname = req.body.companyname;
    const companyemail = req.body.companyemail;
    const address = req.body.address;
    const phone = req.body.phone;
    const contactperson = req.body.contactperson;
    const contactpersonphone = req.body.contactpersonphone;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && fullname && email && password && usertype) {
            connection.query('INSERT INTO employerinformation (companyname, companyemail, address, phone, contactperson, contactpersonphone) VALUES(?, ?, ?, ?, ?, ?)', [companyname, companyemail, address, phone, contactperson, contactpersonphone], function(error, results, fields) {
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



module.exports = router