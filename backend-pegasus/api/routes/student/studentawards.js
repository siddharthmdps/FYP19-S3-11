const {router, env, sha1, mysql, mypool} = require('../../util')

var month_names =["Jan","Feb","Mar",
                  "Apr","May","Jun",
                  "Jul","Aug","Sep",
                  "Oct","Nov","Dec"];

var dateFormat = require('dateformat');                  

const studentawards = (req, res) => {
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const awardname = req.body[key].Award;
            var tmpdate = req.body[key].Date;
            tmpdate = tmpdate.toString().split(" ");
            var index = tmpdate[0];
            var year = tmpdate[1];
            var month = month_names.indexOf(index);
            const awarddesc = req.body[key].Description;

            var awarddate = new Date(year, month, 1);
            awarddate = dateFormat(awarddate, "yyyy-mm-dd");

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && awardname && year && month) {               
                        let queryString = `INSERT INTO pegasus.studentawards (studentid, awardname, awarddate, awarddescription) values ("${studentid}", "${awardname}", "${awarddate}", "${awarddesc}")`
                        connection.query(queryString, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err });
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
    res.json({
        message: "success"
    })
}

module.exports = studentawards