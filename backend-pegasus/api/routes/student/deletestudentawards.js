const {env, sha1, mysql, mypool} = require('../../util')

const deletestudentawards = (req, res) => {
    const studentid = req.params.StudentID;
    
    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {   
                let queryString1 = `delete from pegasus.studentawards where id = "${jobprefid}" and studentid = "${studentid}"` ;   
                if(!studentid) {
                    queryString1 = `delete from pegasus.studentawards where studentid = "${studentid}"` ;   
                }       
                connection.query(queryString1, (err, rows, fields) => {
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
<<<<<<< HEAD
            else {
                if(studentid) {   
                    let queryString1 = `delete from pegasus.studentawards where studentid = "${studentid}"` ;  
                    connection.query(queryString1, (err, rows, fields) => {
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
                connection.release()    
            }
        } )    
    }

=======
            connection.release()    
        }
    } )    
>>>>>>> parent of 8fdd79f2... Merge branch 'master' into soonkeong
}

module.exports = deletestudentawards