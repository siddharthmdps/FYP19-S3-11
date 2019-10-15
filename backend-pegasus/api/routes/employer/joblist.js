// return joblist matched by employer id
const joblistDummyJSON = require('./dummyJSON/joblist.json')

const getJobList = (req, res) => {
    res.send(joblistDummyJSON)
}

module.exports = {getJobList}