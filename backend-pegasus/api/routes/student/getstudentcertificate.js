const {env, sha1, mysql, mypool} = require('../../util')

const getstudentcert = (req, res) => {
    const studentid = parseInt(req.params.studentid);

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {               
                let queryString = `select id as 'CertificateID',certificatename as 'Name',IssuedBy,DATE_FORMAT(IssuedDate, '%b %Y') as 'IssuedDate',DATE_FORMAT(ValidUntil, '%b %Y') as 'ValidUntil' from pegasus.studentcertificate where studentid = "${studentid}"`
                connection.query(queryString, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
                    }
                    else {
                        res.json({
                            Certification: rows
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

module.exports = getstudentcert