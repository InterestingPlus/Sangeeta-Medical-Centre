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
                <h3>Advanced Orthopaedics</h3>
                <p>Easy treatment with experts</p>
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
                <h3>Emergency Service</h3>
                <p>24/7 Emergency Available</p>
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
                <h3>World renowned consultants</h3>
                <p>Advice with Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
