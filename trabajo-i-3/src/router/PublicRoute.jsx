import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
import { Loading } from "../components/Loading";
import { useEffect } from "react";
import { useState } from "react";
export const PublicRoute = () => {
  const { getProfile } = useProfile({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    const checkProfile = async () => {
      try {
        setIsLoading(true);
        const profile = await getProfile();
        setIsLogged(!!profile); //convierte el valor de islogged al valor del perfil, si el fetch da error o es incorrecto tomará falso, y diceversa
      } catch (error) {
        console.log(error);
        setIsLogged(false);
      } finally {
        setIsLoading(false);
      }
    };
    console.log(isLogged);
    checkProfile();
  }, []); 
  return isLoading ? (
    <Loading />
  ) : isLogged === false ? (
    <Navigate to={"/home"} />
  ) : (
    <Outlet />
  );
};
