import PropTypes from "prop-types";
import FoodItem from "../../components/FoodItem";
import useMenu from "../../hooks/useMenu";

const OrderItem = ({ categoryFood }) => {
  const [menus, loading] = useMenu();
  const itemFood = menus.filter((food) => food.category === categoryFood);

  return (
    <div>
      {loading ? (
        <div className="my-10 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="my-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {itemFood.map((food) => (
            <FoodItem key={food._id} food={food}></FoodItem>
          ))}
        </div>
      )}
    </div>
  );
};

OrderItem.propTypes = {
  categoryFood: PropTypes.string,
};

export default OrderItem;
