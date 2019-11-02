const {env, sha1, mysql, mypool} = require('../../util')

const studentjobpref = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const industry = req.body.industry;
    const position = req.body.position;
    const type = req.body.type;
    const salary = req.body.salary;
    const location = req.body.location;
    const availability = req.body.availability;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && industry && position && type) {               
                let queryString = `INSERT INTO pegasus.studentjobpref (studentid, industry, position, type, salary, location, availability) values ("${studentid}", "${industry}", "${position}", "${type}", "${salary}", "${location}", "${availability}")`
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