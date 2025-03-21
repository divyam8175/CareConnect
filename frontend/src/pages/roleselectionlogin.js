import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/roleselection.css"; // Adjust the path as needed

const RoleSelectionlogin = () => {
  const navigate = useNavigate();

  const handleDoctorLogin = () => {
    navigate("/login?role=doctor");
  };

  const handlePatientLogin = () => {
    navigate("/login?role=patient");
  };


  return (
    <div className="role-selection-container">
      <div className="role-card">
        <h1>Welcome to Telemedicine Portal</h1>
        <p>Please select your login option:</p>
        <div className="button-container">
          <button className="role-button" onClick={handleDoctorLogin}>
            Doctor Login
          </button>
          <button className="role-button" onClick={handlePatientLogin}>
            Patient Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionlogin;
