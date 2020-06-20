import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../appRedux/action/cartAction";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    return () => {};
  }, []);
  return (
    <div className="columns">
      <div className="column is-primary has-full-height">
        <section className="section">
          <div className="container">
            <h1 className="title">Cart Items</h1>
            {cartItems.map((item) => (
              <div key={item._id}>
                <img src={item.image} alt="item" />
                {console.log(item)}
                <ul>
                  <Link to={`/products/${item.product}`}>
                    <li>Name: {item.name}</li>
                  </Link>
                  <li>Price: ${item.price}</li>
                </ul>
                Qty:{" "}
                <select value={"1"}>
                  <option value="1">1</option>
                </select>
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
