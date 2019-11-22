const {env, sha1, mysql, mypool} = require('../../util')
var multer = require('multer')

var storage = multer.memoryStorage();

var upload = multer({ storage: storage }).array('file');

const studentdocument = (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err)
        } else if (err) {
          return res.status(500).json(err)
        }
        //console.log(req.files[0].buffer);
        console.log(req.body);
        for(var i = 0; i < req.files.length; i++) {
            const studentid = req.body.StudentID;
            const documentid = req.body.DocumentID;
            const title = req.body.Title;
            var obj =  req.files[i];
            var link = obj.buffer;
            //console.log(link);            
            const imagetype = req.body.FileType;

            var buffer = new Buffer.from(link).toString('base64');
            //console.log(Buffer.from(link).toString('base64'));
            mypool.getConnection( (error, connection) => {
                if(error) {
                    connection.release()
                    console.log(`Error getting mysql_pool connection: ${error}`)
                    throw error
                }
                else {
                    if(studentid && title) {      
                        let queryString1 = `delete from pegasus.studentdocument where id = "${documentid}" and studentid = "${studentid}"` ;    
                        var queryString2 = "INSERT INTO pegasus.studentdocument SET ?";
                        var insert = {
                            studentid: studentid,
                            title: title,
                            link: buffer,
                            imagetype: imagetype
                        };
                        //console.log(queryString2);
                        //queryString2 = `INSERT INTO pegasus.studentdocument (studentid, title, link, imagetype) values ("${studentid}", "${title}", "${link}", "${imagetype}")`
                        connection.query(queryString1, (err, rows, fields) => {
                            if(err) {
                                res.status(500).json({ err });
                                i = req.files.length + 1;
                            }
                            connection.query(queryString2, insert, (err, rows, fields) => {
                                if(err) {
                                    res.status(500).json({ message: err });
                                    i = req.files.length + 1;
                                }
                                else {
                                    res.json({
                                        message: "success"
                                    })
                                }
                            }) 
                        }) 
                    } else {
                        res.status(400).json({
                            message: "Bad Request! Invalid POST request!"
                        });
                    }   
                    connection.release() 
                }
            } )
            i++;
        }
        return true
    })    
}

module.exports = studentdocument