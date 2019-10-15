const {env, sha1, mysql, mypool} = require('../../util')

const updateprofile = (req, res) => {
    const empID = parseInt(req.params.id)

    console.log(`Request to updte profile of empID: ${empID}`)

    // UPDATE JSON inside DB
    res.send({
        message: `Will update empID: ${empID}`
    })
}

module.exports = updateprofile