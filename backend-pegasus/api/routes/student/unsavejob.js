const {env, sha1, mysql, mypool} = require('../../util')

const getstudentdocument = (req, res) => {
    const studentid = req.params.StudentID;
    const jobid = req.params.JobID;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {               
                let queryString = `delete from savedstudentjob where savedstudentjob.studentid = "${studentid}" and savedstudentjob.jobid = "${jobid}"`
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