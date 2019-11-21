// This file will do the routing

const express = require('express')
const router = express.Router()
const path = require('path')


// IMPORTING and SETTING UP PATHS
const currentPath = path.join(__dirname)
const login = require(`${currentPath}/login`)
const createUser = require(`${currentPath}/createUser`)
const employerRoutes = require(`${currentPath}/employer/employerRouter`)
const studentRoutes = require(`${currentPath}/student/studentRouter`)
const adminRoutes = require(`${currentPath}/admin/adminRouter`)

// ROUTING
router.post('/login', login)
router.post('/createuser', createUser)

router.use('/employer', employerRoutes)

router.use('/student', studentRoutes)

router.use('/admin', adminRoutes)

router.get('/', (req, res) => {
    console.log(`Received GET from ${currentPath}`)
    res.send('Welcome to Pegasus API')
})


module.exports = router