import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-lg-4 hidden-xs">
      <div className="service-sidebar">
        <div className="service-catagery-list specialties-panel wow fadeInUp">
          <h3>Specialties</h3>
          <div className="faq-accordion" id="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  Shoulder Department
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="heading1"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/shoulder-department#Instability"
                        title="Shoulder Instability treatment Meerut"
                      >
                        Shoulder Instability
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/shoulder-department#Rotator"
                        title="Rotator cuff tear treatment Meerut"
                      >
                        Rotator cuff tear
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/shoulder-department#Frozen"
                        title="Frozen shoulder treatment Meerut"
                      >
                        Frozen shoulder
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Hand & Microvascular Department
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/hand-microvascular-department#Elbow"
                        title="Elbow instability treatment Meerut"
                      >
                        Elbow instability
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/hand-microvascular-department#Inflammatory"
                        title="Inflammatory pathologies treatment Meerut"
                      >
                        Inflammatory pathologies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Hip Department
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="heading3"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/hip-department#Trauma"
                        title="Hip surgery Meerut"
                      >
                        Hip trauma
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/hip-department#Injuries"
                        title="Hip Labral injuries treatment Meerut"
                      >
                        Labral injuries
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/hip-department#Replacement"
                        title="Hip Replacement surgery Meerut"
                      >
                        Hip Replacement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/hip-department#DAA"
                        title="Direct Anterior Approach (DAA) Hip Replacement Meerut"
                      >
                        DAA Hip Replacement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  Knee Department
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                aria-labelledby="heading4"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/knee-department#Instability"
                        title="Knee instability/pain treatment Meerut"
                      >
                        Knee instability/pain
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/knee-department#Replacement"
                        title="Partial and Total Knee Replacement Surgery Meerut"
                      >
                        Knee Replacement (Partial/Total)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Spine Department
                </button>
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                aria-labelledby="heading5"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/spine-department#Degenerative"
                        title="Degenerative spine/Disc disease treatment Meerut"
                      >
                        Degenerative spine/Disc disease
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading6">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  Foot And Ankle Department
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                aria-labelledby="heading6"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/foot-ankle-department#Arthroscopy"
                        title="Ankle arthroscopy Meerut"
                      >
                        Ankle arthroscopy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/foot-ankle-department#Heel"
                        title="Foot and heel pain treatment Meerut"
                      >
                        Foot and heel pain
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/foot-ankle-department#Fractures"
                        title="Foot and ankle fractures surgery Meerut"
                      >
                        Foot and ankle fractures
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading7">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  Arthroscopy
                </button>
              </h2>
              <div
                id="collapse7"
                className="accordion-collapse collapse"
                aria-labelledby="heading7"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/arthroscopy#Injuries"
                        title="Sports injuries treatment Meerut"
                      >
                        Sports injuries
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading8">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  Rheumatology
                </button>
              </h2>
              <div
                id="collapse8"
                className="accordion-collapse collapse"
                aria-labelledby="heading8"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link
                        to="/specialties/rheumatology#Arthritis"
                        title="Arthritis Treatment Meerut"
                      >
                        Arthritis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/rheumatology#Osteoarthritis"
                        title="Osteoarthritis Treatment Meerut"
                      >
                        Osteoarthritis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/specialties/rheumatology#Tendinitis"
                        title="Tendinitis Treatment Meerut"
                      >
                        Tendinitis
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="working-hours">
          <h3>opening hours</h3>
          <ul>
            <li>Mon - Sat: 10.00 AM - 4.00 PM</li>
            <li>Sun: 09.00 AM - 4.00 PM</li>
            <li>Friday: Closed</li>
            <li>Emergency: 24 hours</li>
          </ul>
          <div className="working-hours-btn">
            {" "}
            <Link to="/contact#Appointment" className="btn-default">
              <span>make an appointment</span>
            </Link>{" "}
          </div>
        </div>

        <div className="sidebar-cta-box">
          <div className="sidebar-cta-image">
            <img
              src="images/contact-treatment.jpg"
              alt="Contact Sangeeta Medical Centre"
              loading="lazy"
            />
            {/* <figure>
                    </figure> */}
          </div>

          <div className="sidebar-cta-item">
            <div className="icon-box">
              <img
                src="images/svg-icons/cta-icon-phone.svg"
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
  );
};

export default SideBar;
