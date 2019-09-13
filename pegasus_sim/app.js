const express = require('express');
const app = express();

const loginRoutes = require('./api/routes/login');

const port = process.env.PORT || 3000

// Route handlers
app.get('', (req, res) => {
    res.send('Hello')
})

app.use('/login', loginRoutes)


module.exports = app