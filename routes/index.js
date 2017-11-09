const express = require('express');
const router = express.Router();
const Intern = require('../models/intern.js');
/* GET home page. */
router.get('/', (req, res, next)=> {
    console.log(req.user);
  res.render('index',{user : req.user ,data:false});
});

//Get the form
router.get('/Form',(req,res,next)=>{
    res.render('Form',{errors:false,user:false});
});
router.get('/login',(req,res,next)=>{
    res.render('Login');
})
//Internships
router.get('/internships',
  require('connect-ensure-login').ensureLoggedIn(),  //connect-ensure-login module
  function(req, res){
    console.log('internships');
    console.log(req.user);
    Intern.find().exec((err,data)=>{
      if (err) throw err;
      else{
          res.render('internships', { user: req.user ,data:data});    
      }
    })
    
  });

//INternship form
router.get('/internships/form',require('connect-ensure-login').ensureLoggedIn(),(req,res)=>{
  res.render('add');
})


module.exports = router;
