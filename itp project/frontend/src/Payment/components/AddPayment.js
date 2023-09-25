import React, { useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function AddPayment() {

    //Create variable to inputs

    const [PStudentName, setPStudentName] = useState("");
    const [PClassname, setPClassname] = useState("");
    const [PAddress, setPAddress] = useState("");
    const [PAmount, setPAmount] = useState("");
    const [PStudentID, setPStudentID] = useState("");
    const [Pgradeofstudy, setPgradeofstudy] = useState("")
    const [PGrade, setPGrade] = useState("");

    //send data to backend

    function sendData(e) {
        e.preventDefault();

        const newPayment = {
            PStudentName,
            PClassname,
            PAddress,
            PAmount,
            PStudentID,
            Pgradeofstudy,
            PGrade

        }
        //pass data to backend
        axios.post("http://localhost:8070/payment/add", newPayment).then(() => {
            alert("Payment add succesful")
        }).catch((err) => {
            alert("unsucrssfull")
        })

    }

    return (
        <div>
            <br></br>

            <div className="container">
                <div className="TOPIC">
                    <h1>ADD Payment</h1>
                </div>
                <div className="title">

                    <form onSubmit={sendData}>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Student Name:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setPStudentName(e.target.value);
                                    }}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Class Name:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setPClassname(e.target.value);
                                    }}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Address</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setPAddress(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Amount</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setPAmount(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Student ID :</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setPStudentID(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Study Level</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required
                                    onChange={(e) => {
                                        setPgradeofstudy(e.target.value);
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
                                        setPGrade(e.target.value);
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
