const {express, router, env, sha1, mysql, mypool} = require('../../util')

router.post('/',(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Request to updte profile`, req.body)

    // UPDATE JSON inside DB
    res.send({
        received: req.body
    })
});

module.exports = router