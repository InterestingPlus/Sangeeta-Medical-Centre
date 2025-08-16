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
//                     to="mailto:sangeetamedicalcenter@gmail.com"
//                     style={{ color: "#fff", textDecoration: "none" }}
//                   >
//                     sangeetamedicalcenter@gmail.com
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
//                     , Uttar Pradesh 250001
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
          {/* Top Row: All 4 sections in a single horizontal row */}
          <div className="footer-top-row">
            <div className="footer-links quick-links">
              <h3>quick links</h3>
              <ul>
                <li>
                  <NavLink to="/">home</NavLink>
                </li>
                <li>
                  <NavLink to="about">about</NavLink>
                </li>
                <li>
                  <NavLink to="contact">contact</NavLink>
                </li>
                <li>
                  <Link to="tel:011-69269888">appointment</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links service-links">
              <h3>usefull links</h3>
              <ul>
                <li>
                  <NavLink to="/about#doctors">doctors</NavLink>
                </li>
                <li>
                  <NavLink to="specialties">specialties</NavLink>
                </li>
                <li>
                  <NavLink to="procedures">procedures</NavLink>
                </li>
                <li>
                  <NavLink to="infra-equipment">infra & equip</NavLink>
                </li>
                <li>
                  <NavLink to="patients">patients</NavLink>
                </li>
                <li>
                  <NavLink to="gallary">Gallary</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-links social-links">
              <h3>social media</h3>
              <ul>
                <p style={{ marginRight: "20px", color: "#fff" }}>
                  Dr. Raman Jindal
                </p>
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61569655910297"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      style={{ width: "10px", color: "#fff" }}
                    >
                      <path
                        d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/drramanjindal_orthopedic"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      style={{ width: "20px" }}
                    >
                      <path
                        d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/channel/UCQFY1Xs8uosUWaAlErfLLqA"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      style={{ width: "20px", color: "red" }}
                    >
                      <path
                        d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
              <ul style={{ textAlign: 'left'}}>
                <p style={{ marginRight: "20px", color: "#fff" }}>
                   Dr. Manisha
                </p>
                <li>
                  <Link
                    to="https://www.facebook.com/Drmanishachaudharymeerut/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      style={{ width: "10px", color: "#fff" }}
                    >
                      <path
                        d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/drmanisha_gynaec/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      style={{ width: "20px" }}
                    >
                      <path
                        d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/@DrManishaChaudhary.meerut"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      style={{ width: "20px", color: "red" }}
                    >
                      <path
                        d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"
                        fill="white"
                      />
                    </svg>
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
                      <a href="tel:011-69269888">011-69269888</a>
                    </p>
                  </div>
                </div>

                <div className="footer-info-box">
                  <div className="icon-box">
                    <img
                      src="images/svg-icons/whatsapp-svgrepo-com.svg"
                      alt=""
                    />
                  </div>
                  <div className="footer-info-box-content">
                    <p>
                      (+91){" "}
                      <Link
                        to="https://api.whatsapp.com/send?phone=+918171887159"
                        target="_blank"
                      >
                        81718 87159
                      </Link>
                      <br />
                      (+91){" "}
                      <Link
                        to="https://api.whatsapp.com/send?phone=+917970586243"
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
                      <Link to="mailto:sangeetmedicalcenter@gmail.com">
                        sangeetmedicalcenter@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Copyright & Brand */}
          <div className="footer-bottom-row">
            <p>Copyright 2025 Sangeeta Medical Centre</p>
          </div>
        </div>
      </footer>

      {/* Footer End */}
    </>
  );
};

export default Footer;

//  <footer className="main-footer bg-radius-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="about-footer-list">
//               <div className="footer-links quick-links">
//                 <h3>quick links</h3>
//                 <ul>
//                   <li>
//                     <NavLink to="/">home</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="about" title="About Sangeeta Hospital ">
//                       about
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="contact"
//                       title="Contact best orthopaedic hospital "
//                     >
//                       contact
//                     </NavLink>
//                   </li>
//                   <li>
//                     <Link to="tel:011-69269888">appointment</Link>
//                   </li>
//                 </ul>
//               </div>

