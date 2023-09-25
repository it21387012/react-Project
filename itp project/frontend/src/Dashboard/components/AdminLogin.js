import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [notify, setNotify] = useState([]);

  // Fetch data
  useEffect(() => {
    axios.get("http://localhost:8070/notify/")
      .then((res) => {
        setNotify(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  // Handle form submission
  function handleLogin(e) {
    e.preventDefault();

    // Validate login credentials
    if (adminName === "admin" && password === "password") {
      // Login successful
      Swal.fire(
        'Login Successful',
        'You have successfully logged in.',
        'success'
      );
      navigate('/dashboard'); // Redirect to the dashboard or any other page
    } else {
      // Login failed
      Swal.fire(
        'Login Failed',
        'Invalid username or password. Please try again.',
        'error'
      );
    }
  }

  return (
    <>
      <div>
        <br></br>
        <div className="container">
          <div className="TOPIC">
            <h1>Login</h1>
          </div>
          <div className="title">
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="row">
                <div className="col-md-4">
                  <label>Username:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    required
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label>Password:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>

              <Link to={'/dashboard'}>
                <button className="btn btn-danger">Cancel</button>
              </Link>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
