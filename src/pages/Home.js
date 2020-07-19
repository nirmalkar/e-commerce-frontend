import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { listProducts } from "../appRedux/action/productActions";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, [dispatch]);

  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <section className="hero is-white is-fullheight">
      <header className="hero-head">
        <Navbar />
      </header>
      <Sidebar />
      <div className="hero-body">
        <div className="container is-space-between m-0-auto pt-7">
          {products.map((product) => (
            <Link
              className="card h-10 w-20 mt-4"
              to={`/products/${product._id}`}
              key={product._id}
            >
              <div className="card-image ">
                <figure className="image is-square">
                  <img src={product.image} alt="Product" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                    <p className="subtitle is-6">{product.brand}</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