//               <div className="footer-links service-links">
//                 <h3>usefull links</h3>
//                 <ul>
//                   <li>
//                     <NavLink to="/about#doctors">doctors</NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="specialties"
//                       title="Best orthopedic treatments in "
//                     >
//                       specialties
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="procedures" title="Orthopaedic Procedures ">
//                       procedures
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="infra-equipment"
//                       title="Orthopedic infrastructure "
//                     >
//                       infra & equip
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="patients">patients</NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="gallary"
//                       title="Orthopaedic Training & Research "
//                     >
//                       Gallary
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>

//               <div className="footer-links social-links">
//                 <h3>social media</h3>

//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "start",
//                   }}
//                 >
//                   <p style={{ marginBottom: "5px", color: "#fff" }}>
//                     Dr. Raman Jindal
//                   </p>
//                   <ul style={{ marginTop: "0" }}>
//                     <li>
//                       <Link
//                         to="https://www.facebook.com/profile.php?id=61569655910297"
//                         target="_blank"
//                       >
//                         {/* <i className="fa-brands fa-facebook-f"></i> */}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 320 512"
//                           style={{ width: "15px", color: "#fff" }}
//                         >
//                           <path
//                             d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
//                             fill="white"
//                           />
//                         </svg>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="https://www.instagram.com/drramanjindal_orthopedic"
//                         target="_blank"
//                       >
//                         {/* <i className="fa-brands fa-instagram"></i> */}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 640 640"
//                           style={{ width: "30px" }}
//                         >
//                           <path
//                             d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
//                             fill="white"
//                           />
//                         </svg>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="https://www.youtube.com/channel/UCQFY1Xs8uosUWaAlErfLLqA"
//                         target="_blank"
//                       >
//                         {" "}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 640 640"
//                           style={{ width: "30px", color: "red" }}
//                         >
//                           <path
//                             d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"
//                             fill="white"
//                           />
//                         </svg>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//               </div>

//               <div className="footer-links footer-contact-details">
//                 <h3>Help and Support</h3>
//                 <div className="footer-contact-box">
//                   <div className="footer-info-box">
//                     <div className="icon-box">
//                       <img src="images/svg-icons/icon-phone.svg" alt="" />
//                     </div>
//                     <div className="footer-info-box-content">
//                       <p>
//                         <a href="tel:011-69269888">011-69269888</a>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="footer-info-box">
//                     <div className="icon-box">
//                        <img src="images/svg-icons/whatsapp-svgrepo-com.svg" alt="" />
//                     </div>
//                     <div className="footer-info-box-content">
//                       <p>
//                         (+91){" "}
//                         <Link
//                           to="https://api.whatsapp.com/send?phone=+918171887159&text=Hi%20there%20I%20have%20been%20on%20your%20website%20and%20I%20want%20to%20be%20counselled%20by%20experts"
//                           target="_blank"
//                         >
//                           81718 87159
//                         </Link>
//                         <br />
//                         (+91){" "}
//                         <Link
//                           to="https://api.whatsapp.com/send?phone=+917970586243&text=Hi%20there%20I%20have%20been%20on%20your%20website%20and%20I%20want%20to%20be%20counselled%20by%20experts"
//                           target="_blank"
//                         >
//                           79705 86243
//                         </Link>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="footer-info-box">
//                     <div className="icon-box">
//                       <img src="images/svg-icons/icon-mail.svg" alt="" />
//                     </div>
//                     <div className="footer-info-box-content">
//                       <p>
//                         <Link to="mailto:sangeetmedicalcenter@gmail.com">
//                           sangeetmedicalcenter@gmail.com
//                         </Link>
//                         {/* <Link to="mailto:drmanishachaudharyobg@gmail.com">
//                           drmanishachaudharyobg@gmail.com
//                         </Link>
//                         <br />
//                         <Link to="mailto:drjindalraman@gmail.com">
//                           drjindalraman@gmail.com
//                         </Link> */}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="footer-links terms-condition-links">
//                 <div className="footer-copyright-text">
//                   <p>Copyright 2025 Sangeeta Medical Centre</p>
//                 </div>
//                 <div className="footer-terms-condition">
//                   <ul>
//                     <li>
//                       Brand managed By -
//                       <Link
//                         to="https://prudentprints.com/branding/agency/portfolio.html"
//                         target="_blank"
//                         className="color-secondary"
//                       >
//                         Prudent Branding,
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>