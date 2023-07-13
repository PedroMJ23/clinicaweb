import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import LogIn from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Appointments from "../Components/Appointments/Appointments";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/appointments" element={<Appointments/>} />
    </Routes>
  );
};

export default GlobalRoutes;
