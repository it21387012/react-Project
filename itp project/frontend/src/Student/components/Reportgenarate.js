import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Studentreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [studentCount, setStudentCount] = useState(0);

  function getUsers() {
    axios
      .get("http://localhost:8070/student/")
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
    setStudentCount(users.length);
  }, [users]);

  function handlePdfGeneration() {
    const doc = new jsPDF();
    

    // Set table header
    const header = [["StudentName", "Email", "Password", "Age", "Phone number","Grade Of Study", "Home adderss",]];

    // Add data rows
    const data = users.map(user => [user.StudentName, user.email, user.password, user.Age, user.phonenumber, user.gradeofstudy,user.homeaddress]);

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
                  <h1>Student Report</h1>
                  <p>Total students: {studentCount}</p>
                  <br></br>
              </div>
          </div>
          <br></br>
            <main>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>                <th>Student ID</th>
                                            <th>Student Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Age</th>
                                            <th>PhoneNumber</th>
                                            <th>GradeofStudy</th>
                                            <th>Home address</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
  {users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.StudentName}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.Age}</td>
        <td>{user.phonenumber}</td>
        <td>{user.gradeofstudy}</td>
        <td>{user.homeaddress}</td>
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
