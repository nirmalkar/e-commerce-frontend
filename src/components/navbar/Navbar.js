import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../search/SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top pt-2 pb-2 has-shadow">
      <div className="container">
        <div className="navbar-brand is-size-3 d-font">ShopIt</div>
        <span className="navbar-item w-25">asdf</span>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item w-25">
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
    </nav>
  );
};
export default Navbar;
