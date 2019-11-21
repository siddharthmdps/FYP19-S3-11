const {router, env, sha1, mysql, mypool} = require('../../util')

const deletecareertip = (req,res) => {
    const tipID = req.params.tipID
    //res.send('request to delete job, id: ' + id)
    console.log('Request to delete career tip, tipID: ' + tipID)

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `DELETE FROM pegasus.careertips WHERE id=${tipID}`
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.send(`successfully deleted career tip`)
                }
            })
        }
        connection.release()
    })
}

module.exports = deletecareertip