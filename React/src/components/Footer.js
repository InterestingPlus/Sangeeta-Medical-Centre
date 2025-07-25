// <footer
//       className="main-footer"
//       style={{ backgroundColor: "#2b2b2b", color: "#fff", padding: "50px 0" }}
//     >
//       <div className="container">
//         <div className="row justify-content-between">
//           {/* Left Section: Clinic Info */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="footer-section">
//               <img
//                 src="https://sangeetamedicalcentre.com/wp-content/uploads/2023/08/Asset-4.png"
//                 alt="Sangeeta Medical Centre Logo"
//                 style={{ width: "250px", marginBottom: "15px" }}
//               />
//               <div className="footer-text">
//                 <h3
//                   style={{ fontSize: "24px", fontWeight: "bold" }}
//                   className="header-text"
//                 >
//                   Sangeeta Medical Centre
//                 </h3>
//                 <p style={{ fontSize: "16px", color: "#ccc" }}>
//                   35 years of OB-GYN care.
//                 </p>
//               </div>
//               <ul className="list-unstyled mt-4" style={{ padding: 0 }}>
//                 <li style={{ marginBottom: "15px" }}>
//                   <FontAwesomeIcon
//                     icon={faPhone}
//                     style={{ marginRight: "10px", color: "#FFD700" }}
//                   />
//                   <Link
//                     to="tel:+919817088759"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     +91 9817088759
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                   <FontAwesomeIcon
//                     icon={faPhone}
//                     style={{ marginRight: "10px", color: "#FFD700" }}
//                   />
//                   <Link
//                     to="tel:01169269888"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     011-69269888
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                   <FontAwesomeIcon
//                     icon={faEnvelope}
//                     style={{ marginRight: "10px", color: "#FFD700" }}
//                   />
//                   <Link
//                     to="mailto:sangeetamedicalcentermeerut@gmail.com"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     sangeetamedicalcentermeerut@gmail.com
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                   <FontAwesomeIcon
//                     icon={faLocationDot}
//                     style={{ marginRight: "10px", color: "#FFD700" }}
//                   />
//                   <span style={{ color: "#fff" }}>
//                     A-14, Mawana Rd, Radha Garden, Ganga Nagar,
//                     <br />
//                     Meerut, Uttar Pradesh 250001
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Middle Section: About Us Links */}
//           <div className="col-lg-2 col-md-6 mb-4">
//             <div className="footer-section">
//               <h3
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   marginBottom: "20px",
//                 }}
//                 className="header-text"
//               >
//                 About Us
//               </h3>
//               <ul className="list-unstyled" style={{ padding: 0 }}>
//                 <li style={{ marginBottom: "10px" }}>
//                   <Link
//                     to="/"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "10px" }}>
//                   <Link
//                     to="/blog"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "10px" }}>
//                   <Link
//                     to="/contact"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     Contact us
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "10px" }}>
//                   <Link
//                     to="/about"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "10px" }}>
//                   <Link
//                     to="/gallery"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     Gallery
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Section: Book Appointment */}
//           <div className="col-lg-3 col-md-12 mb-4 text-center text-lg-start">
//             <div className="footer-section">
//               <h3
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   marginBottom: "20px",
//                 }}
//                 className="header-text"
//               >
//                 Book Appointment Now!
//               </h3>
//               <div className="header-btn d-inline-flex">
//                 <Link to="contact.html#Appointment" className="btn-default">
//                   <span>Appointment</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar: Copyright */}
//         <div
//           className="row mt-5 pt-4"
//           style={{ borderTop: "1px solid #444" }}
//         >
//           <div className="col-lg-12 text-center">
//             <p style={{ fontSize: "14px", color: "#aaa" }}>
//               © 2023 Created with <span style={{ color: "red" }}>❤</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className="main-footer bg-radius-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-footer-list">
                <div className="footer-links quick-links">
                  <h3>quick links</h3>
                  <ul>
                    <li>
                      <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        title="About Mrityunjay Hospital Meerut"
                      >
                        about
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="contact"
                        title="Contact best orthopaedic hospital Meerut"
                      >
                        contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="contact#Appointment">appointment</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="footer-links service-links">
                  <h3>usefull links</h3>
                  <ul>
                    <li>
                      <NavLink to="about#Doctors">doctors</NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="specialties"
                        title="Best orthopedic treatments in Meerut"
                      >
                        specialties
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="procedures"
                        title="Orthopaedic Procedures Meerut"
                      >
                        procedures
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="infra-equipment"
                        title="Orthopedic infrastructure Meerut"
                      >
                        infra & equip
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="patients">patients</NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="SMC-institute"
                        title="Orthopaedic Training & Research Meerut"
                      >
                        SMC institute
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="footer-links social-links">
                  <h3>social media</h3>
                  <ul>
                    <li>
                      <Link
                        to="https://www.facebook.com/profile.php?id=61574519750197"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/drshubhankarshekhar"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/channel/UCQfZiGwRQ_YP0zJ-QAJ3SIg"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/shubhankar-shekhar-a7306a15a/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-links footer-contact-details">
                  <h3>Help and Support</h3>
                  <div className="footer-contact-box">
                    <div className="footer-info-box">
                      <div className="icon-box">
                        <img src="images/svg-icons/icon-phone.svg" alt="" />
                      </div>
                      <div className="footer-info-box-content">
                        <p>
                          (+91) <a href="tel:+919837054400">9837054400</a>
                        </p>
                      </div>
                    </div>

                    <div className="footer-info-box">
                      <div className="icon-box">
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                      <div className="footer-info-box-content">
                        <p>
                          (+91){" "}
                          <Link
                            to="https://api.whatsapp.com/send?phone=+918171887159&text=Hi%20there%20I%20have%20been%20on%20your%20website%20and%20I%20want%20to%20be%20counselled%20by%20experts"
                            target="_blank"
                          >
                            81718 87159
                          </Link>
                          <br />
                          (+91){" "}
                          <Link
                            to="https://api.whatsapp.com/send?phone=+917970586243&text=Hi%20there%20I%20have%20been%20on%20your%20website%20and%20I%20want%20to%20be%20counselled%20by%20experts"
                            target="_blank"
                          >
                            79705 86243
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="footer-info-box">
                      <div className="icon-box">
                        <img src="images/svg-icons/icon-mail.svg" alt="" />
                      </div>
                      <div className="footer-info-box-content">
                        <p>
                          <Link href="mailto:drmanishachaudharyobg@gmail.com">
                            drmanishachaudharyobg@gmail.com
                          </Link>
                          <br />
                          <NavLink href="mailto:drjindalraman@gmail.com">
                            drjindalraman@gmail.com
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-links terms-condition-links">
                  <div className="footer-copyright-text">
                    <p>Copyright 2025 Sangeeta Medical Centre</p>
                  </div>
                  <div className="footer-terms-condition">
                    <ul>
                      <li>
                        Brand managed By -
                        <Link
                          to="https://prudentprints.com/branding/agency/portfolio.html"
                          target="_blank"
                          className="color-secondary"
                        >
                          Prudent Branding, Meerut
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;
