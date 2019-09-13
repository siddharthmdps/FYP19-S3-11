const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')


// Defining paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') // frontend files HTML,CSS, frontend JS
const viewsPath = path.join(__dirname, '../templates/views')  // handlebars templates
const partialsPath = path.join(__dirname, '../templates/partials') // handlebars templates (headers, footers etc)
const loginPath = path.join(__dirname, '../api/routes/login')



// Setting up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Route handlers
app.get('', (req, res) => {
    res.send('Hello')
})


const loginRoutes = require(loginPath);
app.use('/login', loginRoutes)


module.exports = app