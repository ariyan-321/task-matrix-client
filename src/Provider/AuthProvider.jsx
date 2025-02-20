import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
  import { auth } from "../firebase/firebase";
  
  export const authcontext = createContext();
  
  export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const provider = new GoogleAuthProvider();
  
    const createProfile = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const updateUserProfile = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unSubscribe();
    }, []);
  
    const authInfo = {
      user,
      loading,
      setLoading,
      createProfile,
      userLogin,
      updateUserProfile,
      logOut,
      googleLogin,
    };
  
    return (
      <authcontext.Provider value={authInfo}>
        {children}
      </authcontext.Provider>
    );
  }
  