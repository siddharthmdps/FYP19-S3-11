const {env, sha1, mysql, mypool} = require('../../util')

const studentworkexp = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const position = req.body.position;
    const company = req.body.company;
    const from = req.body.from;
    const till = req.body.till;
    const type = req.body.type;
    const field = req.body.field;
    const salary = req.body.salary;
    const description = req.body.description;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && position && company) {               
                let queryString = `INSERT INTO pegasus.studentworkexp (studentid, position, company, from, till, type, field, salary, description ) values ("${studentid}", "${position}", "${company}", "${from}", "${till}", "${type}", "${field}", "${salary}", "${description}")`
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

module.exports = studentworkexp