import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Paymentreport() {
    const [users, setUsers] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [PaymentCount, setPaymentCount] = useState(0);

    function getUsers() {
        axios
            .get("http://localhost:8070/payment/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
        setSearchInput("");
    }

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        setPaymentCount(users.length);
    }, [users]);

    function handlePdfGeneration() {
        const doc = new jsPDF();

        // Set table header
        const header = [["Student Name", "Class name", "Address", "Amount", "Student ID", "Student Level", "Grade",]];

        // Add data rows
        const data = users.map(user => [user.PStudentName, user.PClassname, user.PAddress, user.PAmount, user.PStudentID, user.Pgradeofstudy, user.PGrade]);

        // Add table to document
        doc.autoTable({ head: header, body: data });

        // Download the PDF document
        doc.save('offers.pdf');
    }

    return (
        <body>
            <section id="content">
                <br></br>
                <div className="head-title">
                    <div className="left">
                        <h1>Payment Report</h1>
                        <p>Total Payments: {PaymentCount}</p>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <main>
                    <div className="container">
                        <div className="table">
                            <table className="table-striped">
                                <thead>
                                    <tr>                <th>Payment ID</th>
                                        <th>Student name</th>
                                        <th>Class name</th>
                                      
                                        <th>Amount</th>
                                        <th>Student ID</th>
                                      
                                        <th>Grade</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user, index) => {
                                        return (
                                            <tr key={user._id}>
                                                <td>{index + 1}</td>
                                                <td>{user.PStudentName}</td>
                                                <td>{user.PClassname}</td>
                                              
                                                <td>{user.PAmount}</td>
                                                <td>{user.PStudentID}</td>
                                              
                                                <td>{user.PGrade}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table>
                            <button className='btn btn-primary' onClick={handlePdfGeneration}>
                                Generate PDF
                            </button>
                        </div>
                    </div>

                </main>
            </section>

        </body>
    );
}
