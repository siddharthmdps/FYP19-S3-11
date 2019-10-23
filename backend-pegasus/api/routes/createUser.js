const { env, sha1, mysql, mypool } = require('../util')

const createUser = (req, res) => {
    usertype = req.body.usertype
    console.log(`Req to create a new user, usertype: `, usertype)

    let userDetails = ""
    let queryString = ""

    switch(usertype) {
        case "student":
            const student = {
                firstname       : req.body.firstname,
                lastname        : req.body.lastname,
                username        : req.body.username,
                email           : req.body.email,
                address         : req.body.address,
                jobexperience   : req.body.jobexperience,
                password        : sha1(req.body.password)
            }
            userDetails = student
            queryString = `INSERT INTO pegasus.student 
                    (firstname, lastname, email,  address, username, password) 
            VALUES  ('${student.firstname}', '${student.lastname}', '${student.email}', '${student.address}', '${student.username}', '${student.password}');`
            break;

        case "employer":
            const employer = {
                username:           req.body.username,
                companyemail:       req.body.companyemail,
                companyname:        req.body.companyname,
                companyphone:       req.body.companyphone,
                companydescription: req.body.companydescription,
                companyaddress:     req.body.companyaddress,
                industry:           req.body.industry,
                password:           sha1(req.body.password)
            }
            userDetails = employer
            queryString = `INSERT INTO pegasus.employer 
            (username, companyemail, companyname,  companyphone, companydescription, companyaddress, industry, password) 
            VALUES  ('${employer.username}', '${employer.companyemail}', '${employer.companyname}', '${employer.companyphone}', '${employer.companydescription}', '${employer.companyaddress}', '${employer.industry}', '${employer.password}');`
            break;
        default : res.send(`Unknown usertype`)
    }

    mypool.getConnection( (err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            connection.query(queryString, (err, rows, fields) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.send({
                        message: 'success',
                        body: userDetails
                    })
                }
            })
        }
        connection.release()
    } )
}

// router.post('/', (req, res) => {
//     const username = req.body.username;
//     const fullname = req.body.fullname;
//     const email = req.body.email;
//     const password = sha1(req.body.password);
//     const usertype = req.body.usertype;



//     mypool.getConnection(function(err,connection) {
//         if (err) {
// 			connection.release();
// 	  		console.log(' Error getting mysql_pool connection: ' + err);
// 	  		throw err;
// 	  	}
//         if (username && fullname && email && password && usertype) {
//             connection.query('INSERT INTO users (username, fullname, email, password, usertype) VALUES(?, ?, ?, ?, ?, ?)', [username, fullname, email, password, usertype], function(error, results, fields) {
//                 if (error) {
//                     res.status(500).json({
//                         message: error
//                     });
//                 }
//                 if (results && results.length > 0) {
//                     res.status(200).json({
//                     message: "Success! User created for " + fullname + "!"
//                     });    
//                 }
//                 else if (!results || results.length == 0) {
//                     res.status(200).json({
//                         message: "Failed!"
//                     });
//                 }
//             });
//         } else {
//             res.status(400).json({
//                 message: "Bad Request! Invalid POST request!"
//             });
//         }

//         connection.release();     
//     });
// })


module.exports = createUser;