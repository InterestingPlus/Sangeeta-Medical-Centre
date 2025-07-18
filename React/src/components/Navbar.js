import "./Navbar.css";

const Navbar = () => {
  return (
    <header class="main-header">
      <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="https://www.mrityunjayhospital.com">
              <img
                src="images/mh-logo.png"
                alt="Mrityunjay Orthopaedic Hospital Logo"
              />
            </a>

            <div class="collapse navbar-collapse main-menu">
              <div class="nav-menu-wrapper">
                <ul class="navbar-nav mr-auto" id="menu">
                  <li class="nav-item submenu">
                    <a
                      class="nav-link"
                      href="about.html"
                      title="About Mrityunjay Hospital Meerut"
                    >
                      About
                    </a>
                    <ul class="sub-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Legacy">
                          Legacy & Milestones
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Ethical">
                          Ethical Practice
                        </a>
                      </li>
                      <li class="nav-item submenu">
                        <a class="nav-link" href="about.html#Doctors">
                          Our Doctors
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="dr-shachindra-shekhar.html"
                              title="Senior Orthopedic Doctor Meerut"
                            >
                              Dr. Shachindra Shekhar
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="dr-shubhankar-shekhar.html"
                              title="Best Orthopedic Doctor in Meerut | Dr. Shubhankar Shekhar – Joint & Fracture Specialist"
                            >
                              Dr. Shubhankar Shekhar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Vision">
                          Vision & Mission
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Award">
                          Award & Recognition
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Work">
                          Work with us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Brand">
                          The Brand
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html#Privacy">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu">
                    <a
                      class="nav-link"
                      href="specialties.html"
                      title="Best orthopedic treatments in Meerut"
                    >
                      Specialties
                    </a>
                    <ul class="sub-menu">
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="shoulder-department.html"
                          title="Shoulder treatment and surgery Meerut"
                        >
                          Shoulder Department
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="shoulder-department.html#Instability"
                              title="Shoulder Instability treatment Meerut"
                            >
                              Shoulder Instability
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="shoulder-department.html#Rotator"
                              title="Rotator cuff tear treatment Meerut"
                            >
                              Rotator cuff tear
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="shoulder-department.html#Frozen"
                              title="Frozen shoulder treatment Meerut"
                            >
                              Frozen shoulder
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="hand-microvascular-department.html"
                          title="Hand & Microvascular treatment Meerut"
                        >
                          Hand & Microvascular Department
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="hand-microvascular-department.html#Elbow"
                              title="Elbow instability treatment Meerut"
                            >
                              Elbow instability
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="hand-microvascular-department.html#Inflammatory"
                              title="Inflammatory pathologies treatment Meerut"
                            >
                              Inflammatory pathologies
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="hip-department.html"
                          title="Hip Treatment & Surgery Meerut"
                        >
                          Hip Department
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="hip-department.html#Trauma"
                              title="Hip surgery Meerut"
                            >
                              Hip trauma
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="hip-department.html#Injuries"
                              title="Hip Labral injuries treatment Meerut"
                            >
                              Labral injuries
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="hip-department.html#Replacement"
                              title="Hip Replacement surgery Meerut"
                            >
                              Hip Replacement
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="hip-department.html#DAA"
                              title="Direct Anterior Approach (DAA) Hip Replacement Meerut"
                            >
                              DAA Hip Replacement
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="knee-department.html"
                          title="Advanced Knee Treatment/Surgery Meerut"
                        >
                          Knee Department
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="knee-department.html#Instability"
                              title="Knee instability/pain treatment Meerut"
                            >
                              Knee instability/pain
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="knee-department.html#Replacement"
                              title="Partial and Total Knee Replacement Surgery Meerut"
                            >
                              Knee Replacement (Partial/Total)
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="spine-department.html"
                          title="Spine Treatment Meerut"
                        >
                          Spine Department
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="spine-department.html#Degenerative"
                              title="Degenerative spine/Disc disease treatment Meerut"
                            >
                              Degenerative spine/Disc disease
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="foot-ankle-department.html"
                          title="Foot & Ankle Treatment Meerut"
                        >
                          Foot And Ankle Department
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="foot-ankle-department.html#Arthroscopy"
                              title="Ankle arthroscopy Meerut"
                            >
                              Ankle arthroscopy
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="foot-ankle-department.html#Heel"
                              title="Foot and heel pain treatment Meerut"
                            >
                              Foot and heel pain
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="foot-ankle-department.html#Fractures"
                              title="Foot and ankle fractures surgery Meerut"
                            >
                              Foot and ankle fractures
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="arthroscopy.html"
                          title="Arthroscopy Meerut"
                        >
                          Arthroscopy
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="arthroscopy.html#Injuries"
                              title="Sports injuries treatment Meerut"
                            >
                              Sports injuries
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          href="rheumatology.html"
                          title="Rheumatology Treatment Meerut"
                        >
                          Rheumatology
                        </a>
                        <ul class="sub-menu">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="rheumatology.html#Arthritis"
                              title="Arthritis Treatment Meerut"
                            >
                              Arthritis
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="rheumatology.html#Osteoarthritis"
                              title="Osteoarthritis Treatment Meerut"
                            >
                              Osteoarthritis
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="rheumatology.html#Tendinitis"
                              title="Tendinitis Treatment Meerut"
                            >
                              Tendinitis
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu">
                    <a
                      class="nav-link"
                      href="procedures.html"
                      title="Orthopaedic Procedures Meerut"
                    >
                      Procedures
                    </a>
                    <ul>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Joint">
                          Robotic Joint Replacement Surgery
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Trauma">
                          Trauma & Fracture Surgery
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Arthroscopic">
                          Arthroscopic Surgery
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Pediatric">
                          Pediatric Orthopedic
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Kyphoplasty">
                          Kyphoplasty
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Disc">
                          Disc Replacement Surgery
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#Major">
                          Major spine surgeries
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="procedures.html#DAA">
                          Direct Anterior Hip Replacement
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="infra-equipment.html"
                      title="Orthopedic infrastructure Meerut"
                    >
                      Infra & Equip
                    </a>
                  </li>
                  <li class="nav-item submenu">
                    <a class="nav-link" href="#">
                      Patients
                    </a>
                    <ul>
                      <li class="nav-item">
                        <a class="nav-link" href="patients.html#Testimonials">
                          Testimonials
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="patients.html#Stories">
                          Patient Stories
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="international-patients.html">
                          International Patients
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu">
                    <a
                      class="nav-link"
                      href="MOH-institute.html"
                      title="Orthopaedic Training & Research Meerut"
                    >
                      MOH Institute
                    </a>
                    <ul>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#Emergency">
                          24×7 Emergency Trauma Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="MOH-institute.html#Peadiatric"
                        >
                          Peadiatric Orthopaedics
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="MOH-institute.html#Physiotherapy"
                        >
                          Physiotherapy & Rehabilitation
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#General">
                          General Orthopaedics
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#Research">
                          Research And Academics
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#Workshop">
                          Orthotics & Prosthetics Workshop
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#X-Ray">
                          Dual Energy X-Ray Absorptiometry
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="MOH-institute.html#Postgraduate"
                        >
                          Postgraduate Education
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#Robotics">
                          Robotics & AI
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="MOH-institute.html#OPD">
                          Specialised OPDs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="contact.html"
                      title="Contact best orthopaedic hospital Meerut"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="header-btn d-inline-flex">
                <a href="contact.html#Appointment" class="btn-default">
                  <span>Appointment</span>
                </a>
              </div>
            </div>
            <div class="navbar-toggle"></div>
          </div>
        </nav>
        <div class="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Navbar;
