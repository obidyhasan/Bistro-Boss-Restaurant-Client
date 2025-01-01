import PropTypes from "prop-types";

const SectionBanner = ({ title, description, img }) => {
  return (
    <div>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default SectionBanner;
