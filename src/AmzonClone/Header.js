import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "./Img/amazon_logo1.png";
import Flag from "./Img/flag.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { logoutSuccess, setProduct } from "./Redux/Action";
import { products } from "./ProductItem";
import Location from "./Location";
const Header = () => {
  let { user, basket, product,address } = useSelector((state) => state.data);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  let disptch = useDispatch();
  const handleLogout = () => {
    if (user) {
      disptch(logoutSuccess());
    }
  };
  useEffect(() => {
    if (searchText.length > 0) {
      const updatedpoduct = product?.filter((v) =>
        v?.title?.toLowerCase()?.includes(searchText?.toLowerCase())
      );
      disptch(setProduct(updatedpoduct));
    }
     else {
      disptch(setProduct(products));
     }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <img src={Img1} alt="amazon" />
        </div>
      </Link>
        <div onClick={() => setShowModal(true)} className="header_location">
          <LocationOnIcon className="location_icon" />
          <div  className="location_text">
            <p>Hello</p>
            <h4>{address?address:"Select your address"}</h4>
          </div>
         
        </div>
        {showModal && (
            <Location setShowModal={setShowModal}/>
          )}
      <div className="header_input">
        <select>
          <option value="all">All</option>
        </select>
        <input type="search" placeholder="Search" onChange={handleChange} />
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
      <Link to="/order">
        <div className="header_order">
          <p>
            Returns
            <br />& Orders
          </p>
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
