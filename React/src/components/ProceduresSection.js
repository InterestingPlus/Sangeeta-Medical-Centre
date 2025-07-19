import React from "react";

const ProceduresSection = () => {
  return (
    <div class="care-rehabilitation bg-radius-section">
      <div class="container">
        <div class="row section-row align-items-center">
          <div class="col-lg-6">
            <div class="section-title">
              <h2 class="text-anime-style-3" data-cursor="-opaque">
                Procedures @SangeetaMedicalCentre
              </h2>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="section-btn wow fadeInUp">
              <a
                href="procedures.html"
                title="Orthopaedic Procedures Meerut"
                class="btn-default"
              >
                <span>view all procedures</span>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-2 col-md-4 col-6">
            <div class="rehab-benefits-item wow fadeInUp">
              <div class="icon-box">
                <img
                  src="images/icons/joint-replacement.png"
                  alt="Robotic Joint Replacement Surgery"
                />
              </div>
              <div class="rehab-benefits-content">
                <h3>Robotic Joint Replacement Surgery</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <div
              class="rehab-benefits-item wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div class="icon-box">
                <img
                  src="images/icons/trauma-fracture.png"
                  alt="Trauma & Fracture Surgery"
                />
              </div>
              <div class="rehab-benefits-content">
                <h3>Trauma & Fracture Surgery</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <div class="rehab-benefits-item wow fadeInUp" data-wow-delay="0.5s">
              <div class="icon-box">
                <img
                  src="images/icons/arthroscopic.png"
                  alt="Arthroscopic Surgery"
                />
              </div>
              <div class="rehab-benefits-content">
                <h3>Arthroscopic Surgery</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <div
              class="rehab-benefits-item wow fadeInUp"
              data-wow-delay="0.75s"
            >
              <div class="icon-box">
                <img
                  src="images/icons/pediatric.png"
                  alt="Pediatric Orthopedic"
                />
              </div>
              <div class="rehab-benefits-content">
                <h3>Pediatric Orthopedic</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <div class="rehab-benefits-item wow fadeInUp" data-wow-delay="1s">
              <div class="icon-box">
                <img
                  src="images/icons/disc-replacement.png"
                  alt="Disc Replacement Surgery"
                />
              </div>
              <div class="rehab-benefits-content">
                <h3>Disc Replacement Surgery</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <div
              class="rehab-benefits-item wow fadeInUp"
              data-wow-delay="1.25s"
            >
              <div class="icon-box">
                <img
                  src="images/icons/spine-surgery.png"
                  alt="Major spine surgeries"
                />
              </div>
              <div class="rehab-benefits-content">
                <h3>Major spine surgeries</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceduresSection;
