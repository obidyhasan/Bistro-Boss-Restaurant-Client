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

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
