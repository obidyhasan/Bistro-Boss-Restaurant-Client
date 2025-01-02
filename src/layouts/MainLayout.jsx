import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {hideNavAndFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {hideNavAndFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
