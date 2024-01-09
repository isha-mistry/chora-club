import React from "react";
import Faqs from "@/components/home/Faqs";
import HomeHero from "@/components/home/HomeHero";
import HomeInfo from "@/components/home/HomeInfo";
import HowItWorks from "@/components/home/HowItWorks";

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
