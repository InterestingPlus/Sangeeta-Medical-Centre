// import React from "react";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   return (
//     <div className="col-lg-4 hidden-xs">
//       <div className="service-sidebar">
//         <div className="service-catagery-list specialties-panel wow fadeInUp">
//           <h3>Specialties</h3>
//           <div className="faq-accordion" id="accordion">
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading1">
//                 <button
//                   className="accordion-button"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse1"
//                   aria-expanded="true"
//                   aria-controls="collapse1"
//                 >
//                   Shoulder Department
//                 </button>
//               </h2>
//               <div
//                 id="collapse1"
//                 className="accordion-collapse collapse show"
//                 aria-labelledby="heading1"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/shoulder-department#Instability"
//                         title="Shoulder Instability treatment"
//                       >
//                         Shoulder Instability
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/shoulder-department#Rotator"
//                         title="Rotator cuff tear treatment"
//                       >
//                         Rotator cuff tear
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/shoulder-department#Frozen"
//                         title="Frozen shoulder treatment"
//                       >
//                         Frozen shoulder
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading2">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse2"
//                   aria-expanded="false"
//                   aria-controls="collapse2"
//                 >
//                   Hand & Microvascular Department
//                 </button>
//               </h2>
//               <div
//                 id="collapse2"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading2"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/hand-microvascular-department#Elbow"
//                         title="Elbow instability treatment"
//                       >
//                         Elbow instability
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/hand-microvascular-department#Inflammatory"
//                         title="Inflammatory pathologies treatment"
//                       >
//                         Inflammatory pathologies
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading3">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse3"
//                   aria-expanded="false"
//                   aria-controls="collapse3"
//                 >
//                   Hip Department
//                 </button>
//               </h2>
//               <div
//                 id="collapse3"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading3"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/hip-department#Trauma"
//                         title="Hip surgery"
//                       >
//                         Hip trauma
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/hip-department#Injuries"
//                         title="Hip Labral injuries treatment"
//                       >
//                         Labral injuries
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/hip-department#Replacement"
//                         title="Hip Replacement surgery"
//                       >
//                         Hip Replacement
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/hip-department#DAA"
//                         title="Direct Anterior Approach (DAA) Hip Replacement"
//                       >
//                         DAA Hip Replacement
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading4">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse4"
//                   aria-expanded="false"
//                   aria-controls="collapse4"
//                 >
//                   Knee Department
//                 </button>
//               </h2>
//               <div
//                 id="collapse4"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading4"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/knee-department#Instability"
//                         title="Knee instability/pain treatment"
//                       >
//                         Knee instability/pain
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/knee-department#Replacement"
//                         title="Partial and Total Knee Replacement Surgery"
//                       >
//                         Knee Replacement (Partial/Total)
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading5">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse5"
//                   aria-expanded="false"
//                   aria-controls="collapse5"
//                 >
//                   Spine Department
//                 </button>
//               </h2>
//               <div
//                 id="collapse5"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading5"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/spine-department#Degenerative"
//                         title="Degenerative spine/Disc disease treatment"
//                       >
//                         Degenerative spine/Disc disease
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading6">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse6"
//                   aria-expanded="false"
//                   aria-controls="collapse6"
//                 >
//                   Foot And Ankle Department
//                 </button>
//               </h2>
//               <div
//                 id="collapse6"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading6"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/foot-ankle-department#Arthroscopy"
//                         title="Ankle arthroscopy"
//                       >
//                         Ankle arthroscopy
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/foot-ankle-department#Heel"
//                         title="Foot and heel pain treatment"
//                       >
//                         Foot and heel pain
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/foot-ankle-department#Fractures"
//                         title="Foot and ankle fractures surgery"
//                       >
//                         Foot and ankle fractures
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading7">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse7"
//                   aria-expanded="false"
//                   aria-controls="collapse7"
//                 >
//                   Arthroscopy
//                 </button>
//               </h2>
//               <div
//                 id="collapse7"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading7"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/arthroscopy#Injuries"
//                         title="Sports injuries treatment"
//                       >
//                         Sports injuries
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="heading8">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapse8"
//                   aria-expanded="false"
//                   aria-controls="collapse8"
//                 >
//                   Rheumatology
//                 </button>
//               </h2>
//               <div
//                 id="collapse8"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="heading8"
//                 data-bs-parent="#accordion"
//               >
//                 <div className="accordion-body">
//                   <ul>
//                     <li>
//                       <Link
//                         to="/specialties/rheumatology#Arthritis"
//                         title="Arthritis Treatment"
//                       >
//                         Arthritis
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/rheumatology#Osteoarthritis"
//                         title="Osteoarthritis Treatment"
//                       >
//                         Osteoarthritis
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/specialties/rheumatology#Tendinitis"
//                         title="Tendinitis Treatment"
//                       >
//                         Tendinitis
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="working-hours">
//           <h3>opening hours</h3>
//           <ul>
//             <li>Mon - Sat: 10.00 AM - 4.00 PM</li>
//             <li>Sun: 09.00 AM - 4.00 PM</li>
//             <li>Friday: Closed</li>
//             <li>Emergency: 24 hours</li>
//           </ul>
//           <div className="working-hours-btn">
//             {" "}
//             <Link to="tel:011-69269888" className="btn-default">
//               <span>make an appointment</span>
//             </Link>{" "}
//           </div>
//         </div>

