import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  //   this function is used in register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   this function is used in login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    createUser,
    signIn,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
