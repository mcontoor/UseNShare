const router = require('express').Router();
const db = require('../config/database');

router.get ('/', (req, res) => {
    db.query('SELECT * FROM products', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

module.exports = router;