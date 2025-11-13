import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useEffect } from "react";
import { useState } from "react";
export const PublicRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const checkProfile = async () => {
      try {
        setIsLoading(true);
        const profile = await fetch("http://localhost:3000/api/profile", {
          method: "GET",
          credentials: "include",
        });
        if (!profile.ok) {
          setIsLoading(false);
          setIsLogged(false);
          return;
        }
        if (profile.ok) {
          setIsLoading(false);
          setIsLogged(true);
          return;
        }
      } catch (error) {
        console.log(error);
        setIsLogged(false);
      }
    };
    checkProfile();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isLogged) {
    return <Navigate to={"/home"}/>;
  }
  return (
    <Outlet/>
  )

};
