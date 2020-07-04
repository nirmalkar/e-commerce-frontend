import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../search/SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top pt-2 pb-2">
      <div className="container has-text-black">
        <div className="navbar-brand is-size-3 d-font">ShopIt</div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item w-35">
              <SearchBar />
            </span>
            <Link to="/profile" className="navbar-item has-text-black" href="#">
              <i className="fas fa-user-circle fa-lg mr-2" />
              Profile
            </Link>
            <Link to="/cart" className="navbar-item has-text-black" href="#">
              <i className="fas fa-shopping-bag fa-lg mr-2" />
              Cart
            </Link>
            <Link to="wishlist" className="navbar-item has-text-black" href="#">
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
