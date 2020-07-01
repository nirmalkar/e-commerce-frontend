import React from "react";

import Footer from "../components/Landing/Footer";
import LandingMainHero from "../components/Landing/LandingMainHero";
import LandingSecondHero from "../components/Landing/LandingSecondHero";
import LandingThirdHero from "../components/Landing/LandingThirdHero";

const Landing = () => {
  return (
    <>
      <LandingMainHero />
      <LandingSecondHero />
      <LandingThirdHero />
      <Footer />
    </>
  );
};

export default Landing;
