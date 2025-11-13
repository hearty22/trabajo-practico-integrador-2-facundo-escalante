import {Outlet} from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { useProfile } from "../hooks/useProfile";
import { Loading } from "../components/Loading";
import { useEffect, useState } from "react";
export const PrivateRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false)
  const {getProfile } = useProfile();
    useEffect(()=>{
      const checkProfile = async () =>{
        try {
          setIsLoading(true);
          const profile = await getProfile();
          setIsLogged(!!profile); //convierte el valor de islogged al valor del perfil, si el fetch da error o es incorrecto tomará falso, y diceversa
        } catch (error) {
          console.log(error);
          setIsLogged(false)
        } finally{
          setIsLoading(false)
        }
      }
      checkProfile();
    }, []);
  return (
    isLoading ? <Loading/> : ((isLogged) ? <Outlet/> : <Navigate to={"/login"}/>)
  )
}
