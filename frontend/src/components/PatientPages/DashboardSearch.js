// src/components/DashboardSearch.js
import React from 'react';

const DashboardSearch = () => {
  return (
    <div className="search-section">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search doctors by name, speciality..."
        />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="filter-selects">
        <select className="filter-select">
          <option>All Specialities</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>Neurology</option>
        </select>
        <select className="filter-select">
          <option>Available Now</option>
          <option>Next 24 Hours</option>
          <option>This Week</option>
        </select>
      </div>
    </div>
  );
};

export default DashboardSearch;
