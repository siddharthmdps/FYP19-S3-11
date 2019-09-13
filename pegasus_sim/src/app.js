const express = require('express')
const path = require('path')
const app = express()

// Defining paths for Express config
const loginPath = path.join(__dirname, '../api/routes/login')
const loginRoutes = require(loginPath); // const loginRoutes = require('../api/routes/login');



// Route handlers
app.get('', (req, res) => {
    res.send('Hello')
})


app.use('/login', loginRoutes)


module.exports = app