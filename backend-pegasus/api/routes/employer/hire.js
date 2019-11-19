const {env, sha1, mysql, mypool} = require('../../util')

// save the new job under the given employer id
const hire = (req, res) => {
    const appID = req.params.appID
    console.log(`Application id ${appID} changed status to 'hired'`)

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            let queryString = `UPDATE pegasus.jobapplication SET status='successful' WHERE id=${appID}`
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.json({
                        message: "status updated"
                    })
                }
            })
        }
        connection.release()
    } )
}

module.exports = hire