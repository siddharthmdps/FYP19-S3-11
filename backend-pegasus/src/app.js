const express = require('express')
const path = require('path')
const app = express({ strict: true })
const cors = require('cors')


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


// Route handler
app.use('/', require(path.join(__dirname, '../api/routes/')))


module.exports = app