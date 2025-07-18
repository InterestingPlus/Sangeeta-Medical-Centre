import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigations = [
    // {
    //   name: "About",
    //   url: "about.html",
    //   subLinks: [
    //     {
    //       name: "Legacy & Milestones",
    //       url: "about.html#Legacy",
    //       subLink: [
    //         { name: "Our Vision", url: "#vision" },
    //         { name: "Our Mission", url: "#mission" },
    //       ],
    //     },
    //     {
    //       name: "Team",
    //       url: "about.html#team",
    //       subLink: [{ name: "Doctors", url: "#doctors" }],
    //     },
    //   ],
    // },
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Gallary",
      url: "/gallary",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
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
