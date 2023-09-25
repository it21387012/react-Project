import React, {useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./css/addemployee.css"
import Swal from 'sweetalert2'

export default function AddEmployee(){

   //Create variable to inputs

const [EmployeeName,setename] =useState("");
const [email,setemailaddress] =useState("");
const [password,setpassword] =useState("");
const [age,setage] =useState("");
const [phonenumber,setphonenumber] =useState("");
const [employeeid,setemployeeid] =useState("")
const [homeaddress,sethomeaddress] =useState("");

//send data to backend
 
function sendData(e){
    e.preventDefault();

    const newEmployee = {
     EmployeeName,
      email,
      password,
      age,
      phonenumber,
      employeeid,
      homeaddress

    }
    //pass data to backend
  axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
    Swal.fire(
        'New Employee Added!',
        'You have successfully Added a Employee ',
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
                <h1>Assign New Work</h1>
            </div>
            <div className="title">

            <form onSubmit={sendData}>
                
            <div className="row">
                    <div className="col-md-4">
                        <label>Employee ID</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setemployeeid(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Employee Name:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required 
                        onChange={(e)=>{
                            setename(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Work Description</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required 
                        onChange={(e)=>{
                            setemailaddress(e.target.value);
                        }}></input>
                    </div>
                </div>

            
               
                
                <div className="row">
                    <div className="col-md-4">
                        <label>Deadline :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="date" required
                        onChange={(e)=>{
                            setphonenumber(e.target.value);
                        }}></input>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <label>Priority:</label>
                    </div>
                    <div className="col-md-8">
                        <select required
                        onChange={(e)=>{
                            sethomeaddress(e.target.value);
                        }}>
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        </select>
                    </div>
                </div>
               

               
                <Link to={'/EmployeeDashboard'}><button className="btn btn-danger">Cancel</button></Link>
                <button type="Submit" className="btn btn-primary">submit</button>
            </form>
            </div>
        </div>
        </div>
    )
}
