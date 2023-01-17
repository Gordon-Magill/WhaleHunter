import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages and page content
import Battle from "../Battle";
import Dashboard from "../Dashboard";
import Gallery from "../Gallery";
import Harbor from "../Harbor";
import Splash from "../Splash";
import LoginPage from "../LoginPage";
import SignupPage from '../SignupPage'

export default function Page() {
  return (
      <div className="content">
          <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/harbor" element={<Harbor />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        </Router>
    </div>
  );
}
