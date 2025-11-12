import React from 'react'
import { Navigate } from 'react-router'
import {Outlet} from "react-router"
export const PublicRoute = () => {
    const isLogged  = localStorage.getItem("isLogged")
  return (
    !isLogged ? <Outlet/> : <Navigate to={"/home"}/>
  )
}
