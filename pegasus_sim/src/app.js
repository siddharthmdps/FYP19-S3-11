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

// Setting up static directory to serve
app.use(express.static(publicDirectoryPath))

// Route handlers
app.get('', (req, res) => {
    res.render('index', {
        title: 'Pegasus@SIM'
    })
})

app.get('/signup', (req, res) => {
    res.render('signup', {
    })
})

app.get('/student', (req, res) => {
    res.render('student', {
        title: 'Pegasus@SIM : Student Portal'
    })
})

app.get('/employer', (req, res) => {
    res.render('employer', {
        title: 'Pegasus@SIM : Look for candidates',
        employer_postjob: 'Post Job Opening',
        employer_postjob_link: '/post-job'
    })
})
app.get('/post-job', (req, res) => {
    res.render('post-job')
})

app.get('/admin', (req, res) => {
    res.render('admin', {
        title: 'Pegasus@SIM : Admin Page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Pegasus@SIM : About'
    })
})

const loginRoutes = require(loginPath);
app.use('/login', loginRoutes)


module.exports = app