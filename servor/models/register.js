const mongoose = require('mongoose');
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20,
    },
    email:{
        type:String,
        // required:true,
    },
    contact:{
        type:Number,
        maxLength:15,
    },
    occupation:{
        type:String,
        // required:true,
    },
    address:{
        type:String,
        // required:true,
    },
    remarks:{
        type:String,
        // required:true,
    },
    registeredBy:{
        type:String,
        // required:true,
    },
})
const Register=mongoose.model("Register",registerSchema);
module.exports=Register;