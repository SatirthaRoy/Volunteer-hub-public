import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import useAxios from '../Utils/useAxios';


export const contextData = createContext();


const Provider = ({children}) => {

  const myAxios = useAxios();


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      if(loggedUser) {
        myAxios.post('/jwt', loggedUser)
        .then(res => {
          setUser(loggedUser);
          setLoading(false);
        })
        // setLoading(false);
      } else {
        myAxios.post('/logout', user)
        .then (res => console.log(res.data));
        setUser(null);
        setLoading(false);
      }

    })

    return () => unsubscribe();
  })

  const signUpWithEmail = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithEmail = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInPop = (provider) => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    return signOut(auth);
  }


  const [dark, setDark] = useState(false);

  const data = {
    auth,
    user,
    setUser,
    dark,
    setDark,
    signUpWithEmail,
    signInWithEmail,
    signInPop,
    logOut,
    setLoading,
    loading
  }


  return (
    <contextData.Provider value={data}>{children}</contextData.Provider>
  )
}

export default Provider