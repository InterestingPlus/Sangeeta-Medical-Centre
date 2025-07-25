import React from "react";

const HeroSection = () => {
  return (
    <div className="hero hero-slider-layout bg-radius-section">
      <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero-slide">
              <div className="hero-slider-image">
                <img
                  src="images/slider/1.jpg"
                  alt="Legacy of Healing. Excellence in Every Specialty."
                  loading="lazy"
                />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="hero-content">
                      <div className="section-title">
                        <h1 className="text-anime-style-3">
                          Legacy of Healing. Excellence in Every Specialty.
                        </h1>
                        <p>
                          Serving Meerut with over 40 years of trusted medical
                          care, Mrityunjay Hospital is a name synonymous with
                          integrity, compassion, and clinical expertise.
                        </p>
                      </div>
                      <div className="hero-content-body">
                        <a
                          href="specialties.html"
                          className="btn-default"
                          title="Best orthopedic treatments in Meerut"
                        >
                          <span>Explore Services</span>
                        </a>
                        <a
                          href="contact.html#Appointment"
                          className="btn-default btn-highlighted"
                        >
                          <span>Book Appointment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat more .swiper-slide blocks here for other slides */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
