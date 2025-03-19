// src/components/DoctorCard.js
import React from 'react';

const DoctorCard = ({ doctor }) => {
    if (!doctor) {
      return null; // or display a fallback UI
    }
    
    return (
      <div className="doctor-card">
        <div className="doctor-card-content">
          <div className="doctor-info">
            <img className="doctor-avatar" src={doctor.avatar} alt={doctor.name} />
            <div className="doctor-details">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <div className="doctor-rating">
                <i className="fas fa-star rating-icon"></i>
                <span className="rating-text">{doctor.rating}</span>
              </div>
            </div>
          </div>
          <div className="doctor-actions">
            <span className={`availability ${doctor.availabilityClass}`}>
              {doctor.availability}
            </span>
            <div className="action-buttons">
              <button className="message-button">Message</button>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DoctorCard;