//         <div className="sidebar-cta-box">
//           <div className="sidebar-cta-image">
//             <img
//               src="/images/contact-treatment.jpg"
//               alt="Contact Sangeeta Medical Centre"
//               loading="lazy"
//             />
//             {/* <figure>
//                     </figure> */}
//           </div>

//           <div className="sidebar-cta-item">
//             <div className="icon-box">
//               <img
//                 src="/images/svg-icons/cta-icon-phone.svg"
//                 alt="CTA Phone Icon"
//               />
//               {/* <figure>
//                       </figure> */}
//             </div>
//             <div className="sidebar-cta-content">
//               <h3>Need any Help?</h3>
//               <h4 className="text-white mb-1">Call us:</h4>
//               <p>
//                 +(91) <Link to="tel:+919837054400">9837054400</Link>
//               </p>
//               <h4 className="text-white mb-1">Whatsapp:</h4>
//               <p>
//                 +(91){" "}
//                 <Link
//                   to="https://api.whatsapp.com/send?phone=+919068168434&text=Hi+there+I+have+been+on+your+website+and+I+want+to+be+counselled+by+experts"
//                   target="_blank"
//                 >
//                   9068168434
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

// Example external icon component (SVG arrow)
const ArrowIcon = ({ isOpen }) => (
  <svg
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      width: "12px",
      height: "12px",
      marginLeft: "auto",
    }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const SideBar = () => {
  const [openSection, setOpenSection] = useState(null);

  const orthopedicLinks = [
    { name: "Fracture Management", url: "/specialties/fracture-management" },
    { name: "Knee Replacement Surgery (TKR)", url: "/specialties/knee-replacement-surgery" },
    { name: "Hip Replacement Surgery (THR)", url: "/specialties/hip-replacement-surgery" },
    { name: "Arthroscopy & Sports Injury Treatment", url: "/specialties/arthroscopy-sports-injury-treatment" },
    { name: "Spine & Back Pain Treatment", url: "/specialties/spine-back-pain-treatment" },
    { name: "Joint Pain & Arthritis Management", url: "/specialties/joint-pain-arthritis-management" },
    { name: "Pediatric Orthopedics", url: "/specialties/pediatric-orthopedics" },
    { name: "Bone Deformity Correction", url: "/specialties/bone-deformity-correction" },
    { name: "Orthopedic Emergencies & Trauma Care", url: "/specialties/orthopedic-emergencies-trauma-care" },
  ];

  const gynecologistLinks = [
    { name: "Normal & High-Risk Pregnancy Care", url: "/specialties/normal-high-risk-pregnancy-care" },
    { name: "Laparoscopic (Keyhole) Surgeries", url: "/specialties/laparoscopic-surgeries" },
    { name: "Infertility Treatments (IVF, IUI, etc.)", url: "/specialties/infertility-treatments" },
    { name: "Menstrual Disorders Treatment", url: "/specialties/menstrual-disorders-treatment" },
    { name: "PCOS/PCOD Management", url: "/specialties/pcos-pcod-management" },
    { name: "Adolescent & Menopausal Health", url: "/specialties/adolescent-menopausal-health" },
    { name: "Painless Delivery Options", url: "/specialties/painless-delivery-options" },
    { name: "Cancer Screening & Prevention", url: "/specialties/cancer-screening-prevention" },
    { name: "Contraception & Family Planning", url: "/specialties/contraception-family-planning" },
    { name: "Gynecological Ultrasound & Diagnostics", url: "/specialties/gynecological-ultrasound-diagnostics" },
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <style>
        {`
          /* Hide default Bootstrap accordion arrow (box) */
          .accordion-button::after {
            display: none !important;
            content: none !important;
          }
        `}
      </style>
      <div className="col-lg-4 hidden-xs">
        <div className="service-sidebar">
          <div className="service-catagery-list specialties-panel wow fadeInUp">
            <h3>Specialties</h3>
            <div className="faq-accordion" id="accordion">

              {/* Orthopedic Department */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOrthopedic">
                  <button
                    className={`accordion-button ${openSection === "orthopedic" ? "" : "collapsed"}`}
                    type="button"
                    aria-expanded={openSection === "orthopedic"}
                    aria-controls="collapseOrthopedic"
                    onClick={() => toggleSection("orthopedic")}
                    style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                  >
                    Orthopedic Department
                    <ArrowIcon isOpen={openSection === "orthopedic"} />
                  </button>
                </h2>
                <div
                  id="collapseOrthopedic"
                  className={`accordion-collapse collapse ${openSection === "orthopedic" ? "show" : ""}`}
                  aria-labelledby="headingOrthopedic"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul>
                      {orthopedicLinks.map((link, i) => (
                        <li key={i}>
                          <Link to={link.url} title={link.name}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gynecologist Department */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingGyno">
                  <button
                    className={`accordion-button ${openSection === "gyno" ? "" : "collapsed"}`}
                    type="button"
                    aria-expanded={openSection === "gyno"}
                    aria-controls="collapseGyno"
                    onClick={() => toggleSection("gyno")}
                    style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                  >
                    Gynecologist Department
                    <ArrowIcon isOpen={openSection === "gyno"} />
                  </button>
                </h2>
                <div
                  id="collapseGyno"
                  className={`accordion-collapse collapse ${openSection === "gyno" ? "show" : ""}`}
                  aria-labelledby="headingGyno"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul>
                      {gynecologistLinks.map((link, i) => (
                        <li key={i}>
                          <Link to={link.url} title={link.name}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Add your other sidebar content here */}

<div className="working-hours">
            <h3>opening hours</h3>
            <ul>
              <li>Mon - Sun: 10.00 AM - 5.00 PM</li>
              <li>Emergency: 24 hours</li>
            </ul>
            <div className="working-hours-btn">
              {" "}
              <Link to="tel:011-69269888" className="btn-default">
                <span>make an appointment</span>
              </Link>{" "}
            </div>
          </div>

          <div className="sidebar-cta-box">
            <div className="sidebar-cta-image">
              <img
                src="/images/about/about-us-image-2.jpg"
                alt="Contact Sangeeta Medical Centre"
                loading="lazy"
              />
              {/* <figure>
                      </figure> */}
            </div>

            <div className="sidebar-cta-item">
              <div className="icon-box">
                <img
                  src="/images/svg-icons/cta-icon-phone.svg"
                  alt="CTA Phone Icon"
                />
                {/* <figure>
                        </figure> */}
              </div>
              <div className="sidebar-cta-content">
                <h3>Need any Help?</h3>
                <h4 className="text-white mb-1">Call us:</h4>
                <p>
                  +(91) <Link to="tel:+919837054400">9837054400</Link>
                </p>
                <h4 className="text-white mb-1">Whatsapp:</h4>
                <p>
                  +(91){" "}
                  <Link
                    to="https://api.whatsapp.com/send?phone=+919068168434&text=Hi+there+I+have+been+on+your+website+and+I+want+to+be+counselled+by+experts"
                    target="_blank"
                  >
                    9068168434
                  </Link>
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
