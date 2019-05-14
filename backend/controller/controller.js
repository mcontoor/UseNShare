const app = require('express')();
const home = require('../routes/home');
const profile = require('../routes/profile');
const review = require('../routes/reviews');
const product = require('../routes/product');


app.use('/', home);

app.use('/profile/:id', profile);

app.use('/review', review );

app.use('/product/:product_id', product);



module.exports = app;