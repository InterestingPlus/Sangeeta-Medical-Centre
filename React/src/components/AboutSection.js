// import React from "react";

// const AboutSection = () => {
//   return (
//     <div class="about-us bg-radius-section">
//       <div class="container">
//         <div class="row align-items-center">
//           <div class="col-lg-6">
//             <div class="about-content">
//               <div class="section-title">
//                 <h1
//                   style={{
//                     fontSize: "16px",
//                     color: "#f7941d",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   Best Orthopedic Hospital in Meerut
//                 </h1>
//                 <h2 class="text-anime-style-3" data-cursor="-opaque">
//                   About Mrityunjay Orthopedic Hospital (MOH)
//                 </h2>
//                 <p class="wow fadeInUp" data-wow-delay="0.25s">
//                   Mrityunjay Orthopedic Hospital (MOH) has been a pillar of
//                   trusted orthopedic care in Meerut for over three decades.
//                   Established by the esteemed Dr. Shachindra Shekhar, MOH has
//                   evolved from a small practice into a reputed center of
//                   excellence, offering advanced solutions for joint, bone, and
//                   trauma care. Today, MOH stands at the forefront of innovation
//                   with Dr. Shubhankar Shekhar,
//                   {/* a gold medalist from AIIMS, */}
//                   ushering in a new era of precision surgery, robotic-assisted
//                   techniques, and patient-first protocols. Conveniently located
//                   near Begum Bridge, close to GIC College in Meerut, MOH is not
//                   just a hospital—it’s a legacy of healing passed from father to
//                   son.
//                 </p>
//               </div>

//               <div class="about-content-body">
//                 <div class="row align-items-center">
//                   <div class="col-md-6">
//                     <div class="about-content-list">
//                       <div
//                         class="about-list-item wow fadeInUp"
//                         data-wow-delay="0.5s"
//                       >
//                         <div class="icon-box">
//                           <img
//                             src="images/svg-icons/icon-about-list-1.svg"
//                             alt="Advanced Orthopaedics"
//                           />
//                         </div>
//                         <div class="about-list-content">
//                           <p>Advanced Orthopaedics</p>
//                         </div>
//                       </div>

//                       <div
//                         class="about-list-item wow fadeInUp"
//                         data-wow-delay="0.75s"
//                       >
//                         <div class="icon-box">
//                           <img
//                             src="images/svg-icons/icon-about-list-2.svg"
//                             alt="Advanced techniques"
//                           />
//                         </div>
//                         <div class="about-list-content">
//                           <p>Advanced techniques</p>
//                         </div>
//                       </div>

//                       <div
//                         class="about-list-item wow fadeInUp"
//                         data-wow-delay="1s"
//                       >
//                         <div class="icon-box">
//                           <img
//                             src="images/svg-icons/icon-about-list-3.svg"
//                             alt="Personalized care"
//                           />
//                         </div>
//                         <div class="about-list-content">
//                           <p>Personalized care</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="col-md-6">
//                     <div
//                       class="about-trusted-customer wow fadeInUp"
//                       data-wow-delay="0.5s"
//                     >
//                       <div class="trusted-customer-image">
//                         <img
//                           src="images/about/about-trusted-customer-img.png"
//                           alt="Happy customers"
//                         />
//                       </div>
//                       <div class="trusted-customer-rating">
//                         <ul>
//                           <li>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                           </li>
//                         </ul>
//                       </div>
//                       <div class="trusted-customer-content">
//                         <p>
//                           trusted by <span class="counter">4</span>k+ customers
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 class="about-content-footer wow fadeInUp"
//                 data-wow-delay="1.25s"
//               >
//                 <a href="about.html#Legacy" class="btn-default">
//                   <span>view more about</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-6">
//             <div class="about-us-images">
//               <div class="about-image img-box-1">
//                 <figure class="image-anime">
//                   <img
//                     src="images/about/about-us-img-1.jpg"
//                     alt="About Ortho 1"
//                     loading="lazy"
//                   />
//                 </figure>
//               </div>
//               <div class="about-image img-box-2">
//                 <figure class="image-anime">
//                   <img
//                     src="images/about/about-us-img-2.jpg"
//                     alt="About Ortho 2"
//                     loading="lazy"
//                   />
//                 </figure>
//               </div>
//               <div class="about-image img-box-3">
//                 <figure class="image-anime">
//                   <img
//                     src="images/about/about-us-img-3.jpg"
//                     alt="About Ortho 3"
//                     loading="lazy"
//                   />
//                 </figure>
//               </div>
//               <div class="about-image img-box-4">
//                 <figure class="image-anime">
//                   <img
//                     src="images/about/about-us-img-4.jpg"
//                     alt="About Ortho 4"
//                     loading="lazy"
//                   />
//                 </figure>
//               </div>
//               <div class="about-circle-logo">
//                 <img
//                   src="images/about/about-logo.png"
//                   alt="Mrityunjay Hospital Logo"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React from "react";
import { Link } from "react-router-dom";
// import "./AboutSection.scss";
import "../pages/Rating.scss";

