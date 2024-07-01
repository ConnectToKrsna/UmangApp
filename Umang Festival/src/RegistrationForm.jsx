import "./RegistrationForm.css"
import axios from 'axios'
import { useState } from "react"
export default function RegistrationForm(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [occupation,setOccupation]=useState("")
    const [address,setAddress]=useState("")
    const [registeredBy,setRegisteredBy]=useState("")
    const [remarks,setRemarks]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/register',{name,email,contact,occupation,address,remarks,registeredBy})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <>
        <div className="container-reg">
        <h1 className="form-title-reg">Umang Registration</h1>
        <form onSubmit={handleSubmit} name="Registration-Form" id="Registration-Form">
            <div className="main-user-info">
            <div className="user-input-box">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"placeholder="Enter Full Name"
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"id="email" placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="user-input-box">
                <label htmlFor="contact">Contact</label>
                <input type="text" name="contact"id="contact" placeholder="Enter Contact"
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
        </>
    )
}