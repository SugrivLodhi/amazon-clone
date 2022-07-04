import React from "react";
import Header from "./AmzonClone/Header";
import Home from "./AmzonClone/Home";
import "./AppAmazon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from "./AmzonClone/Location";
import Order from "./AmzonClone/Order";
import CartItem from "./AmzonClone/CartItem";
import Login from "./AmzonClone/Login/Login";
import Register from "./AmzonClone/Register/Register";
const AppAmazon = () => {
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
        <Route
          path="/login"
          element={
              <Login/>
          }
        />
        <Route
          path="/register"
          element={
              <Register/>
          }
        />
        <Route
          path="/cartItem"
          element={
              <>
              <Header />
              <CartItem />
              </>
             }
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppAmazon;
