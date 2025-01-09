import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import LoadingLayout from "../layouts/LoadingLayout";
import PropTypes from "prop-types";

const AdminRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <LoadingLayout></LoadingLayout>;
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to={"/login"}
      state={{ from: location.pathname }}
      replace
    ></Navigate>
  );
};

AdminRouter.propTypes = {
  children: PropTypes.element,
};

export default AdminRouter;
