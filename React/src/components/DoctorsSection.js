import React, { use, useEffect, useState } from "react";

import doctors from "../pages/Doctor.json";
import { Link } from "react-router-dom";

const DoctorsSection = () => {
  // const [doctors, setDoctors] = useState([]);

  return (
    <div class="therapist-team bg-radius-section">
      <div class="container">
        <div class="row section-row text-center">
          <div class="col-lg-12">
            <div class="section-title mb-0">
              <h2 class="text-anime-style-3" data-cursor="-opaque">
                Our dedicated & experienced doctors
              </h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          {doctors?.map((doctor) => (
            <div class="col-lg-4 col-md-6">
              <div class="team-member-item wow fadeInUp">
                <div class="team-image">
                  <figure class="image-anime">
                    <img
                      // src={`images/doctors/${doctor?.image}`}
                      src={doctor?.image}
                      alt={doctor?.alt}
                      loading="lazy"
                    />
                  </figure>
                  <div class="team-social-icon">
                    <Link
                      to={`/doctor/${doctor?.link}`}
                      title={doctor?.title}
                      class="btn-default"
                    >
                      <span>view profile</span>
                    </Link>
                  </div>
                </div>
                <div class="team-content">
                  <h3>{doctor.name}</h3>
                  <p class="mb-2">{doctor.position}</p>
                  <p>{doctor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;
