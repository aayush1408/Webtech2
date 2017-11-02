const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const connect = mongoose.connect('mongodb://localhost/student_details');
const db = mongoose.connection();
var StudentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    branch:{type:String},
    year:{type:String},
    username:{type:String},
    password:{type:String}
});

 module.exports = mongoose.model('Student',StudentSchema); 
