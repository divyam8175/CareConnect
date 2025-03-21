import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Signup.css"; // Adjust the path as needed

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");

  const [formData, setFormData] = useState({
    role: role || "",
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    emergencyPhone: "",
    address: "",
    specialization: "",
    licenseNumber: "",
    licenseExpiry: "",
    affiliatedHospital: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (role) {
      setFormData((prev) => ({
        ...prev,
        role: role,
      }));
    }
  }, [role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Log form data for debugging purposes
    console.log("Form data to be sent:", formData);

    try {
      const response = await fetch("http://localhost:3003/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const result = await response.json();
        console.log("Signup successful:", result);
        // Store the token in localStorage
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", formData.role);
        // Redirect to the appropriate page based on the role
        if (formData.role === "patient") {
          navigate("/patient-dashboard");
        } else if (formData.role === "doctor") {
          navigate("/doctor-dashboard");
        }
      } else {
        const error = await response.json();
        console.error("Signup failed:", error);
        // Display or handle error accordingly
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors here
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>

        {/* Common Fields */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Fields Specific to Patients */}
        {formData.role === "patient" && (
          <>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Emergency Phone Number"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Fields Specific to Doctors */}
        {formData.role === "doctor" && (
          <>
            <input
              type="text"
              placeholder="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="License Number"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              placeholder="License Expiry Date"
              name="licenseExpiry"
              value={formData.licenseExpiry}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Affiliated Hospital"
              name="affiliatedHospital"
              value={formData.affiliatedHospital}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;