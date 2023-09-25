import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StuLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password
    };

    axios.post('http://localhost:8070/student/login', data)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.student.email);
          const loggedInEmail = res.data.student.email;

          sessionStorage.setItem('loggedInEmail', loggedInEmail);

          window.location.replace('/frontsd');

          setEmail('');
          setPassword('');
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Student Login</h3>

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        {error && <div className="alert alert-danger">{error}</div>}
        <center>
          <button className="formBtn" type="submit">
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default StuLoginPage;
