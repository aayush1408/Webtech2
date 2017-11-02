const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Get the forms
router.get('/Form',(req,res,next)=>{
    res.render('Form');
});
module.exports = router;
