const http = require('http')
const app = require('./app')

const env = require('dotenv').config({
    path: './Config.env'
})

const port = process.env.PORT || 3000

const server = http.createServer(app)

console.log('Server is up on localhost port ' + port)
server.listen(port)