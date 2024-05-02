import React, { useEffect, useState } from "react";
import { db } from "./Redux/Firebase";
import { useSelector } from "react-redux";
import Order from "./Order";
import ProductNotFoundPage from "./NotFound/ProductNotFound";

const OrderPage = () => {
  const { user } = useSelector((state) => state.data);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orderDetails")
        .onSnapshot((snap) => {
          setOrders(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
     else {
      setOrders([]);
    }
  }, [user]);



  return (
    <div>
      {orders.length?(
        <>
         <h3> Your Order</h3>
         {orders?.map((order) => (
           <Order order={order} key={order.id} />
         )
         )}
       </>  
      ):(
        <ProductNotFoundPage
        title="No Order Found"
        />
      )}
     
    </div>
  );
};

export default OrderPage;
