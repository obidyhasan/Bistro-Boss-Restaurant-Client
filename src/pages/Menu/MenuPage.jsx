import { Link } from "react-router-dom";
import mainBg from "../../assets/menu/banner3.jpg";
import dessertsBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladsBg from "../../assets/menu/salad-bg.jpg";
import soupsBg from "../../assets/menu/soup-bg.jpg";
import Heading from "../../components/Heading";
import MenuCardSection from "../../components/MenuCardSection";
import SectionBanner from "../../shared/SectionBanner";
import { Helmet } from "react-helmet-async";

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Menus | Bistro Boss</title>
      </Helmet>

      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: `url(${mainBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center mt-20 text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">Our Menu</h1>
            <p className="mb-5 uppercase">Would You Like To try a dish?</p>
          </div>
        </div>
      </div>

      <section className="my-10 max-w-7xl mx-auto px-5">
        <Heading subHeading={"Don't miss"} heading={"Today's Offer"}></Heading>
        <MenuCardSection categoryItem={"offered"}></MenuCardSection>
        <div className="text-center">
          <Link className=" border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg">
            Order Your Favorite Food
          </Link>
        </div>
      </section>

      {/* Desserts */}
      <section>
        <SectionBanner
          title={"Desserts"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          img={dessertsBg}
        ></SectionBanner>
        <div className="max-w-7xl mx-auto px-5">
          <MenuCardSection categoryItem={"dessert"}></MenuCardSection>

          <div className="text-center mb-10">
            <Link className=" border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg">
              Order Your Favorite Food
            </Link>
          </div>
        </div>
      </section>

      {/* Pizza */}
      <section>
        <SectionBanner
          title={"Pizza"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          img={pizzaBg}
        ></SectionBanner>
        <div className="max-w-7xl mx-auto px-5">
          <MenuCardSection categoryItem={"pizza"}></MenuCardSection>

          <div className="text-center mb-10">
            <Link className=" border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg">
              Order Your Favorite Food
            </Link>
          </div>
        </div>
      </section>
      {/* Salads */}
      <section>
        <SectionBanner
          title={"Salads"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          img={saladsBg}
        ></SectionBanner>
        <div className="max-w-7xl mx-auto px-5">
          <MenuCardSection categoryItem={"salad"}></MenuCardSection>

          <div className="text-center mb-10">
            <Link className=" border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg">
              Order Your Favorite Food
            </Link>
          </div>
        </div>
      </section>
      {/* Soups */}
      <section>
        <SectionBanner
          title={"Soups"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          img={soupsBg}
        ></SectionBanner>
        <div className="max-w-7xl mx-auto px-5">
          <MenuCardSection categoryItem={"soup"}></MenuCardSection>

          <div className="text-center mb-10">
            <Link className=" border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg">
              Order Your Favorite Food
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
