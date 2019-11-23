const { env, sha1, mysql, mypool } = require('../util')

const createUser = (req, res) => {
    let {usertype} = req.body
    console.log(`Req to create a new user, usertype: `, usertype)


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
        default : res.send(`Unknown usertype`)
    }

    mypool.getConnection( (err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.send({
                        message: 'successfully created new user'
                    })
                }
            })
        }
        connection.release()
    } )
}




module.exports = createUser;