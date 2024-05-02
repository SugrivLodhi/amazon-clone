import React from "react";
import "./Product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInBasket } from "../Redux/Action";
import { toast } from "react-toastify";
const Product = ({ id, title, price, rating, image }) => {
  const dispatch = useDispatch();
  const onAddBasketItem = () => {
    const item = { id, title, price, rating, image };
    dispatch(addInBasket(item));
    toast.success("Item added to cart Successfully")
  };
  return (
    <div className="product" key={id}>
      <div className="infos">
        <Link to="/product" className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="item" />
      <button onClick={onAddBasketItem}>
        <i>
          <ShoppingCartIcon />
        </i>
        add to cart
      </button>
    </div>
  );
};

export default Product;
