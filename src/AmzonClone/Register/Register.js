import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Img/amazon _logo2.png";
import './Register.css';
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sign_in = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} alt="logo" className="register-logo" />
      </Link>
      <div className="register-container">
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={sign_in}>
            continue
          </button>
          <div className="details">
            <p key='register'>Already have Account ?</p>
            <Link to="/login" className="signIn-link">
              <p key ='amzon-register' >Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
