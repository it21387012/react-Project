import React, { useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function AddEvent() {

    //Create variable to inputs

    const [eventName, setEventName] = useState("");
    const [email, seteemail] = useState("");
    const [password, setepassword] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [phoneNumber, setMobileNumber] = useState("");
    const [grade, setGrade] = useState("")
    const [school, setSchool] = useState("");

    //send data to backend

    function sendData(e) {
        e.preventDefault();

        const newEvent = {
            eventName,
            email,
            password,
            idNumber,
            phoneNumber,
            grade,
            school

        }
        //pass data to backend
        axios.post("http://localhost:8070/event/add", newEvent).then(() => {
            alert("Event add succesful")
        }).catch((err) => {
            alert("unsucrssfull")
        })

    }

    return (
        <div>
            <br></br>

            <div className="container">
                <div className="TOPIC">
                    <h1>ADD Event</h1>
                </div>
                <div className="title">

                    <form onSubmit={sendData}>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Event Name:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setEventName(e.target.value);
                                    }}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Email Address:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        seteemail(e.target.value);
                                    }}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Password</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setepassword(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Id Number</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setIdNumber(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Mobile Number :</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setMobileNumber(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Grade</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setGrade(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>School</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setSchool(e.target.value);
                                    }}></input>
                            </div>
                        </div>




                        <Link to={''}><button className="btn btn-danger">Cancel</button></Link>
                        <button type="Submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
