const app = require('express')();
const home = require('../routes/home');

app.use('/', home);

module.exports = app;