import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrder = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shipping, payment } = cart;
  const checkOutHandler = () => {
    props.history.push(`/`);
  };
  if (!payment) {
    props.history.push("payment");
  }
  if (!shipping) {
    props.history.push("/shipping");
  }
  useEffect(() => {}, []);
  return (
    <div className="columns">
      <div className="column is-primary has-full-height">
        <section className="section">
          <CheckoutSteps step1 step2 step3 step4 />
          <div className="container">
            <h1 className="title">Cart Items</h1>
            {cartItems.map((item) => (
              <div key={item._id}>
                <img src={item.image} alt="item" className="w-9" />
                <ul>
                  <Link to={`/products/${item.product}`}>
                    <li>Name: {item.name}</li>
                  </Link>
                  <li>Price: ${item.price}</li>
                </ul>
                Qty: {item.qty}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="column is-primary has-full-height">
        <section className="section">
          <div className="container">
            <h1 className="title">Actions</h1>
            <h3>
              Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items) $(
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)})
              <br />
              <button
                className="button is-success"
                onClick={checkOutHandler}
                disabled={!cartItems.length}
              >
                PlaceOrder
              </button>
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

PlaceOrder.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }),
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }),
  location: propTypes.shape({
    search: propTypes.string.isRequired,
  }),
};
export default PlaceOrder;
