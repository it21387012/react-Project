import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Employeereport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [EmployeeCount, setEmployeeCount] = useState(0);

  function getUsers() {
    axios
      .get("http://localhost:8070/employee/")
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
    setEmployeeCount(users.length);
  }, [users]);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["EmployeeID", "EmployeeName", "Work Description",  "Dead Line", "Priority",]];

    // Add data rows
    const data = users.map(user => [user.employeeid, user.EmployeeName, user.email, user.phonenumber, user.homeaddress]);

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
                  <h1>Employee Work Report</h1>
                  <p>Total Work Records: {EmployeeCount}</p>
                  <br></br>
              </div>
          </div>
          <br></br>
            <main>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>                <th>Employee ID</th>
                                            <th>Employee Name</th>
                                            <th>Work Description</th>
                                            <th>Deadline</th>
                                            
                                            <th>Priority</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
  {users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.EmployeeName}</td>
        <td>{user.email}</td>
    
        <td>{user.phonenumber}</td>
       
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
