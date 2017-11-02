const express = require('express');
const router = express.Router();
const Student = require('../models/student.js');
router.post('/student',(req,res,next)=>{
    var name = req.body.name;
    var email = req.body.email;
    var branch = req.body.branch;
    var year = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var rpassword = req.body.rpassword;
    var password_length = password.length;

    //validation
    req.checkBody('name','Name is required').notEmpty();
    req.checkBody('email','Email is required').notEmpty();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('username','Username is empty').notEmpty();
    req.checkBody('password','Password is required').notEmpty();
    req.checkBody('password','Password should atleast be 8 characters').len(8,30);
    req.checkBody('rpassword','Passwords should match').equals(password);
    var errors = req.validationErrors();
    if(errors){
        res.render('Form',{errors:errors});
        console.log(errors);
    }
    else{
        console.log('Cool till now');
    }
    

});
module.exports = router;
