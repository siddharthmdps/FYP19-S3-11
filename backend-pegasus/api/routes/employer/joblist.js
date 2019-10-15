const {env, sha1, mysql, mypool} = require('../../util')

// return joblist matched by employer id
const joblistJSON = require('./dummyJSON/joblist.json')

const getJobList = (req, res) => {
    const empID = parseInt(req.params.id)
    console.log(`Requesting joblist for ${empID}`)
    
    const found = joblistJSON.some(job => job.id === empID)
    
    if (found) {
        res.json(joblistJSON.filter(job => job.id === empID))
    }
    else {
        res.status(400).json({ msg: 'Job not found' })
    }

    // mypool.getConnection((err, connection) => {
    //     if(err) {
    //         connection.release()
    //         console.log(`Error getting mysql_pool connection: ${err}`)
    //         throw err
    //     }
    //     else {
    //         let queryString = 'SELECT * FROM pegasus.job'
    //         connection.query(queryString, (err, rows, fields) => {
    //             if(err) {
    //                 res.status(500).json({ message: err })
    //             }
    //             if( rows &&  ( rows.length > 0 ) ) {
    //                 res.send(rows)
    //             }
    //             else if ( !rows || rows.length == 0 ) {
    //                 res.status(200).json({
    //                     message: 'Empty table'
    //                 })
    //             }
    //         })
    //     }
    // })
}

module.exports = getJobList