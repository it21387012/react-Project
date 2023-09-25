import React, {useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



export default function AddStudent(){

   //Create variable to inputs

const [StudentName,setname] =useState("");
const [email,setemailaddress] =useState("");
const [password,setpassword] =useState("");
const [Age,setage] =useState("");
const [phonenumber,setphonenumber] =useState("");
const [gradeofstudy,setgradeofstudy] =useState("")
const [homeaddress,sethomeaddress] =useState("");

//send data to backend
 
function sendData(e){
    e.preventDefault();

    const newStudent = {
     StudentName,
      email,
      password,
      Age,
      phonenumber,
      gradeofstudy,
      homeaddress

    }
    //pass data to backend
  axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
  }).catch((err)=>{
    alert("unsucrssfull")
  })

}

    return(
        <div>
            <br></br>
            
        <div className="container">
        <div className="TOPIC">
                <h1>        ADD Student</h1>
            </div>
            <div className="title">

            <form onSubmit={sendData}>
    <div className="row">
        <div className="col-md-4">
            <label>Student Name:</label>
        </div>
        <div className="">
            <input type="text" required
                onChange={(e) => {
                    setname(e.target.value);
                }}></input>
        </div>
    </div>

    <div className="row">
        <div className="col-md-4">
            <label>Email Address:</label>
        </div>
        <div className="col-md-8">
            <input type="email" required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                onChange={(e) => {
                    setemailaddress(e.target.value);
                }}></input>
            <div className="invalid-feedback">
                Please enter a valid email address.
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-4">
            <label>Password</label>
        </div>
        <div className="col-md-8">
            <input type="password" required
                onChange={(e) => {
                    setpassword(e.target.value);
                }}></input>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <label>Age</label>
        </div>
        <div className="">
            <input type="number" required
                onChange={(e) => {
                    setage(e.target.value);
                }}></input>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <label>Phone Number:</label>
        </div>
        <div className="col-md-8">
            <input type="tel" required
                pattern="[0-9]{10}"
                onChange={(e) => {
                    setphonenumber(e.target.value);
                }}></input>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <label>Grade of Study</label>
        </div>
        <div className="">
            <input type="text" required
                onChange={(e) => {
                    setgradeofstudy(e.target.value);
                }}></input>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <label>Home Address</label>
        </div>
        <div className="">
            <input type="text" required
                onChange={(e) => {
                    sethomeaddress(e.target.value);
                }}></input>
        </div>
    </div>

               
                <Link to={'/Dashboard'}><button className="btn btn-danger">Cancel</button></Link>
                <button type="Submit" className="btn btn-primary">submit</button>
            </form>
            </div>
        </div>
        </div>
    )
}

