import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  
    return (
        <nav className="navbar">
            <div className="container">
                {/* Left Side: Logo and Navigation Links */}
                <div className="nav-left">
                    <div className="logo">
                        <img src={logo} alt="HealthConnect" />
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/finddoctor">Find Doctors</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                {/* Right Side: Auth Buttons */}
                <div className="nav-right">
                <div className="auth-buttons">
                    <button onClick={() => navigate("/login")} className="login-link">LOGIN</button>
                    <button onClick={() => navigate("/signup")} className="login-link">SIGNUP</button>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
