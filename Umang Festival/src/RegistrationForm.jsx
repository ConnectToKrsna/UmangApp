import "./RegistrationForm.css"
import axios from 'axios'
import { useState, useEffect } from "react"


export default function RegistrationForm(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [occupation,setOccupation]=useState("")
    const [address,setAddress]=useState("")
    const [registeredBy,setRegisteredBy]=useState("")
    const [remarks,setRemarks]=useState("")

    useEffect(() => {
        // Reset state values when the component mounts or reloads
        setName('');
        setEmail('');
        setContact('');
        setOccupation('');
        setAddress('');
        setRegisteredBy('');
        setRemarks('');
      }, []);

    const validate=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if(name == ""){
            alert("Name cannot be empty ! ");
            return false
        }
        else if(email == ""){
            alert("Name cannot be empty ! ");
            return false
        }
        else if(!emailRegex.test(email)){
            alert("Invalid Email Address !")
            return false
        }
        else if(contact==""){
            alert("Contact cannot be Empty !")
            return false
        }
        else if(!phoneRegex.test(contact)){
            alert("Invalid Contact Info")
            return false
        }
        else{
            return true;
        }
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        let validated = await validate();
        if(validated==true){
            axios.post('/register',{name,email,contact,occupation,address,remarks,registeredBy})
            .then(res=>{
                if(res.data.name){
                    window.location.href = `https://pages.razorpay.com/pl_OTR30gjXUGdZ23/view?email=` + res.data.email + `&name=` + res.data.name + `&phone=` + res.data.contact;
                    
                }
            })
            .catch(err=>console.log(err))
        }
        
    }
    return(
        <>
        <div className="wrapper">
        <div className="video-bg">

        <video  autoPlay loop muted>
        <source src="https://res.cloudinary.com/dwneljbds/video/upload/v1718181670/Umang_is_back_AGAIN_howsthejosh_online-video-cutter.com_1_cmhxk6.mp4"/></video>

         </div>
         <div className="wrapper2">

        <div className="container-reg">
        <h1 className="form-title-reg">Umang Registration</h1>
        <form className='form1' onSubmit={handleSubmit} name="Registration-Form" id="Registration-Form">
            <div className="main-user-info">
            <div className="user-input-box">
                <label htmlFor="name">Name</label>
                <input  type="text" name="name" id="name"placeholder="Enter Full Name"
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="email">Email</label>
                <input  type="text" name="email"id="email" placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="contact">Contact</label>
                <input  type="text" name="contact"id="contact" placeholder="Enter Contact"
                onChange={(e)=>setContact(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="occupation">Occupation</label>
                <input type="text" name="occupation" id="occupation"placeholder="Enter Occupation"
                onChange={(e)=>setOccupation(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="address">Address</label>
                <input type="text" name="address"id="address" placeholder="Enter Address"
                onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="remarks">Remarks</label>
                <input type="text" name="remarks"id="remarks" placeholder="Enter Remarks"
                onChange={(e)=>setRemarks(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="registeredBy">Registered by</label>
                <input type="text" name="registeredBy"id="registeredBy" placeholder="Enter Register By"
                onChange={(e)=>setRegisteredBy(e.target.value)}/>
            </div>
        </div>
        <div className="form-submit-btn">
            <input type="submit" value="Register"/>
        </div>
        </form>
        </div>
    </div>
    </div>
        </>
    )
}