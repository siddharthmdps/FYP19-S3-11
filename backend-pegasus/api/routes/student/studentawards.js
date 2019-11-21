const {router, env, sha1, mysql, mypool} = require('../../util')             

const studentawards = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const awardid = req.body[key].AwardID;
            const awardname = req.body[key].Award;
            var awarddate = req.body[key].Date;

            var foundduplicate = false;

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && awardname && awarddate) {          
                        let queryString1 = `select * from pegasus.studentawards where id = "${awardid}" and studentid = "${studentid}"` ;
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err });
                            }
                            if(rows.length > 0) {
                                foundduplicate = true;
                            }
                            var queryString2 = `INSERT INTO pegasus.studentawards (studentid, awardname, awarddate, awarddescription) values ("${studentid}", "${awardname}", "${awarddate}", "${awarddesc}")`
                            if(foundduplicate) {
                                queryString2 = `UPDATE pegasus.studentawards set awardname = "${awardname}", awarddate = "${awarddate}", awarddescription = "${awarddesc}" where id = "${awardid}" and studentid = "${studentid}"`
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
}

module.exports = studentawards