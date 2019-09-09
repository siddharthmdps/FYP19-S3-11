const express = require('express');
const app = express();

const loginRoutes = require('./api/routes/login');

app.use('/login', loginRoutes);

module.exports = app;