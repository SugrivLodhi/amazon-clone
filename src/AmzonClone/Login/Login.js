import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import "./Login.css";
import logo from '../Img/amazon _logo2.png';
import { loginintial } from "../Redux/Action";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useSelector((state) => state.data) 
  let dispatch =useDispatch();
   let navigate =useNavigate();
  const sign_in = (e) => {
    e.preventDefault();
    dispatch(loginintial(email,password));
    setEmail("");
    setPassword("");
  };

   useEffect(() =>{
       if(user){
          navigate('/')  
       }
   },[user,dispatch])   
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
