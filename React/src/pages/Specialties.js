// import React, { useEffect, useState } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import { Link } from "react-router-dom";
// import { client } from "../config/sanityClient";

// const Specialties = () => {
//   const [specialties, setSpecialties] = useState([
//     {
//       name: "Arthoscopy",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-3-.webp",
//       alt: "Arthoscopy",

//       icon: "arthoscopy.png",
//       link: "/specialties/arthroscopy",
//       title: "Arthroscopy Meerut",
//     },
//     {
//       name: "Fracture Management",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-4.webp",
//       alt: "Fracture Management",

//       icon: "knee.png",
//       link: "/specialties/knee-department",
//       title: "Advanced Knee Treatment/Surgery Meerut",
//     },
//     {
//       name: "Knee Replacement",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Service-image-1.webp",
//       alt: "Knee Replacement",

//       icon: "knee.png",
//       link: "/specialties/knee-department",
//       title: "Advanced Knee Treatment/Surgery Meerut",
//     },
//     {
//       name: "Hip Joint Replacement",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-2.webp",
//       alt: "Hip Joint Replacement",

//       icon: "hip.png",
//       link: "/specialties/hip-department",
//       title: "Hip Treatment & Surgery Meerut",
//     },
//     {
//       name: "Complex Trauma Surgery",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/cccccc.webp",
//       alt: "Complex Trauma Surgery",

//       icon: "spine.png",
//     },
//     {
//       name: "Sports Injury Treatment",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sports.webp",
//       alt: "Sports Injury Treatment",

//       icon: "foot.png",
//     },

//     {
//       name: "Infertility Treatment",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-5-1.webp",
//       alt: "Infertility Treatment",

//       icon: "arthoscopy.png",
//     },
//     {
//       name: "High-Risk Pregnancy Management",
//       image:
//         "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-8-1-1.webp",
//       alt: "High-Risk Pregnancy Management",

//       icon: "rheumatology.png",
//     },
//   ]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const query = `*[_type == "specialty"]{
//       name,
//       "link": slug.current,
//       "image": mainImage.asset->url,
//       "icon": icon.asset->url,
//     } | order(name asc)`;

//     const fetchSpecialties = async () => {
//       try {
//         setLoading(true);
//         const data = await client.fetch(query);
//         setSpecialties(data);
//         console.log("fetchSpecialties",data);
//         setError(null);
//       } catch (err) {
//         console.error("Failed to fetch specialties:", err);
//         setError("Failed to load specialties. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSpecialties();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner"></div> {/* Your existing spinner CSS */}
//         <p className="ml-4 text-gray-700">Loading specialties...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-red-600">
//         <p>{error}</p>
//         <Link to="/" className="mt-4 text-blue-600 hover:underline">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       <BreadCrumb
//         image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
//         title="Best orthopedic treatments"
//         page="Specialties"
//       />

//       {/* Section Start */}
//       <div class="page-about-us">
//         <div class="container fadeInUp">
//           <div class="row align-items-center">
//             <div class="col-lg-7">
//               <div class="page-about-content">
//                 <div class="section-title mb-0">
//                   <h2 class="text-anime-style-3" data-cursor="-opaque">
//                     Specialties @SangeetaMedicalCentre
//                   </h2>
//                   <p>
//                     At <strong>Sangeeta Medical Centre, Meerut</strong>, we take
//                     pride in delivering comprehensive, patient-focused care in
//                     both orthopedics and women’s health. With over 35 years of
//                     excellence, our center is home to experienced specialists
//                     like{" "}
//                     <strong>
//                       Dr. Raman Jindal, Dr. Sangeeta Jindal, and Dr. Manisha
//                       Chaudhary,
//                     </strong>
//                     who are committed to offering compassionate, cutting-edge
//                     medical services for every stage of life.
//                   </p>
//                   <p>
//                     From advanced joint replacement surgeries and complex trauma
//                     management to high-risk pregnancy care, infertility
//                     treatment, and cosmetic gynecological procedures, our
//                     multidisciplinary team ensures that each patient receives
//                     personalized and effective care. Whether you're seeking
//                     relief from chronic pain, planning a family, or navigating a
//                     complex medical concern, Sangeeta Medical Centre provides
//                     expert care in a safe, modern, and supportive environment.
//                   </p>
//                   <p>
//                     We are dedicated to upholding medical excellence through
//                     precise diagnostics, minimally invasive techniques, and
//                     ethical practices—empowering you to live healthier, fuller
//                     lives.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-5">
//               <div class="how-work-image-box-2 rounded-4">
//                 <div class="how-work-img-2">
//                   <img
//                     // src="images/specialties/big.jpg"
//                     src="https://www.mrityunjayhospital.com/images/specialties/big.jpg"
//                     alt="Orthopaedic Treatment Meerut"
//                     loading="lazy"
//                   />
//                   {/* <figure class="image-anime reveal"></figure> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="page-about-us bg-radius-section2 bg-light" id="Ethical">
//         <div class="container">
//           <div class="row">
//             {specialties.map((specialty) => (
//               <div class="col-lg-3 col-md-3">
//                 <div class="service-item wow fadeInUp" data-wow-delay="1.25s">
//                   <div class="service-item-image">
//                     <figure>
//                       <img
//                         src={
//                           specialty.image ||
//                           "https://placehold.co/400x200/cccccc/ffffff?text=Specialty+Image"
//                         }
//                         alt={specialty.name}
//                         loading="lazy"
//                       />
//                     </figure>
//                   </div>
//                   <div class="icon-box">
//                     <img
//                       src={
//                         specialty.icon ||
//                         "https://placehold.co/35x35/007bff/ffffff?text=Icon"
//                       }
//                       alt="Foot Icon"
//                     />
//                   </div>
//                   <div class="service-body">
//                     <div class="service-content">
//                       <h3>{specialty.name}</h3>
//                     </div>
//                     <div class="service-btn">
//                       <Link
//                         to={`/specialties/${specialty?.link}`}
//                         title={specialty.title}
//                       >
//                         <img
//                           src="images/svg-icons/arrow-readmore-btn.svg"
//                           alt="More arrow"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Section End */}
//     </>
//   );
// };

