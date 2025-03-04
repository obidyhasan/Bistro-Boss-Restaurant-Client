import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdOutlineShoppingBag } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, userLogoutInFirebase } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const navbarLink = (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-black lg:text-white underline"
            : "text-black lg:text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/menus"}
        className={({ isActive }) =>
          isActive
            ? "text-black lg:text-white underline"
            : "text-black lg:text-white"
        }
      >
        Menus
      </NavLink>
      <NavLink
        to={"/shops/salad"}
        className={({ isActive }) =>
          isActive
            ? "text-black lg:text-white underline"
            : "text-black lg:text-white"
        }
      >
        Our Shop
      </NavLink>
      {user && isAdmin && (
        <NavLink
          to={"/dashboard/admin/home"}
          className={({ isActive }) =>
            isActive
              ? "text-black lg:text-white underline"
              : "text-black lg:text-white"
          }
        >
          Admin Dashboard
        </NavLink>
      )}
      {user && !isAdmin && (
        <NavLink
          to={"/dashboard/user/home"}
          className={({ isActive }) =>
            isActive
              ? "text-black lg:text-white underline"
              : "text-black lg:text-white"
          }
        >
          Dashboard
        </NavLink>
      )}
    </div>
  );

  return (
    <div className="fixed z-10 w-full bg-[#151515ad] ">
      <div className="font-inter max-w-7xl mx-auto px-5">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden mr-3 bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navbarLink}
              </ul>
            </div>
            <Link to={"/"} className="text-white">
              <h1 className="uppercase font-extrabold font-cinzel text-lg">
                Bistro Boss
              </h1>
              <p className="-mt-1 uppercase tracking-[2px] font-cinzel font-semibold">
                Restaurant
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarLink}</ul>
          </div>
          <div className="navbar-end flex gap-3">
            <Link
              to={user?.email && "/dashboard/user/cart"}
              className="btn btn-ghost text-white border-white"
            >
              <MdOutlineShoppingBag className="text-3xl"></MdOutlineShoppingBag>
              <div className="badge">{cart.length}</div>
            </Link>
            {user ? (
              <button onClick={userLogoutInFirebase} className="btn">
                Logout
              </button>
            ) : (
              <Link to={"/login"} className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
