const {env, sha1, mysql, mypool} = require('../../util')

var dateFormat = require('dateformat');

const studentworkexp = (req, res) => {    
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = parseInt(req.body[key].studentid);
            const workexpid = req.body[key].WorkExpID;
            const position = req.body[key].Position;
            const company = req.body[key].Company;
            var startdate = req.body[key].StartDate;
            var enddate = req.body[key].EndDate;
            const mode = req.body[key].Mode;
            const industry = req.body[key].Industry;
            const annualsalary = req.body[key].AnnualSalary;
            const description = req.body[key].Description;

            var tempfrom = startdate.split("/");
            startdate = new Date(tempfrom[2], tempfrom[1], tempfrom[0]);
            startdate = dateFormat(from, "yyyy-mm-dd");

            var temptill = enddate.split("/");
            enddate = new Date(temptill[2], temptill[1], temptill[0]);
            enddate = dateFormat(enddate, "yyyy-mm-dd");

            var foundduplicate = false;
            
            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && position && company) {         
                        let queryString1 = `select * from pegasus.studentworkexp where id = "${workexpid}" and studentid = "${studentid}"` ;          
                        let queryString2 = `INSERT INTO pegasus.studentworkexp (studentid, position, company, startdate, enddate, mode, industry, annualsalary, description) values ("${studentid}", "${position}", "${company}", "${startdate}", "${enddate}", "${mode}", "${industry}", "${annualsalary}", "${description}")`
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err })
                            }
                            else {
                                res.json({
                                    message: "success"
                                })
                                if(rows.length > 0) {
                                    foundduplicate = true;
                                }
                                if(foundduplicate) {
                                    queryString2 = `UPDATE pegasus.studentworkexp set position = "${position}", company = "${company}", startdate = "${startdate}", enddate = "${enddate}", mode = "${mode}", industry = "${industry}", annualsalary = "${annualsalary}", description = "${description}" where id = "${workexpid}" and studentid = "${studentid}"`
                                }
                                connection.query(queryString2, (err, rows, fields) => {
                                    if(err) {
                                        res.status(500).json({ message: err });
                                    }
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
    }
}

module.exports = studentworkexp