const mongoose = require('mongoose');
const validator = require('validator')

const userModel = new mongoose.Schema({
    name:{
            type:String,
            required:true,
            unique:true
        },
    email:{
        type:String,
        validate:validator.isEmail,
        unique:true
        
    },
    phone:Number,
    password:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model('User',userModel)