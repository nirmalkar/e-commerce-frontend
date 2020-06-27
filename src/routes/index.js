import React from "react";
import { Route } from "react-router-dom";

import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
import PlaceOrder from "../pages/PlaceOrder";

const Routes = () => {
  return (
    <>
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/shipping" component={Shipping} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/placeorder" component={PlaceOrder} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/add-product" component={AddProduct} />
      <Route exact path="/" render={() => <Home />} />
    </>
  );
};
export default Routes;
