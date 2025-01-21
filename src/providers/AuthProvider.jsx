import PropTypes from "prop-types";
import AuthContext from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const authInfo = {
    user,
    loading,
    setLoading,
    userLoginInFirebase,
    userRegisterInFirebase,
    userLogoutInFirebase,
    userProfileUpdateInFirebase,
    userLoginWithGoogle,
  };

  function userLoginInFirebase(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function userRegisterInFirebase(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function userLogoutInFirebase() {
    setLoading(true);
    return signOut(auth);
  }

  function userProfileUpdateInFirebase(name, photo) {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  }

  function userLoginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and store on client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/api/jwt", userInfo).then((result) => {
          if (result.data.token) {
            localStorage.setItem("access-token", result.data.token);
            setLoading(false);
          }
        });
      } else {
        //  Remove token if user is logged out
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
