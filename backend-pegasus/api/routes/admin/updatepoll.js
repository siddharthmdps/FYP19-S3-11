const {env, mysql, mypool} = require('../../util')

const updatepoll = (req,res) => {
    const pollID = req.params.pollID
    let {question, option1, option2, option3} = req.body 

    let queryString = `UPDATE pegasus.poll
                        SET question='${question}', option1='${option1}', option2='${option2}', option3="${option3}"
                        WHERE pollid=${pollID}`

    console.log(`Request to update poll no: ${pollID}`)

    // UPDATE JSON inside DB
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
                        message: `tip no.${pollID} updated`
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = updatepoll