const {env, sha1, mysql, mypool} = require('../../util')

const studentjobpref = (req, res) => {
    const studentid = parseInt(req.params.StudentID);
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
            if(studentid && industry && position && type) {               
                let queryString = `INSERT INTO pegasus.studentjobpref (studentid, industry, position, jobtype, expectedsalary, location, availability) values ("${studentid}", "${industry}", "${position}", "${jobtype}", "${expectedsalary}", "${location}", "${availability}")`
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

module.exports = studentjobpref