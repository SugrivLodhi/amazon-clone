import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Img/amazon _logo2.png";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerintial } from "../Redux/Action";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user,navigate]);

  const sign_in = (e) => {
    e.preventDefault();
    dispatch(registerintial(email, password));
    setEmail("");
    setPassword("");
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
            <p>Already have Account ?</p>
            <Link to="/login" className="signIn-link">
              <p>Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
