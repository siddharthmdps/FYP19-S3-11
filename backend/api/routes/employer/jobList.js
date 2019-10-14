const express = require('express');
const router = express.Router();

const env = require('dotenv').config({
    path: './src/Config.env'
});
const sha1 = require('sha1');
const mysql = require('mysql');

const mypool = mysql.createPool({
    host: process.env.Db_Host,
    user: process.env.Db_User,
    password: process.env.Db_Password,
    database: process.env.Db_Source,
    port: process.env.Db_Port
});

// this is dummy data
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

// to return a list of jobs posted by this particular employer
// will use username
router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Request for joblist received`)
    res.send(jobList)
});

module.exports = router;