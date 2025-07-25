import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import doctorData from "../pages/Doctor.json";
import { useState } from "react";

const Navbar2 = () => {
  const doctors = doctorData?.map((doc) => {
    return {
      name: doc.name,
      url: `/doctor/${doc.link}`,
    };
  });

  const navigations = [
    {
      name: "About",
      url: "about",
      subLinks: [
        {
          name: "Legacy & Milestones",
          url: "about#Legacy",
        },
        {
          name: "Ethical Practice",
          url: "about#Ethical",
        },
        {
          name: "Our Doctors",
          url: "about#Doctors",
          subLink: doctors,
        },
        {
          name: "Vision & Mission",
          url: "about#Vision",
        },
        {
          name: "Award & Recognition",
          url: "about#Award",
        },
        {
          name: "Work with us",
          url: "about#Work",
        },
        {
          name: "The Brand",
          url: "about#Brand",
        },
        {
          name: "Privacy Policy",
          url: "about#Privacy",
        },
      ],
    },
    {
      name: "Specialties",
      url: "specialties",
      subLinks: [
        {
          name: "Shoulder Department",
          url: "specialties/shoulder-department",
          subLink: [
            {
              name: "Shoulder Instability",
              url: "specialties/shoulder-department#Instability",
            },
            {
              name: "Rotator cuff tear",
              url: "specialties/shoulder-department#Rotator",
            },
            {
              name: "Frozen shoulder",
              url: "specialties/shoulder-department#Frozen",
            },
          ],
        },
        {
          name: "Hand & Microvascular Department",
          url: "specialties/hand-microvascular-department",
          subLink: [
            {
              name: "Elbow instability",
              url: "specialties/hand-microvascular-department#Elbow",
            },
            {
              name: "Inflammatory pathologies",
              url: "specialties/hand-microvascular-department#Inflammatory",
            },
          ],
        },
        {
          name: "Hip Department",
          url: "specialties/hip-department",
          subLink: [
            {
              name: "Hip trauma",
              url: "specialties/hip-department#Trauma",
            },
            {
              name: "Labral injuries",
              url: "specialties/hip-department#Injuries",
            },
            {
              name: "Hip Replacement",
              url: "specialties/hip-department#Replacement",
            },
            {
              name: "DAA Hip Replacement",
              url: "specialties/hip-department#DAA",
            },
          ],
        },
        {
          name: "Knee Department",
          url: "specialties/knee-department",
          subLink: [
            {
              name: "Knee instability/pain",
              url: "specialties/knee-department#Instability",
            },
            {
              name: "Knee Replacement (Partial/Total)",
              url: "specialties/knee-department#Replacement",
            },
          ],
        },
        {
          name: "Spine Department",
          url: "specialties/spine-department",
          subLink: [
            {
              name: "Degenerative spine/Disc disease",
              url: "specialties/spine-department#Degenerative",
            },
          ],
        },
        {
          name: "Foot And Ankle Department",
          url: "specialties/foot-ankle-department",
          subLink: [
            {
              name: "Ankle arthroscopy",
              url: "specialties/foot-ankle-department#Arthroscopy",
            },
            {
              name: "Foot and heel pain",
              url: "specialties/foot-ankle-department#Heel",
            },
            {
              name: "Foot and ankle fractures",
              url: "specialties/foot-ankle-department#Fractures",
            },
          ],
        },
        {
          name: "Arthroscopy",
          url: "specialties/arthroscopy",
          subLink: [
            {
              name: "Sports injuries",
              url: "specialties/arthroscopy#Injuries",
            },
          ],
        },
        {
          name: "Rheumatology",
          url: "specialties/rheumatology",
          subLink: [
            {
              name: "Arthritis",
              url: "specialties/rheumatology#Arthritis",
            },
            {
              name: "Osteoarthritis",
              url: "specialties/rheumatology#Osteoarthritis",
            },
            {
              name: "Tendinitis",
              url: "specialties/rheumatology#Tendinitis",
            },
          ],
        },
      ],
    },
    {
      name: "Procedures",
      url: "procedures",
      subLinks: [
        {
          name: "Robotic Joint Replacement Surgery",
          url: "procedures#Joint",
        },
        {
          name: "Trauma & Fracture Surgery",
          url: "procedures#Trauma",
        },
        {
          name: "Arthroscopic Surgery",
          url: "procedures#Arthroscopic",
        },
        {
          name: "Pediatric Orthopedic",
          url: "procedures#Pediatric",
        },
        {
          name: "Kyphoplasty",
          url: "procedures#Kyphoplasty",
        },
        {
          name: "Disc Replacement Surgery",
          url: "procedures#Disc",
        },
        {
          name: "Major spine surgeries",
          url: "procedures#Major",
        },
        {
          name: "Direct Anterior Hip Replacement",
          url: "procedures#DAA",
        },
      ],
    },
    {
      name: "Infra & Equip",
      url: "infra-equipment",
    },
    {
      name: "Patients",
      url: "patients",
      subLinks: [
        {
          name: "Testimonials",
          url: "patients#Testimonials",
        },
        {
          name: "Patient Stories",
          url: "patients#Stories",
        },
        {
          name: "International Patients",
          url: "international-patients",
        },
      ],
    },
    {
      name: "SMC Institute",
      url: "SMC-institute",
      subLinks: [
        {
          name: "24×7 Emergency Trauma Services",
          url: "SMC-institute#Emergency",
        },
        {
          name: "Peadiatric Orthopaedics",
          url: "SMC-institute#Peadiatric",
        },
        {
          name: "Physiotherapy & Rehabilitation",
          url: "SMC-institute#Physiotherapy",
        },
        {
          name: "General Orthopaedics",
          url: "SMC-institute#General",
        },
        {
          name: "Research And Academics",
          url: "SMC-institute#Research",
        },
        {
          name: "Orthotics & Prosthetics Workshop",
          url: "SMC-institute#Workshop",
        },
        {
          name: "Dual Energy X-Ray Absorptiometry",
          url: "SMC-institute#X-Ray",
        },
        {
          name: "Postgraduate Education",
          url: "SMC-institute#Postgraduate",
        },
        {
          name: "Robotics & AI",
          url: "SMC-institute#Robotics",
        },
        {
          name: "Specialised OPDs",
          url: "SMC-institute#OPD",
        },
      ],
    },
    {
      name: "Contact",
      url: "contact",
    },

    // {
    //   name: "Home",
    //   url: "/",
    // },
    // {
    //   name: "Services",
    //   url: "/services",
    // },
    // {
    //   name: "Blog",
    //   url: "/blog",
    // },
    // {
    //   name: "Gallary",
    //   url: "/gallary",
    // },
    // {
    //   name: "About",
    //   url: "/about",
    // },
    // {
    //   name: "Contact",
    //   url: "/contact",
    // },
  ];

  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="https://sangeetamedicalcentre.com/wp-content/uploads/2023/08/Asset-4.png"
                alt="Mrityunjay Orthopaedic Hospital Logo"
                style={{ width: "200px" }}
              />
            </Link>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {navigations.map((navigation, index) => (
                    <li className="nav-item submenu" key={index}>
                      <NavLink
                        to={navigation.url}
                        className="nav-link"
                        title={`About ${navigation.name}`}
                      >
                        {navigation.name}
                      </NavLink>

                      {navigation.subLinks && (
                        <ul className="sub-menu">
                          {navigation.subLinks.map((sublink, subIndex) => (
                            <li className="nav-item" key={subIndex}>
                              <NavLink className="nav-link" to={sublink.url}>
                                {sublink.name}
                              </NavLink>

                              {Array.isArray(sublink.subLink) && (
                                <ul className="sub-menu">
                                  {sublink.subLink.map(
                                    (sublink2, innerIndex) => (
                                      <li className="nav-item" key={innerIndex}>
                                        <NavLink
                                          className="nav-link"
                                          to={sublink2.url}
                                        >
                                          {sublink2.name}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header-btn d-inline-flex">
                <Link to="/contact#Appointment" className="btn-default">
                  <span>Appointment</span>
                </Link>
              </div>
            </div>

            <div class="navbar-toggle">
              <Link
                aria-haspopup="true"
                type="button"
                tabindex="0"
                role="button"
                class={`slicknav_btn ${
                  !showMenu ? "slicknav_open" : "slicknav_collapsed"
                }`}
                style={{ outline: "none" }}
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <span class="slicknav_menutxt"></span>
                <span class="slicknav_icon slicknav_no-text">
                  <span class="slicknav_icon-bar"></span>
                  <span class="slicknav_icon-bar"></span>
                  <span class="slicknav_icon-bar"></span>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div class="responsive-menu">
          <div class="slicknav_menu">
            <ul
              class="slicknav_nav slicknav_hidden"
              aria-hidden={showMenu ? "true" : "false"}
              role="menu"
              style={showMenu ? { display: "none" } : {}}
            >
              <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                <Link
                  href="/"
                  role="menuitem"
                  aria-haspopup="true"
                  tabindex="-1"
                  class="slicknav_item slicknav_row"
                >
                  <Link
                    class="nav-link"
                    to="/about"
                    title="About Mrityunjay Hospital Meerut"
                    tabindex="-1"
                  >
                    About
                  </Link>
                  <span class="slicknav_arrow">►</span>
                </Link>
                <ul
                  class="sub-menu slicknav_hidden"
                  role="menu"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Legacy"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Legacy &amp; Milestones
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Ethical"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Ethical Practice
                    </Link>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="about.html#Doctors"
                        tabindex="-1"
                      >
                        Our Doctors
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="dr-shachindra-shekhar.html"
                          title="Senior Orthopedic Doctor Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Dr. Shachindra Shekhar
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="dr-shubhankar-shekhar.html"
                          title="Best Orthopedic Doctor in Meerut | Dr. Shubhankar Shekhar – Joint &amp; Fracture Specialist"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Dr. Shubhankar Shekhar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Vision"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Vision &amp; Mission
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Award"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Award &amp; Recognition
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Work"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Work with us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Brand"
                      role="menuitem"
                      tabindex="-1"
                    >
                      The Brand
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="about.html#Privacy"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                <Link
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  tabindex="-1"
                  class="slicknav_item slicknav_row"
                >
                  <Link
                    class="nav-link"
                    href="specialties.html"
                    title="Best orthopedic treatments in Meerut"
                    tabindex="-1"
                  >
                    Specialties
                  </Link>
                  <span class="slicknav_arrow">►</span>
                </Link>
                <ul
                  class="sub-menu slicknav_hidden"
                  role="menu"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="shoulder-department.html"
                        title="Shoulder treatment and surgery Meerut"
                        tabindex="-1"
                      >
                        Shoulder Department
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="shoulder-department.html#Instability"
                          title="Shoulder Instability treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Shoulder Instability
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="shoulder-department.html#Rotator"
                          title="Rotator cuff tear treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Rotator cuff tear
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="shoulder-department.html#Frozen"
                          title="Frozen shoulder treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Frozen shoulder
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="hand-microvascular-department.html"
                        title="Hand &amp; Microvascular treatment Meerut"
                        tabindex="-1"
                      >
                        Hand &amp; Microvascular Department
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="hand-microvascular-department.html#Elbow"
                          title="Elbow instability treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Elbow instability
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="hand-microvascular-department.html#Inflammatory"
                          title="Inflammatory pathologies treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Inflammatory pathologies
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="hip-department.html"
                        title="Hip Treatment &amp; Surgery Meerut"
                        tabindex="-1"
                      >
                        Hip Department
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="hip-department.html#Trauma"
                          title="Hip surgery Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Hip trauma
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="hip-department.html#Injuries"
                          title="Hip Labral injuries treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Labral injuries
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="hip-department.html#Replacement"
                          title="Hip Replacement surgery Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Hip Replacement
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="hip-department.html#DAA"
                          title="Direct Anterior Approach (DAA) Hip Replacement Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          DAA Hip Replacement
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="knee-department.html"
                        title="Advanced Knee Treatment/Surgery Meerut"
                        tabindex="-1"
                      >
                        Knee Department
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="knee-department.html#Instability"
                          title="Knee instability/pain treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Knee instability/pain
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="knee-department.html#Replacement"
                          title="Partial and Total Knee Replacement Surgery Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Knee Replacement (Partial/Total)
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="spine-department.html"
                        title="Spine Treatment Meerut"
                        tabindex="-1"
                      >
                        Spine Department
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="spine-department.html#Degenerative"
                          title="Degenerative spine/Disc disease treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Degenerative spine/Disc disease
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="foot-ankle-department.html"
                        title="Foot &amp; Ankle Treatment Meerut"
                        tabindex="-1"
                      >
                        Foot And Ankle Department
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="foot-ankle-department.html#Arthroscopy"
                          title="Ankle arthroscopy Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Ankle arthroscopy
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="foot-ankle-department.html#Heel"
                          title="Foot and heel pain treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Foot and heel pain
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="foot-ankle-department.html#Fractures"
                          title="Foot and ankle fractures surgery Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Foot and ankle fractures
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="arthroscopy.html"
                        title="Arthroscopy Meerut"
                        tabindex="-1"
                      >
                        Arthroscopy
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="arthroscopy.html#Injuries"
                          title="Sports injuries treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Sports injuries
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabindex="-1"
                      class="slicknav_item slicknav_row"
                    >
                      <Link
                        class="nav-link"
                        href="rheumatology.html"
                        title="Rheumatology Treatment Meerut"
                        tabindex="-1"
                      >
                        Rheumatology
                      </Link>
                      <span class="slicknav_arrow">►</span>
                    </Link>
                    <ul
                      class="sub-menu slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="rheumatology.html#Arthritis"
                          title="Arthritis Treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Arthritis
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="rheumatology.html#Osteoarthritis"
                          title="Osteoarthritis Treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Osteoarthritis
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link"
                          href="rheumatology.html#Tendinitis"
                          title="Tendinitis Treatment Meerut"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Tendinitis
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                <Link
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  tabindex="-1"
                  class="slicknav_item slicknav_row"
                >
                  <Link
                    class="nav-link"
                    href="procedures.html"
                    title="Orthopaedic Procedures Meerut"
                    tabindex="-1"
                  >
                    Procedures
                  </Link>
                  <span class="slicknav_arrow">►</span>
                </Link>
                <ul
                  role="menu"
                  class="slicknav_hidden"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Joint"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Robotic Joint Replacement Surgery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Trauma"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Trauma &amp; Fracture Surgery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Arthroscopic"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Arthroscopic Surgery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Pediatric"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Pediatric Orthopedic
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Kyphoplasty"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Kyphoplasty
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Disc"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Disc Replacement Surgery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#Major"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Major spine surgeries
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="procedures.html#DAA"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Direct Anterior Hip Replacement
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  href="infra-equipment.html"
                  title="Orthopedic infrastructure Meerut"
                  role="menuitem"
                  tabindex="-1"
                >
                  Infra &amp; Equip
                </Link>
              </li>
              <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                <Link
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  tabindex="-1"
                  class="slicknav_item slicknav_row"
                >
                  <Link class="nav-link" href="#" tabindex="-1">
                    Patients
                  </Link>
                  <span class="slicknav_arrow">►</span>
                </Link>
                <ul
                  role="menu"
                  class="slicknav_hidden"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="patients.html#Testimonials"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="patients.html#Stories"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Patient Stories
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="international-patients.html"
                      role="menuitem"
                      tabindex="-1"
                    >
                      International Patients
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item submenu slicknav_collapsed slicknav_parent">
                <Link
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  tabindex="-1"
                  class="slicknav_item slicknav_row"
                >
                  <Link
                    class="nav-link"
                    href="MOH-institute.html"
                    title="Orthopaedic Training &amp; Research Meerut"
                    tabindex="-1"
                  >
                    MOH Institute
                  </Link>
                  <span class="slicknav_arrow">►</span>
                </Link>
                <ul
                  role="menu"
                  class="slicknav_hidden"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Emergency"
                      role="menuitem"
                      tabindex="-1"
                    >
                      24×7 Emergency Trauma Services
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Peadiatric"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Peadiatric Orthopaedics
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Physiotherapy"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Physiotherapy &amp; Rehabilitation
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#General"
                      role="menuitem"
                      tabindex="-1"
                    >
                      General Orthopaedics
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Research"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Research And Academics
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Workshop"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Orthotics &amp; Prosthetics Workshop
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#X-Ray"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Dual Energy X-Ray Absorptiometry
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Postgraduate"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Postgraduate Education
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#Robotics"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Robotics &amp; AI
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      href="MOH-institute.html#OPD"
                      role="menuitem"
                      tabindex="-1"
                    >
                      Specialised OPDs
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  href="contact.html"
                  title="Contact best orthopaedic hospital Meerut"
                  role="menuitem"
                  tabindex="-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
