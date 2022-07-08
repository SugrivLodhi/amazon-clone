import React from "react";
import { getBasketTotal } from "./BasketTotal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";
const SubTotal = () => {
  const { basket, user } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const hanldeCheckout = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="subtotal">
      <p>
        SubTotal ({basket.length} Item){" "}
        <strong>${getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={hanldeCheckout}>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
