// src/components/Dashboard.js
import React from 'react';
import '../../styles/Dashboard.css';
import DashboardHeader from './DashboardHeader';
import DashboardCards from './DashboardCards';
import DashboardSearch from './DashboardSearch';
import DoctorGrid from './DoctorGrid';
import './DoctorCard'
import DoctorCard from './DoctorCard';

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      
      <div className="dashboard-container">
        <DashboardHeader />
        <main className="dashboard-main">
          <DashboardCards />
          <DoctorCard />
          <DashboardSearch />
          <DoctorGrid />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
