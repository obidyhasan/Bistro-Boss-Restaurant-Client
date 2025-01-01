import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import MenuCard from "../../components/MenuCard";
import useMenu from "../../hooks/useMenu";

const MenuSection = () => {
  const [menus] = useMenu();
  const popularMenu = menus.filter((menu) => menu.category === "popular");

  return (
    <div className="my-10 max-w-7xl mx-auto px-5">
      <Heading subHeading={"Check it out"} heading={"From Our Menu"}></Heading>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {popularMenu.map((menu) => (
          <MenuCard key={menu._id} menuItem={menu}></MenuCard>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to={"/menus"}
          className="border-b-4 btn btn-outline border-x-0 border-t-0 shadow-lg"
        >
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default MenuSection;
