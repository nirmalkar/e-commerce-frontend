import React from "react";

import Shirt from "../assets/images/img.jpeg";

const Home = () => {
  return (
    <section className="hero is-white is-fullheight">
      <header className="hero-head">
        <nav className="navbar is-transparent is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
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
      <div className="hero-body">
        <div className="container">
          <div className="card h-10 w-20">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={Shirt} alt="Product" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">T-Shirt</p>
                  <p className="subtitle is-6">John players</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
