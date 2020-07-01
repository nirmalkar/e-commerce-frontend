import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemFromCart } from "../appRedux/action/cartAction";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search ? props.location.search.split("=")[1] : "1";
  const dispatch = useDispatch();
  const removeFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };
  const checkOutHandler = () => {
    props.history.push(`/signin?redirect=shipping`);
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div className="columns">
      <div className="column is-primary has-full-height">
        <section className="section">
          <div className="container">
            <h1 className="title">Cart Items</h1>
            {cartItems.map((item, i) => (
              <div key={item.id}>
                <img src={item.image} alt="item" />
                <ul>
                  <Link to={`/products/${item.product}`}>
                    <li>Name: {item.name}</li>
                  </Link>
                  <li>Price: ${item.price}</li>
                </ul>
                Qty: {console.log(item.qty)}
                <select
                  value={item.qty}
                  onChange={(e) =>
                    dispatch(addToCart(item.product, e.target.value))
                  }
                >
                  {[...Array(item.countInStock).keys()].map((count) => (
                    <option key={count + 1} value={count + 1}>
                      {count + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => removeFromCart(item.product)}>
                  Delete
                </button>
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
                Checkout
              </button>
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

Cart.propTypes = {
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
export default Cart;
