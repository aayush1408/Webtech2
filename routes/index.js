const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
    console.log(req.user);
  res.render('index',{user : req.user });
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

    res.render('internships', { user: req.user });
  });


module.exports = router;
