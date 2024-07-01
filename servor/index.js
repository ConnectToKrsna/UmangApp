const express=require("express")
const app=express();
const mongoose = require('mongoose');
const path=require("path")
const Register=require("./models/register.js")
app.use(express.urlencoded({extended :true}))
const cors=require('cors')
app.use(cors())
app.use(express.json())
const http=require("http");
main()
.then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
app.post("/register",(req,res)=>{
    // console.log(req)
    const {name,email,contact,occupation,
        address,remarks,registeredBy
    }=req.body;
    Register.findOne({email:email})
    .then(user=>{
        if(user){
            res.json("Already Have an Account")
        }
        else{
            Register.create({name:name,
                email:email,
                contact:contact,
                occupation:occupation,
                address:address,
                remarks:remarks,
                registeredBy:registeredBy})
                .then((res)=>{res.json("Account Created");req.send})
                .catch(err=>res.json(err))
        }
    }).catch(err=>res.json(err))
    // newRegistration.save().then(res=>{res.json("Registration is Done")})
    // .catch((err)=>{res.json(err)})
    // Register.insertOne({
    //     name:name,
    //         email:email,
    //         contact:contact,
    //         occupation:occupation,
    //         address:address,
    //         remarks:remarks,
    //         registeredBy:registeredBy,
    // }).then(res=>{res.json("Registration is Done")})
    // .catch((err)=>{res.json(err)})
    // res.send("Registration Done");

    // res.writeHead(200, { 'Content-Type': 'text/plain' });res.end();
    // res.redirect("./register");
    // res.headersSent();
    return;
    res.end("Registartion done")
    
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})