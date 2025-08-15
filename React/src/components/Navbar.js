import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import doctorData from "../pages/Doctor1.json";
import { useState } from "react";

const Navbar = () => {
  // const doctors = doctorData.doctors?.map((doc) => {
  //   return {
  //     name: doc.name,
  //     url: `/doctor/${doc.link}`,
  //   };
  // });

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const doctors = doctorData.doctors?.map((doc) => ({
  name: doc.name,
  url: `/doctor/${slugify(doc.name)}`
}));


  const navigations = [
    {
      name: "About",
      url: "about",
      subLinks: [
        {
          name: "Our Journey & Legacy",
          url: "about#Legacy",
        },
        // {
        //   name: "Ethical Practice",
        //   url: "about#Ethical",
        // },
        {
          name: "Meet Our Doctors",
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
          name: "Orthopedic Department",
          url: "specialties/",
          subLink: [
            {
              name: "Fracture Management",
              url: "specialties/fracture-management",
            },
            {
              name: "Knee Replacement Surgery (TKR)",
              url: "specialties/knee-replacement-surgery",
            },
            {
              name: "Hip Replacement Surgery (THR)",
              url: "specialties/hip-replacement-surgery",
            },
            {
              name: "Arthroscopy & Sports Injury Treatment",
              url: "specialties/arthroscopy-&-sports-injury-treatment",
            },
            {
              name: "Spine & Back Pain Treatment",
              url: "specialties/spine-&-back-pain-treatment",
            },
            {
              name: "Joint Pain & Arthritis Management",
              url: "specialties/joint-pain-&-arthritis-management",
            },
            {
              name: "Pediatric Orthopedics",
              url: "specialties/pediatric-orthopedics",
            },
            {
              name: "Bone Deformity Correction",
              url: "specialties/bone-deformity-correction",
            },
            {
              name: "Orthopedic Emergencies & Trauma Care",
              url: "specialties/orthopedic-emergencies-&-trauma-care",
            },
          ],
        },
        {
          name: "Gynecologist Department",
          url: "specialties/",
          subLink: [
            {
              name: "Normal & High-Risk Pregnancy Care",
              url: "specialties/normal-&-high-risk-pregnancy-care",
            },
            {
              name: "Laparoscopic (Keyhole) Surgeries",
              url: "specialties/laparoscopic-surgeries",
            },
            {
              name: "Infertility Treatments (IVF, IUI, etc.)",
              url: "specialties/infertility-treatments",
            },
            {
              name: "Menstrual Disorders Treatment",
              url: "specialties/menstrual-disorders-treatment",
            },
            {
              name: "PCOS/PCOD Management",
              url: "specialties/pcos-pcod-management",
            },
            {
              name: "Adolescent & Menopausal Health",
              url: "specialties/adolescent-&-menopausal-health",
            },
            {
              name: "Painless Delivery Options",
              url: "specialties/painless-delivery-options",
            },
            {
              name: "Cancer Screening & Prevention",
              url: "specialties/cancer-screening-&-prevention",
            },
            {
              name: "Contraception & Family Planning",
              url: "specialties/contraception-&-family-planning",
            },
            {
              name: "Gynecological Ultrasound & Diagnostics",
              url: "specialties/gynecological-ultrasound-&-diagnostics",
            },
          ],
        },
        // {
        //   name: "Hand & Microvascular Department",
        //   url: "specialties/hand-microvascular-department",
        //   subLink: [
        //     {
        //       name: "Elbow instability",
        //       url: "specialties/hand-microvascular-department#Elbow",
        //     },
        //     {
        //       name: "Inflammatory pathologies",
        //       url: "specialties/hand-microvascular-department#Inflammatory",
        //     },
        //   ],
        // },
        // {
        //   name: "Hip Department",
        //   url: "specialties/hip-department",
        //   subLink: [
        //     {
        //       name: "Hip trauma",
        //       url: "specialties/hip-department#Trauma",
        //     },
        //     {
        //       name: "Labral injuries",
        //       url: "specialties/hip-department#Injuries",
        //     },
        //     {
        //       name: "Hip Replacement",
        //       url: "specialties/hip-department#Replacement",
        //     },
        //     {
        //       name: "DAA Hip Replacement",
        //       url: "specialties/hip-department#DAA",
        //     },
        //   ],
        // },
        // {
        //   name: "Knee Department",
        //   url: "specialties/knee-department",
        //   subLink: [
        //     {
        //       name: "Knee instability/pain",
        //       url: "specialties/knee-department#Instability",
        //     },
        //     {
        //       name: "Knee Replacement (Partial/Total)",
        //       url: "specialties/knee-department#Replacement",
        //     },
        //   ],
        // },
        // {
        //   name: "Spine Department",
        //   url: "specialties/spine-department",
        //   subLink: [
        //     {
        //       name: "Degenerative spine/Disc disease",
        //       url: "specialties/spine-department#Degenerative",
        //     },
        //   ],
        // },
        // {
        //   name: "Foot And Ankle Department",
        //   url: "specialties/foot-ankle-department",
        //   subLink: [
        //     {
        //       name: "Ankle arthroscopy",
        //       url: "specialties/foot-ankle-department#Arthroscopy",
        //     },
        //     {
        //       name: "Foot and heel pain",
        //       url: "specialties/foot-ankle-department#Heel",
        //     },
        //     {
        //       name: "Foot and ankle fractures",
        //       url: "specialties/foot-ankle-department#Fractures",
        //     },
        //   ],
        // },
        // {
        //   name: "Arthroscopy",
        //   url: "specialties/arthroscopy",
        //   subLink: [
        //     {
        //       name: "Sports injuries",
        //       url: "specialties/arthroscopy#Injuries",
        //     },
        //   ],
        // },
        // {
        //   name: "Rheumatology",
        //   url: "specialties/rheumatology",
        //   subLink: [
        //     {
        //       name: "Arthritis",
        //       url: "specialties/rheumatology#Arthritis",
        //     },
        //     {
        //       name: "Osteoarthritis",
        //       url: "specialties/rheumatology#Osteoarthritis",
        //     },
        //     {
        //       name: "Tendinitis",
        //       url: "specialties/rheumatology#Tendinitis",
        //     },
        //   ],
        // },
      ],
    },
    {
      name: "Procedures",
      url: "procedures",
      subLinks: [
        {
          name: "Orthopedic Procedures",
          url: "procedures",
          subLink: [
            {
              name: "Robotic Joint Replacement Surgery",
              url: "procedures#",
            },
            {
              name: "Trauma & Fracture Surgery",
              url: "procedures#",
            },
            {
              name: "Arthroscopic Surgery",
              url: "procedures#",
            },
            {
              name: "Pediatric Orthopedic",
              url: "procedures#",
            },
            {
              name: "Kyphoplasty",
              url: "procedures#",
            },
            {
              name: "Disc Replacement Surgery",
              url: "procedures#",
            },
            {
              name: "Major Spine Surgeries",
              url: "procedures#",
            },
            {
              name: "Direct Anterior Hip Replacement",
              url: "procedures#",
            },
          ],
        },
        {
          name: "Gynecological & Obstetric Procedures",
          url: "procedures",

          subLink: [
            {
              name: "Normal & High-Risk Delivery",
              url: "procedures#",
            },
            {
              name: "Laparoscopic Gynecological Surgeries",
              url: "procedures#",
            },
            {
              name: "Infertility Procedures (IVF, IUI, etc.)",
              url: "procedures#",
            },
            {
              name: "Menstrual Disorder Management",
              url: "procedures#",
            },
            {
              name: "PCOD/PCOS Hormonal Treatment",
              url: "procedures#",
            },
            {
              name: "Adolescent & Menopausal Care",
              url: "procedures#",
            },
            {
              name: "Painless Delivery Options",
              url: "procedures#",
            },
            {
              name: "Cancer Screening",
              url: "procedures#",
            },
            {
              name: "Family Planning & Contraception",
              url: "procedures#",
            },
            {
              name: "Gynecological Ultrasound & Diagnostics",
              url: "procedures#",
            },
          ],
        },
        // {
        //   name: "Robotic Joint Replacement Surgery",
        //   url: "procedures#Joint",
        // },
        // {
        //   name: "Trauma & Fracture Surgery",
        //   url: "procedures#Trauma",
        // },
        // {
        //   name: "Arthroscopic Surgery",
        //   url: "procedures#Arthroscopic",
        // },
        // {
        //   name: "Pediatric Orthopedic",
        //   url: "procedures#Pediatric",
        // },
        // {
        //   name: "Kyphoplasty",
        //   url: "procedures#Kyphoplasty",
        // },
        // {
        //   name: "Disc Replacement Surgery",
        //   url: "procedures#Disc",
        // },
        // {
        //   name: "Major spine surgeries",
        //   url: "procedures#Major",
        // },
        // {
        //   name: "Direct Anterior Hip Replacement",
        //   url: "procedures#DAA",
        // },
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
      name: "Gallary",
      url: "gallary",
      // subLinks: [
      //   {
      //     name: "24×7 Emergency Trauma Services",
      //     url: "SMC-institute#Emergency",
      //   },
      //   {
      //     name: "Peadiatric Orthopaedics",
      //     url: "SMC-institute#Peadiatric",
      //   },
      //   {
      //     name: "Physiotherapy & Rehabilitation",
      //     url: "SMC-institute#Physiotherapy",
      //   },
      //   {
      //     name: "General Orthopaedics",
      //     url: "SMC-institute#General",
      //   },
      //   {
      //     name: "Research And Academics",
      //     url: "SMC-institute#Research",
      //   },
      //   {
      //     name: "Orthotics & Prosthetics Workshop",
      //     url: "SMC-institute#Workshop",
      //   },
      //   {
      //     name: "Dual Energy X-Ray Absorptiometry",
      //     url: "SMC-institute#X-Ray",
      //   },
      //   {
      //     name: "Postgraduate Education",
      //     url: "SMC-institute#Postgraduate",
      //   },
      //   {
      //     name: "Robotics & AI",
      //     url: "SMC-institute#Robotics",
      //   },
      //   {
      //     name: "Specialised OPDs",
      //     url: "SMC-institute#OPD",
      //   },
      // ],
    },
    {
      name: "Contact",
      url: "contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(true);

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
                <ul
                  className="navbar-nav mr-auto"
                  id="menu"
                  style={{ listStyle: "none" }}
                >
                  {navigations.map((navigation, index) => (
                    <li className="nav-item submenu" key={index}>
                      <NavLink
                        to={navigation.url}
                        className="nav-link d-flex align-items-center gap-1"
                        title={`About ${navigation.name}`}
                      >
                        {navigation.name}
                        {navigation?.subLinks && (
                          <span
                            className="dropdown"
                            style={{ fontSize: "0.75rem", marginLeft: "4px" }}
                          >
                          </span>
                        )}
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
                                  <span
                                    style={{
                                      fontSize: "0.75rem",
                                      marginLeft: "4px",
                                    }}
                                  >
                                    {">"}
                                  </span>
                                )}
                              </NavLink>

                              {Array.isArray(sublink.subLink) && (
                                <ul
                                  className="sub-menu"
                                  style={{ listStyle: "none" }}
                                >
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

       
      </div>
    </header>
  );
};

export default Navbar;



//  {/* Mobile Menu */}
//         {/* <div class="responsive-menu">
//           <div class="slicknav_menu">
//             <ul
//               class="slicknav_nav slicknav_hidden"
//               aria-hidden={showMenu ? "true" : "false"}
//               role="menu"
//               style={showMenu ? { display: "none" } : {}}
//             >
//               <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                 <Link
//                   href="/"
//                   role="menuitem"
//                   aria-haspopup="true"
//                   tabindex="-1"
//                   class="slicknav_item slicknav_row"
//                 >
//                   <Link
//                     class="nav-link"
//                     to="/about"
//                     title="About Mrityunjay Hospital"
//                     tabindex="-1"
//                   >
//                     About
//                   </Link>
//                   <span class="slicknav_arrow">►</span>
//                 </Link>
//                 <ul
//                   class="sub-menu slicknav_hidden"
//                   role="menu"
//                   aria-hidden="true"
//                   style={{ display: "none" }}
//                 >
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Legacy"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Legacy &amp; Milestones
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Ethical"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Ethical Practice
//                     </Link>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="about.html#Doctors"
//                         tabindex="-1"
//                       >
//                         Our Doctors
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="dr-shachindra-shekhar.html"
//                           title="Senior Orthopedic Doctor"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Dr. Shachindra Shekhar
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="dr-shubhankar-shekhar.html"
//                           title="Best Orthopedic Doctor | Dr. Shubhankar Shekhar – Joint &amp; Fracture Specialist"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Dr. Shubhankar Shekhar
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Vision"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Vision &amp; Mission
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Award"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Award &amp; Recognition
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Work"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Work with us
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Brand"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       The Brand
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="about.html#Privacy"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Privacy Policy
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                 <Link
//                   href="#"
//                   role="menuitem"
//                   aria-haspopup="true"
//                   tabindex="-1"
//                   class="slicknav_item slicknav_row"
//                 >
//                   <Link
//                     class="nav-link"
//                     href="specialties.html"
//                     title="Best orthopedic treatments"
//                     tabindex="-1"
//                   >
//                     Specialties
//                   </Link>
//                   <span class="slicknav_arrow">►</span>
//                 </Link>
//                 <ul
//                   class="sub-menu slicknav_hidden"
//                   role="menu"
//                   aria-hidden="true"
//                   style={{ display: "none" }}
//                 >
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="shoulder-department.html"
//                         title="Shoulder treatment and surgery"
//                         tabindex="-1"
//                       >
//                         Shoulder Department
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="shoulder-department.html#Instability"
//                           title="Shoulder Instability treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Shoulder Instability
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="shoulder-department.html#Rotator"
//                           title="Rotator cuff tear treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Rotator cuff tear
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="shoulder-department.html#Frozen"
//                           title="Frozen shoulder treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Frozen shoulder
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="hand-microvascular-department.html"
//                         title="Hand &amp; Microvascular treatment"
//                         tabindex="-1"
//                       >
//                         Hand &amp; Microvascular Department
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="hand-microvascular-department.html#Elbow"
//                           title="Elbow instability treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Elbow instability
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="hand-microvascular-department.html#Inflammatory"
//                           title="Inflammatory pathologies treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Inflammatory pathologies
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="hip-department.html"
//                         title="Hip Treatment &amp; Surgery"
//                         tabindex="-1"
//                       >
//                         Hip Department
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="hip-department.html#Trauma"
//                           title="Hip surgery"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Hip trauma
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="hip-department.html#Injuries"
//                           title="Hip Labral injuries treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Labral injuries
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="hip-department.html#Replacement"
//                           title="Hip Replacement surgery"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Hip Replacement
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="hip-department.html#DAA"
//                           title="Direct Anterior Approach (DAA) Hip Replacement"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           DAA Hip Replacement
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="knee-department.html"
//                         title="Advanced Knee Treatment/Surgery"
//                         tabindex="-1"
//                       >
//                         Knee Department
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="knee-department.html#Instability"
//                           title="Knee instability/pain treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Knee instability/pain
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="knee-department.html#Replacement"
//                           title="Partial and Total Knee Replacement Surgery"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Knee Replacement (Partial/Total)
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="spine-department.html"
//                         title="Spine Treatment"
//                         tabindex="-1"
//                       >
//                         Spine Department
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="spine-department.html#Degenerative"
//                           title="Degenerative spine/Disc disease treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Degenerative spine/Disc disease
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="foot-ankle-department.html"
//                         title="Foot &amp; Ankle Treatment"
//                         tabindex="-1"
//                       >
//                         Foot And Ankle Department
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="foot-ankle-department.html#Arthroscopy"
//                           title="Ankle arthroscopy"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Ankle arthroscopy
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="foot-ankle-department.html#Heel"
//                           title="Foot and heel pain treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Foot and heel pain
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="foot-ankle-department.html#Fractures"
//                           title="Foot and ankle fractures surgery"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Foot and ankle fractures
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="arthroscopy.html"
//                         title="Arthroscopy"
//                         tabindex="-1"
//                       >
//                         Arthroscopy
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="arthroscopy.html#Injuries"
//                           title="Sports injuries treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Sports injuries
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                     <Link
//                       href="#"
//                       role="menuitem"
//                       aria-haspopup="true"
//                       tabindex="-1"
//                       class="slicknav_item slicknav_row"
//                     >
//                       <Link
//                         class="nav-link"
//                         href="rheumatology.html"
//                         title="Rheumatology Treatment"
//                         tabindex="-1"
//                       >
//                         Rheumatology
//                       </Link>
//                       <span class="slicknav_arrow">►</span>
//                     </Link>
//                     <ul
//                       class="sub-menu slicknav_hidden"
//                       role="menu"
//                       aria-hidden="true"
//                       style={{ display: "none" }}
//                     >
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="rheumatology.html#Arthritis"
//                           title="Arthritis Treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Arthritis
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="rheumatology.html#Osteoarthritis"
//                           title="Osteoarthritis Treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Osteoarthritis
//                         </Link>
//                       </li>
//                       <li class="nav-item">
//                         <Link
//                           class="nav-link"
//                           href="rheumatology.html#Tendinitis"
//                           title="Tendinitis Treatment"
//                           role="menuitem"
//                           tabindex="-1"
//                         >
//                           Tendinitis
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                 <Link
//                   href="#"
//                   role="menuitem"
//                   aria-haspopup="true"
//                   tabindex="-1"
//                   class="slicknav_item slicknav_row"
//                 >
//                   <Link
//                     class="nav-link"
//                     href="procedures.html"
//                     title="Orthopaedic Procedures"
//                     tabindex="-1"
//                   >
//                     Procedures
//                   </Link>
//                   <span class="slicknav_arrow">►</span>
//                 </Link>
//                 <ul
//                   role="menu"
//                   class="slicknav_hidden"
//                   aria-hidden="true"
//                   style={{ display: "none" }}
//                 >
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Joint"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Robotic Joint Replacement Surgery
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Trauma"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Trauma &amp; Fracture Surgery
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Arthroscopic"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Arthroscopic Surgery
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Pediatric"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Pediatric Orthopedic
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Kyphoplasty"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Kyphoplasty
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Disc"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Disc Replacement Surgery
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#Major"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Major spine surgeries
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="procedures.html#DAA"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Direct Anterior Hip Replacement
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <Link
//                   class="nav-link"
//                   href="infra-equipment.html"
//                   title="Orthopedic infrastructure"
//                   role="menuitem"
//                   tabindex="-1"
//                 >
//                   Infra &amp; Equip
//                 </Link>
//               </li>
//               <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                 <Link
//                   href="#"
//                   role="menuitem"
//                   aria-haspopup="true"
//                   tabindex="-1"
//                   class="slicknav_item slicknav_row"
//                 >
//                   <Link class="nav-link" href="#" tabindex="-1">
//                     Patients
//                   </Link>
//                   <span class="slicknav_arrow">►</span>
//                 </Link>
//                 <ul
//                   role="menu"
//                   class="slicknav_hidden"
//                   aria-hidden="true"
//                   style={{ display: "none" }}
//                 >
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="patients.html#Testimonials"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Testimonials
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="patients.html#Stories"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Patient Stories
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="international-patients.html"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       International Patients
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item submenu slicknav_collapsed slicknav_parent">
//                 <Link
//                   href="#"
//                   role="menuitem"
//                   aria-haspopup="true"
//                   tabindex="-1"
//                   class="slicknav_item slicknav_row"
//                 >
//                   <Link
//                     class="nav-link"
//                     href="MOH-institute.html"
//                     title="Orthopaedic Training &amp; Research"
//                     tabindex="-1"
//                   >
//                     MOH Institute
//                   </Link>
//                   <span class="slicknav_arrow">►</span>
//                 </Link>
//                 <ul
//                   role="menu"
//                   class="slicknav_hidden"
//                   aria-hidden="true"
//                   style={{ display: "none" }}
//                 >
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Emergency"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       24×7 Emergency Trauma Services
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Peadiatric"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Peadiatric Orthopaedics
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Physiotherapy"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Physiotherapy &amp; Rehabilitation
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#General"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       General Orthopaedics
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Research"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Research And Academics
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Workshop"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Orthotics &amp; Prosthetics Workshop
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#X-Ray"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Dual Energy X-Ray Absorptiometry
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Postgraduate"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Postgraduate Education
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#Robotics"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Robotics &amp; AI
//                     </Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link
//                       class="nav-link"
//                       href="MOH-institute.html#OPD"
//                       role="menuitem"
//                       tabindex="-1"
//                     >
//                       Specialised OPDs
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <Link
//                   class="nav-link"
//                   href="contact.html"
//                   title="Contact best orthopaedic hospital"
//                   role="menuitem"
//                   tabindex="-1"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div> */}