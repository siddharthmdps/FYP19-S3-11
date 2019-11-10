const {env, sha1, mysql, mypool} = require('../../util')

// save the new job under the given employer id
const postjob = (req, res) => {
    const job = req.body
    let currentDate = new Date()
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`

    mypool.getConnection( (error, connection) => {
        if(error) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${error}`)
            throw error
        }
        else {
            let queryString = `INSERT INTO pegasus.job
                                SET title="${job.title}", industry="${job.industry}",
                                    description="${job.description}", requiredskills="${job.requiredskills}",
                                    dateposted="${currentDate}",
                                empid = (
                                    SELECT id FROM pegasus.employer
                                    WHERE employer.id = "${job.empid}"
                                )`
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.json({
                        message: "success"
                    })
                }
            })
        }
        connection.release()
    } )
}

module.exports = postjob