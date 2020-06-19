import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listProducts } from "../appRedux/aciton/productActions";
import Sidebar from "../components/Sidebar";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <section className="hero is-white is-fullheight">
      <header className="hero-head">
        <nav className="navbar is-transparent is-fixed-top">
          <div className="container">
            <div className="buttons pt-4">
              <button className="button is-success is-light">Success</button>
            </div>
            <div className="navbar-brand pl-2">
              <a className="navbar-item" href="/">
                Shyam
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroC"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" href="/home">
                  Home
                </a>
                <a className="navbar-item" href="/examples">
                  Examples
                </a>
                <a className="navbar-item" href="/documentation">
                  Documentation
                </a>
                <span className="navbar-item"></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Sidebar />
      <div className="hero-body">
        <div className="container is-space-between m-0-auto pt-7">
          {products.map((product) => (
            <div className="card h-10 w-20 mt-4" key={product._id}>
              <div className="card-image">
                <figure className="image">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
