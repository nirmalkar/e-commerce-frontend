import React from "react";
import Navbar from "../navbar/Navbar";
import "./Image.scss";

const LandingMainHero = () => {
  return (
    <section className="hero is-fullheight hero-img">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body has-text-centered">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title is-size-2 is-dark mb-6 d-font has-text-black">
                ShopIt
              </h1>
              <h2 className="subtitle t-font has-text-black">
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
