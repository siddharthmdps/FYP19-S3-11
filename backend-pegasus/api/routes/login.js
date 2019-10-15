const { router, env, sha1, mysql, mypool} = require('../util')

router.post('/', (req, res, next) => {
    const username = req.body.username;
    const password = sha1(req.body.password);
    var usertype = req.body.usertype;
    usertype = usertype.toLowerCase();
    res.setHeader('Access-Control-Allow-Origin', '*');
    mypool.getConnection(function(err,connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        if (username && password) {
            var sqlquery = 'SELECT * FROM ?? WHERE username = ? AND password = ?';
            if(usertype == "student") {
            sqlquery = sqlquery.replace('*',"CONCAT(FirstName, ' ' ,LastName) as Name");
                sqlquery = sqlquery.replace('??','student');
            }
            else if(usertype == "employer") {
                sqlquery = sqlquery.replace('*','CompanyName as Name');
                sqlquery = sqlquery.replace('??','employer');
            }
            else if(usertype == "admin") {
                sqlquery = sqlquery.replace('??','admin');
            }
            else {
                res.status(200).json({
                    message: "Invalid User Type!"
                });
            }
            console.log(sqlquery);
            connection.query(sqlquery, [username, password], function(error, results, fields) {
                if (error) {
                    res.status(500).json({
                        message: error
                    });
                }
                if (results && results.length > 0) {
                    res.send("Success! Hi, " + results[0].Name);    
                }
                else if (!results || results.length == 0) {
                    res.status(200).json({
                        message: "Failed!"
                    });
                }
            });
        } else {
            res.status(400).json({
                message: "Bad Request! Enter username and password!"
            });
        }

        connection.release();     
    });
});

module.exports = router;