import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
          subLink: [
            {
              name: "Dr. Shachindra Shekhar",
              url: "dr-shachindra-shekhar",
            },
            {
              name: "Dr. Shubhankar Shekhar",
              url: "dr-shubhankar-shekhar",
            },
          ],
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
          url: "shoulder-department",
          subLink: [
            {
              name: "Shoulder Instability",
              url: "shoulder-department#Instability",
            },
            {
              name: "Rotator cuff tear",
              url: "shoulder-department#Rotator",
            },
            {
              name: "Frozen shoulder",
              url: "shoulder-department#Frozen",
            },
          ],
        },
        {
          name: "Hand & Microvascular Department",
          url: "hand-microvascular-department",
          subLink: [
            {
              name: "Elbow instability",
              url: "hand-microvascular-department#Elbow",
            },
            {
              name: "Inflammatory pathologies",
              url: "hand-microvascular-department#Inflammatory",
            },
          ],
        },
        {
          name: "Hip Department",
          url: "hip-department",
          subLink: [
            {
              name: "Hip trauma",
              url: "hip-department#Trauma",
            },
            {
              name: "Labral injuries",
              url: "hip-department#Injuries",
            },
            {
              name: "Hip Replacement",
              url: "hip-department#Replacement",
            },
            {
              name: "DAA Hip Replacement",
              url: "hip-department#DAA",
            },
          ],
        },
        {
          name: "Knee Department",
          url: "knee-department",
          subLink: [
            {
              name: "Knee instability/pain",
              url: "knee-department#Instability",
            },
            {
              name: "Knee Replacement (Partial/Total)",
              url: "knee-department#Replacement",
            },
          ],
        },
        {
          name: "Spine Department",
          url: "spine-department",
          subLink: [
            {
              name: "Degenerative spine/Disc disease",
              url: "spine-department#Degenerative",
            },
          ],
        },
        {
          name: "Foot And Ankle Department",
          url: "foot-ankle-department",
          subLink: [
            {
              name: "Ankle arthroscopy",
              url: "foot-ankle-department#Arthroscopy",
            },
            {
              name: "Foot and heel pain",
              url: "foot-ankle-department#Heel",
            },
            {
              name: "Foot and ankle fractures",
              url: "foot-ankle-department#Fractures",
            },
          ],
        },
        {
          name: "Arthroscopy",
          url: "arthroscopy",
          subLink: [
            {
              name: "Sports injuries",
              url: "arthroscopy#Injuries",
            },
          ],
        },
        {
          name: "Rheumatology",
          url: "rheumatology",
          subLink: [
            {
              name: "Arthritis",
              url: "rheumatology#Arthritis",
            },
            {
              name: "Osteoarthritis",
              url: "rheumatology#Osteoarthritis",
            },
            {
              name: "Tendinitis",
              url: "rheumatology#Tendinitis",
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
                <Link to="contact#Appointment" className="btn-default">
                  <span>Appointment</span>
                </Link>
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
