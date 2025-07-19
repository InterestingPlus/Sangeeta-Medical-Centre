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
import "./AboutSection.scss";

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
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-text">
          <p className="highlight">Trusted OB-GYN Care in Meerut</p>
          <h2 className="heading">About Sangeeta Medical Centre</h2>
          <p className="paragraph">
            With over 35 years of excellence, Sangeeta Medical Centre, led by
            Dr. Manisha Chaudhary, has been a beacon of women's health in
            Meerut. Known for compassionate and personalized care, we provide
            complete OB-GYN solutions—from consultations and birthing support to
            advanced treatments and surgical procedures.
          </p>
          <p className="paragraph">
            Our mission is to ensure every woman receives expert, empathetic,
            and effective care, backed by modern medical technologies and
            heartfelt dedication.
          </p>

          <div className="features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <img src={item.icon} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <div className="image-wrapper">
            <img
              src="https://sangeetamedicalcentre.com/wp-content/uploads/2025/06/mmm-2048x863.png"
              alt="Sangeeta Medical Centre"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
