// This file will do the routing

const express = require('express')
const router = express.Router()
const path = require('path')

// PATHS
const currentPath = path.join(__dirname)
const loginRoutes = require(`${currentPath}/login`)
const createUserRoutes = require(`${currentPath}/createUser`)
const employerRoutes = require(`${currentPath}/employer/employerRouter`)
const studentRoutes = require(`${currentPath}/student/studentRouter`)

// ROUTING
router.use('/login', loginRoutes)
router.use('/createUser', createUserRoutes)

//router.use('/employer/joblist', require(`${currentPath}/jobList`))
router.use('/employer', employerRoutes)

router.use('/student', studentRoutes)

router.get('/', (req, res) => {
    console.log(`Received GET from ${currentPath}`)
    res.send('Hello from Express Server')
})

module.exports = router