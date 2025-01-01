import { Helmet } from "react-helmet-async";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import "./Home.css";
import MenuSection from "./MenuSection";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro Boss</title>
      </Helmet>

      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <BannerOne></BannerOne>
      <MenuSection></MenuSection>
      <BannerTwo></BannerTwo>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
