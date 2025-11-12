import {Outlet} from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { Home } from "../pages/Home";

export const PrivateRoute = () => {
    const isLogged = localStorage.getItem("isLogged");
    console.log(isLogged);
  return (
    isLogged ? <Outlet/> : <Navigate to={"/login"}/>
  )
}
