const {env, sha1, mysql, mypool} = require('../../util')

const studentdocument = (req, res) => {
        const studentid = req.body.StudentID;
        const documentid = req.body.DocumentID;
        const title = req.body.Title;
        let link = req.body.Link;
        const imagetype = req.body.ImageType;
        console.log(req);
        console.log(link);

        var foundduplicate = false;

        mypool.getConnection( (error, connection) => {
            if(error) {
                connection.release()
                console.log(`Error getting mysql_pool connection: ${error}`)
                throw error
            }
            else {
                if(studentid && title) {      
                    let queryString1 = `select * from pegasus.studentdocument where id = "${documentid}" and studentid = "${studentid}"` ;              
                    let queryString2 = `INSERT INTO pegasus.studentdocument (studentid, title, link, imagetype) values ("${studentid}", "${title}", "${link}", "${imagetype}")`
                    connection.query(queryString1, (err, rows, fields) => {
                        if(err) {
                            res.status(500).json({ message: err })
                        }
                        if(rows.length > 0) {
                            foundduplicate = true;
                        }
                        if(foundduplicate) {
                            queryString2 = `UPDATE pegasus.studentdocument set title = "${title}", link = "${link}", imagetype = "${imagetype}" where id = "${documentid}" and studentid = "${studentid}"`
                        }
                        connection.query(queryString2, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err });
                            }
                            else {
                                res.json({
                                    message: "success"
                                })
                            }
                        }) 
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