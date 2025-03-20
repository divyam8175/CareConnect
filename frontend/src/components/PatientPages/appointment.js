import React from "react";
import "../../styles/CareConnect.css";

const Appointment = () => {
    return (
        <div>
          <header className="navbar">
            <div className="flex">
              <img src="https://placehold.co/40x40" alt="Logo" />
              <span className="ml-3 text-xl font-bold">🏥 CareConnect</span>
            </div>
            <nav className="nav-links">
              <a href="/dashboard">📊 Dashboard</a>
              <a href="/appointment">📅 Appointments</a>
              <a href="#">📋 Medical Records</a>
              <a href="/profile">👤 Profile</a>
            </nav>
            <div className="flex">
              <div className="icon-button">
                <i className="fas fa-bell text-xl"></i>
                <span className="notification-badge">3</span>
              </div>
              <img src="https://placehold.co/40x40" alt="User" className="profile-icon" />
            </div>
          </header>
    
          <main className="container">
            <div className="main">
              <section className="appointments-section">
                <h1>My Appointments</h1>
                <p>Manage your upcoming and past medical appointments</p>
    
                <div className="card">
                  <h2>Upcoming Appointments</h2>
                  <div>
                    <p><strong>Dr. Sarah Johnson</strong></p>
                    <p>Cardiology Consultation</p>
                    <p>Tomorrow at 10:00 AM</p>
                    <div className="appointment-actions">
                      <button className="reschedule">Reschedule</button>
                      <button className="cancel">Cancel</button>
                    </div>
                  </div>
                </div>
    
                <div className="card">
                  <h2>Past Appointments</h2>
                  <p><strong>Dr. Emily Martinez</strong></p>
                  <p>Skin Consultation</p>
                  <p>Dec 10, 2023 at 11:00 AM</p>
                  <span className="status completed">Completed</span>
                </div>
    
                <div className="card">
                  <h2>Cancelled Appointments</h2>
                  <p><strong>Dr. Peter Williams</strong></p>
                  <p>Orthopedic Consultation</p>
                  <p>Dec 5, 2023 at 9:00 AM</p>
                  <span className="status cancelled">Cancelled</span>
                </div>
              </section>
            </div>
          </main>
    
          <footer className="footer">
            <p>© 2024 CareConnect. All rights reserved.</p>
            <div>
              <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Contact</a>
            </div>
          </footer>
        </div>
      );
    };

export default Appointment;