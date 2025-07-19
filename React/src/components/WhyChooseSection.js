import React from "react";

const WhyChooseSection = () => {
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
                      <strong>Expert Care</strong>: Specialized gynecological
                      and orthopedic services.
                    </li>
                    <li>
                      <strong>Personalized Approach</strong>: Tailored treatment
                      plans with compassion.
                    </li>
                    <li>
                      <strong>Advanced Technology</strong>: Utilization of the
                      latest medical techniques.
                    </li>
                    <li>
                      <strong>Comprehensive Services</strong>: A full range of
                      women's health care.
                    </li>
                    <li>
                      <strong>Patient‑Centric Environment</strong>: Comfortable
                      and supportive atmosphere.
                    </li>
                    <li>
                      <strong>Proven Track Record</strong>: Over 35+ years of
                      excellence in healthcare.
                    </li>
                  </ul>
                </div>

                <div
                  className="quality-treatment-footer wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <a href="#appointment" className="btn-default">
                    <span>Make an Appointment</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Image or illustration if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
