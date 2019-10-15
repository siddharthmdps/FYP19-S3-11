// save a job under the given employer id

const postjob = (req, res) => { 
    console.log(`Received new job ad`,req.body)
    // STORE JSON (res.body) inside DB
    res.send({
        received: req.body
    })
}

module.exports = {postjob}