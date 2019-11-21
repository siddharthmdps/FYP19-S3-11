const {router, env, sha1, mysql, mypool} = require('../../util')

const getallcareertips = (req,res) => {
    console.log(`Request for all career tips`)

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `SELECT *
                                FROM pegasus.careertips`
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

module.exports = getallcareertips