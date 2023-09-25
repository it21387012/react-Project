import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Teacherreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [TeacherCount, setTeacherCount] = useState(0);

  function getUsers() {
    axios
      .get("http://localhost:8070/teacher/")
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
    setTeacherCount(users.length);
  }, [users]);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["TeacherName", "Email", "Gender", "Age", "Phone number","Number of classes taugh", "Subject taugh",]];

    // Add data rows
    const data = users.map(user => [user.TeacherName, user.email, user.gender, user.Age, user.phonenumber, user.numberofclassestaugh,user.subjecttaugh]);

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
                  <h1>Teacher Report</h1>
                  <p>Total Teachers: {TeacherCount}</p>
                  <br></br>
              </div>
          </div>
          <br></br>
            <main>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>                <th>Teacher ID</th>
                                            <th>Teacher Name</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            <th>PhoneNumber</th>
                                            <th>Number of classes taugh</th>
                                            <th>Subject taugh</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
  {users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.TeacherName}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.Age}</td>
        <td>{user.phonenumber}</td>
        <td>{user.numberofclassestaugh}</td>
        <td>{user.subjecttaugh}</td>
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
