import React from 'react'
import {Outlet} from "react-router"
import { Navigate } from 'react-router';

export const PrivateRoute = () => {
    const isLogged = localStorage.getItem("isLogged");
  return (
    isLogged ? <Outlet/> : <Navigate to={"/login"}/>
  )
}
