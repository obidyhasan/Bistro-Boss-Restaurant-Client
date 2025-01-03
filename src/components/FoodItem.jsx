import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { showSweetAlert } from "../utility/showSweetAlert";

const FoodItem = ({ food }) => {
  const { user } = useAuth();
  const { name, image, price, recipe, category, _id } = food;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  function handelAddToCart() {
    if (user && user?.email) {
      const cartInfo = {
        menuId: _id,
        userEmail: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/api/carts", cartInfo).then((result) => {
        if (result.data.insertedId) {
          showSweetAlert("success", "Add to cart");
        }
      });
    } else {
      navigate("/login", { state: { from: location.pathname } });
    }
  }

  return (
    <div>
      <div className="relative">
        <figure>
          <img src={image} className="w-full h-[220px] object-cover" alt="" />
        </figure>
        <p className="bg-black text-white py-2 px-4 absolute top-0 right-0 m-2">
          ${price}
        </p>
      </div>
      <div className="bg-gray-100 text-center space-y-3 p-4">
        <div className="badge">{category}</div>
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="line-clamp-2">{recipe}</p>
        <button
          onClick={handelAddToCart}
          className="border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg text-yellow-600 border-yellow-600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object,
};

export default FoodItem;
