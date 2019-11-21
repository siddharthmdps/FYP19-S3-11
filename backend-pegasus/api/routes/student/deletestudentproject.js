const {env, sha1, mysql, mypool} = require('../../util')

const deletestudentproject = (req, res) => {
    const studentid = req.body.StudentID;
    const projectid = req.body.ProjectID;
    const title = req.body.Title;
    const status = req.body.Status;
    const description = req.body.Description;
    const link = req.body.Link;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {   
                let queryString1 = `delete from pegasus.studentproject where id = "${projectid}" and studentid = "${studentid}"` ;   
                if(!studentid) {
                    queryString1 = `delete from pegasus.studentproject where studentid = "${studentid}"` ;   
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
            connection.release()    
        }
    } )
}

module.exports = deletestudentproject