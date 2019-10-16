const { router, env, sha1, mysql, mypool} = require('../util')

router.post('/', (req, res, next) => {
    const username = req.body.username.toLowerCase()
    const password = req.body.password
    var usertype = req.body.usertype.toLowerCase()

    // res.send({username, password, usertype})

    // Search in corresponding table based on usertype
    // Respond with user ID
    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(username && password){
                var queryString = `SELECT * FROM pegasus.${usertype} WHERE username='${username}' && password='${password}'`
                connection.query (queryString, (error, rows, fields) => {
                    if(error) {
                        res.status(500).json({ message: error })
                    }
                    if(rows && rows.length > 0) {
                        res.json({
                            message: 'success',
                            body: rows
                        })
                    }
                    else if( !rows || rows.length == 0 ) {
                        res.status(200).json({
                            message: 'Not found'
                        })
                    }
                })
            }
        }
        connection.release()
    } )


    // mypool.getConnection(function(err,connection) {
    //     if (err) {
	// 		connection.release();
	//   		console.log(' Error getting mysql_pool connection: ' + err);
	//   		throw err;
	//   	}
    //     if (username && password) {
    //         var sqlquery = 'SELECT * FROM ?? WHERE username = ? AND password = ?';
    //         if(usertype == "student") {
    //         sqlquery = sqlquery.replace('*',"CONCAT(FirstName, ' ' ,LastName) as Name");
    //             sqlquery = sqlquery.replace('??','student');
    //         }
    //         else if(usertype == "employer") {
    //             sqlquery = sqlquery.replace('*','CompanyName as Name');
    //             sqlquery = sqlquery.replace('??','employer');
    //         }
    //         else if(usertype == "admin") {
    //             sqlquery = sqlquery.replace('??','admin');
    //         }
    //         else {
    //             res.status(200).json({
    //                 message: "Invalid User Type!"
    //             });
    //         }
    //         console.log(sqlquery);
    //         connection.query(sqlquery, [username, password], function(error, results, fields) {
    //             if (error) {
    //                 res.status(500).json({
    //                     message: error
    //                 });
    //             }
    //             if (results && results.length > 0) {
    //                 res.send("Success! Hi, " + results[0].Name);    
    //             }
    //             else if (!results || results.length == 0) {
    //                 res.status(200).json({
    //                     message: "User not found!"
    //                 });
    //             }
    //         });
    //     } else {
    //         res.status(400).json({
    //             message: "Bad Request! Enter username and password!"
    //         });
    //     }

    //     connection.release();     
    // });

});

module.exports = router;