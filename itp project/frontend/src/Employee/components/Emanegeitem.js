import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './css/ManageItems.css'

function ManageItems() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [EmployeeCount, setEmployeeCount] = useState(0);

  // Fetch data
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

  // Delete data
  function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:8070/employee/delete/" + i._id)
        .then(() => {
          getUsers();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchUser() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/employee/search/${searchInput}`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getUsers();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchUser();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return (
            <body>
                <section id="content">
                    <main>
                        <div className="head-title">
                            <div className="left">
                                <h1>Manage Work Details</h1>
                                <p>Total Work Records: {EmployeeCount}</p>
                                <ul className="breadcrumb">
                                    
                                </ul>
                            </div>
                            <Link to={"/AddEmployee"} className="btn-download">
                            <i class='bx bxs-add-to-queue' ></i>
                                <span className="text">Assign New Work</span>
                            </Link>
                            <Link to={"/report"} className="btn-download">
                              <i class='bx bxs-report'></i>
                                <span className="text">Generate Report</span>
                            </Link>
                            </div>

                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Manage Work Details</h3>
                                        <div class="col-auto">
                                            <div class="input-group mb-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="inlineFormInputGroup"
                                                    placeholder="Search"
                                                    value={searchInput}
                                                    onChange={(e) => setSearchInput(e.target.value)}/>
                                                <div class="input-group-prepend" onClick={getUsers}>
                                                    <div class="input-group-text">
                                                        <i class="bx bx-x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <table className="table-striped">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Employee Name</th>
                                            <th>Work Description</th>
                                            
                                            <th>Dead Line</th>
                                          
                                            <th>Priority</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {users.map((i, index)=>{
                                                return(
                                                    <tr key={i._id}>
                                                        <td>{index+1}</td>
                                                        <td>{i.EmployeeName}</td>
                                                        <td>{i.email}</td>
                                                        
                                                        <td>{i.phonenumber}</td>
                                                      
                                                        <td>{i.homeaddress}</td>
                                                        <td><Link to={`/EditEmployee/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Update</button></Link></td>
                                                        <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={(()=>deletedata(i))}>Remove</button></td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                       
                    </main>
                </section>
            </body>
            
    )
}
  export default ManageItems