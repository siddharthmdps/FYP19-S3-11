const {env, sha1, mysql, mypool} = require('../../util')

const studentjobpref = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const industry = req.body[key].Industry;
            const position = req.body[key].Position;
            const jobtype = req.body[key].JobType;
            const expectedsalary = req.body[key].ExpectedSalary;
            const location = req.body[key].Location;
            const availability = req.body[key].Availability;

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
    res.json({
        message: "success"
    })
}

module.exports = studentjobpref