const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: '*'
}))


const jobList = [
    {
        title: 'Software Engineer',
        desc: 'Do Software stuff with the software',
        employerID: '@Google'
    },
    {
        title: 'Technician',
        desc: 'Fix Machines using tools and stuff',
        employerID: '@HP'
    },
    {
        title: 'System Analyst',
        desc: 'Analyze systems using algorithms',
        employerID: '@Facebook'
    },
    {
        title: 'Interior Designer',
        desc: 'Make sure everything looks nice indoors',
        employerID: '@FancyDesignCompany'
    }
]


// GET handlers
app.get('', (req, res) => {
    res.send('Backend server')
})

app.get('/joblist', (req, res) => {
    res.send(jobList)
})

// POST handlers
app.post('/postjob', (req, res) => {
    console.log(req.body)
    res.json({
        status: 'success'
    })
})

app.post('/createaccount', (req, res) => {
    console.log(`account details received`, req.body)

    res.json({
        status: 'received',
        received: req.body
    })
})


// Listening
const port = 3030
app.listen(port,() => {
    console.log(`Server is up on localhost:${port}`)
})