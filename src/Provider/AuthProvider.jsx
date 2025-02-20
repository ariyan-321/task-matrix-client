import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useState } from "react";

export const authcontext = createContext();

export default function AuthProvider() {

    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const provider=new GoogleAuthProvider();



    const createProfile=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword()
    }





  return <div>AuthProvider</div>;
}
