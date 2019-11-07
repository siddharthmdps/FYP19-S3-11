const {router, env, sha1, mysql, mypool} = require('../../util')

const deleteemployer = (req,res) => {
    const id = req.params.id
    //res.send('request to delete employer, id: ' + id)

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            let queryString = `DELETE FROM pegasus.employer WHERE id=${id}`
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.send(`successfully deleted the user`)
                }
            })
        }
        connection.release()
    })
}

module.exports = deleteemployer