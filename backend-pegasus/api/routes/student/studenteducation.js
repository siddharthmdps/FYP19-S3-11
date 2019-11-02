const {env, sha1, mysql, mypool} = require('../../util')

const studenteducation = (req, res) => {
    const studentid = parseInt(req.params.StudentID);
    const university = req.body.University;
    const degree = req.body.Degree;
    const fieldofstudy = req.body.FieldOfStudy;
    const major = req.body.Major;
    var startdate = req.body.StartDate;
    var enddate = req.body.EndDate;
    const mode = req.body.Mode;
    const gpa = req.body.GPA;

    var starttemp = startdate.split("/");
    startdate = new Date(starttemp[2], starttemp[1], starttemp[0]);
    startdate = dateFormat(startdate, "yyyy-mm-dd");

    var endtemp = enddate.split("/");
    enddate = new Date(endtemp[2], endtemp[1], endtemp[0]);
    enddate = dateFormat(enddate, "yyyy-mm-dd");

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && university && startdate) {               
                let queryString = `INSERT INTO pegasus.studenteducation (studentid, university, degree, fieldofstudy, major, startdate, enddate, mode, gpa) values ("${studentid}", "${university}", "${degree}", "${fieldofstudy}", "${major}", "${startdate}", "${enddate}", "${mode}", "${gpa}")`
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

module.exports = studenteducation