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
        //console.log(req.body);
        var studentid = req.body.StudentID;
        var success = true;
        let queryString1 = `delete from pegasus.studentdocument where studentid = "${studentid}"` ;  
        mypool.getConnection( (error, connection) => {
            connection.query(queryString1, (err, rows, fields) => { 
                if(err) {
                    return res.status(500).json({ err });
                }
            });
            for(var i = 0; i < req.files.length; i++) {
                const documentid = req.body.DocumentID;
                const title = req.body.Title;
                var obj =  req.files[i];
                var link = obj.buffer;
                console.log(title);            
                console.log(studentid);
                const imagetype = req.body.FileType;

                var buffer = new Buffer.from(link).toString('base64');
                console.log(req.files.length);
                mypool.getConnection( (error, connection) => {
                    if(error) {
                        connection.release()
                        console.log(`Error getting mysql_pool connection: ${error}`)
                        throw error
                    }
                    else {
                        if(studentid && title) {        
                            var queryString2 = "INSERT INTO pegasus.studentdocument SET ?";
                            var insert = {
                                studentid: studentid,
                                title: title,
                                link: buffer,
                                imagetype: imagetype
                            };
                            connection.query(queryString2, insert, (err, rows, fields) => {
                                if(err) {
                                    res.status(500).json({ message: err });
                                    success = false;
                                    i = req.files.length + 1;
                                }
                            })                         
                            i++;
                        } else {
                            res.status(400).json({
                                message: "Bad Request! Invalid POST request!"
                            });
                            i = req.files.length + 1;
                        }   
                    }
                } )
            }
            if(success) {
                res.json({message: "success"});
            } 
            connection.release()        
        });
        return true
    })    
}

module.exports = studentdocument