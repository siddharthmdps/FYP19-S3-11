const {env, mysql, mypool} = require('../../util')

const addcareertip = (req,res) => {
    
    let tipInfo = req.body
    console.log(`Request to add a new career tip`, tipInfo)
    
    let {title, url} = req.body 
    let currentDate = new Date()
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`


    let queryString = ` INSERT INTO pegasus.careertips
                        SET title='${title}',  url="${url}", dateposted="${currentDate}" `


    // INSERT JSON INFO DB
    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.send({
                        message: 'added',
                        body: tipInfo
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = addcareertip