import React from "react";
import Img from "../../assets/images/shopit1.jpg";

const LandingSecondHero = () => {
  return (
    <section className="hero is-medium">
      <div className="container">
        <figure className="image">
          <img src={Img} />
          <p className="has-text-centered is-size-5 t-font mt-2">
            Organic Coconut Body Oil
          </p>
        </figure>
      </div>
    </section>
  );
};

export default LandingSecondHero;
