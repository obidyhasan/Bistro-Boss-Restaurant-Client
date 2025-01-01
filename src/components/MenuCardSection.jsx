import useMenu from "../hooks/useMenu";
import MenuCard from "./MenuCard";
import PropTypes from "prop-types";

const MenuCardSection = ({ categoryItem }) => {
  const [menus, loading] = useMenu();
  const item = menus.filter((menu) => menu.category === categoryItem);

  return (
    <div>
      {loading ? (
        <div className="text-center my-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {item.map((menu) => (
            <MenuCard key={menu._id} menuItem={menu}></MenuCard>
          ))}
        </div>
      )}
    </div>
  );
};

MenuCardSection.propTypes = {
  categoryItem: PropTypes.string,
};

export default MenuCardSection;