// export default Specialties;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const localSpecialties = [
  {
    name: "Arthoscopy",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-3-.webp",
    alt: "Arthoscopy",
    icon: "/images/icons/arthoscopy.png",
    link: "arthroscopy-&-sports-injury-treatment",
    title: "Arthroscopy Meerut",
  },
  {
    name: "Fracture Management",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-4.webp",
    alt: "Fracture Management",
    icon: "/images/icons/knee.png",
    link: "fracture-management",
    title: "Advanced Fracture Treatment",
  },
  {
    name: "Hip Replacement Surgery",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Service-image-1.webp",
    alt: "Knee Replacement",
    icon: "/images/icons/knee.png",
    link: "hip-replacement-surgery",
    title: "Advanced Knee Treatment",
  },
  {
    name: "Hip Joint Replacement",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-2.webp",
    alt: "Hip Joint Replacement",
    icon: "/images/icons/hip.png",
    link: "hip-replacement-surgery",
    title: "Hip Joint Replacement Surgery",
  },
  {
    name: "Complex Trauma Surgery",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/cccccc.webp",
    alt: "Complex Trauma Surgery",
    icon: "/images/icons/spine.png",
    link: "orthopedic-emergencies-trauma-care",
    title: "Complex Trauma Surgery",
  },
  {
    name: "Sports Injury Treatment",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sports.webp",
    alt: "Sports Injury Treatment",
    icon: "/images/icons/foot.png",
    link: "arthroscopy-&-sports-injury-treatment",
    title: "Sports Injury & Rehabilitation",
  },
  {
    name: "Infertility Treatment",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-5-1.webp",
    alt: "Infertility Treatment",
    icon: "/images/icons/arthoscopy.png",
    link:"infertility-treatments",
    title: "Comprehensive Infertility Treatment",
  },
  {
    name: "High-Risk Pregnancy",
    image:
      "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-8-1-1.webp",
    alt: "High-Risk Pregnancy",
    icon: "/images/icons/rheumatology.png",
    link: "normal-high-risk-pregnancy-care",
    title: "High-Risk Pregnancy Care",
  },
];

const Specialties = () => {
  const [specialties, setSpecialties] = useState(localSpecialties);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Since data is local, no fetching is needed
  // You can add simulated delay here if needed

  return (
    <>
      {/* Breadcrumb component can be used here */}
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Best orthopedic treatments"
        page="Specialties"
      />
      <div className="page-about">
        <div className="container fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Specialties @SangeetaMedicalCentre
                  </h2>
                  <p>
                    At <strong>Sangeeta Medical Centre, Meerut</strong>, we
                    provide comprehensive care...
                  </p>
                  {/* Your descriptive text here */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-3">
              <div className="how-work-image-box rounded-4">
                <img
                  src="https://sangeetamedicalcentre.com/wp-content/uploads/2025/06/IMG-20250319-WA0003.jpg"
                  alt="Medical Centre"
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Specialties Grid */}
          <div className="specialties-grid mt-5">
            <div className="row">
              {specialties.map((specialty, idx) => (
                <div key={idx} className="col-lg-3 col-md-6 mb-4">
                  <div className="specialty-card shadow rounded p-3 text-center h-100">
                    <img
                      src={specialty.image}
                      alt={specialty.alt}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <div className="icon my-3">
                      <img
                        src={specialty.icon}
                        alt={`${specialty.name} icon`}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <h4>{specialty.name}</h4>
                    <p className="text-muted">{specialty.title}</p>
                    {/* <Link to={`/specialties/${specialty.link}`} className="btn btn-primary mt-2">
                      Learn More
                    </Link> */}

                    <Link
                      to={`/specialties/${specialty.link}`}
                      title={`View  ${specialty.name}`}
                      className="btn-default"
                    >
                      <span>Lear More</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-5">
            <Link to="/specialties" className="btn btn-outline-primary">
              Discover All Specialties
            </Link>
          </div> */}
          <div className="text-center mt-5 mb-4">
            <Link
              to="/specialties"
              className="btn-default"
            >
              <span>Discover All Specialties</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialties;
