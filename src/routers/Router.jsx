import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import PropTypes from "prop-types";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menu/MenuPage";

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
