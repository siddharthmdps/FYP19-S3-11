const {router, env, sha1, mysql, mypool} = require('../../util')

// SUB-ROUTES
// http://servername/employer/*
// GET
const getJobList = require('./joblist')
router.get('/joblist/:id', getJobList)

// POST
const postjob = require('./postjob')
router.post('/postjob', postjob)

const updateprofile = require('./updateprofile')
router.post('/updateprofile', updateprofile)

// http://servername/employer
// to provide employer info
router.get('/:id',(req, res) => {
    const empID = req.params.id
    console.log(`Request for employer info, empID ${empID}`)
    
    if( !empID ) {
        res.send ('Please provide employer ID')
    }
    else {
        mypool.getConnection( (error, connection) => {
            if(error) {
                connection.release()
                console.log(`Error getting mysql_pool connection: ${error}`)
                throw error
            }
            else {
                var queryString = `SELECT * FROM pegasus.employer WHERE id=${empID}`
                connection.query( queryString, (error, rows, fields) => {
                    if(error) {
                        res.status(500).json({ message: error })
                    }
                    if(rows && rows.length > 0) {
                        res.json({
                            message: 'success',
                            body: rows
                        })
                    }
                    else if( !rows || rows.length == 0 ) {
                        res.status(200).json({
                            message: 'Not found'
                        })
                    }
                } )
            }
        } )
    }
})

module.exports = router