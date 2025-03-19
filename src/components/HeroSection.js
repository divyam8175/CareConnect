import React from "react";
import "../styles/HeroSection.css";
import logo from "../assets/medical-team.png";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Healthcare at your <span className="highlight">fingertips</span></h1>
          <p>Connect with top doctors, manage your health records, and get AI-powered health insights - all in one place.</p>
          <button className="get-started">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Telemedicine Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
