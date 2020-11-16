import React from 'react';
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import RentRoom from "../RentRoom/RentRoom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <RentRoom />
    </div>
  );
};

export default Home;
