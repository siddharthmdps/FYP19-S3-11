const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

// Defining paths for Express config
const loginPath = path.join(__dirname, '../api/routes/login')
const loginRoutes = require(loginPath); // const loginRoutes = require('../api/routes/login');

const createUserPath = path.join(__dirname, '../api/routes/createUser')
const createUserRoutes = require(createUserPath);

const employerPath = path.join(__dirname, '../api/routes/employer')
const employerRoutes = require(employerPath);

const studentPath = path.join(__dirname, '../api/routes/students')
const studentRoutes = require(studentPath);

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

app.use('/createUser', settings), createUserRoutes)

app.use('/employer', cors(settings), employerRoutes)

app.use('/students', cors(settings), studentRoutes)


module.exports = app