const About = () => {
  const features = [
    {
      icon: "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Asset-5-1.webp",
      title: "Consultation Services",
    },
    {
      icon: "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Asset-3-1.webp",
      title: "Birthing Solutions",
    },
    {
      icon: "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Asset-2-1.webp",
      title: "Identity Development",
    },
    {
      icon: "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Asset-4-1.webp",
      title: "Treatment Strategies",
    },
  ];

  return (
    <div class="about-us bg-radius-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <h1
                  style={{
                    fontSize: "16px",
                    color: "#f7941d",
                    marginBottom: "10px",
                  }}
                >
                  About Sangeeta Medical Center (SMC)
                </h1>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Best Ortho & Gynae Hospital in meerut
                </h2>
                <p class="wow fadeInUp" data-wow-delay="0.25s">
                  Sangeeta Medical Center (SMC) has been a trusted name in
                  Orthopedic and Gynecological care in Sri Ganganagar for over
                  35 years. Founded by the highly respected Dr. Raman Jindal
                  (Orthopedic Surgeon) and Dr. Sangeeta Jindal (Senior
                  Gynecologist), the center started as a small clinic with a big
                  mission: to provide ethical, expert, and compassionate care to
                  every patient.
                  <br />
                  <br />
                  Over the years, SMC has evolved into a state-of-the-art
                  medical facility, blending legacy with modern advancements.
                  Now, with the dynamic and dedicated Dr. Manisha joining the
                  team, the center continues to grow stronger—offering a modern
                  approach to women's health, adolescent care, fertility
                  treatment, and painless delivery.
                  <br />
                  With expertise spanning joint replacement, spine care,
                  fracture management, pregnancy care, laparoscopic surgeries,
                  infertility treatments, and more, SMC stands at the forefront
                  of healthcare in the region.
                  <br />
                  <br />
                  Conveniently located in the heart of Sri Ganganagar, near
                  Nehru Park, Sangeeta Medical Center is not just a
                  hospital—it’s a legacy of trust, care, and healing, passed on
                  through generations.
                </p>
              </div>

              <div class="about-content-body">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <div class="about-content-list">
                      {features.map((item, index) => (
                        <div
                          class="about-list-item wow fadeInUp"
                          data-wow-delay="0.5s"
                          key={index}
                        >
                          <div class="icon-box">
                            <img src={item?.icon} alt="Advanced Orthopaedics" />
                          </div>
                          <div class="about-list-content">
                            <p>{item?.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div
                      class="about-trusted-customer wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div class="trusted-customer-image">
                        <img
                          src="images/about/about-trusted-customer-img.png"
                          alt="Happy customers"
                        />
                      </div>
                      <div class="trusted-customer-rating testimonial-rating">
                        <ul>
                          <li>
                            {Array.from({
                              length: 5,
                            })?.map((_, index) => (
                              <svg
                                key={index} // Add key for list items
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512" // Adjusted viewBox for standard star aspect ratio
                              >
                                <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                              </svg>
                            ))}{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="trusted-customer-content">
                        <p>
                          trusted by <span class="counter">4</span>k+ customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="about-content-footer wow fadeInUp"
                data-wow-delay="1.25s"
              >
                <Link to="/about#Legacy" class="btn-default">
                  <span>view more about</span>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="about-us-images">
              <div class="about-image img-box-1">
                <figure class="image-anime">
                  <img
                    src="images/about/about-us-img-1.jpg"
                    alt="About Ortho 1"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="about-image img-box-2">
                <figure class="image-anime">
                  <img
                    src="images/about/about-us-img-2.jpg"
                    alt="About Ortho 2"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="about-image img-box-3">
                <figure class="image-anime">
                  <img
                    src="images/about/about-us-img-3.jpg"
                    alt="About Ortho 3"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="about-image img-box-4">
                <figure class="image-anime">
                  <img
                    src="images/about/about-us-img-4.jpg"
                    alt="About Ortho 4"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="about-circle-logo">
                <img
                  src="https://sangeetamedicalcentre.com/wp-content/uploads/2023/08/Asset-4.png"
                  alt="Mrityunjay Hospital Logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
