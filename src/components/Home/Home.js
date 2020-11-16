import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import RentRoom from "../RentRoom/RentRoom";
import Service from "../Service/Service";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="secondaryBanner">
        <RentRoom />
        <Service />
      </div>
      <Footer />
    </>
  );
}
