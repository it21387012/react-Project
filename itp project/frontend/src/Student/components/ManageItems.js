import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function ManageItems() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [studentCount, setStudentCount] = useState(0);

  // Fetch data
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

  // Delete data
  function deletedata(i) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${i.notId}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8070/student/delete/${i._id}`)
          .then(() => {
            Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
            getUsers(); // Refresh the notifications after successful deletion
          })
          .catch((err) => {
            Swal.fire('Error', 'Failed to delete the file.', 'error');
            console.error(err);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your file is safe :)', 'error');
      }
    });
}


  // Search data
  function searchUser() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/student/search/${searchInput}`)
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
                                <h1>Manage Student Details</h1>
                                <p>Total students: {studentCount}</p>
                                <ul className="breadcrumb">
                                    
                                </ul>
                            </div>
                            <Link to={"/AddStudent"} className="btn-download">
                            <i class='bx bxs-add-to-queue' ></i>
                                <span className="text">Add Student</span>
                            </Link>
                            <Link to={"/report"} className="btn-download">
                              <i class='bx bxs-report'></i>
                                <span className="text">Reportgenarate</span>
                            </Link>
                            </div>

                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Manage Item</h3>
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
                                            <th>Student ID</th>
                                            <th>Student Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Age</th>
                                            <th>PhoneNumber</th>
                                            <th>GradeofStudy</th>
                                            <th>Home address</th>
                                            <th>p</th>
                                            <th>o</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {users.map((i, index)=>{
                                                return(
                                                    <tr key={i._id}>
                                                        <td>{index+1}</td>
                                                        <td>{i.StudentName}</td>
                                                        <td>{i.email}</td>
                                                        <td>{i.password}</td>
                                                        <td>{i.Age}</td>
                                                        <td>{i.phonenumber}</td>
                                                        <td>{i.gradeofstudy}</td>
                                                        <td>{i.homeaddress}</td>
                                                        <td><Link to={`/EditStudent/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Update</button></Link></td>
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