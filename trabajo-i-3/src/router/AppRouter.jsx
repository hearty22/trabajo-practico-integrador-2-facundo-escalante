import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Navigate } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Tasks } from "../pages/Tasks";
import { Register } from "../pages/Register";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Navigate to={"/login"}/>} />
        <Route path="/" element={<Navigate to={"/login"}/>} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  );
};
