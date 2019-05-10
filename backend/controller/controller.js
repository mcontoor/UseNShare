const app = require('express')();
const home = require('../routes/home');
const profile = require('../routes/profile');
const review = require('../routes/reviews');


app.use('/', home);

app.use('/profile', profile);

app.use('/review', review );



module.exports = app;