import React, { useState } from "react";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";

import { saveShippingAddr } from "../appRedux/action/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = (props) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddr({ address, city, postalCode }));
    props.history.push("/payment");
  };
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <CheckoutSteps step1 step2 />
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={submitHandler}>
                    <div className="field">
                      <label className="label" htmlFor="name">
                        Name
                      </label>
                      <div className="control">
                        <input
                          required
                          value={address}
                          className="input"
                          name="name"
                          type="text"
                          placeholder="Name"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="city">
                        City
                      </label>
                      <div className="control">
                        <input
                          required
                          value={city}
                          className="input"
                          name="city"
                          type="text"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="postalCode">
                        Name
                      </label>
                      <div className="control">
                        <input
                          required
                          value={postalCode}
                          className="input"
                          name="postalCode"
                          type="number"
                          placeholder="Postal code"
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
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

Shipping.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};

export default Shipping;
