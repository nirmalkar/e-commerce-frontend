import React from "react";

import Navbar from "../navbar/Navbar";

const LandingMainHero = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Navbar />
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
