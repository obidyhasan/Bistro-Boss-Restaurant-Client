import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const SectionBanner = ({ title, description, img }) => {
  return (
    <div>
      {/* <div className="hero min-h-[400px]">
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div> */}

      <Parallax
        className="hero"
        blur={10}
        bgImage={img}
        bgImageAlt="the cat"
        strength={300}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-white py-32">
          <div className="max-w-3xl ">
            <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

SectionBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default SectionBanner;
