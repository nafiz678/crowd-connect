import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';


export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [dark, setDark] = useState(false)
    const [loader, setLoader] = useState(true)



    const GoogleProvider = new GoogleAuthProvider();


    const googleLogin = ()=>{
        return signInWithPopup(auth, GoogleProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (info) => {
        return updateProfile(auth.currentUser, info)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }





    // The Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoader(false)
            setUser(currentUser)
        });

        return () => {
            unSubscribe()
        }

    }, [])


    const authInfo = {
        dark,
        setDark,
        createUser,
        updateUser,
        loginUser,
        user,
        setUser,
        logOut,
        loader,
        googleLogin
    }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;