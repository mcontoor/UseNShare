const app = require('express')();
const home = require('../routes/home');
const profile = require('../routes/profile');
const review = require('../routes/reviews');
const product = require('../routes/product');
const messages = require('../routes/messages');


app.use('/', home);

app.use('/profile/:id', profile);

app.use('/review', review );

app.use('/product', product);

app.use('/messages', messages);



module.exports = app;