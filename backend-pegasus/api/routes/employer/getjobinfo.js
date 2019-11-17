const {env, sha1, mysql, mypool} = require('../../util')

// return joblist matched by employer id
const getjobinfo = (req, res) => {
    const jobID = parseInt(req.params.jobID)
    console.log(`Requesting for a detailed job info, jobID: ${jobID}`)

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `SELECT * FROM pegasus.job WHERE id=${jobID}`
            connection.query(queryString, (err, rows, fields) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                if( rows &&  ( rows.length > 0 ) ) {
                    res.send(rows)
                }
                else if ( !rows || rows.length == 0 ) {
                    res.status(200).json({
                        message: 'Empty table'
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = getjobinfo