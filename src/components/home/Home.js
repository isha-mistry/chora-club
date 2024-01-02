import React from "react";
import HomeHero from "./HomeHero";
import HomeInfo from "./HomeInfo";
import HowItWorks from "./HowItWorks";
import Faqs from "./Faqs";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeInfo />
      <HowItWorks />
      <Faqs />
    </div>
  );
}

export default HomePage;
