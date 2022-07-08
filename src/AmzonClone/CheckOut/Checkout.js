import React from "react";
import Img2 from "../Img/amazon_offer.jpg";
import { useSelector } from "react-redux";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
const Checkout = () => {
  let { user, basket } = useSelector((state) => state.data);
  return (
    <div className="checkout">
      <img src={Img2} alt="offer" className="checkout-ad" />
      <div className="leftRight">
        <div className="checkout-left">
          <h3>Hello ,{user ? user.email : "Gest"} </h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "your shopping basket is empty"
              : "your shopping basket"}
          </h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
        <div className="checkout-right">
          <SubTotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
