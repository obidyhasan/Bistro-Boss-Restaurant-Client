import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import PropTypes from "prop-types";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menu/MenuPage";
import OurShop from "../pages/Shop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../layouts/DashboardLayout";
import Cart from "../pages/dashboard/Cart/Cart";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Page Not Fount</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menus",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shops/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      // user access
      {
        path: "/dashboard/user/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/user/home",
        element: <h1>Admin Home</h1>,
      },
      {
        path: "/dashboard/user/reservation",
        element: <h1>Reservation</h1>,
      },
      {
        path: "/dashboard/user/payment-history",
        element: <h1>Payment History</h1>,
      },
      {
        path: "/dashboard/user/add-review",
        element: <h1>Add Review</h1>,
      },
      {
        path: "/dashboard/user/my-booking",
        element: <h1>My Booking</h1>,
      },

      // admin access
      {
        path: "/dashboard/admin/home",
        element: <h1>Admin Home</h1>,
      },
      {
        path: "/dashboard/admin/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/admin/add-item",
        element: <h1>add item</h1>,
      },
      {
        path: "/dashboard/admin/manage-item",
        element: <h1>manage item</h1>,
      },
      {
        path: "/dashboard/admin/manage-booking",
        element: <h1>manage booking</h1>,
      },
    ],
  },
]);

const Router = ({ children }) => {
  return <RouterProvider router={routers}>{children}</RouterProvider>;
};

Router.propTypes = {
  children: PropTypes.element,
};

export default Router;
