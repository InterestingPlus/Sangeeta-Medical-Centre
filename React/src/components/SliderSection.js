import React from "react";
import { Link } from "react-router-dom";

const SliderSection = () => {
  return (
    <div class="hero hero-slider-layout bg-radius-section">
      <div class="hero-slide">
        <div class="hero-slider-image">
          <img
            // src="images/slider/1.jpg"
              src="https://sangeetamedicalcentre.com/wp-content/uploads/2025/06/IMG-20250319-WA0003.jpg"
            // src="images/Home-image.png"
            alt="Legacy of Healing. Excellence in Every Specialty."
            loading="lazy"
          />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="hero-content">
                <div class="section-title">
                  <h1 class="text-anime-style-3" data-cursor="-opaque">
                    Welcome to Sangeeta Medical Centre!
                  </h1>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    Glad you’re he­re at Sangeeta Me­dical Centre! We’ve­ been
                    providing top-notch Orthopedic and Gyne­cology services for
                    over 35 ye­ars. Our mission? Personalized care. We­ offer
                    pre-birth care and fe­rtility help, guidance with family
                    planning and menopause­, and perform advanced surgerie­s in
                    gynecology and orthopedics. Our dedicate­d team is all about
                    promoting your health and wellne­ss, no matter what stage of
                    life you’re­ in.”
                  </p>
                </div>
                <div
                  class="hero-content-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <Link
                    to="/contact"
                    title="Best orthopedic treatments in Meerut"
                    class="btn-default"
                  >
                    <span>contact us</span>
                  </Link>
                  <Link
                    to="tel:011-69269888"
                    class="btn-default btn-highlighted"
                  >
                    <span>book appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
