import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Payment.css";
import CheckoutProduct from "../CheckOut/CheckoutProduct";
import { getBasketTotal } from "../CheckOut/BasketTotal";
const Payment = () => {
  const { user, basket } = useSelector((state) => state.data);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
    //generate the number between 0 <Math.random() < 1 
     if(Math.random() > 0.5){
      return new Error("Test Error Boundary")
     }

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout{<Link to="/checkout"> {basket.length} Item</Link>}</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delevery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>House no. 15 Beltikar</p>
            <p>SiddharthNagar UttarPradesh(India)</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Reviews Item & Delivery</h3>
          </div>
          <div className="payment-items">
            {basket &&
              basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>payment method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <div className="payment-priceContainer">
                <h3>
                  {" "}
                  Order Total <strong>${getBasketTotal(basket)}</strong>
                </h3>
                <button type="submit">
                  <span>buy now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
