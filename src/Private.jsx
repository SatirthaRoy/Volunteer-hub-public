import { Navigate, useLocation } from 'react-router-dom';
import useData from '../Utils/useData'
import { Spinner } from "@material-tailwind/react";

const Private = ({children}) => {
  const {user, loading} = useData();
  const location = useLocation();

  if(loading) {
    return <div className='flex items-center justify-center h-screen w-full'><Spinner className="size-32"></Spinner></div>
  }

  if(user) {
    return children
  }else {
    return <Navigate state={location.pathname} to='/login'></Navigate>
  }



}

export default Private