const express = require('express');
const router = express.Router();

//Logout student
router.get('/student',
  function(req, res){
    req.logout();
    res.redirect('/'); //Inside a callback… bulletproof!
  });


module.exports = router;
