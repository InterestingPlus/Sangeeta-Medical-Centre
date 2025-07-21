import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigations = [
    {
      name: "About",
      url: "about.html",
      subLinks: [
        {
          name: "Legacy & Milestones",
          url: "about.html#Legacy",
        },
        {
          name: "Ethical Practice",
          url: "about.html#Ethical",
        },
        {
          name: "Our Doctors",
          url: "about.html#Doctors",
          subLink: [
            {
              name: "Dr. Shachindra Shekhar",
              url: "dr-shachindra-shekhar.html",
            },
            {
              name: "Dr. Shubhankar Shekhar",
              url: "dr-shubhankar-shekhar.html",
            },
          ],
        },
        {
          name: "Vision & Mission",
          url: "about.html#Vision",
        },
        {
          name: "Award & Recognition",
          url: "about.html#Award",
        },
        {
          name: "Work with us",
          url: "about.html#Work",
        },
        {
          name: "The Brand",
          url: "about.html#Brand",
        },
        {
          name: "Privacy Policy",
          url: "about.html#Privacy",
        },
      ],
    },
    {
      name: "Specialties",
      url: "specialties.html",
      subLinks: [
        {
          name: "Shoulder Department",
          url: "shoulder-department.html",
          subLink: [
            {
              name: "Shoulder Instability",
              url: "shoulder-department.html#Instability",
            },
            {
              name: "Rotator cuff tear",
              url: "shoulder-department.html#Rotator",
            },
            {
              name: "Frozen shoulder",
              url: "shoulder-department.html#Frozen",
            },
          ],
        },
        {
          name: "Hand & Microvascular Department",
          url: "hand-microvascular-department.html",
          subLink: [
            {
              name: "Elbow instability",
              url: "hand-microvascular-department.html#Elbow",
            },
            {
              name: "Inflammatory pathologies",
              url: "hand-microvascular-department.html#Inflammatory",
            },
          ],
        },
        {
          name: "Hip Department",
          url: "hip-department.html",
          subLink: [
            {
              name: "Hip trauma",
              url: "hip-department.html#Trauma",
            },
            {
              name: "Labral injuries",
              url: "hip-department.html#Injuries",
            },
            {
              name: "Hip Replacement",
              url: "hip-department.html#Replacement",
            },
            {
              name: "DAA Hip Replacement",
              url: "hip-department.html#DAA",
            },
          ],
        },
        {
          name: "Knee Department",
          url: "knee-department.html",
          subLink: [
            {
              name: "Knee instability/pain",
              url: "knee-department.html#Instability",
            },
            {
              name: "Knee Replacement (Partial/Total)",
              url: "knee-department.html#Replacement",
            },
          ],
        },
        {
          name: "Spine Department",
          url: "spine-department.html",
          subLink: [
            {
              name: "Degenerative spine/Disc disease",
              url: "spine-department.html#Degenerative",
            },
          ],
        },
        {
          name: "Foot And Ankle Department",
          url: "foot-ankle-department.html",
          subLink: [
            {
              name: "Ankle arthroscopy",
              url: "foot-ankle-department.html#Arthroscopy",
            },
            {
              name: "Foot and heel pain",
              url: "foot-ankle-department.html#Heel",
            },
            {
              name: "Foot and ankle fractures",
              url: "foot-ankle-department.html#Fractures",
            },
          ],
        },
        {
          name: "Arthroscopy",
          url: "arthroscopy.html",
          subLink: [
            {
              name: "Sports injuries",
              url: "arthroscopy.html#Injuries",
            },
          ],
        },
        {
          name: "Rheumatology",
          url: "rheumatology.html",
          subLink: [
            {
              name: "Arthritis",
              url: "rheumatology.html#Arthritis",
            },
            {
              name: "Osteoarthritis",
              url: "rheumatology.html#Osteoarthritis",
            },
            {
              name: "Tendinitis",
              url: "rheumatology.html#Tendinitis",
            },
          ],
        },
      ],
    },
    {
      name: "Procedures",
      url: "procedures.html",
      subLinks: [
        {
          name: "Robotic Joint Replacement Surgery",
          url: "procedures.html#Joint",
        },
        {
          name: "Trauma & Fracture Surgery",
          url: "procedures.html#Trauma",
        },
        {
          name: "Arthroscopic Surgery",
          url: "procedures.html#Arthroscopic",
        },
        {
          name: "Pediatric Orthopedic",
          url: "procedures.html#Pediatric",
        },
        {
          name: "Kyphoplasty",
          url: "procedures.html#Kyphoplasty",
        },
        {
          name: "Disc Replacement Surgery",
          url: "procedures.html#Disc",
        },
        {
          name: "Major spine surgeries",
          url: "procedures.html#Major",
        },
        {
          name: "Direct Anterior Hip Replacement",
          url: "procedures.html#DAA",
        },
      ],
    },
    {
      name: "Infra & Equip",
      url: "infra-equipment.html",
    },
    {
      name: "Patients",
      url: "#",
      subLinks: [
        {
          name: "Testimonials",
          url: "patients.html#Testimonials",
        },
        {
          name: "Patient Stories",
          url: "patients.html#Stories",
        },
        {
          name: "International Patients",
          url: "international-patients.html",
        },
      ],
    },
    {
      name: "MOH Institute",
      url: "MOH-institute.html",
      subLinks: [
        {
          name: "24×7 Emergency Trauma Services",
          url: "MOH-institute.html#Emergency",
        },
        {
          name: "Peadiatric Orthopaedics",
          url: "MOH-institute.html#Peadiatric",
        },
        {
          name: "Physiotherapy & Rehabilitation",
          url: "MOH-institute.html#Physiotherapy",
        },
        {
          name: "General Orthopaedics",
          url: "MOH-institute.html#General",
        },
        {
          name: "Research And Academics",
          url: "MOH-institute.html#Research",
        },
        {
          name: "Orthotics & Prosthetics Workshop",
          url: "MOH-institute.html#Workshop",
        },
        {
          name: "Dual Energy X-Ray Absorptiometry",
          url: "MOH-institute.html#X-Ray",
        },
        {
          name: "Postgraduate Education",
          url: "MOH-institute.html#Postgraduate",
        },
        {
          name: "Robotics & AI",
          url: "MOH-institute.html#Robotics",
        },
        {
          name: "Specialised OPDs",
          url: "MOH-institute.html#OPD",
        },
      ],
    },
    {
      name: "Contact",
      url: "contact.html",
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
                <a href="contact.html#Appointment" className="btn-default">
                  <span>Appointment</span>
                </a>
              </div>
            </div>

            <div className="navbar-toggle"></div>
          </div>
        </nav>

        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Navbar;
