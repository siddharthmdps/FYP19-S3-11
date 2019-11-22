//const {env, sha1, mysql, mypool} = require('../../util')

const mysql = require('mysql');
const mypool = mysql.createPool({
    host:       process.env.Db_Host,
    user:       process.env.Db_User,
    password:   process.env.Db_Password,
    database:   process.env.Db_Source,
    port:       process.env.Db_Port,
    multipleStatements: true
});

const getstudentdocument = (req, res) => {
    const studentid = req.body.StudentID;
    const jobid = req.body.JobID;
    const status = req.body.Status;

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(studentid) {               
                let queryString = `select * from pegasus.savedstudentjob where studentid = "${studentid}" and jobid = "${jobid}"`
                connection.query(queryString, (err, rows, fields) => {
                    let queryString2 = `update pegasus.savedstudentjob set status = "${status}" where savedstudentjob.studentid = "${studentid}" and savedstudentjob.jobid = "${jobid}"`                    
                    if(err) {
                        return res.status(500).json({ message: err })
                    }
                    else if(rows.length < 1) {
                        queryString2 = `insert into savedstudentjob (jobid, studentid, status) values ("${jobid}","${studentid}","${status}") `
                    }
                    if(status.toLowerCase() == "unsaved") {
                        queryString2 = `delete from savedstudentjob where savedstudentjob.studentid = "${studentid}" and savedstudentjob.jobid = "${jobid}"`
                    }
                    if(status.toLowerCase() == "applied" || status.toLowerCase() == "pending") {
                        queryString2 = `delete from savedstudentjob where savedstudentjob.studentid = "${studentid}" and savedstudentjob.jobid = "${jobid}";delete from jobapplication where jobapplication.studentid = "${studentid}" and jobapplication.jobid = "${jobid}";insert into jobapplication (jobid, studentid, status) values ("${jobid}","${studentid}","pending") `
                    }
                    console.log(queryString2);
                    connection.query(queryString2, (err2, rows2, fields) => { 
                        if(err) {
                            res.status(500).json({ message: err })
                        }
                        else {
                            res.json({ message: "success" });
                        }
                    });
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

module.exports = getstudentdocument