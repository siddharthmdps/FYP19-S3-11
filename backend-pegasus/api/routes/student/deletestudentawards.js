const {env, sha1, mysql, mypool} = require('../../util')

const deletestudentawards = (req, res) => {
    const studentid = req.body.StudentID;
    const jobprefid = req.body.JobPreferenceID;
    const industry = req.body.Industry;
    const position = req.body.Position;
    const jobtype = req.body.JobType;
    const expectedsalary = req.body.ExpectedSalary;
    const location = req.body.Location;
    const availability = req.body.Availability;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && jobprefid) {   
                let queryString1 = `delete from pegasus.studentjobpref where id = "${jobprefid}" and studentid = "${studentid}"` ;   
                if(!studentid) {
                    queryString1 = `delete from pegasus.studentjobpref where studentid = "${studentid}"` ;   
                }       
                connection.query(queryString1, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
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
    res.json({
        message: "success"
    })
}

module.exports = deletestudentawards