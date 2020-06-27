import React from "react";
import propTypes from "prop-types";

const CheckoutSteps = (props) => {
  return (
    <div className="columns is-centered">
      <div className={props.step1 ? "has-text-success mr-5" : "mr-5"}>
        Signin
      </div>
      <div className={props.step2 ? "has-text-success mr-5" : "mr-5"}>
        Shipping
      </div>
      <div className={props.step3 ? "has-text-success mr-5" : "mr-5"}>
        Payment
      </div>
      <div className={props.step4 ? "has-text-success mr-4" : "mr-4"}>
        Place Order
      </div>
    </div>
  );
};
CheckoutSteps.propTypes = {
  step1: propTypes.bool.isRequired,
  step2: propTypes.bool.isRequired,
  step3: propTypes.bool.isRequired,
  step4: propTypes.bool.isRequired,
};
export default CheckoutSteps;
