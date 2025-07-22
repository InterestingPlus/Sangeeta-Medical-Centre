import React from "react";
import { Link } from "react-router-dom";

const SpecialtiesSection = () => {
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
      <div class="our-services bg-radius-section">
        <div class="container">
          <div class="row section-row align-items-center">
            <div class="col-lg-7">
              <div class="section-title">
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Our Specialties
                </h2>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="section-btn wow fadeInUp">
                <a href="contact.html#Appointment" class="btn-default">
                  <span>make an appointment</span>
                </a>
              </div>
            </div>
          </div>

          <div class="row">
            {specialties?.map((specialty) => (
              <div class="col-lg-3 col-md-3">
                <div class="service-item wow fadeInUp">
                  <div class="service-item-image">
                    <figure>
                      <img
                        // src={`images/specialties/${specialty?.image}`}
                        src={specialty?.image}
                        alt={specialty?.alt}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div class="icon-box">
                    <img
                      src={`images/icons/${specialty?.icon}`}
                      alt={specialty?.alt}
                    />
                  </div>
                  <div class="service-body">
                    <div class="service-content">
                      <h3>{specialty?.name}</h3>
                    </div>
                    <div class="service-btn">
                      <a href={specialty?.link} title={specialty?.title}>
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

            <div class="col-lg-12">
              <div class="more-service-btn wow fadeInUp" data-wow-delay="1.5s">
                <Link
                  to="/services"
                  title="Best orthopedic treatments in Meerut"
                >
                  Find Out More About Our Specialties
                  <img src="images/svg-icons/arrow-long-white.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-section bg-radius-section"></div>
    </>
  );
};

export default SpecialtiesSection;
