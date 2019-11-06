const {env, sha1, mysql, mypool} = require('../../util')

const studentdocument = (req, res) => {
    
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].studentid;
            const title = req.body[key].Title;
            const link = req.body[key].Link;

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && title) {               
                        let queryString = `INSERT INTO pegasus.studentdocument (studentid, title, link) values ("${studentid}", "${title}", "${link}")`
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

module.exports = studentdocument