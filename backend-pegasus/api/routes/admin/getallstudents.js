const {router, env, sha1, mysql, mypool} = require('../../util')

const getallstudents = (req,res) => {
    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `SELECT student.*, studenteducation.fieldofstudy 
                                FROM pegasus.student
                                LEFT JOIN pegasus.studenteducation
                                    ON studenteducation.studentid = student.id`
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

module.exports = getallstudents