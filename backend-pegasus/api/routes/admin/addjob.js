const {env, mysql, mypool} = require('../../util')

const addjob = (req,res) => {
    
    let jobInfo = req.body
    console.log(`Request to add a new job`, jobInfo)
    
    let {empid, title, industry, description, requiredskills, location, yearsofexperience} = req.body 
    let currentDate = new Date()
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`


    let queryString = ` INSERT INTO pegasus.job 
                        SET title='${title}', industry='${industry}', description='${description}',
                        requiredskills='${requiredskills}', dateposted='${currentDate}', location='${location}', yearsofexperience=${yearsofexperience},
                        empid = (
                            SELECT id FROM pegasus.employer
                            WHERE employer.id = '${empid}'
                        )`


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
                        body: jobInfo
                    })
                }
            })
        }
        connection.release()
    })
}

module.exports = addjob