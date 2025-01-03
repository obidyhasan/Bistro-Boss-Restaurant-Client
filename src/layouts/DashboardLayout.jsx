import { Link, Outlet } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
  const [cart] = useCart();

  return (
    <div className="flex bg-base-200">
      <div className="w-80 bg-orange-400 min-h-screen p-5">
        <Link to={"/"} className="text-black">
          <h1 className="uppercase font-extrabold font-cinzel text-lg">
            Bistro Boss
          </h1>
          <p className="-mt-1 uppercase tracking-[2px] font-cinzel font-semibold">
            Restaurant
          </p>
        </Link>

        <div className="space-y-2 mt-5">
          <Link
            to={"/dashboard/cart"}
            className="flex justify-between text-xl gap-3 font-semibold border text-white p-3 rounded-md items-center"
          >
            <div className="flex items-center gap-3">
              <IoCart></IoCart> Cart
            </div>
            <div className="badge">{cart.length}</div>
          </Link>
        </div>
      </div>
      <div className="m-5 bg-white flex-1 p-5 rounded-md">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
