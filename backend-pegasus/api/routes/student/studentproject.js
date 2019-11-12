const {env, sha1, mysql, mypool} = require('../../util')

const studentproject = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const projectid = req.body[key].ProjectID;
            const title = req.body[key].Title;
            const status = req.body[key].Status;
            const description = req.body[key].Description;
            const link = req.body[key].Link;

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && projectname && status && description) {  
                        let queryString1 = `select * from pegasus.studentproject where id = "${projectid}" and studentid = "${studentid}"` ;                  
                        let queryString2 = `INSERT INTO pegasus.studentproject (studentid, title, status, description, link) values ("${studentid}", "${title}", "${status}", "${description}", "${link}")`
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err })
                            }
                            if(rows.length > 0) {
                                foundduplicate = true;
                            }
                            if(foundduplicate) {
                                queryString2 = `UPDATE pegasus.studentproject set title = "${title}", status = "${status}", description = "${description}", link = "${link}" where id = "${projectid}" and studentid = "${studentid}"`
                            }
                            connection.query(queryString2, (err, rows, fields) => {
                                if(err) {
                                    res.status(500).json({ message: err });
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
    }
    res.json({
        message: "success"
    })
}

module.exports = studentproject