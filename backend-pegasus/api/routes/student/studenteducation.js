const {env, sha1, mysql, mypool} = require('../../util')

var dateFormat = require('dateformat');

const studenteducation = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const educationid = req.body[key].EducationID;
            const university = req.body[key].University;
            const degree = req.body[key].Degree;
            const fieldofstudy = req.body[key].FieldOfStudy;
            const major = req.body[key].Major;
            var startdate = req.body[key].StartDate;
            var enddate = req.body[key].EndDate;
            const mode = req.body[key].Mode;
            const gpa = req.body[key].GPA;

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
                        let queryString1 = `select * from pegasus.studenteducation where id = "${educationid}" and studentid = "${studentid}"` ;                 
                        let queryString2 = `INSERT INTO pegasus.studenteducation (studentid, university, degree, fieldofstudy, major, startdate, enddate, mode, gpa) values ("${studentid}", "${university}", "${degree}", "${fieldofstudy}", "${major}", "${startdate}", "${enddate}", "${mode}", "${gpa}")`
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err })
                            }
                            if(rows.length > 0) {
                                foundduplicate = true;
                            }
                            if(foundduplicate) {
                                queryString2 = `UPDATE pegasus.studenteducation set university = "${university}", degree = "${degree}",fieldofstudy = "${fieldofstudy}", major = "${major}",startdate = "${startdate}", enddate = "${enddate}",mode = "${mode}", gpa = "${gpa}" where id = "${educationid}" and studentid = "${studentid}"`
                            }
                            connection.query(queryString2, (err, rows, fields) => {
                                if(err) {
                                    res.status(500).json({ message: err });
                                }
                            }) 
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

module.exports = studenteducation