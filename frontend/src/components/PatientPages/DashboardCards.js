// src/components/DashboardCards.js
import React from 'react';

const DashboardCards = () => {
  return (
    <div className="card-grid">
      <div className="dashboard-card">
        <div className="card-content">
          <div className="card-icon-container">
            <i className="fas fa-calendar-check card-icon"></i>
          </div>
          <div className="card-text">
            <h2 className="card-label">Total Appointments</h2>
            <p className="card-value">24</p>
          </div>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-content">
          <div className="card-icon-container">
            <i className="fas fa-clock card-icon"></i>
          </div>
          <div className="card-text">
            <h2 className="card-label">Pending Consultations</h2>
            <p className="card-value">5</p>
          </div>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-content">
          <div className="card-icon-container">
            <i className="fas fa-file-medical card-icon"></i>
          </div>
          <div className="card-text">
            <h2 className="card-label">Medical Records</h2>
            <p className="card-value">12</p>
          </div>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-content">
          <div className="card-icon-container">
            <i className="fas fa-star card-icon"></i>
          </div>
          <div className="card-text">
            <h2 className="card-label">Average Rating</h2>
            <p className="card-value">4.8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
