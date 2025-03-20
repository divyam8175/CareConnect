import React from 'react';
import "../../styles/MedicalReport.css";

const MedicalRecords = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-top">
          <div className="header-logo">
            <img src="https://placehold.co/40x40" alt="Logo" />
            <span>🏥 CareConnect</span>
          </div>
          <nav className="nav">
            <a href="/dashboard">📊 Dashboard</a>
            <a href="/appointment">📅 Appointments</a>
            <a href="/medicalreport">📋 Medical Records</a>
            <a href="/profile">👤 Profile</a>
          </nav>
          <div className="header-icons">
            <button className="icon-button">
              <i className="fas fa-bell"></i>
              <span className="notification-badge">3</span>
            </button>
            <img src="https://placehold.co/40x40" alt="John Smith" className="profile-icon" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container content-wrapper">
          <div className="page-header">
            <h1>Medical Records</h1>
            <p>View and manage your medical history and documents</p>
          </div>
          <div className="main-grid">
            {/* Left Column: Recent Records */}
            <div className="content-main">
              <div className="card">
                <div className="card-header">
                  <h2>Recent Records</h2>
                  <button className="btn-primary">Upload New Record</button>
                </div>
                <div className="records-list">
                  <div className="item-card">
                    <div className="record-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3>Annual Physical Examination</h3>
                        <p>Date: Dec 15, 2023</p>
                        <p>Dr. Sarah Johnson</p>
                      </div>
                      <div className="item-actions">
                        <button className="btn-icon-blue">
                          <i className="fas fa-download"></i>
                        </button>
                        <button className="btn-icon-gray">
                          <i className="fas fa-share"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="record-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3>Blood Test Results</h3>
                        <p>Date: Nov 30, 2023</p>
                        <p>Quest Diagnostics</p>
                      </div>
                      <div className="item-actions">
                        <button className="btn-icon-blue">
                          <i className="fas fa-download"></i>
                        </button>
                        <button className="btn-icon-gray">
                          <i className="fas fa-share"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="record-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3>Vaccination Record</h3>
                        <p>Date: Oct 15, 2023</p>
                        <p>City Health Clinic</p>
                      </div>
                      <div className="item-actions">
                        <button className="btn-icon-blue">
                          <i className="fas fa-download"></i>
                        </button>
                        <button className="btn-icon-gray">
                          <i className="fas fa-share"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="sidebar">
              <div className="sidebar-card">
                <h2>Record Categories</h2>
                <div className="sidebar-btns">
                  <button className="sidebar-btn">
                    <div>
                      <span>Lab Results</span>
                      <p>8 documents</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <button className="sidebar-btn">
                    <div>
                      <span>Prescriptions</span>
                      <p>12 documents</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <button className="sidebar-btn">
                    <div>
                      <span>Imaging Reports</span>
                      <p>3 documents</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <button className="sidebar-btn">
                    <div>
                      <span>Vaccination Records</span>
                      <p>5 documents</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="sidebar-card">
                <h2>Access History</h2>
                <div className="access-history">
                  <div className="access-history-item">
                    <div>
                      <p className="name">Dr. Sarah Johnson</p>
                      <p className="timestamp">Accessed on Dec 15, 2023</p>
                    </div>
                    <span className="timestamp">10:30 AM</span>
                  </div>
                  <div className="access-history-item">
                    <div>
                      <p className="name">Quest Diagnostics</p>
                      <p className="timestamp">Accessed on Nov 30, 2023</p>
                    </div>
                    <span className="timestamp">2:15 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Telemedicine</a></li>
                <li><a href="#">Lab Tests</a></li>
                <li><a href="#">Health Records</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p>© 2024 CareConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalRecords;
