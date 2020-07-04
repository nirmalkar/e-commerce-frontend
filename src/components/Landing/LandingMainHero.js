import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../search/SearchBar";

const LandingMainHero = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <div className="navbar">
          <div className="container">
            <div className="navbar-brand is-size-3 d-font">ShopIt</div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <SearchBar />
                </span>
                <Link to="/profile" className="navbar-item" href="#">
                  <i className="fas fa-user-circle fa-lg mr-2" />
                  Profile
                </Link>
                <Link to="/cart" className="navbar-item" href="#">
                  <i className="fas fa-shopping-bag fa-lg mr-2" />
                  Cart
                </Link>
                <Link to="wishlist" className="navbar-item" href="#">
                  <i className="fas fa-bookmark fa-lg mr-2" />
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-body has-text-centered">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <h1 className="title is-size-2 is-dark mb-6 d-font">ShopIt</h1>
              <h2 className="subtitle t-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate quibusdam necessitatibus sit quas a nobis repellat
                esse labore at similique?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMainHero;
