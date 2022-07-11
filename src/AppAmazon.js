import React, { Suspense, useEffect,lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./AmzonClone/Header";
// import Home from "./AmzonClone/Home";
import "./AppAmazon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from "./AmzonClone/Location";
import Order from "./AmzonClone/Order";
 //import Login from "./AmzonClone/Login/Login";
// import Register from "./AmzonClone/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./AmzonClone/Redux/Firebase";
import { setUser } from "./AmzonClone/Redux/Action";
import ErrorHandler from "./AmzonClone/ErrorBoundry";
// import SingleProduct from "./AmzonClone/SingleProduct/SingleProduct";
// import Checkout from "./AmzonClone/CheckOut/Checkout";
//  import Payment from "./AmzonClone/Payment/Payment";
//Lazy loading implimentation
 const Home = lazy(() => import('./AmzonClone/Home'));
 const Login = lazy(() => import('./AmzonClone/Login/Login'));
 const Register =lazy(() =>import('./AmzonClone/Register/Register'));
 const SingleProduct = lazy(() => import('./AmzonClone/SingleProduct/SingleProduct'));
 const Checkout = lazy(() => import('./AmzonClone/CheckOut/Checkout'));
 const Payment = lazy(() => import('./AmzonClone/Payment/Payment')); 


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
  const erroMessgage ={message:"something went wrong"}

  return (
    <BrowserRouter> 
     <ErrorBoundary FallbackComponent={ErrorHandler} onReset ={() =>{}}>
      <Suspense fallback ={<h3>Loading...</h3>}>   
      <div className="App_amazon">
        <Routes>
          <Route 
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
          exact
            path="/product/:id"
            element={
              <>
                <Header />
                <SingleProduct />
              </>
            }
          />
          <Route
          exact
            path="/payment"
            element={
              <>
                <Header />
                <Payment />              
              </>
            }
          />
          <Route
          exact
            path="/location"
            element={
              <>
                <Header />
                <Location />
              </>
            }
          />
          <Route
          exact
            path="/order"
            element={
              <>
                <Header />
                <Order />
              </>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
          exact
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
     </Suspense> 
     </ErrorBoundary>
     </BrowserRouter>
  );
};

export default AppAmazon;
