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

const getemployability = require('./getemployability')
router.get('/getemployability', getemployability)

const getallcareertips = require('./getallcareertips')
router.get('/getallcareertips', getallcareertips)

const getallpolls = require('./getallpolls')
router.get('/getallpolls', getallpolls)

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

const updatecareertip = require('./updatecareertip')
router.put('/updatecareertip/:tipID', updatecareertip)

const updatepoll = require('./updatepoll')
router.put('/updatepoll/:pollID', updatepoll)

// POST
const addjob = require('./addjob')
router.post('/addjob', addjob)

const addcareertip = require('./addcareertip')
router.post('/addcareertip', addcareertip)

const addpoll = require('./addpoll')
router.post('/addpoll', addpoll)

router.get('/', (res) => {
    res.send('hello from backend server, admin route')
})

// DELETE
const deletecareertip = require('./deletecareertip')
router.delete('/deletecareertip/:tipID', deletecareertip)

const deletepoll = require('./deletepoll')
router.delete('/deletepoll/:id', deletepoll)

module.exports = router