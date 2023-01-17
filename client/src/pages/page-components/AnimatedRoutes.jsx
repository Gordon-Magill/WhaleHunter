import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "../Splash";
import Battle from "../Battle";
import Dashboard from "../Dashboard";
import Gallery from "../Gallery";
import Harbor from "../Harbor";
import Login from "../LoginPage";
import Signup from "../SignupPage";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/harbor" element={<Harbor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
