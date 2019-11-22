//const {env, sha1, mysql, mypool} = require('../../util')

const mysql = require('mysql');
const mypool = mysql.createPool({
    host:       process.env.Db_Host,
    user:       process.env.Db_User,
    password:   process.env.Db_Password,
    database:   process.env.Db_Source,
    port:       process.env.Db_Port,
    multipleStatements: true
});

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
                let queryString = `set @rownum:=0;select @rownum:=@rownum+1 SequenceID, output.* from (select id as 'CertificateID',certificatename as 'Name',IssuedBy,IssuedDate,ValidUntil from pegasus.studentcertificate where studentid = "${studentid}") output`
                connection.query(queryString, (err, rows, fields) => {
                    if(err) {
                        res.status(500).json({ message: err })
                    }
                    else if(rows.length > 1) {
                        res.json({
                            Certification: rows[1]
                        })
                    }
                    /*else {
                        res.json({
                            Certification: rows
                        })
                    }*/
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