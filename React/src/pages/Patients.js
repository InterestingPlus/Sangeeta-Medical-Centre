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

      {/* Section Start */}
      {/* <div class="page-about-us about-faq-section ptb60">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="page-about-content p-0">
                <div class="section-title mb-0">
                  <h2 class="text-anime-style-3" data-cursor="-opaque">
                    Success Stories, Testimonials & Patient Experiences
                  </h2>
                </div>
                <h3 class="fs-4 mt-3">
                  Healing stories from Mrityunjay Orthopedic Hospital — powered
                  by trust, precision, and care.
                </h3>
                <p class="mt-2">
                  At Mrityunjay Orthopedic Hospital, each success story reflects
                  the clinical excellence and patient-first commitment of{" "}
                  <strong>Dr. Shubhankar Shekhar</strong>. These are not just
                  recoveries — they’re lives transformed by surgical precision,
                  compassionate care, and futuristic technology.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <h3 class="fs-3 mt-3">Real Success, Real People</h3>
            </div>

            <div class="col-lg-4">
              <div class="testimonial-item bg-light mt-4">
                <div class="testimonial-body">
                  <div class="author-content mb-2">
                    <h3>Joint Replacement Freedom</h3>
                  </div>
                </div>
                <div class="testimonial-header mb-2">
                  <div class="testimonial-content">
                    <p>
                      "I had stopped walking more than 50 steps due to severe
                      knee pain. Dr. Shubhankar’s robotic joint replacement
                      changed my life. Within 3 days, I was climbing stairs. The
                      best decision I ever made."
                    </p>
                  </div>
                </div>
                <div class="testimonial-body">
                  <div class="author-content w-100">
                    <h3>
                      <i>— Renu Sharma, 62, Meerut</i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="testimonial-item bg-light mt-4">
                <div class="testimonial-body">
                  <div class="author-content mb-2">
                    <h3>Accident to Independence</h3>
                  </div>
                </div>
                <div class="testimonial-header mb-2">
                  <div class="testimonial-content">
                    <p>
                      "A major road accident left me with a shattered pelvis and
                      femur. I was scared I’d never walk again. Dr. Shubhankar’s
                      trauma surgery and early rehab brought me back on my feet
                      — within weeks."
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div class="testimonial-body">
                  <div class="author-content w-100">
                    <h3>
                      <i>— Raghav Tyagi, 28, Muzaffarnagar</i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="testimonial-item bg-light mt-4">
                <div class="testimonial-body">
                  <div class="author-content mb-2">
                    <h3>Frozen Shoulder Recovery</h3>
                  </div>
                </div>
                <div class="testimonial-header mb-2">
                  <div class="testimonial-content">
                    <p>
                      "My right arm had been stuck for 6 months. Dr. Shubhankar
                      explained every step patiently. One keyhole surgery and
                      structured therapy later — I’m back to full movement."
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div class="testimonial-body">
                  <div class="author-content w-100">
                    <h3>
                      <i>— Kamlesh Sinha, 47, Bijnor</i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
