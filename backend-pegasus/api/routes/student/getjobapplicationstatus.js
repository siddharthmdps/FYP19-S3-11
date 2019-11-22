const {env, sha1, mysql, mypool} = require('../../util')

const getstudentdocument = (req, res) => {
    const studentid = req.params.studentid;
    const jobid = req.params.jobid;
    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {               
                let queryString = `select Status from pegasus.jobapplication where studentid = "${studentid}" and jobid = "${jobid}"`
                connection.query(queryString, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
                    }
                    else {
                        res.json({
                            Status: rows[0].Status
                        })
                    }
                }) 
            } else {
                res.status(400).json({
                    message: "Bad Request! Invalid POST request!"
                });
            }
    
        }
        connection.release()
    } )
}

module.exports = getstudentdocument