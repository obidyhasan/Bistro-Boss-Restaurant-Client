import PropTypes from "prop-types";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
