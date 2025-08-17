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
                  medical solutions. Reach out to us to book an appointment or
                  for any health-related queries.
                </h3>
                <p className="mt-2">
                  Reach out to us to book an appointment or for any
                  health-related queries.
                  {/* At Sangeeta Orthopedic Hospital, reaching the right care is
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
                        A, 14, Mawana Rd, Radha Garden, Sri Ganga Nagar, Meerut,
                        Uttar Pradesh 250001
                      </p>
                      <a style={{color: "black", textDecoration: "underline"}} href="https://www.google.com/maps?ll=29.005381,77.743397&z=13&t=h&hl=en&gl=IN&mapclient=embed&cid=4794699676094876193" target="_blank">View On Map</a>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57138.7983549971!2d77.7021116!3d29.0053747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c653b089702bf%3A0x428a31f3b650ca21!2sSangeeta%20Medical%20Center%20-%20Dr.%20Sangeeta%20Jindal%2C%20Best%20Gynecologist%20in%20Meerut%2C%20Normal%20Delivery%20%26%20Maternity%20Hospital%20Services.!5e1!3m2!1sen!2sin!4v1755342844108!5m2!1sen!2sin" width="600" height="450"  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
