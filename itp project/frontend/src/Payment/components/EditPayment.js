
import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditPayment() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [Paymentedit, setPayments] = useState({
        PStudentName: '',
        PClassname: '',
        PAddress: '',
        PAmount: '',
        PStudentID: '',
        Pgradeofstudy: '',
        PGrade: ''

    });

    //Fetch data
    useEffect(() => {
        function getPayments() {
            axios.get("http://localhost:8070/payment/get/" + id)
                .then((res) => {
                    setPayments(res.data.data);
                    console.log(res.data.data);
                }).catch((err) => {
                    alert(err.message);
                })
        }
        getPayments();
    }, [])

    const handleChange = (e) => {
        setPayments({
            ...Paymentedit,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Payment); // or save the data to your backend
        axios
            .put('http://localhost:8070/payment/update/' + id, Paymentedit)
            .then((response) => {
                // console.log(response.data);
                alert("Payment Updated");
                navigate('/ManagePayments');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div><br></br>
            <div className="container">
                <div className="TOPIC">
                    <h1>EDIT Payment</h1>
                </div>
                <div className="title">
                    <form onSubmit={handleSubmit} >
                        <div className="row">
                            <div className="col-md-4">
                                <label for>Student Name :</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required name="PStudentName" value={Paymentedit.PStudentName}
                                ></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label for>Class Name:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required name="PClassname" value={Paymentedit.PClassname}
                                ></input>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-4">
                                <label for>Amount:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required name="PAmount" value={Paymentedit.PAmount}
                                    onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label for>Student ID:</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required name="PStudentID" value={Paymentedit.PStudentID}
                                    onChange={handleChange}></input>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-4">
                                <label for>Grade</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" required name="PGrade" value={Paymentedit.PGrade}
                                ></input>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Save</button>
                        <Link to={'/pManageItems'}><button className="btn btn-danger">Cancel</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )

}