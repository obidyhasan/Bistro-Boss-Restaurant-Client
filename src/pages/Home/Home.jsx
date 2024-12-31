import BannerOne from "./BannerOne";
import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <BannerOne></BannerOne>
    </div>
  );
};

export default Home;
