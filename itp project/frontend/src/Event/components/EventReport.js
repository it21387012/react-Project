import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Eventreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [EventCount, setEventCount] = useState(0);

  function getUsers() {
    axios
      .get("http://localhost:8070/event/")
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
    setEventCount(users.length);
  }, [users]);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["EventName", "Email", "Password", "IdNumber", "Mobile number","Grade", "School",]];

    // Add data rows
    const data = users.map(user => [user.eventName, user.email, user.password, user.idNumber, user.phoneNumber, user.grade,user.school]);

    // Add table to document11
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
                  <h1>Event Report</h1>
                  <p>Total Events: {EventCount}</p>
                  <br></br>
              </div>
          </div>
          <br></br>
            <main>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>                <th>Event ID</th>
                                            <th>Event Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>IdNumber</th>
                                            <th>MobileNumber</th>
                                            <th>Grade</th>
                                            <th>School</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
  {users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.eventName}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.idNumber}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.grade}</td>
        <td>{user.school}</td>
      </tr>
    );
  })}
</tbody>

                    </table>
                    <button  className='btn btn-primary' onClick={handlePdfGeneration}>
                    Generate PDF
                </button>
                    </div>
                </div>
                
            </main>
        </section>
        
     </body>
  );
}
