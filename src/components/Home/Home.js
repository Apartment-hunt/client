import React from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import RentRoom from "../RentRoom/RentRoom";
import Service from "../Service/Service";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="secondaryBanner">
        <RentRoom />
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
