const {router, env, sha1, mysql, mypool} = require('../../util')

const studentawards = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const awardname = req.body.awardname;
    const year = parseInt(req.body.year);
    const month = req.body.month;
    const awarddesc = req.body.awarddesc;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && awardname && year && month) {               
                let queryString = `INSERT INTO pegasus.studentawards (studentid, awardname, year, month, awarddescription) values ("${studentid}", "${awardname}", "${year}", "${month}", "${awarddesc}")`
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