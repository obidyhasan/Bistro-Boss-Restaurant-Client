import BannerOne from "./BannerOne";
import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import "./Home.css";
import MenuSection from "./MenuSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <BannerOne></BannerOne>
      <MenuSection></MenuSection>
    </div>
  );
};

export default Home;
