const {env, sha1, mysql, mypool} = require('../../util')

const editemployer = (req,res) => {
    const empID = parseInt(req.params.id)
    const empInfo = req.body
    

    console.log(`Request to update profile of empID: ${empID}`)
    console.log('To update: ', empInfo)

    // res.send(empInfo)

    let queryString = `UPDATE pegasus.employer
                        SET username="${empInfo.username}", companyname="${empInfo.companyname}",
                        companyphone="${empInfo.companyphone}", companyemail="${empInfo.companyemail}", industry="${empInfo.industry}",
                        companydescription="${empInfo.companydescription}", companyaddress="${empInfo.companyaddress}"
                        WHERE id=${empID}`
    
    // only update the password if it is not empty
    if(empInfo.password !== "") {
        empInfo.password = sha1(empInfo.password)
        queryString = `UPDATE pegasus.employer
                        SET username="${empInfo.username}", companyname="${empInfo.companyname}", password="${empInfo.password}",
                        companyphone="${empInfo.companyphone}", companyemail="${empInfo.companyemail}", industry="${empInfo.industry}",
                        companydescription="${empInfo.companydescription}", companyaddress="${empInfo.companyaddress}"
                        WHERE id=${empID}`
    }


    // UPDATE JSON inside DB
    mypool.getConnection((err, connection) => {
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
                        message: `Employer no.${empID} updated`
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = editemployer