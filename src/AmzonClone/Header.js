import React from "react";
import {Link}  from "react-router-dom";
import Img1 from "./Img/amazon_logo1.png";
import Flag from "./Img/flag.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Header.css";
const Header = () => {
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
      <Link to="/login">
        <div className="header_sign">
          <p>Hello, Sign in</p>
          <h3>Account & Lists</h3>
        </div>
      </Link>
      <Link to="/order">
        <div className="header_order">
          <p>Returns</p>
          <h3>& Orders</h3>
        </div>
      </Link>
      <Link to="/cartItem">
        <div className="header_cart">
          <div className="cart_item">
            <span>0</span>
            <ShoppingCartIcon className="cart" />
          </div>
          <span>Cart</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
