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
                    Contact Us
                  </h2>
                </div>
                <h3 className="fs-4 mt-3">
                  We’re here to help you with compassionate care and expert
                  medical solutions.
                </h3>
                <p className="mt-2">
                  Reach out to us to book an appointment or for any
                  health-related queries.
                  {/* At Mrityunjay Orthopedic Hospital, reaching the right care is
                  as important as receiving it. Our dedicated contact services
                  are designed to ensure that patients — local or international
                  — can get prompt support, appointments, and guidance directly
                  from our expert team. */}
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-4">
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
                        A, 14, Mawana Rd, Radha Garden, Ganga Nagar, Meerut,
                        Uttar Pradesh 250001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
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
                      <p style={{ whiteSpace: "nowrap" }}>
                        Reception / Appointments :{" "}
                        <a href="tel:011-69269888">011-69269888</a>
                      </p>{" "}
                      <p style={{ whiteSpace: "nowrap" }}>
                        Emergency (Orthopedic Trauma): +91{" "}
                        <a href="tel:+918171887159">81718 87159</a>
                      </p>
                      <p style={{ whiteSpace: "nowrap" }}>
                        Maternity & Delivery Helpline: +91{" "}
                        <a href="tel:+917970586243">79705 86243</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-2">
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
            </div> */}

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
                        General Enquiries{" "}
                        <Link href="mailto:sangeetmedicalcentermeerut@gmail.com">
                          sangeetmedicalcentermeerut@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-1">
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
                      <h3>Timings</h3>
                      <p>24x7</p>
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
                  src="https://www.google.com/maps/place/Sangeeta+Medical+Center+-+Dr.+Sangeeta+Jindal,+Best+Gynecologist+in+Meerut,+Normal+Delivery+%26+Maternity+Hospital+Services./@29.0053747,77.7021116,13z/data=!4m6!3m5!1s0x390c653b089702bf:0x428a31f3b650ca21!8m2!3d29.005381!4d77.7433971!16s%2Fg%2F11qpp4j3qs?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
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
