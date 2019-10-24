const {env, sha1, mysql, mypool} = require('../../util')

var dateFormat = require('dateformat');

const studentworkexp = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const position = req.body.position;
    const company = req.body.company;
    var from = req.body.from;
    var till = req.body.till;
    const type = req.body.type;
    const field = req.body.field;
    const salary = req.body.salary;
    const description = req.body.description;

    var tempfrom = from.split("/");
    from = new Date(tempfrom[2], tempfrom[1], tempfrom[0]);
    from = dateFormat(from, "yyyy-mm-dd");

    var temptill = till.split("/");
    till = new Date(temptill[2], temptill[1], temptill[0]);
    till = dateFormat(till, "yyyy-mm-dd");

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