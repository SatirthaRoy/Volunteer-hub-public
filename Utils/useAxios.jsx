import axios from "axios"
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase.config";


const myAxios = axios.create({
  baseURL: 'https://volunteer-server-side-ten.vercel.app',
  // baseURL: 'http://localhost:5000',
  withCredentials: true
})

const useAxios = () => {
 

  useEffect(() => {
    myAxios.interceptors.response.use( res => {
      return res;
    }, err => {
      if(err.response?.status === 401 || err.response?.status === 403) {
        signOut(auth)
        .then(r => {
          console.log('logged out');
        })
      }
    })
  }, [])

  return myAxios;
}

export default useAxios