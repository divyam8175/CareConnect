import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/roleselection.css"; // Adjust the path as needed

const RoleSelectionSignup = () => {
  const navigate = useNavigate();

  const handleDoctorSignup = () => {
    navigate("/signup?role=doctor");
  };

  const handlePatientSignup = () => {
    navigate("/signup?role=patient");
  };

  
  return (
    <div className="role-selection-container">
      <div className="role-card">
        <h1>Welcome to Telemedicine Portal</h1>
        <p>Please select your signup option:</p>
        <div className="button-container">
          <button className="role-button" onClick={handleDoctorSignup}>
            Doctor Signup
          </button>
          <button className="role-button" onClick={handlePatientSignup}>
            Patient Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionSignup;