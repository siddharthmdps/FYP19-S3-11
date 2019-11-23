const {containsNull, mypool} = require('../../util')

// return joblist matched by employer id
const getJobView = (req, res) => {
    const jobID = parseInt(req.params.jobID)
    console.log(`Requesting for a detailed job view, jobID: ${jobID}`)

    if( jobID === null || jobID === "" ) res.send('jobid cannot be null')
    else{
        mypool.getConnection((err, connection) => {
            if(err) {
                connection.release()
                console.log(`Error getting mysql_pool connection: ${err}`)
                throw err
            }
            else {
                let queryString = `select * from pegasus.student
                inner join pegasus.jobapplication
                on pegasus.student.id = pegasus.jobapplication.studentid
                Where pegasus.jobapplication.jobid = ${jobID}`
                connection.query(queryString, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
                    }
                    else {
                        if( rows &&  ( rows.length > 0 ) ) {
                            res.send(rows)
                        }
                        else if ( !rows || rows.length == 0 ) {
                            res.status(200).json({
                                message: 'Empty table'
                            })
                        }
                    }
                })
            }
            connection.release()
        })
    }

    //res.send(`Requesting for a detailed job view, jobID: ${jobID}`)
}

module.exports = getJobView