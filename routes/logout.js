const express = require('express');
const router = express.Router();

//Logout student
router.get('/',
  function(req, res){
    req.logout();
    res.redirect('/'); //Inside a callback… bulletproof!
  });


module.exports = router;
