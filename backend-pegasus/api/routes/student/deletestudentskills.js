const {env, sha1, mysql, mypool} = require('../../util')

const deletestudentskills = (req, res) => {
    const studentid = req.body.StudentID;
    const skillid = req.body.SkillID;
    const skillname = req.body.SkillName;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {   
                let queryString1 = `delete from pegasus.studentskills where id = "${skillid}" and studentid = "${studentid}"` ;   
                if(!studentid) {
                    queryString1 = `delete from pegasus.studentskills where studentid = "${studentid}"` ;   
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

module.exports = deletestudentskills