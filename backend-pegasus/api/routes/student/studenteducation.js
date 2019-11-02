const {env, sha1, mysql, mypool} = require('../../util')

const studenteducation = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const university = req.body.university;
    const highestq = req.body.highestq;
    const specialization = req.body.specialization;
    const type = req.body.type;
    const grade = req.body.grade;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && university && highestq && specialization) {               
                let queryString = `INSERT INTO pegasus.studenteducation (studentid, university, highestq, specialization, type, grade) values ("${studentid}", "${university}", "${highestq}", "${specialization}", "${type}", "${grade}")`
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