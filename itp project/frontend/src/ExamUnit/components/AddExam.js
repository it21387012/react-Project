import React, {useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function AddExam(){

   //Create variable to inputs

const [StudentName,setstudentname] =useState("");
const [StudentID,setstudentid] =useState("");
const [Subject,setsubject] =useState("");
const [Place,setplace] =useState("");
const [Avarage,setaverage] =useState("");
const [gradeofstudy,setgradeofstudy] =useState("")
const [Grade,setgrade] =useState("");

//send data to backend
 
function sendData(e){
    e.preventDefault();

    const newExam = {
     StudentName,
      StudentID,
      Subject,
      Place,
      Avarage,
      gradeofstudy,
      Grade

    }
    //pass data to backend
  axios.post("http://localhost:8070/exam/add",newExam).then(()=>{
    alert("Exam add succesful")
  }).catch((err)=>{
    alert("unsucrssfull")
  })

}

    return(
        <div>
            <br></br>
            
        <div className="container">
        <div className="TOPIC">
                <h1>ADD Exam</h1>
            </div>
            <div className="title">

            <form onSubmit={sendData}>
                <div className="row">
                    <div className="col-md-4">
                        <label>Student Name:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required 
                        onChange={(e)=>{
                            setstudentname(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>Student ID:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required 
                        onChange={(e)=>{
                            setstudentid(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>Subject</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setsubject(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Place</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setplace(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Avarage :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setaverage(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>GradeOfStudy</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setgradeofstudy(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Grade</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required
                        onChange={(e)=>{
                            setgrade(e.target.value);
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
