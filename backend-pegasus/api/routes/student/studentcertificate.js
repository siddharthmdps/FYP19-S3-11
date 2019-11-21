const {env, sha1, mysql, mypool} = require('../../util')

const studentawards = (req, res) => {   
    var studentid0 = req.body[0].StudentID;
    var success = true;
    let queryString1 = `delete from pegasus.studentcertificate where studentid = "${studentid0}"` ;  
    mypool.getConnection( (error, connection) => {
        if(error) {
            success = false;
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {    
            connection.query(queryString1, (err, rows, fields) => {
                for(var key in req.body) {
                    if(req.body.hasOwnProperty(key)) {
                        const studentid = req.body[key].StudentID;
                        const certid = req.body[key].CertificateID;
                        const certname = req.body[key].Name;
                        const issuedby = req.body[key].IssuedBy;            
                        var issueddate = req.body[key].IssueDate;
                        var validuntil = req.body[key].ValidUntil;

                        //var foundduplicate = false;                    
                        if(studentid && certname && issuedby && issueddate) {    
                            //let queryString1 = `select * from pegasus.studentcertificate where id = "${certid}" and studentid = "${studentid}"` ;           
                            let queryString2 = `INSERT INTO pegasus.studentcertificate (studentid, certificatename, issuedby, issueddate, validuntil) values ("${studentid}", "${certname}", "${issuedby}", "${issueddate}", "${validuntil}")`
                            connection.query(queryString1, (err, rows, fields) => {
                                if(err) {
                                    success = false;
                                    res.status(500).json({ message: err });
                                    return;
                                }
                                // if(rows.length > 0) {
                                //     foundduplicate = true;
                                // }
                                // if(foundduplicate) {
                                //     queryString2 = `UPDATE pegasus.studentcertificate set certificatename = "${certname}", issuedby = "${issuedby}", issueddate = "${issueddate}", validuntil = "${validuntil}" where id = "${certid}" and studentid = "${studentid}"`
                                // }
                                /*connection.query(queryString2, (err, rows, fields) => {
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
                        //} )
                }     
                if(success) {
                    res.json({
                        message: "success"
                    })
                }
                connection.release() 
            });    
        }
    });
}

module.exports = studentawards