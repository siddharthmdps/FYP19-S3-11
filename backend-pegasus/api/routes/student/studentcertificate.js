const {env, sha1, mysql, mypool} = require('../../util')

const studentawards = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const certname = req.body.certname;
    const issuedby = req.body.issuedby;
    const year = parseInt(req.body.year);
    const month = req.body.month;
    var lifetime = req.body.lifetime;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && certname && issuedby && year && month) {               
                let queryString = `INSERT INTO pegasus.certificate (studentid, certificatename, issuedby, year, month, lifetime) values ("${studentid}", "${certname}", "${issuedby}", "${year}", "${month}", "${lifetime}")`
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

module.exports = studentawards