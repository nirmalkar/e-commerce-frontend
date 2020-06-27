import React, { useState } from "react";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";

import { savePayment } from "../appRedux/action/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

const Payment = (props) => {
  const [payment, setPayment] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ payment }));
    props.history.push("placeorder");
  };
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <CheckoutSteps step1 step2 step3 />
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={submitHandler}>
                    <div className="field">
                      <div className="control">
                        <label className="radio">
                          <input
                            type="radio"
                            name="payment"
                            required
                            value="paypal"
                            className="mr-2"
                            onChange={(e) => setPayment(e.target.value)}
                          />
                          PayPal
                        </label>
                      </div>
                    </div>
                    <button className="button  is-primary is-light is-fullwidth">
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Payment.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};

export default Payment;
