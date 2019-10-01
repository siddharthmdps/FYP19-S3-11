const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')

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
    }
]


// Route handlers
app.get('/', (req, res) => {

    res.send(jobList)
})


// Listening
const port = 3030
app.listen(port,() => {
    console.log(`Server is up on localhost:${port}`)
})