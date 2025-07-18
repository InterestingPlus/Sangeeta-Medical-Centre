import React from "react";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Shachindra Shekhar",
      position: "Founder & Senior Orthopedic Surgeon",
      description:
        "With over 35 years of experience, Dr. Shekhar is widely respected for his dedication, surgical expertise, and integrity. He has treated thousands of patients bone fractures, trauma, and degenerative joint conditions with an honest, empathetic approach.",

      image: "dr-shachindra-shekhar1.jpg",
      alt: "Senior Orthopaedic Surgeon - Dr. Shachindra Shekhar",

      link: "dr-shachindra-shekhar.html",
      title: "Senior Orthopedic Doctor Meerut",
    },

    {
      name: "Dr. Shubhankar Shekhar",
      position: "Consultant Joint Replacement & Orthopedic Surgeon",
      description:
        "Among the few surgeons worldwide to master the advanced direct anterior approach (DAA) hip replacement technique, Dr. Shubhankar is redefining precision in joint surgery. Known for his robotic-assisted surgeries and fast-recovery protocols, his work has significantly reduced the need for prolonged physiotherapy.",

      image: "dr-shubhankar-shekhar1.jpg",
      alt: "Best Orthopaedic Surgeon - Dr. Shubhankar Shekhar",

      link: "dr-shubhankar-shekhar.html",
      title:
        "Best Orthopedic Doctor in Meerut | Dr. Shubhankar Shekhar – Joint & Fracture Specialist",
    },
  ];

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
                      src={`images/doctors/${doctor?.image}`}
                      alt={doctor?.alt}
                      loading="lazy"
                    />
                  </figure>
                  <div class="team-social-icon">
                    <a
                      href={doctor?.link}
                      title={doctor?.title}
                      class="btn-default"
                    >
                      <span>view profile</span>
                    </a>
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
