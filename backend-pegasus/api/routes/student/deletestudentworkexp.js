const {env, sha1, mysql, mypool} = require('../../util')

const deletestudentworkexp = (req, res) => {
    const studentid = req.body.studentid;
    const workexpid = req.body.WorkExpID;
    const position = req.body.Position;
    const company = req.body.Company;
    var startdate = req.body.StartDate;
    var enddate = req.body.EndDate;
    const mode = req.body.Mode;
    const industry = req.body.Industry;
    const annualsalary = req.body.AnnualSalary;
    const description = req.body.Description;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {   
                let queryString1 = `delete from pegasus.studentworkexp where id = "${workexpid}" and studentid = "${studentid}"` ;   
                if(!studentid) {
                    queryString1 = `delete from pegasus.studentworkexp where studentid = "${studentid}"` ;   
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

module.exports = deletestudentworkexp