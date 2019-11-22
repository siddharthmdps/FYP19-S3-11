const {mypool} = require('../../util')

const studentproject = (req, res) => {
    const studentid = req.body[0].StudentID;
    var success = true;
    let queryString1 = `delete from pegasus.studentproject where studentid = "${studentid}"` ;  
    mypool.getConnection(function (error, connection) {
        if(error) {
            success = false;
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            //throw error
            return error
        }
        else {
            connection.query(queryString1, (err, rows, fields) => {
                if(err) {
                    success = false;
                    console.log(err);
                    res.status(500).json({ message: err });
                    return;
                }
                else {
                    for(var key in req.body) {
                        if(req.body.hasOwnProperty(key)) {
                            const studentid = req.body[key].StudentID;
                            const projectid = req.body[key].ProjectID;
                            const title = req.body[key].Title;
                            const status = req.body[key].Status;
                            const description = req.body[key].Description;
                            const link = req.body[key].Link;

                            //var foundduplicate = false;
                            let queryString2 = `INSERT INTO pegasus.studentproject (studentid, title, status, description, link) values ("${studentid}", "${title}", "${status}", "${description}", "${link}")`

                            if(studentid && title && status && description) {  
                                connection.query(queryString2, (err, rows, fields) => {
                                    if(err) {
                                        success = false;
                                        res.status(500).json({ message: err });
                                        return;
                                    }
                                    /*else {
                                        res.json({
                                            message: "success"
                                        })
                                    }*/
                                });
                                /*let queryString1 = `select * from pegasus.studentproject where id = "${projectid}" and studentid = "${studentid}"` ;                  
                                let queryString2 = `INSERT INTO pegasus.studentproject (studentid, title, status, description, link) values ("${studentid}", "${title}", "${status}", "${description}", "${link}")`
                                
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
                                        else {
                                            res.json({
                                                message: "success"
                                            })
                                        }
                                    }) 
                                }) */
                            } else {
                                success = false;
                                res.status(400).json({
                                    message: "Bad Request! Invalid POST request!"
                                });
                                return;
                            }
                        }
                        else {
                            success = false;
                            return;
                        }
                    }
                    if(success) {
                        res.json({
                            message: "success"
                        })
                    }
                }        
                connection.release()
            });
        }
    });
}

module.exports = studentproject