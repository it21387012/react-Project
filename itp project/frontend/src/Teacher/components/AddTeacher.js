import React, {useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function AddTeacher(){

   //Create variable to inputs

const [TeacherName,setname] =useState("");
const [email,setemailaddress] =useState("");
const [gender,setgender] =useState("");
const [Age,setage] =useState("");
const [phonenumber,setphonenumber] =useState("");
const [numberofclassestaugh,setnumberofclassestaugh] =useState("")
const [subjecttaugh,setsubjecttaugh] =useState("");

//send data to backend
 
function sendData(e){
    e.preventDefault();

    const newTeacher = {
     TeacherName,
      email,
      gender,
      Age,
      phonenumber,
      numberofclassestaugh,
      subjecttaugh

    }
    //pass data to backend
  axios.post("http://localhost:8070/teacher/add",newTeacher).then(()=>{
    Swal.fire(
        'New Teacher Added!',
        'You have successfully Added a Teacher ',
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
                <h1>ADD TEACHER</h1>
            </div>
            <div className="title">

            <form onSubmit={sendData}>
                <div className="row">
                    <div className="col-md-4">
                        <label>Teacher Name:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required 
                        onChange={(e)=>{
                            setname(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>Email Address:</label>
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
                        <label>Gender</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setgender(e.target.value);
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
                    <input type="tel"
                pattern="[0-9]{10}" required
                        onChange={(e)=>{
                            setphonenumber(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Number of classes taugh</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setnumberofclassestaugh(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Subject taugh</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setsubjecttaugh(e.target.value);
                        }}></input>
                    </div>
                </div>
               
               

               
                <Link to={'/TDashboard'}><button className="btn btn-danger">Cancel</button></Link>
                <button type="Submit" className="btn btn-primary">submit</button>
            </form>
            </div>
        </div>
        </div>
    )
}
