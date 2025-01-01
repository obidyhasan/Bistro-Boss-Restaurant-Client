import { Helmet } from "react-helmet-async";
import shopBG from "../../assets/shop/banner2.jpg";
import ShopCategory from "./ShopCategory";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Shop | Bistro Boss</title>
      </Helmet>

      {/* Hero Section */}
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: `url(${shopBG})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center mt-20 text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">Our Shop</h1>
            <p className="mb-5 uppercase">Would You Like To try a dish?</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 my-10">
        <ShopCategory></ShopCategory>
      </div>
    </div>
  );
};

export default OurShop;
