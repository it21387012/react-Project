import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Examreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [ExamCount, setExamCount] = useState(0);

  function getUsers() {
    axios
      .get("http://localhost:8070/exam/")
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
    setExamCount(users.length);
  }, [users]);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["Student Name", "Student ID", "Subject", "Place", "Avarage","Grade Of Study", "Grade",]];

    // Add data rows
    const data = users.map(user => [user.StudentName, user.StudentID, user.Subject, user.Place, user.Avarage, user.gradeofstudy,user.Garde]);

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
                  <h1>Exam Report</h1>
                  <p>Total Exams: {ExamCount}</p>
                  <br></br>
              </div>
          </div>
          <br></br>
            <main>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>                <th>Exam ID</th>
                                            <th>Student Name</th>
                                            <th>Student ID</th>
                                            <th>Subject</th>
                                            <th>Place</th>
                                            <th>Avarage</th>
                                            <th>Grade of Study</th>
                                            <th>Garde</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
  {users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.StudentName}</td>
        <td>{user.StudentID}</td>
        <td>{user.Subject}</td>
        <td>{user.Place}</td>
        <td>{user.Avarage}</td>
        <td>{user.gradeofstudy}</td>
        <td>{user.Garde}</td>
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
