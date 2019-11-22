const express = require('express')
const path = require('path')
const app = express({ strict: true })
const cors = require('cors')
var multer = require('multer')

/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
    //console.log(file);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
    //console.log(file);
  }
})*/

var storage = multer.memoryStorage();

var upload = multer({ storage: storage }).single('file')

const env = require('dotenv').config({
  path: './src/Config.env'
});
const mysql = require('mysql');

const mypool = mysql.createPool({
  host:       process.env.Db_Host,
  user:       process.env.Db_User,
  password:   process.env.Db_Password,
  database:   process.env.Db_Source,
  port:       process.env.Db_Port
});

app.post('/uploadstudentpicture/:sid',function(req, res) {

  var studentid = req.params.sid
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    console.log(req.file);
    //console.log(req.body);
    var obj = req.file.buffer;
    var buffer = new Buffer.from(obj).toString('base64');
      var queryString1 = `UPDATE pegasus.student SET profileimage = "${buffer}" where id = "${studentid}"`;
      var insert = {
          profileimage: buffer
      };
      mypool.getConnection((error, connection) => {
        connection.query(queryString1, (err, rows, fields) => {
          //console.log(queryString1);
          if(err) {
              res.status(500).json({ err });
          }
          else {
            res.json({
                message: "success"
            })
          } 
        }) 
      });
    })
});

// Settings
const settings = {
  'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
  'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(settings));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Route handler
app.use('/', require(path.join(__dirname, '../api/routes/')))


module.exports = app