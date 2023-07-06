import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import LogIn from "../Pages/Login/Login";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default GlobalRoutes;
