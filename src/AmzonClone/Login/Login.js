import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from '../Img/amazon _logo2.png';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sign_in = (e) => {
    e.preventDefault();
  };
  return (
      <div className="login">
       <Link to ='/' >
        <img src={logo}  className ="login-logo" alt="logo"/>
       </Link>
    <div className="login-container">
      <h1>Sign In</h1>
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
      </form>
      <p key='sign-in'>
        By continuing, you agree to Amazon's Conditions of Use and Privacy
        Notice.
      </p>
      <p key='amazon-sign'>New to Amazon</p>
      <Link to  = '/register'>
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
    </div>
  );
};

export default Login;
