import React, {useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
export default function AddAdmin(){

   //Create variable to inputs

const [AdminName,setAdminName] =useState("");
const [lname,setlname] =useState("");
const [nicNum,setnicNum] =useState("");
const [age,setage] =useState("");
const [phoneNumber,setphoneNumber] =useState("");
const [experience,setexperience] =useState("")
const [password,setpassword] =useState("");
const navigate = useNavigate();
//send data to backend
 
function sendData(e){
    e.preventDefault();

    const newAdmin = {
     AdminName,
     lname,
     nicNum,
     age,
     phoneNumber,
     experience,
     password
    }
            //first number validate
            if(!/^[a-zA-Z]+$/.test(AdminName)){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'warning',
                    title: 'First name should contain only letters'
                })
            }
            //last name validate
            if(!/^[a-zA-Z]+$/.test(lname)){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'warning',
                    title: 'Last name should contain only letters'
                })
            }
            //email validate
            // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test()) {
            //     alert("Please enter a valid email address");
            // }
            //phone Number validate
            if (!/^[0-9]{10}$/.test(phoneNumber)) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'warning',
                    title: 'Phone number should contain only 10 numbers'
                })
            }
    //pass data to backend
  axios.post("http://localhost:8070/admin/add",newAdmin).then(()=>{
    Swal.fire(
        'Acount Added!',
        'You have successfully added a acount.',
        'success'
    )
    
  }).catch((err)=>{
    Swal.fire(
        'Acount Added Unsuccessfully',
        'Please try again !!',
        'error'
    )
  })
navigate('/Admindashboard')
}

    return(
        <div>
        <br></br>
            
        <div className="container">
            <div className="TOPIC">
                    <h1> Admin Register</h1>
                </div>
                <div className="title">

                <form onSubmit={sendData}>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Admin Name:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required 
                            onChange={(e)=>{
                                setAdminName(e.target.value);
                            }}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label>Last name:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required 
                            onChange={(e)=>{
                                setlname(e.target.value);
                            }}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label>NIC number</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required
                            onChange={(e)=>{
                                setnicNum(e.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Age</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required
                            onChange={(e)=>{
                                setage(e.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Phone Number :</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required
                            onChange={(e)=>{
                                setphoneNumber(e.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Year of experience</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required
                            onChange={(e)=>{
                                setexperience(e.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Passwoard</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" required
                            onChange={(e)=>{
                                setpassword(e.target.value);
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
