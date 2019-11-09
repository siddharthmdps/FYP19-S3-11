const {router, env, sha1, mysql, mypool} = require('../../util')

const getsuccessfulapplications = (req,res) => {
    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            res.send(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let result = {
                total: 0,
                successful: 0
            }
            const getTotal = `SELECT COUNT(*) as total FROM pegasus.jobapplication`
            const getSuccessful = `SELECT COUNT(*) as successful FROM pegasus.jobapplication 
                                WHERE status="successful"`
            
            // get total applications
            connection.query(getTotal, (err, rows, fields) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                if( rows &&  ( rows.length > 0 ) ) {
                    result.total = rows[0].total
                    //res.send(result)
                }
                else if ( !rows || rows.length == 0 ) {
                    res.status(200).json({
                        message: 'Empty table'
                    })
                }
            })
            //connection.release()

            // get successful applications
            connection.query(getSuccessful, (err, rows, fields) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                if( rows &&  ( rows.length > 0 ) ) {
                    result.successful = rows[0].successful
                    res.send(result)
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

module.exports = getsuccessfulapplications