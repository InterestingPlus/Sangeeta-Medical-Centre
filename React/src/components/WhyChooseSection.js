import React from "react";
import { Link } from "react-router-dom";
import "./WhyChooseSection.css"
const WhyChooseSection = () => {
  const CircularCheckBox = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#f7941d" />

        <path
          d="M9.00001 12.5L11 14.5L15 10.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="our-quality bg-radius-section">
      <div className="quality-treatment">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="quality-treatment-content">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Why Choose Us
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    Discover what makes Sangeeta Medical Centre a trusted name
                    in gynecology and orthopedics.
                  </p>
                </div>

                <div
                  className="quality-treatment-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <ul>
                    <li>
                      <CircularCheckBox /> <strong>Expert Care</strong>:
                      Specialized gynecological and orthopedic services.
                    </li>

                    <li>
                      <CircularCheckBox />{" "}
                      <strong>Personalized Approach</strong>: Tailored treatment
                      plans with compassion.
                    </li>

                    <li>
                      <CircularCheckBox /> <strong>Advanced Technology</strong>:
                      Utilization of the latest medical techniques.
                    </li>

                    <li>
                      <CircularCheckBox />{" "}
                      <strong>Comprehensive Services</strong>: A full range of
                      women's health care.
                    </li>

                    <li>
                      <CircularCheckBox />{" "}
                      <strong>Patient‑Centric Environment</strong>: Comfortable
                      and supportive atmosphere.
                    </li>

                    <li>
                      <CircularCheckBox /> <strong>Proven Track Record</strong>:
                      Over 35+ years of excellence in healthcare.
                    </li>
                  </ul>
                </div>

                <div
                  className="quality-treatment-footer wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <Link to="tel:011-69269888" className="btn-default">
                    <span>Make an Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Image or illustration if needed */}
              <img src="images/" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
