const {env, mysql, mypool} = require('../../util')

const submitpoll = (req,res) => {
    const pollID = parseInt(req.params.pollID)
    const choice = req.params.choice

    let queryString = `UPDATE pegasus.poll SET option${choice}votes=(option${choice}votes+1) WHERE pollid=${pollID}`

    console.log(`New poll submitted, pollID: ${pollID}`)

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
                        message: `success`
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = submitpoll