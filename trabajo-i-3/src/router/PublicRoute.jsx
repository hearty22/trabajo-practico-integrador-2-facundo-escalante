import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
export const PublicRoute =  () => {
  const { getProfile } =  useProfile({});
  const isLogged =  getProfile();
  return (isLogged === false) ? <Navigate to={"/home"} /> : <Outlet />;
};
