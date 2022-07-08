import React from "react";
import { Link } from "react-router-dom";
import Img1 from "./Img/amazon_logo1.png";
import Flag from "./Img/flag.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { logoutSuccess } from "./Redux/Action";
const Header = () => {
  let { user, basket } = useSelector((state) => state.data);
  let disptch = useDispatch();
  const handleLogout = () => {
    if (user) {
      disptch(logoutSuccess());
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <img src={Img1} alt="amazon" />
        </div>
      </Link>
      <Link to="/location">
        <div className="header_location">
          <LocationOnIcon className="location_icon" />
          <div className="location_text">
            <p>Hello</p>
            <h4>Select your address</h4>
          </div>
        </div>
      </Link>
      <div className="header_input">
        <select>
          <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search" />
        <Search className="header_search" />
      </div>
      <div className="header_flag">
        <img src={Flag} alt="flag" />
        <ExpandMoreIcon />
      </div>
      <Link to={`${user ? "/" : "/login"}`}>
        <div className="header_sign" onClick={handleLogout}>
          <p>Hello,{user ? user.email : "Gest"} </p>
          <h3>Account & Lists</h3>
        </div>
      </Link>
      <Link to="/login">
        <div className="header_sign">
          <p>Your </p>
          <h3>Prime</h3>
        </div>
      </Link>
      <Link to="/order">
        <div className="header_order">
          <p>Returns</p>
          <h3>& Orders</h3>
        </div>
      </Link>
      <Link to="/checkout">
        <div className="header_cart">
          <div className="cart_item">
            <span>{basket && basket.length}</span>
            <ShoppingCartIcon className="cart" />
          </div>
          <span>Cart</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
