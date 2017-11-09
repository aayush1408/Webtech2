const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const connect = mongoose.connect('mongodb://localhost/student_details');
const db = mongoose.connection;
var InternSchema = new mongoose.Schema({
    about:{type:String},
    calender: { type : String},
    branch:{type:String}
        });

 module.exports = mongoose.model('Intern',InternSchema); 
