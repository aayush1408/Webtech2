const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const express = require('express');
const router = express.Router();
const Student = require('../models/student.js');


passport.use(new Strategy(                           //LocalStrategy
  function(username, password, cb) {
    Student.findOne({username:username}, function(err, user) {
      if (err) { return cb(err); }
      if (!user) {
        console.log('No user found');
        return cb(null, false); }
      if (user.password != password) { 
        // console.log(user);
        // console.log(password);
        // console.log(user.password);
        // console.log('Password is wrong');
        return cb(null, false); 
    }
      // console.log(user);

      return cb(null, user);
    });
  }));
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  Student.find({_id:id}, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


router.post('/student',
            passport.authenticate('local', { failureRedirect: '/login' }),
            (req, res)=> {
            res.redirect('/');
});

module.exports = router;
