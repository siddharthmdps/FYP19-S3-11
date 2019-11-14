const {env, sha1, mysql, mypool} = require('../../util')

const studentskills = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const skillid = req.body[key].SkillID;
            const skillname = req.body[key].SkillName;

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && projectname && status && description) {  
                        let queryString1 = `select * from pegasus.studentskills where id = "${skillid}" and studentid = "${studentid}"` ;                  
                        let queryString2 = `INSERT INTO pegasus.studentskills (studentid, skillname) values ("${skillname}")`
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err })
                            }
                            if(rows.length > 0) {
                                foundduplicate = true;
                            }
                            if(foundduplicate) {
                                queryString2 = `UPDATE pegasus.studentskills set skillname = "${skillname}" where id = "${skillid}" and studentid = "${studentid}"`
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

module.exports = studentskills