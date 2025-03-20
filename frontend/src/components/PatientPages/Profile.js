import React from 'react';
import "../../styles/Profile.css";

const Profile = () => {
  return (
    <div>
      {/* Header / Navigation */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white header">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://placehold.co/40x40"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="ml-3 text-xl font-bold text-gray-900">
              🏥 CareConnect
            </span>
          </div>
          <nav className="nav hidden md:flex space-x-6">
            <a href="/dashboard">📊 Dashboard</a>
            <a href="/appointment">📅 Appointments</a>
            <a href="/medicalreport">📋 Medical Records</a>
            <a href="/profile">👤 Profile</a>
          </nav>
          <div className="flex items-center">
            <button className="icon-button mr-4">
              <i className="fas fa-bell text-xl"></i>
              <span className="notification-badge">3</span>
            </button>
            <div className="relative cursor-pointer">
              <img
                src="https://placehold.co/40x40"
                alt="John Smith"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="section-title mb-3">My Profile</h1>
            <p className="section-subtitle">
              Manage your personal information and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Section */}
            <div className="lg:col-span-3">
              <div className="card">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="https://placehold.co/120x120"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      John Smith
                    </h2>
                    <p className="text-gray-600">Patient ID: #123456</p>
                    <p className="text-gray-600">Member since 2022</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Personal Information
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">
                        john.smith@example.com
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium">January 15, 1985</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">
                        123 Main Street, Apt 4B
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  {/* Medical Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Medical Information
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Blood Type</p>
                      <p className="font-medium">O Positive</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Allergies</p>
                      <p className="font-medium">Penicillin, Peanuts</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">
                        Primary Care Physician
                      </p>
                      <p className="font-medium">Dr. Sarah Johnson</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Emergency Contact</p>
                      <p className="font-medium">
                        Mary Smith (Wife)
                        <br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button className="button button-primary">
                    Edit Profile
                  </button>
                  <button className="button button-secondary">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="card">
                  <h2 className="text-lg font-semibold mb-4">
                    Account Settings
                  </h2>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-4 text-left border rounded-lg hover:bg-gray-50">
                      <span className="font-medium">
                        Notification Preferences
                      </span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 text-left border rounded-lg hover:bg-gray-50">
                      <span className="font-medium">
                        Privacy Settings
                      </span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 text-left border rounded-lg hover:bg-gray-50">
                      <span className="font-medium">
                        Connected Devices
                      </span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </button>
                  </div>
                </div>
                <div className="card">
                  <h2 className="text-lg font-semibold mb-4">
                    Health Data
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Last Check-up</p>
                      <p className="text-lg font-medium">December 15, 2023</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Next Appointment</p>
                      <p className="text-lg font-medium">January 10, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Prescriptions</p>
                      <p className="text-lg font-medium">3 Medications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Services
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Telemedicine
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Lab Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Health Records
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              © 2024 CareConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
