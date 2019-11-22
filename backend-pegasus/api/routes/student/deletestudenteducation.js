const {env, sha1, mysql, mypool} = require('../../util')

const deletestudenteducation = (req, res) => {
    const studentid = req.body.StudentID;
    const educationid = req.body.EducationID;
    const university = req.body.University;
    const degree = req.body.Degree;
    const fieldofstudy = req.body.FieldOfStudy;
    const major = req.body.Major;
    var startdate = req.body.StartDate;
    var enddate = req.body.EndDate;
    const mode = req.body.Mode;
    const gpa = req.body.GPA;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {   
                let queryString1 = `delete from pegasus.studenteducation where id = "${educationid}" and studentid = "${studentid}"` ;   
                if(!studentid) {
                    queryString1 = `delete from pegasus.studenteducation where studentid = "${studentid}"` ;   
                }       
                connection.query(queryString1, (err, rows, fields) => {
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
            connection.release()    
        }
    } )
}

module.exports = deletestudenteducation