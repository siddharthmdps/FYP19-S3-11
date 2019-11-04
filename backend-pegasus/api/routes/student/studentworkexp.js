const {env, sha1, mysql, mypool} = require('../../util')

var dateFormat = require('dateformat');

const studentworkexp = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const position = req.body.Position;
    const company = req.body.Company;
    var startdate = req.body.StartDate;
    var enddate = req.body.EndDate;
    const mode = req.body.Mode;
    const industry = req.body.Industry;
    const annualsalary = req.body.AnnualSalary;
    const description = req.body.Description;

    var tempfrom = startdate.split("/");
    startdate = new Date(tempfrom[2], tempfrom[1], tempfrom[0]);
    startdate = dateFormat(from, "yyyy-mm-dd");

    var temptill = enddate.split("/");
    enddate = new Date(temptill[2], temptill[1], temptill[0]);
    enddate = dateFormat(enddate, "yyyy-mm-dd");

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid && position && company) {               
                let queryString = `INSERT INTO pegasus.studentworkexp (studentid, position, company, startdate, enddate, mode, industry, annualsalary, description) values ("${studentid}", "${position}", "${company}", "${startdate}", "${enddate}", "${mode}", "${industry}", "${annualsalary}", "${description}")`
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