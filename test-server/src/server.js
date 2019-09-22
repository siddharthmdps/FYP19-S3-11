const http = require('http')
const express = require('express')
const app = express()

// Route handlers
app.get('/', (req, res) => {
    const product = {
        name: "iPhone",
        model: "11",
        price: "1200$"
    }

    res.send(product)
})


// Server
const server = http.createServer(app)

const port = 3002
server.listen(port,() => {
    console.log(`Server is up on localhost:${port}`)
})