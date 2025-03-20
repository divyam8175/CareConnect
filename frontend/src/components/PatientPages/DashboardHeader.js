// src/components/DashboardHeader.js
import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="dashboard-title">Dashboard</h1>
        </div>
        <div className="header-right">
          <a href="/dashboard" className="nav-link">
            <i className="fas fa-home nav-icon"></i>Dashboard
          </a>
          <a href="#" className="nav-link">
            <i className="fas fa-calendar-alt nav-icon"></i>Appointments
          </a>
          <a href="#" className="nav-link">
            <i className="fas fa-file-medical nav-icon"></i>Medical Records
          </a>
          <a href="#" className="nav-link">
            <i className="fas fa-user nav-icon"></i>Profile
          </a>
          <div className="notification-container">
            <button className="notification-button">
              <i className="fas fa-bell"></i>
              <span className="notification-dot"></span>
            </button>
            <div className="user-info">
              <img
                className="user-avatar"
                src="https://creatie.ai/ai/api/search-image?query=A%20professional%20headshot%20of%20a%20middle-aged%20person%20with%20a%20warm%20smile,%20wearing%20business%20attire,%20against%20a%20neutral%20background.%20The%20image%20should%20have%20high%20quality%20lighting%20and%20appear%20welcoming%20and%20trustworthy"
                alt="User Avatar"
              />
              <span className="user-name">John Smith</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
