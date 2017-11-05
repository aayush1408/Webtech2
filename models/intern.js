const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const connect = mongoose.connect('mongodb://localhost/student_details');
const db = mongoose.connection;
var InternSchema = new mongoose.Schema({
    teacher_name:{type:String},
    about:{type:String},
    date: { type : Date, default: Date.now },
    branch:{type:String}
        });

 module.exports = mongoose.model('Intern',InternSchema); 
