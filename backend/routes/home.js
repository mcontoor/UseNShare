const router = require('express').Router();
const db = require('../config/database');

router.get ('/', (req, res) => {
    db.query('SELECT * FROM products', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.post('/signin', (req, res) => {
    console.log("fhcjhgkhl", req.body);

})

router.get('/profile/1', (req, res) => {
    db.query('SELECT * FROM user where user_id=1', (err, data) => {
        if (err) throw err;
        res.json(data)
    })
})

module.exports = router;