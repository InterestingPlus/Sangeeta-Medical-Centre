import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="main-footer"
      style={{ backgroundColor: "#2b2b2b", color: "#fff", padding: "50px 0" }}
    >
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Section: Clinic Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <img
                src="https://sangeetamedicalcentre.com/wp-content/uploads/2023/08/Asset-4.png"
                alt="Sangeeta Medical Centre Logo"
                style={{ width: "250px", marginBottom: "15px" }}
              />
              <div className="footer-text">
                <h3
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                  className="header-text"
                >
                  Sangeeta Medical Centre
                </h3>
                <p style={{ fontSize: "16px", color: "#ccc" }}>
                  35 years of OB-GYN care.
                </p>
              </div>
              <ul className="list-unstyled mt-4" style={{ padding: 0 }}>
                <li style={{ marginBottom: "15px" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "10px", color: "#FFD700" }}
                  />
                  <a
                    href="tel:+919817088759"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    +91 9817088759
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "10px", color: "#FFD700" }}
                  />
                  <a
                    href="tel:01169269888"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    011-69269888
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "10px", color: "#FFD700" }}
                  />
                  <a
                    href="mailto:sangeetamedicalcentermeerut@gmail.com"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    sangeetamedicalcentermeerut@gmail.com
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ marginRight: "10px", color: "#FFD700" }}
                  />
                  <span style={{ color: "#fff" }}>
                    A-14, Mawana Rd, Radha Garden, Ganga Nagar,
                    <br />
                    Meerut, Uttar Pradesh 250001
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section: About Us Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-section">
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
                className="header-text"
              >
                About Us
              </h3>
              <ul className="list-unstyled" style={{ padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                    Home
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a
                    href="/blog"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Blog
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a
                    href="/contact"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Contact us
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a
                    href="/about"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    About
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a
                    href="/gallery"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Book Appointment */}
          <div className="col-lg-3 col-md-12 mb-4 text-center text-lg-start">
            <div className="footer-section">
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
                className="header-text"
              >
                Book Appointment Now!
              </h3>
              <div className="header-btn d-inline-flex">
                <a href="contact.html#Appointment" className="btn-default">
                  <span>Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="row mt-5 pt-4" style={{ borderTop: "1px solid #444" }}>
          <div className="col-lg-12 text-center">
            <p style={{ fontSize: "14px", color: "#aaa" }}>
              © 2023 Created with <span style={{ color: "red" }}>❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
