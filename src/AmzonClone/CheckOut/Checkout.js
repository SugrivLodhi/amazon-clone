import React from "react";
import Img2 from "../Img/amazon_offer.jpg";
import { useSelector } from "react-redux";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
const Checkout = () => {
  let { user, basket } = useSelector((state) => state.data);
  const isBasketNotEmpty =  basket?.length === 0;
  return (
    <div className="checkout">
      <img src={Img2} alt="offer" className="checkout-ad" />
      <div className="leftRight">
        <div className="checkout-left">
          <h3>Hello ,{user ? user.email : "Gest"} </h3>
          <h2 className="checkout-title">
            {isBasketNotEmpty
              ? "your shopping cart is empty"
              : "your shopping cart"}
          </h2>
          {basket?.map((item) => {
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
        {!isBasketNotEmpty && (
          <div className="checkout-right">
            <SubTotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
