const {env, sha1, mysql, mypool} = require('../../util')

const studentjobpref = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const projectname = req.body.projectname;
    const status = req.body.status;
    const description = req.body.desc;
    const link = req.body.link;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && projectname && status && description) {               
                let queryString = `INSERT INTO pegasus.studentproject (studentid, projectname, status, description, link) values ("${studentid}", "${projectname}", "${status}", "${description}", "${link}")`
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

module.exports = studentjobpref