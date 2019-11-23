const {env, mysql, mypool} = require('../../util')

const addpoll = (req,res) => {
    
    let pollInfo = req.body
    console.log(`Request to add a new poll`, pollInfo)
    
    let {question, option1, option2, option3} = req.body 

    let queryString = ` INSERT INTO pegasus.poll 
                        SET question='${question}', option1='${option1}', option2='${option2}', option3='${option3}'`


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
                        body: pollInfo
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = addpoll