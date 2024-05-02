import React from "react";
import CheckoutProduct from "./CheckOut/CheckoutProduct";

const Order = ({ order }) => {
  return (
    <div>
      <h3>Order ID {order.id}</h3>
      {order?.data?.basket?.map((v) => (
        <CheckoutProduct key={v.id} {...v} isHide />
      ))}
    </div>
  );
};

export default Order;
