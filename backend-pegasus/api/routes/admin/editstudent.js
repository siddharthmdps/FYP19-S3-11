const {env, sha1, mysql, mypool} = require('../../util')

const editstudent = (req,res) => {
    

    const stdID = parseInt(req.params.id)
    const stdInfo = req.body

    let queryString = `UPDATE pegasus.student
                        SET firstname="${stdInfo.firstname}", middlename="${stdInfo.middlename}", lastname="${stdInfo.lastname}",
                            email="${stdInfo.email}", phone="${stdInfo.phone}", country="${stdInfo.country}",
                            city="${stdInfo.city}", currentaddress="${stdInfo.currentaddress}", postalcode="${stdInfo.postalcode}",
                            nationality="${stdInfo.nationality}", username="${stdInfo.username}"
                        WHERE id=${stdID}`

    // only update the password if it is not empty
    if(stdInfo.password !== '') {
        stdInfo.password = sha1(stdInfo.password)
        queryString = `UPDATE pegasus.student
                        SET firstname="${stdInfo.firstname}", middlename="${stdInfo.middlename}", lastname="${stdInfo.lastname}",
                            email="${stdInfo.email}", phone="${stdInfo.phone}", country="${stdInfo.country}",
                            city="${stdInfo.city}", currentaddress="${stdInfo.currentaddress}", postalcode="${stdInfo.postalcode}",
                            nationality="${stdInfo.nationality}", username="${stdInfo.username}", password="${stdInfo.password}"
                        WHERE id=${stdID}`
    }
    console.log(`Request to update profile of stdID: ${stdID}`)
    console.log('To update: ', stdInfo)

    // res.send(stdInfo)
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
                        message: `Student no.${stdID} updated`
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = editstudent