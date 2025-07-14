import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import SubmitRTI from "./SubmitRTI";
import FaaDashboard from '../../rti-FaaPortal/faaDashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="bg-blue-900 text-white p-4 flex justify-between">
        <h1 className="text-lg font-semibold">RTI Online Tripura</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/submit-rti" className="hover:underline">Submit RTI</Link>
          <Link to="/faaPortal/dashboard" className="hover:underline">FAA Dashboard</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/submit-rti" element={<SubmitRTI />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faaPortal/dashboard" element={<FaaDashboard />} />
      </Routes>
    </Router>
  );
}
