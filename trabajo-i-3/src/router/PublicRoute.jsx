import { Navigate } from 'react-router-dom'
import {Outlet} from "react-router-dom"
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
export const PublicRoute = () => {
    const isLogged  = localStorage.getItem("isLogged")
    console.log(isLogged);
  return (
    !isLogged ? <Outlet/> : <Navigate to={"/home"}/>
  )
}
