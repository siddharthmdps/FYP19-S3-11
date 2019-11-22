const {env, sha1, mysql, mypool} = require('../../util')

const searchjob = (req,res) => {
    const keyword = req.params.keyword

    //res.send(`this is search job feature of student page. keyword is ${keyword}`)

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `SELECT pegasus.job.*, pegasus.employer.companyname 
                                FROM pegasus.job
                                JOIN pegasus.employer ON job.empid=employer.id
                                WHERE job.title LIKE '%${keyword}%'                              
                                LIMIT 50`


            connection.query(queryString, (err, rows, fields) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                if( rows &&  ( rows.length > 0 ) ) {
                    let result = rows
                    res.send(result)
                }
                else if ( !rows || rows.length == 0 ) {
                    res.status(200).json({
                        message: 'NOT FOUND'
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = searchjob