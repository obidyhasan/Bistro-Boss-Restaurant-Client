import "@smastrom/react-rating/style.css";
import icon from "../assets/quote.png";
import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";

const ReviewCard = ({ review }) => {
  const { name, details, rating } = review;

  return (
    <div className="flex flex-col items-center gap-3">
      <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
      <figure>
        <img src={icon} className="w-20" alt="" />
      </figure>
      <p className="text-center mx-10">{details}</p>
      <h1 className="text-yellow-600 font-semibold text-xl">{name}</h1>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
