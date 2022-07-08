import React, { useEffect } from "react";
import Header from "./AmzonClone/Header";
import Home from "./AmzonClone/Home";
import "./AppAmazon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from "./AmzonClone/Location";
import Order from "./AmzonClone/Order";
import Login from "./AmzonClone/Login/Login";
import Register from "./AmzonClone/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./AmzonClone/Redux/Firebase";
import { setUser } from "./AmzonClone/Redux/Action";
import SingleProduct from "./AmzonClone/SingleProduct/SingleProduct";
import Checkout from "./AmzonClone/CheckOut/Checkout";
import Payment from "./AmzonClone/Payment/Payment";

const AppAmazon = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App_amazon">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <SingleProduct />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
          <Route
            path="/location"
            element={
              <>
                <Header />
                <Location />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <Header />
                <Order />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppAmazon;
