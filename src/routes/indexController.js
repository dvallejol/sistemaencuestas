//importamos el framework
const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=>{
    //res.send('Welcome to the API');
    res.render('index/index');
});

module.exports = router;

