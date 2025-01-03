import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import PropTypes from "prop-types";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menu/MenuPage";
import OurShop from "../pages/Shop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Order from "../pages/Order/Order";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../layouts/DashboardLayout";
import Cart from "../pages/dashboard/Cart/Cart";

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
      {
        path: "/order",
        element: (
          <PrivateRouter>
            <Order></Order>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
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
