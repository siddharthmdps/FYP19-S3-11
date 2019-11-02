const {env, sha1, mysql, mypool} = require('../../util')

const studentdocument = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const title = req.body.Title;
    const link = req.body.Link;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && projectname && status && description) {               
                let queryString = `INSERT INTO pegasus.studentdocument (studentid, title, link) values ("${studentid}", "${title}", "${link}")`
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

module.exports = studentdocument