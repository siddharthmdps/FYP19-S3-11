const {env, sha1, mysql, mypool} = require('../../util')

var month_names =["Jan","Feb","Mar",
                  "Apr","May","Jun",
                  "Jul","Aug","Sep",
                  "Oct","Nov","Dec"];

var dateFormat = require('dateformat');

const studentawards = (req, res) => {    
    for(var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            const studentid = req.body[key].StudentID;
            const certid = req.body[key].CertificateID;
            const certname = req.body[key].Name;
            const issuedby = req.body[key].IssuedBy;
            
            var tmpdate = req.body[key].IssueDate;
            tmpdate = tmpdate.toString().split(" ");
            var index = tmpdate[0];
            var year = tmpdate[1];
            var month = month_names.indexOf(index);
            var issueddate = new Date(year, month, 1);
            issueddate = dateFormat(issueddate, "yyyy-mm-dd");

            tmpdate = req.body[key].ValidUntil;
            tmpdate = tmpdate.toString().split(" ");
            index = tmpdate[0];
            year = tmpdate[1];
            month = month_names.indexOf(index);
            var validuntil = new Date(year, month, 1);
            validuntil = dateFormat(validuntil, "yyyy-mm-dd");

            var foundduplicate = false;

            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && certname && issuedby && year && month) {    
                        let queryString1 = `select * from pegasus.studentcertificate where id = "${certid}" and studentid = "${studentid}"` ;           
                        let queryString2 = `INSERT INTO pegasus.studentcertificate (studentid, certificatename, issuedby, issueddate, validuntil) values ("${studentid}", "${certname}", "${issuedby}", "${issueddate}", "${validuntil}")`
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ message: err })
                            }
                            if(rows.length > 0) {
                                foundduplicate = true;
                            }
                            if(foundduplicate) {
                                queryString2 = `UPDATE pegasus.studentcertificate set certificatename = "${certname}", issuedby = "${issuedby}", issueddate = "${issueddate}", validuntil = "${validuntil}" where id = "${certid}" and studentid = "${studentid}"`
                            }
                            connection.query(queryString2, (err, rows, fields) => {
                                if(err) {
                                    res.status(500).json({ message: err });
                                }
                            }) 
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