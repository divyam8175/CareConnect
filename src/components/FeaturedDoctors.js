import { Star, StarHalf } from "lucide-react";
import "../styles/FeaturedDoctors.css";

// Import local doctor images
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import doctor3 from "../assets/doctor3.jpeg";
import doctor4 from "../assets/doctor4.jpeg";

function FeaturedDoctors() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: doctor1,
      rating: 5.0,
      reviews: 124,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      image: doctor2,
      rating: 4.5,
      reviews: 98,
    },
    {
      name: "Dr. Emily Martinez",
      specialty: "Dermatologist",
      image: doctor3,
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "Dr. James Wilson",
      specialty: "Neurologist",
      image: doctor4,
      rating: 4.8,
      reviews: 142,
    },
  ];

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="rating-stars" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="rating-stars" />);
    }

    return stars;
  };

  return (
    <section className="featured-doctors-section">
      <div className="featured-doctors-container">
        <div className="featured-doctors-header">
          <h2 className="featured-doctors-title">Featured Doctors</h2>
          <p className="featured-doctors-description">
            Connect with our top-rated healthcare professionals
          </p>
        </div>

        <div className="featured-doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <div className="rating-container">
                  <div className="rating-stars">{renderRating(doctor.rating)}</div>
                  <span className="rating-text">
                    {doctor.rating.toFixed(1)} ({doctor.reviews} reviews)
                  </span>
                </div>
                <button className="book-button">Book Appointment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDoctors;
