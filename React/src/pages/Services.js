import React from "react";

const Services = () => {
  const specialties = [
    {
      name: "Arthoscopy",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-3-.webp",
      alt: "Arthoscopy",

      //   icon: "hip.png",
      //   link: "hip-department.html",
      // title: "Hip Treatment & Surgery Meerut",
    },
    {
      name: "Fracture Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-4.webp",
      alt: "Fracture Management",
    },
    {
      name: "Knee Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Service-image-1.webp",
      alt: "Knee Replacement",
    },
    {
      name: "Hip Joint Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-2.webp",
      alt: "Hip Joint Replacement",
    },
    {
      name: "Complex Trauma Surgery",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/cccccc.webp",
      alt: "Complex Trauma Surgery",
    },
    {
      name: "Sports Injury Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sports.webp",
      alt: "Sports Injury Treatment",
    },

    {
      name: "Infertility Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-5-1.webp",
      alt: "Infertility Treatment",
    },
    {
      name: "High-Risk Pregnancy Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-8-1-1.webp",
      alt: "High-Risk Pregnancy Management",
    },
  ];

  return (
    <>
      {/* Breadcrumb Start */}
      <div
        class="page-header about-page-header bg-radius-section parallaxie"
        style={{
          backgroundImage:
            "url(https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp)",
          backgroundPosition: "10%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="page-header-box">
                <h1 class="text-anime-style-2" data-cursor="-opaque">
                  Best orthopedic treatments
                </h1>
                <nav class="wow fadeInUp">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="https://www.mrityunjayhospital.com">home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Specialties
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Section Start */}
      <div class="page-about-us">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="page-about-content">
                <div class="section-title mb-0">
                  <h2 class="text-anime-style-3" data-cursor="-opaque">
                    Specialties @SangeetaMedicalCentre
                  </h2>
                  <p>
                    At <strong>Mrityunjay Hospital, Meerut</strong>, we proudly
                    offer a broad range of specialized medical services,
                    ensuring comprehensive and patient-centered care under one
                    roof. Led by experts like{" "}
                    <strong>Dr. Shubhankar Shekhar</strong>, Consultant Joint
                    Replacement & Orthopedic Surgeon, our team is dedicated to
                    delivering excellence in orthopedics, rheumatology, spine
                    care, arthroscopy, and foot & ankle treatments. We combine
                    advanced technology, precise diagnostics, and compassionate
                    care to meet the diverse healthcare needs of every patient.
                  </p>
                  <p>
                    With a mission to provide world-class treatment close to
                    home, <strong>Mrityunjay Hospital, Meerut</strong> brings
                    together experienced consultants and multidisciplinary teams
                    to create personalized care plans. Whether you require
                    surgical intervention, chronic disease management, or
                    rehabilitation support, we are committed to ensuring every
                    patient receives expert care in a safe, modern, and
                    supportive environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="how-work-image-box-2 rounded-4">
                <div class="how-work-img-2">
                  <figure class="image-anime reveal">
                    <img
                      // src="images/specialties/big.jpg"
                      src="https://www.mrityunjayhospital.com/images/specialties/big.jpg"
                      alt="Orthopaedic Treatment Meerut"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-about-us bg-radius-section2 bg-light" id="Ethical">
        <div class="container">
          <div class="row">
            {specialties.map((specialty) => (
              <div class="col-lg-3 col-md-3">
                <div class="service-item wow fadeInUp" data-wow-delay="1.25s">
                  <div class="service-item-image">
                    <figure>
                      <img
                        src={specialty.image}
                        alt={specialty.alt}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div class="icon-box">
                    <img src="images/icons/foot.png" alt="Foot Icon" />
                  </div>
                  <div class="service-body">
                    <div class="service-content">
                      <h3>{specialty.name}</h3>
                    </div>
                    <div class="service-btn">
                      <a
                        href="foot-ankle-department.html"
                        title="Foot & Ankle Treatment Meerut"
                      >
                        <img
                          src="images/svg-icons/arrow-readmore-btn.svg"
                          alt="More arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section End */}
    </>
  );
};

export default Services;
