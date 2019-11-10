const {env, mysql, mypool} = require('../../util')

const editjob = (req,res) => {
    const jobID = parseInt(req.params.id)
    let {title, industry, description, requiredskills, dateposted, location} = req.body

    let queryString = `UPDATE pegasus.job
                        SET title="${title}", industry="${industry}", description="${description}",
                        requiredskills="${requiredskills}", dateposted="${dateposted}", location="${location}"
                        WHERE id=${jobID}`

    console.log(`Request to update job, jobID: ${jobID}`)

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
                        message: `job no.${jobID} updated`
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = editjob