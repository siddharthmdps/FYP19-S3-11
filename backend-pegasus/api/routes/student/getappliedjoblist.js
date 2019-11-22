const {env, sha1, mysql, mypool} = require('../../util')

const getstudentdocument = (req, res) => {
    const studentid = req.params.studentid;


    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {               
                let queryString = `select job.title as 'JobTitle',employer.companyname as 'Company',job.Location,job.Industry, 
                job.yearsofexperience as 'WorkExpReq',job.Description,job.id as 'JobID', 'Pending' as Status
                from pegasus.job join pegasus.employer on employer.id = job.empid join pegasus.jobapplication on 
                jobapplication.jobid = job.id where jobapplication.studentid = "${studentid}" and jobapplication.status = 'Pending'`
                //and job.location = (select location from pegasus.studentjobpref where studentid = "${studentid}") and job.industry = (select industry from pegasus.studentjobpref where studentid = "${studentid}") and job.yearsofexperience = (select workexp from pegasus.studentjobpref where studentid = "${studentid}")`
                connection.query(queryString, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
                    }
                    else {
                        res.json({
                            AppliedJobs: rows
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