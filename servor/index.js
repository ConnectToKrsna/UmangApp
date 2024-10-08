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
// main()
// .then(()=>{
//     console.log("connection successful")
// }).catch(err => console.log(err));
// MongoDB connection
const uri = 'mongodb+srv://connecttokrishnanow:connecttokrishnanow@cluster0.klv9jyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// async function main() {
mongoose.connect(uri);  

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
// }

app.post("/register",(req,res)=>{
    // console.log(req)
    const {name,email,contact,occupation,
        address,remarks,registeredBy
    }=req.body;
    let dataObj={name,email,contact};
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
                .then(res.send(dataObj))
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
    //return;
    
    // res.send("Registartion done")
    
})

app.post('/update',async (req,res)=>{
    console.log('webhook triggered');
    //paidEmail = req.body.email;
    console.log(req.body.payload.payment.entity.email);
    console.log(req.rawHeaders[1]);
    if(req.rawHeaders[1] == 'umangapp.onrender.com'){

        paidEmail = req.body.payload.payment.entity.email;
        console.log(paidEmail)
        try {
            // Find the user by email and update their details
            const User = await Register.findOne({email:paidEmail})
            console.log(User);
    
                // Update the paid status
            User.paid = true;
    
            // // Save the updated user
            const updatedUser = await User.save();
            if (!updatedUser) {
              return res.status(404).json({ message: 'User not found' });
            }
        
            console.log('User updated successfully:', updatedUser);
            res.json({ message: 'User updated successfully', user: updatedUser });
          } catch (err) {
            console.error('Error updating user:', err);
            res.status(400).json({ error: err.message });
          }

    }else{
        res.send('not an umang registration');
    }

})

app.get("/wakeUp", async (req,res)=>{
    res.send("Yes I'm Awake, Chill out! Haribol!")
    console.log("Yes I'm Awake, Chill out! Haribol!")
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})

