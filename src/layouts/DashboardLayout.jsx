import { Link, NavLink, Outlet } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { MdRestaurant } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiSolidFoodMenu } from "react-icons/bi";
import useCart from "../hooks/useCart";
import { FaHome, FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex bg-base-200">
      <div className="w-80 bg-orange-400 min-h-screen">
        <div className="p-5">
          <Link to={"/"} className="text-black ">
            <h1 className="uppercase font-extrabold font-cinzel text-lg">
              Bistro Boss
            </h1>
            <p className="-mt-1 uppercase tracking-[2px] font-cinzel font-semibold">
              Restaurant
            </p>
          </Link>
        </div>

        <div>
          {isAdmin ? (
            <ul className="menu menu-lg rounded-box">
              <li>
                <NavLink to={"/dashboard/admin/home"}>
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/admin/add-item"}>
                  <MdRestaurant></MdRestaurant>
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/admin/manage-item"}>
                  <TfiMenuAlt></TfiMenuAlt>
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/admin/manage-booking"}>
                  <BiSolidFoodMenu></BiSolidFoodMenu>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/admin/all-users"}>
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="menu menu-lg rounded-box">
              <li>
                <NavLink to={"/dashboard/user/home"}>
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/user/reservation"}>
                  <MdRestaurant></MdRestaurant>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/user/payment-history"}>
                  <TfiMenuAlt></TfiMenuAlt>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/user/cart"}>
                  <IoCart></IoCart>
                  My Cart
                  <div className="badge">{cart.length}</div>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/user/add-review"}>
                  <FaUsers></FaUsers>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/user/my-booking"}>
                  <FaUsers></FaUsers>
                  My Booking
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="m-5 bg-white flex-1 p-5 rounded-md">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
