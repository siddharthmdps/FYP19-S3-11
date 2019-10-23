const {env, sha1, mysql, mypool} = require('../../util')

const studentawards = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const awardname = req.body.awardname;
    const dateawarded = req.body.dateawarded;
    const awarddesc = req.body.awarddesc;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && awardname && dateawarded) {               
                let queryString = `INSERT INTO pegasus.studentawards (studentid, awardname, dateawarded, awarddesc) values ("${studentid}", "${awardname}", "${dateawarded}", "${awarddesc}")`
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