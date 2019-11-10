const {env, sha1, mysql, mypool} = require('../../util')

const studentawards = (req, res) => {    
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const certname = req.body[key].Name;
            const issuedby = req.body[key].IssuedBy;
            const issueddate = req.body[key].IssueDate;
            const validuntil = req.body[key].ValidUntil;

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && certname && issuedby && year && month) {               
                        let queryString = `INSERT INTO pegasus.studentcertificate (studentid, certificatename, issuedby, issueddate, validuntil) values ("${studentid}", "${certname}", "${issuedby}", "${issueddate}", "${validuntil}")`
                        connection.query(queryString, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err })
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
    }
    res.json({
        message: "success"
    })
}

module.exports = studentawards