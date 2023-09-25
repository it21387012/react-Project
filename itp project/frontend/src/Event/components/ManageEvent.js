import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageItems() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [EventCount, setEventCount] = useState(0);

  // Fetch data
  function getUsers() {
    axios
      .get("http://localhost:8070/Event/")
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

  // Delete data
  function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:8070/event/delete/" + i._id)
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
        .get(`http://localhost:8070/event/search/${searchInput}`)
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
                                <h1>Manage Event Details</h1>
                                <p>Total Events: {EventCount}</p>
                                <ul className="breadcrumb">
                                    
                                </ul>
                            </div>
                            </div>

                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Manage Event</h3>
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
                                            <th>Event ID</th>
                                            <th>Event Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>ID Number</th>
                                            <th>Mobile Number</th>
                                            <th>Grade</th>
                                            <th>School</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {users.map((i, index)=>{
                                                return(
                                                    <tr key={i._id}>
                                                        <td>{index+1}</td>
                                                        <td>{i.eventName}</td>
                                                        <td>{i.email}</td>
                                                        <td>{i.password}</td>
                                                        <td>{i.idNumber}</td>
                                                        <td>{i.phoneNumber}</td>
                                                        <td>{i.grade}</td>
                                                        <td>{i.school}</td>
                                                        <td><Link to={`/EditEvent/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Update</button></Link></td>
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