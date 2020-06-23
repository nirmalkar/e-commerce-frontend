import React from "react";
import { Route } from "react-router-dom";

import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <>
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={Cart} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" render={() => <Home />} />
    </>
  );
};
export default Routes;
