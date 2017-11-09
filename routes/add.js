const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const Intern =require('../models/intern.js');
router.post('/user',(req,res,next)=>{
    var name = req.body.name;
    var email = req.body.email;
    var branch = req.body.branch;
    var category = req.body.category;
    var year = req.body.year;
    var username = req.body.username;
    var password = req.body.password;
    var rpassword = req.body.rpassword;
    //var password_length = password.length;

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
        res.render('Form',{errors:errors,user:false});
        console.log(errors);
    }
    
    else{
        User.find({username:username}).exec((err,result)=>{
            if(result.length > 0){
                console.log(result);
                res.render('Form',{user:'User already exists',errors:false});
            }
        else{
            var newUser = new User({
            name:name,
            email:email,
            branch:branch,
            category:category,
            year:year,
            username:username,
            password:password
        });
        newUser.save((err)=>{
            if(err) throw err;
            else{
                console.log('saved');
                res.redirect('/');
            }
        });
    }//else block
    });
}
});

router.post('/internships',(req,res)=>{
    var about = req.body.about;
    var branch = req.body.branch;
    var calender = req.body.calender;
    var newIntern = new Intern({
        about:about,
        branch:branch,
        calender:calender
    });
    newIntern.save((err)=>{
        if(err) throw err;
        else{
            console.log('Saved');
            res.render('add',{user:false})
        }
    });
});

module.exports = router;
