// src/components/DoctorGrid.js
import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorGrid = () => {
  // Replace with real data as needed.
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist • 15 years exp.",
      rating: "4.9 (128 reviews)",
      availability: "Available Now",
      availabilityClass: "available",
      avatar: "https://creatie.ai/ai/api/search-image?query=A%20professional%20headshot%20of%20a%20female%20doctor%20in%20her%2040s%20wearing%20a%20white%20coat%20and%20stethoscope,%20with%20a%20confident%20and%20approachable%20expression,%20against%20a%20clean%20medical%20office%20background"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist • 20 years exp.",
      rating: "4.8 (95 reviews)",
      availability: "Available Tomorrow",
      availabilityClass: "tomorrow",
      avatar: "https://creatie.ai/ai/api/search-image?query=A%20professional%20headshot%20of%20a%20male%20doctor%20in%20his%2050s%20wearing%20a%20white%20coat%20and%20stethoscope,%20with%20a%20warm%20and%20experienced%20expression,%20against%20a%20clean%20medical%20office%20background"
    },
    {
      id: 3,
      name: "Dr. Emily Martinez",
      specialty: "Dermatologist • 8 years exp.",
      rating: "4.7 (83 reviews)",
      availability: "Available Now",
      availabilityClass: "available",
      avatar: "https://creatie.ai/ai/api/search-image?query=A%20professional%20headshot%20of%20a%20female%20doctor%20in%20her%2030s%20wearing%20a%20white%20coat%20and%20stethoscope,%20with%20a%20friendly%20and%20professional%20expression,%20against%20a%20clean%20medical%20office%20background"
    }
  ];

  return (
    <div className="doctor-grid">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorGrid;
