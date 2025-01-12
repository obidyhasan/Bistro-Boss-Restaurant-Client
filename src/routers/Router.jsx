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
import AdminRouter from "./AdminRouter";
import AddProduct from "../pages/dashboard/AddProduct/AddProduct";
import ManageAllProduct from "../pages/dashboard/ManageAllProduct/ManageAllProduct";
import UpdateProduct from "../pages/dashboard/UpdateProduct/UpdateProduct";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";

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
        path: "/dashboard/user/add-review",
        element: <h1>Add Review</h1>,
      },
      {
        path: "/dashboard/user/my-booking",
        element: <h1>My Booking</h1>,
      },
      {
        path: "/dashboard/user/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/user/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin access
      {
        path: "/dashboard/admin/home",
        element: <h1>Admin Home</h1>,
      },
      {
        path: "/dashboard/admin/all-users",
        element: (
          <AdminRouter>
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/add-item",
        element: (
          <AdminRouter>
            <AddProduct></AddProduct>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/manage-item",
        element: (
          <AdminRouter>
            <ManageAllProduct></ManageAllProduct>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/update-product/:id",
        element: (
          <AdminRouter>
            <UpdateProduct></UpdateProduct>
          </AdminRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/menus/${params.id}`),
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
