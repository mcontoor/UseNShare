const app = require('express')();
const home = require('../routes/home');
const profile = require('../routes/profile');
const review = require('../routes/reviews');
const product = require('../routes/product');
const upload = require('../routes/uploads');


app.use('/', home);

app.use('/profile/:id', profile);

app.use('/review', review );

app.use('/product/:product_id', product);

app.use('/upload', upload)



module.exports = app;