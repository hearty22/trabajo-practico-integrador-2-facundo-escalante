import {Outlet} from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { useProfile } from "../hooks/useProfile";
export const PrivateRoute = () => {
  const {getProfile} = useProfile({});
  const isLogged =  getProfile();
  return (
    (isLogged) ? <Outlet/> : <Navigate to={"/login"}/>
  )
}
