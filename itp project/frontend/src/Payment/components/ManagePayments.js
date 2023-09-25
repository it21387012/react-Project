import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManagePayments() {
    const [users, setUsers] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [PaymentCount, setPaymentCount] = useState(0);

    // Fetch data
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

    // Delete data
    function deletedata(i) {
        if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
            axios
                .delete("http://localhost:8070/payment/delete/" + i._id)
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
                .get(`http://localhost:8070/payment/search/${searchInput}`)
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
                            <h1>Manage Payment Details</h1>
                            <p>Total Payments: {PaymentCount}</p>
                            <ul className="breadcrumb">

                            </ul>
                        </div>
                        <Link to={"/AddPayment"} className="btn-download">
                            <i class='bx bxs-add-to-queue' ></i>
                            <span className="text">Add Payment</span>
                        </Link>
                        <Link to={"/PReportGenarate"} className="btn-download">
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
                                            onChange={(e) => setSearchInput(e.target.value)} />
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
                                        <th>Payment ID</th>
                                        <th>Student Name</th>
                                        <th>Class name</th>
                                       
                                        <th>Amount</th>
                                        <th>Student ID</th>
                                       
                                        <th>Grade</th>
                                        <th>p</th>
                                        <th>o</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((i, index) => {
                                        return (
                                            <tr key={i._id}>
                                                <td>{index + 1}</td>
                                                <td>{i.PStudentName}</td>
                                                <td>{i.PClassname}</td>
                                               
                                                <td>{i.PAmount}</td>
                                                <td>{i.PStudentID}</td>
                                             
                                                <td>{i.PGrade}</td>
                                                <td><Link to={`/EditPayment/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Update</button></Link></td>
                                                <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={(() => deletedata(i))}>Remove</button></td>
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
export default ManagePayments