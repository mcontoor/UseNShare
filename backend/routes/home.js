const router = require('express').Router();
const db = require('../config/database');

router.get ('/', (req, res) => {
    db.query('SELECT * FROM products', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.post('/signin', (req,res) => {
    console.log(req.body.data);
    var uid = req.body.data.user.uid;
    var first_name = req.body.data.user.displayName.split(' ')[0];
    var last_name = req.body.data.user.displayName.split(' ')[1];
    var photoURL = req.body.data.user.photoURL;
    var email = req.body.data.user.email;
    var phoneNumber = req.body.data.user.phoneNumber;
    var address = req.body.data.user.isAnonymous;
    var google_location = req.body.data.user.authDomain;
    var address2 = req.body.data.user.emailVerified;
    console.log(uid, first_name, last_name, phoneNumber, email, photoURL);
    if(req.body.data.user.isNewUser == true){
        db.query(`INSERT INTO user (uid, email, first_name, last_name, photoURL) VALUES ('${uid}','${email}','${first_name}','${last_name}','${photoURL}')`, (err, data) => {
            if(err) {
                throw err;
            };
            console.log('db updated');
        })
    }
})

module.exports = router;