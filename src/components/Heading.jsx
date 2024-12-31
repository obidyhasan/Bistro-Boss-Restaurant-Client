import PropTypes from "prop-types";

const Heading = ({ subHeading, heading }) => {
  return (
    <div className="flex items-center flex-col">
      <p className="text-yellow-500 italic">--- {subHeading} ---</p>
      <h2 className="mt-2 font-semibold p-1 border-y-4 text-3xl uppercase">
        {heading}
      </h2>
    </div>
  );
};

Heading.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
};

export default Heading;
