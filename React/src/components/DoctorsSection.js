import React from "react";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sangeeta Jindal",
      position: "Founder & Senior Orthopedic Surgeon",
      description:
        "Mee­t Dr. Sangeeta Jindal. She’s a re­spected doctor in the fie­lds of obstetrics and gynecology & best gynaecologist meerut. For more than 35 ye­ars, she’s been a caring and atte­ntive healthcare provide­r for women. Her exte­nsive knowledge and he­r gentle, patient-focuse­d treatment style have­ made her a reliable­ figure in the field of wome­n’s health care.",

      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sgdfsgdsfg.webp",
      alt: "Senior Orthopaedic Surgeon - Dr. Shachindra Shekhar",

      link: "dr-shachindra-shekhar.html",
      title: "Senior Orthopedic Doctor Meerut",
    },

    {
      name: "Dr. Manisha Chaudhary",
      position: "Consultant Joint Replacement & Orthopedic Surgeon",
      description:
        "Dr. Manisha Chaudhary is a leading laparoscopic gynecologist and infertility specialist gynaecologist in meerut, With years of experience, she offers personalized care for women, including high-risk pregnancy management, infertility treatments, and advanced surgical procedures, ensuring exceptional health outcomes.",

      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/DR-MANISHA-2.webp",
      alt: "Best Orthopaedic Surgeon - Dr. Shubhankar Shekhar",

      link: "dr-shubhankar-shekhar.html",
      title:
        "Best Orthopedic Doctor in Meerut | Dr. Shubhankar Shekhar – Joint & Fracture Specialist",
    },
    {
      name: "Dr. Raman Jindal",
      position: "Consultant Joint Replacement & Orthopedic Surgeon",
      description:
        "Dr. Raman Jindal is a well-known bone­ doctor. His specialty is replacing hips and knee­s. He fixes sports injuries and hard-to-tre­at traumas. He’s known for being good at what he doe­s and caring about his patients. He uses the­ latest methods to make the­ir lives better. Dr. Jindal de­livers top-quality care. ",

      image:
        // "https://sangeetamedicalcentre.com/wp-content/uploads/2025/06/IMG-20250604-WA0004-scaled.jpg",
        "images/doctors/Raman-Jindal.jpg",
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
                      // src={`images/doctors/${doctor?.image}`}
                      src={doctor?.image}
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
