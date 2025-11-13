import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useEffect, useState } from "react";
export const PrivateRoute = () => {
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
          setIsLogged(false);
          setIsLoading(false);
          return;
        }
        if (profile.ok) {
          setIsLogged(true);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.log(error);
        setIsLogged(false);
      }
    };
    checkProfile();
  }, []);
  return isLoading ? (
    <Loading />
  ) : isLogged ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
};
