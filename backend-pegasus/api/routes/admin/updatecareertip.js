const {env, mysql, mypool} = require('../../util')

const updatecareertip = (req,res) => {
    const tipID = parseInt(req.params.tipID)
    let {title, url} = req.body

    let queryString = `UPDATE pegasus.careertips
                        SET title="${title}", url="${url}"
                        WHERE id=${tipID}`

    console.log(`Request to update career tip: ${tipID}`)

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
                        message: `tip no.${tipID} updated`
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = updatecareertip