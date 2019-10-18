const {env, sha1, mysql, mypool} = require('../../util')

const updateprofile = (req, res) => {
    const empID = parseInt(req.params.id)
    const empInfo = req.body

    console.log(`Request to updte profile of empID: ${empID}`)
    console.log('To update: ', empInfo)
    // UPDATE JSON inside DB
    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `UPDATE pegasus.employer
                                SET companyname="${empInfo.companyname}",
                                companyphone="${empInfo.companyphone}", industry="${empInfo.industry}",
                                companydescription="${empInfo.companydescription}"
                                WHERE id=${empID}`
            connection.query(queryString, (err, rows, fields) => {
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

module.exports = updateprofile