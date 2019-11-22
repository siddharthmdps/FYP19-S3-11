const {containsNull, mypool} = require('../../util')

const getstudentdocument = (req, res) => {
    const studentid = req.body.StudentID;
    const jobid = req.body.JobID;
    const status = req.body.Status;

    if ( containsNull(req.body) ) res.send('Error: req cannot contain null')
    else {
        mypool.getConnection( (error, connection) => {
            if(error) {
                connection.release()
                console.log(`Error getting mysql_pool connection: ${error}`)
                throw error
            }
            else {
                if(studentid) {               
                    let queryString = `select * from pegasus.jobapplication where studentid = "${studentid}"`
                    connection.query(queryString, (err, rows, fields) => {
                        let queryString2 = `update pegasus.jobapplication set status = "${status}" where jobapplication.studentid = "${studentid}" and jobapplication.jobid = "${jobid}"`                    
                        if(err) {
                            return res.status(500).json({ message: err })
                        }
                        else if(rows.length < 1) {
                            queryString2 = `insert into jobapplication (jobid, studentid, status) values ("${jobid}","${studentid}","${status}") `
                        }
                        connection.query(queryString2, (err2, rows2, fields) => { 
                            if(err) {
                                res.status(500).json({ message: err })
                            }
                            else {
                                res.json({ message: "success" });
                            }
                        });
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


}

module.exports = getstudentdocument