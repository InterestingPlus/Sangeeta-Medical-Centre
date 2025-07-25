import React from "react";
import { Link, NavLink } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import BookApointment from "../components/BookApointment";

const Contact = () => {
  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/contact-us.webp"
        title="Contact"
        page="Contact"
      />

      {/* Page Contact Us Start */}
      <div className="page-contact-us bg-radius-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="contact-information">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Contact Mrityunjay Orthopedic Hospital
                  </h2>
                </div>
                <h3 className="fs-4 mt-3">
                  We’re here for your every orthopedic need — anytime, anywhere.
                </h3>
                <p className="mt-2">
                  At Mrityunjay Orthopedic Hospital, reaching the right care is
                  as important as receiving it. Our dedicated contact services
                  are designed to ensure that patients — local or international
                  — can get prompt support, appointments, and guidance directly
                  from our expert team.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5">
              <div className="contact-information">
                <div className="contact-information-box">
                  <div
                    className="contact-info-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div className="icon-box">
                      <img
                        src="images/svg-icons/icon-location-blue.svg"
                        alt=""
                      />
                    </div>
                    <div className="contact-info-content">
                      <h3>Address</h3>
                      <p>
                        A-14, Mawana Rd, Radha Garden, Ganga Nagar, Meerut,
                        Uttar Pradesh 250001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="contact-information">
                <div className="contact-information-box">
                  <div
                    className="contact-info-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div className="icon-box">
                      <img src="images/svg-icons/icon-phone-color.svg" alt="" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Phone No.</h3>
                      <p>
                        (+91) <a href="tel:+919837054400">9837054400</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="contact-information">
                <div className="contact-information-box">
                  <div
                    className="contact-info-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div className="icon-box">
                      <img src="images/svg-icons/icon-whatsapp.svg" alt="" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Whatsapp No.</h3>
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
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="contact-information">
                <div className="contact-information-box">
                  <div
                    className="contact-info-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div className="icon-box">
                      <img src="images/svg-icons/icon-email.svg" alt="" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Email ID</h3>
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
            </div>
          </div>
        </div>
      </div>

      <div className="google-map bg-radius-section2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="google-map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.0013975429265!2d77.7060049!3d28.987329600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65ca61da1665%3A0x4ba16af467b8bf96!2sDr.%20Shubhankar%20Shekhar%20-%20Mrityunjay%20Hospital%2C%20Meerut!5e0!3m2!1sen!2sin!4v1747298967651!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="SangeetaMedicalCentre"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookApointment />
      {/* Page Contact Us End */}
    </>
  );
};

export default Contact;
