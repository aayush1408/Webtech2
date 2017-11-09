const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
passport.use(new Strategy(                           //LocalStrategy
  function(username, password, cb) {
    User.findOne({username:username}, function(err, user) {
      if (err) { return cb(err); }
      if (!user) {
        console.log('No user found');
        return cb(null, false); }
      if (user.password != password) { 
        return cb(null, false); 
    }
      return cb(null, user);
    });

    
}));



passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({_id:id}, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
    console.log(user);  
  });
});


router.post('/',
            passport.authenticate('local', { failureRedirect: '/login' }),
            (req, res)=> {
              if(req.user.category === 'Student'){
              res.redirect('/');
            }
            else{
              res.render('add',{user : req.user });
            }

});


module.exports = router;
