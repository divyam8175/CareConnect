import React from "react";
import "../../styles/Services.css";

// Import icons
import ambulanceIcon from "../../assets/ambulance.png";
import appointmentIcon from "../../assets/appointment.png";
import doctorIcon from "../../assets/doctor.png";
import ehrIcon from "../../assets/ehr.png";
import healthReportIcon from "../../assets/health-report.png";
import medicineIcon from "../../assets/medicine.png";

const services = [
    { icon: doctorIcon, title: "Connect with Doctors", description: "Book video consultations with experienced healthcare professionals." },
    { icon: medicineIcon, title: "Medicine Reminders", description: "Never miss your medications with smart reminders and tracking." },
    { icon: ehrIcon, title: "EHR Management", description: "Securely store and access your health records anytime, anywhere." },
    { icon: healthReportIcon, title: "Health Reports", description: "Get detailed health reports and expert analysis of your medical tests." },
    { icon: appointmentIcon, title: "Appointment Scheduling", description: "Easily book, reschedule, and manage your healthcare appointments." },
    { icon: ambulanceIcon, title: "Emergency Services", description: "24/7 emergency support and ambulance services when you need them most." }
];

const Services = () => {
    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <p>Comprehensive healthcare solutions designed for your convenience</p>
            
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-header">
                            <img src={service.icon} alt={service.title} className="service-icon" />
                            <h3>{service.title}</h3>
                        </div>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
