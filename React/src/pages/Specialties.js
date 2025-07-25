import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Specialties = () => {
  const specialties = [
    {
      name: "Arthoscopy",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-3-.webp",
      alt: "Arthoscopy",

      icon: "arthoscopy.png",
      link: "arthroscopy.html",
      title: "Arthroscopy Meerut",
    },
    {
      name: "Fracture Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-4.webp",
      alt: "Fracture Management",

      icon: "knee.png",
      link: "knee-department.html",
      title: "Advanced Knee Treatment/Surgery Meerut",
    },
    {
      name: "Knee Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Service-image-1.webp",
      alt: "Knee Replacement",

      icon: "knee.png",
      link: "knee-department.html",
      title: "Advanced Knee Treatment/Surgery Meerut",
    },
    {
      name: "Hip Joint Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-2.webp",
      alt: "Hip Joint Replacement",

      icon: "hip.png",
      link: "hip-department.html",
      title: "Hip Treatment & Surgery Meerut",
    },
    {
      name: "Complex Trauma Surgery",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/cccccc.webp",
      alt: "Complex Trauma Surgery",

      icon: "spine.png",
    },
    {
      name: "Sports Injury Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sports.webp",
      alt: "Sports Injury Treatment",

      icon: "foot.png",
    },

    {
      name: "Infertility Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-5-1.webp",
      alt: "Infertility Treatment",

      icon: "arthoscopy.png",
    },
    {
      name: "High-Risk Pregnancy Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-8-1-1.webp",
      alt: "High-Risk Pregnancy Management",

      icon: "rheumatology.png",
    },
  ];

  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Best orthopedic treatments"
        page="Specialties"
      />

      {/* Section Start */}
      <div class="page-about-us">
        <div class="container fadeInUp">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="page-about-content">
                <div class="section-title mb-0">
                  <h2 class="text-anime-style-3" data-cursor="-opaque">
                    Specialties @SangeetaMedicalCentre
                  </h2>
                  <p>
                    At <strong>Sangeeta Medical Centre, Meerut</strong>, we take
                    pride in delivering comprehensive, patient-focused care in
                    both orthopedics and women’s health. With over 35 years of
                    excellence, our center is home to experienced specialists
                    like{" "}
                    <strong>
                      Dr. Raman Jindal, Dr. Sangeeta Jindal, and Dr. Manisha
                      Chaudhary,
                    </strong>
                    who are committed to offering compassionate, cutting-edge
                    medical services for every stage of life.
                  </p>
                  <p>
                    From advanced joint replacement surgeries and complex trauma
                    management to high-risk pregnancy care, infertility
                    treatment, and cosmetic gynecological procedures, our
                    multidisciplinary team ensures that each patient receives
                    personalized and effective care. Whether you're seeking
                    relief from chronic pain, planning a family, or navigating a
                    complex medical concern, Sangeeta Medical Centre provides
                    expert care in a safe, modern, and supportive environment.
                  </p>
                  <p>
                    We are dedicated to upholding medical excellence through
                    precise diagnostics, minimally invasive techniques, and
                    ethical practices—empowering you to live healthier, fuller
                    lives.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="how-work-image-box-2 rounded-4">
                <div class="how-work-img-2">
                  <img
                    // src="images/specialties/big.jpg"
                    src="https://www.mrityunjayhospital.com/images/specialties/big.jpg"
                    alt="Orthopaedic Treatment Meerut"
                    loading="lazy"
                  />
                  {/* <figure class="image-anime reveal"></figure> */}
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
                    <img
                      src={`images/icons/${specialty.icon}`}
                      alt="Foot Icon"
                    />
                  </div>
                  <div class="service-body">
                    <div class="service-content">
                      <h3>{specialty.name}</h3>
                    </div>
                    <div class="service-btn">
                      <Link to={specialty.href} title={specialty.title}>
                        <img
                          src="images/svg-icons/arrow-readmore-btn.svg"
                          alt="More arrow"
                        />
                      </Link>
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

export default Specialties;
