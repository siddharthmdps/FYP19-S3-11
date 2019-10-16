const {env, sha1, mysql, mypool} = require('../../util')

// save a job under the given employer id

const postjob = (req, res) => {
    const job = req.body

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            let queryString = `INSERT INTO pegasus.job
                                SET title="${job.title}", industry="${job.industry}",
                                description="${job.description}", requiredskills="${job.requiredskills}",
                                empid = (
                                    SELECT id FROM pegasus.employer
                                    WHERE employer.id = "${job.empid}"
                                )`
            connection.query(queryString, (err, rows, fields) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.json({
                        message: "success"
                    })
                }
            })
        }
        connection.release()
    } )
}

// const postjob = (req, res) => {
//     const empID = parseInt(req.params.id)

//     console.log(`New job ad posted by empID: ${empID}`)

//     // STORE JSON (res.body) inside DB
//     mypool.getConnection((err, connection) => {
//         if(err) {
//             connection.release()
//             console.log(`Error getting mysql_pool connection: ${err}`)
//             throw err
//         }
//         else {
//             let queryString = 'SELECT * FROM pegasus.job'
//             connection.query(queryString, (err, rows, fields) => {
//                 if(err) {
//                     res.status(500).json({ message: err })
//                 }
//                 if( rows &&  ( rows.length > 0 ) ) {
//                     res.send(rows)
//                 }
//                 else if ( !rows || rows.length == 0 ) {
//                     res.status(200).json({
//                         message: 'Empty table'
//                     })
//                 }
//             })
//         }
//     })
// }

module.exports = postjob