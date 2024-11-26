import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import {  createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup,GithubAuthProvider,signOut  } from "firebase/auth";


export const AuthContext=createContext(null)
const FirebaseProvider = ({children}) => {

    // social AuthProvider 
    const goggleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [user, setUser]=useState(null)
    console.log(user)
// create a user

const createUser=(email,password)=> {
   return  createUserWithEmailAndPassword(auth, email, password)

}
//  sign in user 
const logInUser=(email, password)=> {
    return    signInWithEmailAndPassword(auth, email, password)
  }

//    googleLogin 
const googleLogin =()=> {
    signInWithPopup(auth,goggleProvider)
}
const gitHubLogin =()=> {
    signInWithPopup(auth, gitHubProvider)

}
//  Sign out 
const logOut =()=> {
    signOut(auth)
}

const allValues={
    createUser,
    logInUser,
    googleLogin,
    gitHubLogin,
    logOut,
    user
}


// Observer 

useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser)
          // ...
        }
      });
},[])
    return (
        <AuthContext.Provider value={allValues}>
           {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;