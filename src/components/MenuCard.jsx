import PropTypes from "prop-types";

const MenuCard = ({ menuItem }) => {
  const { name, recipe, image, price } = menuItem;

  return (
    <div className="flex gap-4">
      <figure className="shrink-0">
        <img
          src={image}
          className="w-16 h-16 bg-base-200 rounded-e-full rounded-bl-full object-cover"
          alt=""
        />
      </figure>
      <div>
        <h2 className="font-semibold text-lg">{name} --------</h2>
        <p className="text-sm">{recipe}</p>
      </div>
      <div>
        <p className="font-bold text-orange-500">${price}</p>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  menuItem: PropTypes.object,
};

export default MenuCard;
