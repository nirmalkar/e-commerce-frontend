import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import propTypes from "prop-types";
import { detailsProduct } from "../appRedux/action/productActions";

const ProductDetails = (props) => {
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(productId));
    return () => {};
  }, []);
  const handleAddToCart = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return loading ? (
    <div>Loading..</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="columns">
        <div className="column is-primary has-full-height">
          <section className="section">
            <div className="container">
              <h1 className="title">Image</h1>
              <h2 className="subtitle">
                <img src={product.image} alt="" />
              </h2>
            </div>
          </section>
        </div>
        <div className="column is-two-fifths has-background-primary">
          <section className="section">
            <div className="container">
              <ul>
                <li>Price: ${product.price}</li>
                <li>
                  status:{" "}
                  {product.countInStock > 0 ? "In stock" : "Out of stock"}
                </li>
              </ul>
              Qty:
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <br />
              {product.countInStock > 0 && (
                <button onClick={handleAddToCart} className="button is-info">
                  Add to Cart
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }),
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};
export default ProductDetails;
