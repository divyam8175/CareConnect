import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AiAssistant from "./components/AIHealthAssistant";
import Footer from "./components/Footer";
import FeaturedDoctors from "./components/FeaturedDoctors";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <HeroSection />
      <Services />
      <AiAssistant />
      <FeaturedDoctors />
      <Footer />
    </Router>
  );
};

export default App;
