const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

// Defining paths for Express config
const loginPath = path.join(__dirname, '../api/routes/login')
const loginRoutes = require(loginPath); // const loginRoutes = require('../api/routes/login');

// General path
const createUserPath = path.join(__dirname, '../api/routes/createUser')
const createUserRoutes = require(createUserPath);

// Path for Employer
const employerPath = path.join(__dirname, '../api/routes/employer/employer')
const employerRoutes = require(employerPath);

const postJobPath = path.join(__dirname, '../api/routes/employer/postjob')
const postJobRoutes = require(postJobPath);

const updateProfilePath = path.join(__dirname, '../api/routes/employer/updateprofile')
const updateProfileRoutes = require(updateProfilePath);

const jobListPath = path.join(__dirname, '../api/routes/employer/jobList')
const jobListRoutes = require(jobListPath);

// Path for Student
const studentPath = path.join(__dirname, '../api/routes/student/students')
const studentRoutes = require(studentPath);
//////////////////////////////////////////////////////////////////////////

// Route handlers
app.get('', (req, res) => {
    res.send('Hello from Express Server')
})

// Settings
app.use(express.urlencoded())
app.use(express.json())
const settings = {
    'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
    'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(settings));


// Route handlers
app.use('/login', cors(settings), loginRoutes)
app.use('/createUser', cors(settings), createUserRoutes)

// Employer
app.use('/employer', cors(settings), employerRoutes)
app.use('/employer/postjob', cors(settings), postJobRoutes)
app.use('/employer/updateprofile', cors(settings), updateProfileRoutes)
app.use('/employer/joblist', cors(settings), jobListRoutes)

// Student
app.use('/students', cors(settings), studentRoutes)


module.exports = app