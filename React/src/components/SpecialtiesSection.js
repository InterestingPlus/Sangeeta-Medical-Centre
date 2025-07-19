import React from "react";

const SpecialtiesSection = () => {
  const specialties = [
    {
      name: "Arthoscopy",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-3-.webp",
      alt: "Hip Treatment & Surgery",
      icon: "hip.png",

      link: "hip-department.html",
      title: "Hip Treatment & Surgery Meerut",
    },
    {
      name: "Fracture Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-4.webp",
      alt: "Advanced Knee Care Treatment/Surgery",
      icon: "knee.png",

      link: "knee-department.html",
      title: "Advanced Knee Treatment/Surgery Meerut",
    },
    {
      name: "Knee Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Service-image-1.webp",
      alt: "Shoulder treatment and surgery",
      icon: "shoulder.png",

      link: "shoulder-department.html",
      title: "Shoulder treatment and surgery Meerut",
    },
    {
      name: "Hip Joint Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-2.webp",
      alt: "Hand & Microvascular treatment/surgery",
      icon: "hand.png",

      link: "hand-microvascular-department.html",
      title: "Hand & Microvascular treatment Meerut",
    },
    {
      name: "Complex Trauma Surgery",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/cccccc.webp",
      alt: "Spine Treatment & Surgery",
      icon: "spine.png",

      link: "spine-department.html",
      title: "Spine Treatment Meerut",
    },
    {
      name: "Sports Injury Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sports.webp",
      alt: "Foot & Ankle Treatment/Surgery",
      icon: "foot.png",

      link: "foot-ankle-department.html",
      title: "Foot & Ankle Treatment Meerut",
    },
    {
      name: "Infertility Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-5-1.webp",
      alt: "Arthroscopy and Keyhole Surgery",
      icon: "arthoscopy.png",

      link: "arthroscopy.html",
      title: "Arthroscopy Meerut",
    },
    {
      name: "High-Risk Pregnancy Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-8-1-1.webp",
      alt: "Rheumatology Treatment",
      icon: "rheumatology.png",

      link: "rheumatology.html",
      title: "Rheumatology Treatment Meerut",
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
                  {/* <div class="icon-box">
                    <img
                      src={`images/icons/${specialty?.icon}`}
                      alt={specialty?.alt}
                    />
                  </div> */}
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
                <a
                  href="specialties.html"
                  title="Best orthopedic treatments in Meerut"
                >
                  Find Out More About Our Specialties
                  <img src="images/svg-icons/arrow-long-white.svg" alt="" />
                </a>
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
