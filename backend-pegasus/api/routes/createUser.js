const { sha1,  mypool } = require('../util')

const createUser = (req, res) => {
    let {usertype} = req.body
    console.log(`Req to create a new user, usertype: `, usertype)
    console.log('Request', req.body)


    let {username, password} = req.body
    password = sha1(password)
    let queryString = ""

    switch(usertype) {
        case "student":
            let {
                firstname, middlename, lastname, email, phone, country, city, 
                currentaddress, postalcode, nationality} = req.body
            

            queryString = `INSERT INTO pegasus.student 
                    (firstname, middlename, lastname, username, email, phone, country, city, currentaddress,
                    postalcode, nationality, password) 
            VALUES  ('${firstname}', '${middlename}', '${lastname}', '${username}', '${email}', ${phone},
                    '${country}', '${city}', '${currentaddress}', '${postalcode}', '${nationality}'
                     , '${password}');`
            break;

        case "employer":
            let {companyname, companyphone, companyemail, industry, companydescription, companyaddress} = req.body
            queryString = `INSERT INTO pegasus.employer 
                            (username, password, companyname, companyphone, 
                            companyemail, industry, companydescription, companyaddress) 
                        VALUES  ('${username}', '${password}', '${companyname}', '${companyphone}', 
                        '${companyemail}', '${industry}', '${companydescription}', '${companyaddress}' );`
            break;
    }

    if(usertype === 'student' || usertype === 'employer'){
        mypool.getConnection( (err, connection) => {
            if(err) {
                console.log(`Error getting mysql_pool connection: ${err}`)
                res.send(err)
                connection.release()
                throw err
            }
            else {
                connection.query(queryString, (err) => {
                    if(err) {
                        if(err.sqlMessage.slice(0,9) === "Duplicate") res.send("Duplicate user")
                        else res.status(500).json({ err })
                    }
                    else res.send('successfully created new user')
                })
            }
            connection.release()
        } ) 
    } else res.send("Unknown user type")
}

module.exports = createUser;