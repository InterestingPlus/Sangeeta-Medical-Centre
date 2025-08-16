import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Testimonials from "./Testimonials";


const Patients = () => {
  return (
    <>
      <BreadCrumb
        // image="images/breadcrumb.jpg"
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Testimonials & Patients Stories"
        page="Patients / Testimonials & Patients Stories"
      />


      <Testimonials category="ortho" />
      <Testimonials />

  
      <div class="page-about-us bg-radius-section2 bg-light ptb60 pb60">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="page-about-content p-0">
                <p class="mb-0">
                  At Mrityunjay Orthopedic Hospital, success isn’t just measured
                  by recovery — it’s measured by how patients live again. And at
                  the center of it all is one name patients trust —{" "}
                  <strong>Dr. Shubhankar Shekhar</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Start */}
    </>
  );
};

export default Patients;
