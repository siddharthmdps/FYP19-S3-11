const http = require('http')
const app = require('./src/app')
const env = require('dotenv').config({
    path: './src/Config.env'
})

const port = process.env.PORT || 3030

const server = http.createServer(app)

server.listen(port, () => {
    console.log ('Server is up on localhost port ' + port)
})
