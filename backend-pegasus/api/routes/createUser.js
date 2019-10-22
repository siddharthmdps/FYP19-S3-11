const { router, env, sha1, mysql, mypool } = require('../util')


router.post('/', (req, res) => {
    // const username = req.body.username;
    // const fullname = req.body.fullname;
    // const email = req.body.email;
    // const password = sha1(req.body.password);
    // const usertype = req.body.usertype;

    console.log(`Req to create a new user`, req.body)
    res.send(`Hello`)

    // mypool.getConnection(function(err,connection) {
    //     if (err) {
	// 		connection.release();
	//   		console.log(' Error getting mysql_pool connection: ' + err);
	//   		throw err;
	//   	}
    //     if (username && fullname && email && password && usertype) {
    //         connection.query('INSERT INTO users (username, fullname, email, password, usertype) VALUES(?, ?, ?, ?, ?, ?)', [username, fullname, email, password, usertype], function(error, results, fields) {
    //             if (error) {
    //                 res.status(500).json({
    //                     message: error
    //                 });
    //             }
    //             if (results && results.length > 0) {
    //                 res.status(200).json({
    //                 message: "Success! User created for " + fullname + "!"
    //                 });    
    //             }
    //             else if (!results || results.length == 0) {
    //                 res.status(200).json({
    //                     message: "Failed!"
    //                 });
    //             }
    //         });
    //     } else {
    //         res.status(400).json({
    //             message: "Bad Request! Invalid POST request!"
    //         });
    //     }

    //     connection.release();     
    // });
})


module.exports = router;