const {router, env, sha1, mysql, mypool} = require('../../util')

const studentawards = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const awardname = req.body[key].Award;
            var tmpdate = req.body[key].Date;
            tmpdate = tmpdate.toString().split(" ");
            const year = tmpdate[1];
            const month = tmpdate[0];
            const awarddesc = req.body[key].Description;

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
                                res.status(500).json({ message: err });
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