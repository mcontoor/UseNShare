const router = require('express').Router();
const db = require('../config/database');

router.get ('/', (req, res) => {
    db.query('SELECT * FROM products', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

<<<<<<< HEAD
router.get('/check',(req,res) => {
    db.query('SELECT * FROM reviews', (err,data) => {
        if (err) throw err;
        res.json(data);
    })
});

router.get ('/product/:id', (req, res) => {
    db.query('SELECT products.product_id,products.name,products.price,products.description,products.image,products.size,products.user_id,products.address,products.google_location,reviews.user_name,reviews.product_id,reviews.review,reviews.rating FROM products INNER JOIN reviews ON products.user_id = reviews.user_id', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.get ('/profile', (req,res) => {
    db.query('SELECT * FROM user', (err,data) => {
        if (err) throw err;
        res.json(data);
    })
});

router.delete('/category/:id', (req,res) => {
    db.query('DELETE FROM products where category_id =2', (err,data) =>{
        if (err) throw err;
        res.json(data);
    })
})

router.get('/products/rent', (req,res) => {
    db.query('SELECT * FROM rent', (err,data)=> {
        if (err) throw err;
        res.json(data);
    })
})

router.get('/products/second_buy', (req,res) => {
    db.query('SELECT * FROM second_buy', (err,data)=> {
        if (err) throw err;
        res.json(data);
    })
})

router.post('/products', (req,res) => {
    db.query('INSERT INTO products VALUES (kurti,2000,floral kurti,,30,3,3,rocktown colony,xyserefdc,) ', (req,res) => {
        if(err) throw err;
        res.json(data);
    })
=======
router.post('/signin', (req, res) => {
    console.log("fhcjhgkhl", req.body);

>>>>>>> 86df25044a58321acf0963b7f40cec957010232d
})

module.exports = router;