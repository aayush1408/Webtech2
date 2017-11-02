const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Express' });
});
//Get the form
router.get('/Form',(req,res,next)=>{
    res.render('Form',{errors:false});
});
module.exports = router;
