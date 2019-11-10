const {router, env, sha1, mysql, mypool} = require('../../util')

const getalljobs = (req,res) => {
    res.send('get all the jobs here')
}

module.exports = getalljobs