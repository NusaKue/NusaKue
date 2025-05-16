import HeroSection from "../../components/Pages/Home/HeroSection";
import HowItWorks from "../../components/Pages/Home/HowItWorks";
import PoularCakes from "../../components/Pages/Home/PopularCakes";

import "../../../public/css/Home.css";
function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PoularCakes />
    </>
  );
}

export default HomePage;
