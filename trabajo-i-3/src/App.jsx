import React from 'react'
import {Routes, Route} from "react-router";
import { AppRouter } from './router/AppRouter';
export const App = () => {
  return (
    <Routes>
      <AppRouter/>
    </Routes>
  )
}
