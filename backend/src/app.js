const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

// Defining paths for Express config
const routerPath = path.join(__dirname, '../api/routes')
const loginRoutes = require(`${routerPath}/login`)
const createUserRoutes = require(`${routerPath}/createUser`)
const employerRoutes = require(`${routerPath}/employer/employerRouter`)


// Settings
app.use(express.urlencoded({ extended: true }))
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
// app.use('/login', cors(settings), loginRoutes)
// app.use('/createUser', cors(settings), createUserRoutes)

// Employer
app.use('/employer', employerRoutes)

// Student
// app.use('/students', cors(settings), studentRoutes)

app.get('/', (req, res) => {
    console.log('Received get ')
    res.send('Hello from Express Server')
})

module.exports = app