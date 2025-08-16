import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import doctorData from "../pages/Doctor1.json";

// Recursive component to handle nested sub-menus
const MobileNavLink = ({ navigation, onLinkClick }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const hasSubLinks = Array.isArray(navigation.subLinks);
  const hasSubLink = Array.isArray(navigation.subLink);

  const toggleSubMenu = () => {
    if (hasSubLinks || hasSubLink) {
      setShowSubMenu(!showSubMenu);
    }
  };

  return (
    <li className={`nav-item submenu ${showSubMenu ? 'slicknav_open slicknav_parent' : 'slicknav_collapsed slicknav_parent'}`}>
      <div className="slicknav_item slicknav_row" onClick={toggleSubMenu}>
        <NavLink
          to={navigation.url || "#"}
          className="nav-link"
          onClick={onLinkClick}
        >
          {navigation.name}
        </NavLink>
        {(hasSubLinks || hasSubLink) && (
          <span className="slicknav_arrow">{showSubMenu ? "▼" : "►"}</span>
        )}
      </div>
      {(hasSubLinks || hasSubLink) && showSubMenu && (
        <ul className="sub-menu" style={{marginLeft: "20px"}} role="menu">
          {(navigation.subLinks || navigation.subLink).map((sublink, index) => (
            <MobileNavLink key={index} navigation={sublink} onLinkClick={onLinkClick} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const doctors = doctorData.doctors?.map((doc) => ({
    name: doc.name,
    url: `/doctor/${slugify(doc.name)}`,
  }));

  const navigations = [
    {
      name: "About",
      url: "about",
      subLinks: [
        {
          name: "Our Journey & Legacy",
          url: "/about#Legacy",
        },
        {
          name: "Meet Our Doctors",
          url: "/about#Doctors",
          subLink: doctors,
        },
        {
          name: "Vision & Mission",
          url: "/about#Vision",
        },
        {
          name: "Award & Recognition",
          url: "/about#Award",
        },
        {
          name: "Work with us",
          url: "/about#Work",
        },
        {
          name: "The Brand",
          url: "/about#Brand",
        },
        {
          name: "Privacy Policy",
          url: "/about#Privacy",
        },
      ],
    },
    {
      name: "Specialties",
      url: "specialties",
      subLinks: [
        {
          name: "Orthopedic Department",
          // url: "/specialties/orthopedic",
          subLink: [
            {
              name: "Fracture Management",
              url: "/specialties/fracture-management",
            },
            {
              name: "Knee Replacement Surgery (TKR)",
              url: "/specialties/knee-replacement-surgery",
            },
            {
              name: "Hip Replacement Surgery (THR)",
              url: "/specialties/hip-replacement-surgery",
            },
            {
              name: "Arthroscopy & Sports Injury Treatment",
              url: "/specialties/arthroscopy-sports-injury-treatment",
            },
            {
              name: "Spine & Back Pain Treatment",
              url: "/specialties/spine-back-pain-treatment",
            },
            {
              name: "Joint Pain & Arthritis Management",
              url: "/specialties/joint-pain-arthritis-management",
            },
            {
              name: "Pediatric Orthopedics",
              url: "/specialties/pediatric-orthopedics",
            },
            {
              name: "Bone Deformity Correction",
              url: "/specialties/bone-deformity-correction",
            },
            {
              name: "Orthopedic Emergencies & Trauma Care",
              url: "/specialties/orthopedic-emergencies-trauma-care",
            },
          ],
        },
        {
          name: "Gynecologist Department",
          // url: "/specialties/gynecologist",
          subLink: [
            {
              name: "Normal & High-Risk Pregnancy Care",
              url: "/specialties/normal-high-risk-pregnancy-care",
            },
            {
              name: "Laparoscopic (Keyhole) Surgeries",
              url: "/specialties/laparoscopic-surgeries",
            },
            {
              name: "Infertility Treatments (IVF, IUI, etc.)",
              url: "/specialties/infertility-treatments",
            },
            {
              name: "Menstrual Disorders Treatment",
              url: "/specialties/menstrual-disorders-treatment",
            },
            {
              name: "PCOS/PCOD Management",
              url: "/specialties/pcos-pcod-management",
            },
            {
              name: "Adolescent & Menopausal Health",
              url: "/specialties/adolescent-menopausal-health",
            },
            {
              name: "Painless Delivery Options",
              url: "/specialties/painless-delivery-options",
            },
            {
              name: "Cancer Screening & Prevention",
              url: "/specialties/cancer-screening-prevention",
            },
            {
              name: "Contraception & Family Planning",
              url: "/specialties/contraception-family-planning",
            },
            {
              name: "Gynecological Ultrasound & Diagnostics",
              url: "/specialties/gynecological-ultrasound-diagnostics",
            },
          ],
        },
      ],
    },
    {
      name: "Procedures",
      url: "/procedures",
      subLinks: [
        {
          name: "Orthopedic Procedures",
          url: "/procedures/orthopedics",
          subLink: [
            {
              name: "Joint Replacement Surgery ",
              url: "/procedures/orthopedics#Joint",
            },
            {
              name: " Trauma & Fracture Surgery",
              url: "/procedures/orthopedics#Trauma",
            },
            {
              name: "Arthroscopic Surgery",
              url: "/procedures/orthopedics#Arthroscopic",
            },
            {
              name: "Pediatric Orthopedic",
              url: "/procedures/orthopedics#Pediatric",
            },
            {
              name: "Direct Anterior Hip Replacement",
              url: "/procedures/orthopedics#Kyphoplasty",
            },
          ],
        },
        {
          name: "Gynecological & Obstetric Procedures",
          url: "/procedures/gynecology",
          subLink: [
            {
              name: "Normal & High-Risk Delivery",
              url: "/procedures/gynecology#delivery",
            },
            {
              name: "Laparoscopic Gynecological Surgeries",
              url: "/procedures/gynecology#laparoscopic",
            },
            {
              name: "Infertility Procedures (IVF, IUI, etc.)",
              url: "/procedures/gynecology#infertility",
            },
            {
              name: "Menstrual Disorder Management",
              url: "/procedures/gynecology#menstrual",
            },
            {
              name: "PCOD/PCOS Hormonal Treatment",
              url: "/procedures/gynecology#PCOD",
            },
            {
              name: "Adolescent & Menopausal Care",
              url: "/procedures/gynecology#adolescent",
            },
            {
              name: "Painless Delivery Options",
              url: "/procedures/gynecology#painless-delivery",
            },
            {
              name: "Family Planning & Contraception",
              url: "/procedures/gynecology#family-planning",
            },
            {
              name: "Gynecological Ultrasound & Diagnostics",
              url: "/procedures/gynecology#diagnostics",
            },
          ],
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
          url: "patients",
          subLink: [
            {
              name: "Orthopedic",
              url: "patients#orthopedic",
            },
            {
              name: "Gynecological",
              url: "patients#gynecological",
            },
          ],
        },
      ],
    },
    {
      name: "Gallery",
      url: "gallary",
    },
    {
      name: "Contact",
      url: "contact",
    },
  ];

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="images/LOGO.png"
                alt="Sangeeta Ortho And Gyane Centre Logo"
                style={{ width: "200px" }}
              />
            </Link>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu" style={{ listStyle: "none" }}>
                  {navigations.map((navigation, index) => (
                    <li className={`nav-item ${navigation.subLinks && "submenu"}`} key={index}>
                      <NavLink
                        to={navigation.url}
                        className="nav-link d-flex align-items-center gap-1"
                        title={`About ${navigation.name}`}
                      >
                        {navigation.name}
                      </NavLink>
                      {navigation.subLinks && (
                        <ul className="sub-menu" style={{ listStyle: "none" }}>
                          {navigation.subLinks.map((sublink, subIndex) => (
                            <li className="nav-item" key={subIndex}>
                              <NavLink
                                className="nav-link"
                                to={sublink.url}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                {sublink.name}
                                {sublink.subLink && (
                                  <span style={{ fontSize: "0.75rem", marginLeft: "4px" }}>
                                    &gt;
                                  </span>
                                )}
                              </NavLink>
                              {Array.isArray(sublink.subLink) && (
                                <ul className="sub-menu" style={{ listStyle: "none" }}>
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
                <Link to="tel:011-69269888" className="btn-default">
                  <span>Appointment</span>
                </Link>
              </div>
            </div>

            <div className="navbar-toggle">
              <button
                aria-haspopup="true"
                type="button"
                tabIndex="0"
                role="button"
                className={`slicknav_btn ${showMenu ? 'slicknav_open' : 'slicknav_collapsed'}`}
                style={{ outline: "none" }}
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <span className="slicknav_menutxt"></span>
                <span className="slicknav_icon slicknav_no-text">
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="responsive-menu">
          <div className="slicknav_menu">
            <ul className="slicknav_nav" role="menu">
              {navigations.map((navigation, index) => (
                <MobileNavLink
                  key={index}
                  navigation={navigation}
                  onLinkClick={handleLinkClick}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;