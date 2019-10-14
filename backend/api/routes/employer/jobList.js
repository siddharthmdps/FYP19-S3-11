const {express, router, env, sha1, mysql, mypool} = require('../../util')

// this is dummy data
const jobList = [
    {
        title: 'Software Engineer',
        desc: 'Do Software stuff with the software',
        employerID: '@Google'
    },
    {
        title: 'Technician',
        desc: 'Fix Machines using tools and stuff',
        employerID: '@HP'
    },
    {
        title: 'System Analyst',
        desc: 'Analyze systems using algorithms',
        employerID: '@Facebook'
    },
    {
        title: 'Interior Designer',
        desc: 'Make sure everything looks nice indoors',
        employerID: '@FancyDesignCompany'
    }
]

// to return a list of jobs posted by this particular employer
// will use username
router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Request for joblist received`)
    res.send(jobList)
});

module.exports = router;