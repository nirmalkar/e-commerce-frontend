import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import propTypes from "prop-types";
import { detailsProduct } from "../appRedux/aciton/productActions";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(id));
    return () => {};
  }, []);
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
                <li>Price: $40</li>
                <li>status: available</li>
              </ul>
              Qty:
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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
};
export default ProductDetails;
