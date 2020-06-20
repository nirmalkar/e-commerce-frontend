import React from "react";
import { Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Route path="/products/:id" component={ProductDetails} />
      <Route exact path="/" render={() => <Home />} />
    </>
  );
};
export default Routes;
