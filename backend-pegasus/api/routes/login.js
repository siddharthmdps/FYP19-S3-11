const { env, sha1, mysql, mypool} = require('../util')

const login = (req,res) => {
    const username = req.body.username.toLowerCase()
    const password = sha1(req.body.password)
    var usertype = req.body.usertype.toLowerCase()
    res.setHeader('Access-Control-Allow-Origin', '*');
    var usertypeid = req.body.usertype + "id";

    console.log('login request!',req.body)

    // Search in corresponding table based on usertype
    // Respond with user ID
    mypool.getConnection( (error, connection) => {
        console.log('Login request')
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            if(username && password){
                var queryString = `SELECT * FROM pegasus.${usertype} WHERE username='${username}' && password='${password}'`
                connection.query (queryString, (error, rows, fields) => {
                    if(error) {
                        res.status(500).json({ message: error })
                    }
                    if(rows && rows.length > 0) {
                        //var response = '{' + usertypeid + ' : ' + rows[0]["id"] + '}' 

                        let result = rows[0]
                        delete result['password']

                        res.json({
                            message: 'success',
                            body: result
                        })
                    }
                    else if( !rows || rows.length == 0 ) {
                        res.status(200).json({
                            message: 'Not found'
                        })
                    }
                })
            }
            connection.release()
        }
    } )
}


module.exports = login;