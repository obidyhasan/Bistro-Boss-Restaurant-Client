import Heading from "../../components/Heading";
import MenuCard from "../../components/MenuCard";

const MenuSection = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-5">
      <Heading subHeading={"Check it out"} heading={"From Our Menu"}></Heading>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
      </div>

      <div className="text-center mt-10">
        <button className="btn">View Full Menu</button>
      </div>
    </div>
  );
};

export default MenuSection;
