import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Payment.css";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import CheckoutProduct from "../CheckOut/CheckoutProduct";
import { getBasketTotal } from "../CheckOut/BasketTotal";
import { CardElement } from "@stripe/react-stripe-js";
import instance from "../../axios";
import { db } from "../Redux/Firebase";

const Payment = () => {
  const { user, basket,address } = useSelector((state) => state.data);
  const [disable, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error,setError] = useState('')
  let navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await instance({
          method: "POST",
          url: `/payment/create?total=${getBasketTotal(basket)*100}`,
        });
       
        setClientSecret(response.data.clientSecret);
      } catch (error) {}
    };
    getClientSecret();
  }, [basket]);

 // Function to add order details for a user
async function addOrderDetails(orderData) {
  try {
    // Add order details document to "orderDetails" subcollection of the user
    await db.collection("users").doc(orderData?.userId).collection("orderDetails").doc(orderData.paymentId).set(orderData.order);

  } catch (error) {
    console.error("Error adding order details: ", error);
  }
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({paymentIntent}) => {
          addOrderDetails({
            userId: user.uid,
            paymentId: paymentIntent.id,
            order:{
              basket:basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created
            }
          })
          setProcessing(false)
        navigate("/order");

      })
      .catch((er) => {
        console.log("error", er);
      });
  };

const handleChange = (e)=> {
     setDisabled(e.empty)
     setError(e.error?e.error:"")
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
            <h4>{user?.email}</h4>
            <p>{address}</p>
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
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <h3>
                  {" "}
                  Order Total <strong>${getBasketTotal(basket)}</strong>
                </h3>
                <button disabled={disable || error} className={disable || error?"disable-bg":""} type="submit">
                  <span>{processing?"Processing...":"Buy Now"}</span>
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
