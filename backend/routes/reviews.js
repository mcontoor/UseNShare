const router = require('express').Router();
const db = require('../config/database');

router.get('/',(req,res) => {
    db.query('SELECT * FROM reviews', (err,data) => {
        if (err) throw err;
        res.json(data);
    })
});

router.delete('/delete/:user_name',(req,res)=>{
   console.log(req.params.email);
    db.query(`DELETE FROM reviews where user_name = '${req.params.user_name}'`, (err,data) => {
        if (err) throw err;
        console.log('review deleted successfully');
    })                                                         
})

// router.delete("/delete /:user_name", function(req , res){
//     var query = ("DELETE FROM [reviews] WHERE user_name=" + req.params.user_name, (err,data) => {
//         if(err) throw err;
//         console.log('review deleted successfully');
//     });
//     // executeQuery (res, query);
// });

module.exports = router;