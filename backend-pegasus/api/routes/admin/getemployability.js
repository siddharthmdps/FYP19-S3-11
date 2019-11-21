const {env, sha1, mysql, mypool} = require('../../util')

// return field of study paired with employability
const getalljobs = (req, res) => {
    console.log(`[ADMIN] Requesting for employability for students`)
    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error while getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `SELECT 
                                    studenteducation.fieldofstudy, COUNT(*) as succcesscount
                                FROM pegasus.studenteducation
                                    LEFT JOIN pegasus.jobapplication ON studenteducation.studentid = jobapplication.studentid
                                WHERE jobapplication.status="successful"
                                GROUP BY fieldofstudy`
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