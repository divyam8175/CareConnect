import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./components/PatientPages/Dashboard";
import Home from "./components/Home/Home";
import Appointment from "./components/PatientPages/appointment";
import Profile from "./components/PatientPages/Profile";
import MedicalRecords from "./components/PatientPages/MedicalRecords";
import Chat from "./pages/chat";
import RoleSelectionlogin from "./pages/roleselectionlogin"
import RoleSelectionSignup from "./pages/roleselectionSignup"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patient-dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/medicalreport" element={<MedicalRecords />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/roleselectionlogin" element={<RoleSelectionlogin />} />
        <Route path="/roleselectionSignup" element={<RoleSelectionSignup />} />
      </Routes>
    </Router>
  );
};

export default App;