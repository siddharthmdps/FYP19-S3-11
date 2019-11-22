const {router, env, sha1, mysql, mypool} = require('../../util')             

const studentawards = (req, res) => {
    var studentid0 = req.body[0].StudentID;
    let queryString1 = `delete from pegasus.studentawards where studentid = "${studentid0}"` ;  
    var success = true;
    mypool.getConnection(function (error, connection) {
        if(error) {
            success = false;
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            //throw error
            return error
        }
        else {
            connection.query(queryString1, (err, rows, fields) => {
                console.log(queryString1);
                for(var key in req.body) {
                    if(req.body.hasOwnProperty(key)) {
                        const studentid = req.body[key].StudentID;
                        const awardid = req.body[key].AwardID;
                        const awardname = req.body[key].Award;
                        var awarddesc = req.body[key].Description;
                        var awarddate = req.body[key].Date;

                        //var foundduplicate = false;

                        var queryString2 = `INSERT INTO pegasus.studentawards (studentid, awardname, awarddate, awarddescription) values ("${studentid}", "${awardname}", "${awarddate}", "${awarddesc}")`
                        if(studentid && awardname && awarddate) {          
                            //let queryString1 = `select * from pegasus.studentawards where id = "${awardid}" and studentid = "${studentid}"` ;
                            connection.query(queryString2, (err, rows, fields) => {
                                if(err) {
                                    success = false;
                                    res.status(500).json({ message: err });
                                    return;
                                }
                                /*if(rows.length > 0) {
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
                                }) */
                            })    
                            
                        } else {
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
                connection.release()
            });
        }
    })
}

module.exports = studentawards