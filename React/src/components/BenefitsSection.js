import React from "react";

const BenefitsSection = () => {
  return (
    <div class="our-benefits bg-radius-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="benefits-item wow fadeInUp">
              <div class="icon-box">
                <img
                  src="images/svg-icons/icon-benefits-1.svg"
                  alt="Advanced Orthopaedics"
                />
              </div>
              <div class="benefits-content">
                <h3>Trusted by Families for 35+ Years</h3>
                <p>Generations of care and trust</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="benefits-item wow fadeInUp" data-wow-delay="0.25s">
              <div class="icon-box">
                <img
                  src="images/svg-icons/icon-benefits-2.svg"
                  alt="Emergency Service"
                />
              </div>
              <div class="benefits-content">
                <h3>Fully Equipped Facility</h3>
                <p>Modern infrastructure & diagnostics</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="benefits-item wow fadeInUp mb-0" data-wow-delay="0.5s">
              <div class="icon-box">
                <img
                  src="images/svg-icons/icon-benefits-3.svg"
                  alt="World renowned consultants"
                />
              </div>
              <div class="benefits-content">
                <h3>24/7 Emergency Services</h3>
                <p>Immediate care when it matters most</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
