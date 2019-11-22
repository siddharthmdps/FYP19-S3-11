const {env, sha1, mysql, mypool} = require('../../util')

// return joblist matched by employer id
const getalljobs = (req, res) => {

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `SELECT job.*, employer.username, employer.companyname FROM pegasus.job 
                            JOIN pegasus.employer ON pegasus.job.empid = pegasus.employer.id;`
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

module.exports = getalljobs