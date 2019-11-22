const {env, sha1, mysql, mypool} = require('../../util')

/*const studentskills = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const skillid = req.body[key].SkillID;
            const skillname = req.body[key].SkillName;

            var foundduplicate = false;
            
            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && skillname) {  
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
                                else {
                                    res.json({
                                        message: "success"
                                    })
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
}*/

const studentskills = (req, res) => {
    const studentid0 = req.body[0].StudentID;
    var success = true;
    let queryString1 = `delete from pegasus.studentskills where studentid = "${studentid0}"` ;  
    mypool.getConnection(function (error, connection) {
        if(error) {
            success = false;
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            return error
        }
        else {
            connection.query(queryString1, (err, rows, fields) => {
                if(err) {
                    success = false;
                    console.log(err);
                    return res.status(500).json({ message: err })
                }
                else {
                    for(var key in req.body) {
                        if(req.body.hasOwnProperty(key)) {
                            const studentid = req.body[key].StudentID;
                            const skillid = req.body[key].SkillID;
                            const skillname = req.body[key].SkillName;

                            let queryString2 = `INSERT INTO pegasus.studentskills (studentid, skillname) values ("${studentid}","${skillname}")`

                            if(studentid && skillname) {  
                                connection.query(queryString2, (err, rows, fields) => {
                                    if(err) {
                                        success = false;
                                        res.status(500).json({ message: err });
                                        return;
                                    }
                                });
                            } else {
                                success = false;
                                res.status(400).json({
                                    message: "Bad Request! Invalid POST request!"
                                });
                                return;
                            }
                        }
                        else {
                            success = false;
                            return;
                        }
                    }
                    if(success) {
                        res.json({
                            message: "success"
                        })
                    }
                }        
                connection.release()
            });
        }
    });
}

module.exports = studentskills