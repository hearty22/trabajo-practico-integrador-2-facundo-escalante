import React from "react";
import { Outlet } from "react-router";
import { Routes, Route } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Tasks } from "../pages/Tasks";
export const AppRouter = () => {
  return (
    <Routes>
      <PublicRoute>
        <Route path="/login" element={Login} />
        <Route path="/register" element={Login} />
        <Route path="*" element={Login} />
        <Route path="/" element={Login} />

      </PublicRoute>
      <PrivateRoute>
        <Route path="/home" element={Home} />
        <Route path="/profile" element={Profile} />
        <Route path="/tasks" element={Tasks} />
        <Route path="*" element={Home} />
        <Route path="/" element={Home} />

      </PrivateRoute>
    </Routes>
  );
};
