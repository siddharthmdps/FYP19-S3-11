const {router, env, sha1, mysql, mypool} = require('../../util')

// SUB-ROUTES
// http://servername/admin/*
// GET
const getalljobs = require('./getalljobs')
router.get('/getalljobs', getalljobs)

const getallemployers = require('./getallemployers')
router.get('/getallemployers', getallemployers)

const getallstudents = require('./getallstudents')
router.get('/getallstudents', getallstudents)

const getsuccessfulapplications = require('./getsuccessfulapplications')
router.get('/getsuccessfulapplications', getsuccessfulapplications)


// PUT
const editemployer = require('./editemployer')
router.put('/editemployer/:id', editemployer)

const editstudent = require('./editstudent')
router.put('/editstudent/:id', editstudent)

const editjob = require('./editjob')
router.put('/editjob/:id', editjob)

const deleteemployer = require('./deleteemployer')
router.put('/deleteemployer/:id', deleteemployer)

const deletestudent = require('./deletestudent')
router.put('/deletestudent/:id', deletestudent)

const deletejob = require('./deletejob')
router.put('/deletejob/:id', deletejob)

// POST
const addjob = require('./addjob')
router.post('/addjob', addjob)

router.get('/', (req, res) => {
    res.send('hello from backend server, admin route')
})

module.exports = router