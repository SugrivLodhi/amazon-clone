import React, { Suspense, useEffect, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./AmzonClone/Header";
// import Home from "./AmzonClone/Home";
import "./AppAmazon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./AmzonClone/OrderPage";
//import Login from "./AmzonClone/Login/Login";
// import Register from "./AmzonClone/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./AmzonClone/Redux/Firebase";
import { setUser } from "./AmzonClone/Redux/Action";
import ErrorHandler from "./AmzonClone/ErrorBoundry";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "./AmzonClone/Loding/Loading";


// recreating the `Stripe` object on every render.
const Home = lazy(() => import("./AmzonClone/Home"));
const Login = lazy(() => import("./AmzonClone/Login/Login"));
const Register = lazy(() => import("./AmzonClone/Register/Register"));
const SingleProduct = lazy(() =>
  import("./AmzonClone/SingleProduct/SingleProduct")
);
const Checkout = lazy(() => import("./AmzonClone/CheckOut/Checkout"));
const Payment = lazy(() => import("./AmzonClone/Payment/Payment"));

const AppAmazon = () => {
  const dispatch = useDispatch();
  const stripePromise = loadStripe('pk_test_51NJUcFSBl7eiZkuNhcndCFTGvdtZVavIknsFXZRcdUzmiownOvLgvtbXnHOTnHFLAgpwGAHiw02Db1yxupSUxyMu00F6XKsdrm');
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
      <ErrorBoundary FallbackComponent={ErrorHandler} onReset={() => {
         window.location.reload(true);
      }}>
        <Suspense fallback={<Loading/>}>
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
                  <  >
                    <Header />
                    <Elements stripe={stripePromise} >
                    <Payment />
                    </Elements>
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
