import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Adminreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [AdminCount, setAdminCount] = useState(0);

  const [notId, setnotId] = useState("");
  const [notDescript, setnotDescript] = useState("");
  const [notify, setNotify] = useState([]);
  const [notifyCount, setNotifyCount] = useState(0);

  function getUsers() {
    axios
      .get("http://localhost:8070/admin/")
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
    setAdminCount(users.length);
  }, [users]);

  //notify
      //fetch data
  function getNotify() {
    axios.get("http://localhost:8070/notify/").then((res) => {
        setNotify(res.data);

      })
      .catch((err) => {
          alert(err.message);
      })
      setSearchInput("");
    }
    useEffect(() => {
        getNotify();
    }, []);
    useEffect(() => {
        setNotifyCount(notify.length);
    }, [notify]);




  function handlePdfGeneration() {
    const doc = new jsPDF();
            // Add report headline
            doc.line(14, 30, 195, 30); // Horizontal line.
              // Add image
            // doc.addImage('/frontend/src/Slogo.png', 'PNG', 14, 1, 40, 20)
            doc.setFontSize(20);
            doc.setTextColor(255, 0, 0); // Set font color to red
            // doc.setFontType('bold'); // Set font style to bold
            // Add report headline
           
            doc.text("SHILPA INSTITUTE ", 70, 6);
            doc.setTextColor(49, 59, 49); 
            doc.text("Monthly Attendance Report", 65, 15);
              // Add current date and time
            const now = new Date();
            const dateTimeString = now.toLocaleString();
            doc.setFontSize(12);
            doc.text(`Report generated on: ${dateTimeString}`, 14, 290);

            doc.line(14, 30, 12, 280); // Vertical line
            doc.line(196, 30, 195, 280); // Vertical line

    // Set table header
    const header = [["AdminName", "last name", "NIC", "Age", "Phone number","year Of experince"]];

    // Add data rows
    const data = users.map(user => [user.AdminName, user.lname, user.nicNum, user.age, user.phoneNumber, user.experience]);

    // Add table to document
    doc.autoTable({ 
      head: header,
      body: data, 
      startY: 31,// Horizontal margin from the top edge of the page
      margin: { top: 30, right: 15, bottom: 20, left: 15 },
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [111, 186, 209] },
      columnStyles: { 0: { halign: 'center' }, 3: { halign: 'center' }, 4: { halign: 'right' } }});

      doc.line(14, 280, 195, 280); // upper Horizontal line

    // Download the PDF document
    doc.save('offers.pdf');
  }
  //notify
  function handlePdfGenerationNt() {
    const doc = new jsPDF();
            // Add report headline
            doc.line(14, 30, 195, 30); // Horizontal line.
              // Add image
            // doc.addImage('/frontend/src/Slogo.png', 'PNG', 14, 1, 40, 20)
            doc.setFontSize(20);
            doc.setTextColor(255, 0, 0); // Set font color to red
            // doc.setFontType('bold'); // Set font style to bold
            // Add report headline
           
            doc.text("SHILPA INSTITUTE ", 70, 6);
            doc.setTextColor(49, 59, 49); 
            doc.text("Monthly Notification Report", 65, 15);
              // Add current date and time
            const now = new Date();
            const dateTimeString = now.toLocaleString();
            doc.setFontSize(12);
            doc.text(`Report generated on: ${dateTimeString}`, 14, 290);

            doc.line(14, 30, 12, 280); // Vertical line
            doc.line(196, 30, 195, 280); // Vertical line

    // Set table header
    const header = [["Notification ID", "Description"]];

    // Add data rows
    const data = notify.map(user => [user.notId,user.notDescript]);

    // Add table to document
    doc.autoTable({ 
      head: header,
      body: data, 
      startY: 31,// Horizontal margin from the top edge of the page
      margin: { top: 30, right: 15, bottom: 20, left: 15 },
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [111, 186, 209] },
      columnStyles: { 0: { halign: 'center' }, 3: { halign: 'center' }, 4: { halign: 'right' } }});

      doc.line(14, 280, 195, 280); // upper Horizontal line

    // Download the PDF document
    doc.save('Notification.pdf');
  }
  return (
    <body>
        <section id="content">
          <br></br>
          <div className="head-title">
              <div className="left">
                  <h1 >Report</h1>
                  <p>Total Admins: {AdminCount}</p>
                  <br></br>
              </div>
          </div>
          <br></br>
            <main>
                <div className="container">
                  <div className="table">
                      <table className="table-striped-nt">
                          <thead>
                          <tr> 
                              <th>Admin ID</th>
                              <th>Admin Name</th>
                              <th>Last Name</th>
                              <th>NIC NUM</th>
                              <th>Age</th>
                              <th>PhoneNumber</th>
                              <th>experience</th>

                          </tr>
                          </thead>
                          
                          <tbody>
                              {users.map((user, index) => {
                                  return (
                                  <tr key={user._id}>
                                      <td>{index+1}</td>
                                      <td>{user.AdminName}</td>
                                      <td>{user.lname}</td>
                                      <td>{user.nicNum}</td>
                                      <td>{user.age}</td>
                                      <td>{user.phoneNumber}</td>
                                      <td>{user.experience}</td>
                                  </tr>
                                  );
                              })}
                              </tbody>
                      </table>
                      <button  className='btn btn-primary' onClick={handlePdfGeneration}>
                      Generate PDF
                      </button>
                    </div>
                    <table className="table-striped-nt">
                        <thead>
                          <tr> 
                              <th>Num__</th>
                              <th>Notice ID </th>
                              <th> Description</th>
                          </tr>
                        </thead>
                          
                          <tbody>
                              {notify.map((user, index) => {
                                  return (
                                  <tr key={user._id}>
                                      <td>{index+1}</td>
                                      <td>{user.notId}</td>
                                      <td>{user.notDescript}</td>
                                  </tr>
                                  );
                              })}
                              </tbody>

                      </table>
                      <button  className='btn btn-primary' onClick={handlePdfGenerationNt}>
                      Generate PDF
                      </button>
                </div>
                
            </main>
        </section>
        
     </body>
  );
}
