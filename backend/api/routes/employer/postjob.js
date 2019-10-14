const {express, router, env, sha1, mysql, mypool} = require('../../util')

router.get('/', (req,res) => {
    console.log('get request /employer/postjob')
    res.send('Hello from /employer/postjob')
})

router.post('/', (req, res ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Received new job ad`,req.body)

    // STORE JSON inside DB
    res.send({
        received: req.body
    })
})

module.exports = router;