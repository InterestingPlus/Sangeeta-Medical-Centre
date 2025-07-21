import React, { useEffect } from "react";

const Doctor = () => {
  useEffect(() => {
    // Google Fonts અને Material Icons માટે CDN લિંક્સ ઉમેરો
    const materialIconsLink = document.createElement("link");
    materialIconsLink.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons";
    materialIconsLink.rel = "stylesheet";
    document.head.appendChild(materialIconsLink);

    const interFontLink = document.createElement("link");
    interFontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    interFontLink.rel = "stylesheet";
    document.head.appendChild(interFontLink);

    // Tailwind CSS CDN સ્ક્રિપ્ટ ઉમેરો (જો ઉપયોગમાં લેવાતું હોય તો)
    const tailwindScript = document.createElement("script");
    tailwindScript.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tailwindScript);

    return () => {
      // કમ્પોનન્ટ અનમાઉન્ટ થાય ત્યારે CDN લિંક્સ અને સ્ક્રિપ્ટોને સાફ કરો
      document.head.removeChild(materialIconsLink);
      document.head.removeChild(interFontLink);
      if (tailwindScript) document.head.removeChild(tailwindScript);
    };
  }, []);

  return (
    <>
      {/* ઇનલાઇન CSS */}
      <style>
        {`
          body {
            font-family: "Inter", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            color: #333;
          }

          /* General Section Padding */
          .bg-radius-section {
            padding: 80px 0;
          }
          .bg-radius-section2 {
            padding: 80px 0;
            background-color: #f9f9f9;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          /* Page Header Styling */
          .page-header {
            position: relative;
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 100px 0;
          }
          .page-header-box {
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
          }
          .page-header-box h1 {
            font-size: 2.5rem;
            margin-bottom: 15px;
          }
          .breadcrumb {
            display: flex;
            justify-content: center;
            background: none;
            padding: 0;
            margin: 0;
          }
          .breadcrumb-item {
            font-size: 1rem;
          }
          .breadcrumb-item a {
            color: #ddd;
            text-decoration: none;
          }
          .breadcrumb-item.active {
            color: white;
          }

          /* Team Member Single Page */
          .page-team-single {
            background-color: #fff;
            padding: 60px 0;
          }
          .team-member-image figure img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .working-hours {
            background-color: #f0f8ff;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          }
          .working-hours h3 {
            font-size: 1.5rem;
            color: #2c3e50;
            margin-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 10px;
          }
          .working-hours ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .working-hours li {
            padding: 8px 0;
            border-bottom: 1px dashed #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .working-hours li:last-child {
            border-bottom: none;
          }

          .team-member-details .member-detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap; /* For responsiveness */
          }
          .member-detail-title h2 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 5px;
          }
          .member-detail-title p {
            font-size: 1.1rem;
            color: #555;
          }
          .section-btn .btn-default {
            background-color: #007bff;
            color: white;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.3s ease;
          }
          .section-btn .btn-default:hover {
            background-color: #0056b3;
          }

          .member-detail-content h3 {
            font-size: 1.6rem;
            color: #2c3e50;
            margin-bottom: 15px;
          }
          .member-detail-content p {
            line-height: 1.7;
            margin-bottom: 15px;
          }
          .member-detail-content strong {
            font-weight: 700;
          }

          .member-detail-body {
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .member-detail-list-item {
            display: flex;
            align-items: center;
            gap: 15px;
            flex: 1 1 calc(50% - 10px); /* Two columns on larger screens */
            min-width: 280px; /* Minimum width before wrapping */
          }
          .member-detail-list-item .icon-box {
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #e6f2ff;
            border-radius: 50%;
          }
          .member-detail-list-item .icon-box img {
            width: 30px;
            height: 30px;
          }
          .member-detail-list-content h3 {
            font-size: 1.2rem;
            color: #2c3e50;
            margin-bottom: 5px;
          }
          .member-detail-list-content p {
            font-size: 1rem;
            color: #555;
            margin: 0;
          }
          .member-detail-list-content a {
            color: #007bff;
            text-decoration: none;
          }
          .member-detail-list-content a:hover {
            text-decoration: underline;
          }

          hr {
            border: 0;
            border-top: 1px solid #eee;
            margin: 40px 0;
          }

          .custom-list ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            line-height: 1.6;
          }
          .custom-list li::before {
            content: '•'; /* Bullet point */
            position: absolute;
            left: 0;
            color: #007bff;
            font-weight: bold;
            font-size: 1.2em;
            line-height: 1;
          }

          /* Areas of Expertise Section */
          .about-icon-box-list {
            background-color: #2c3e50; /* Dark background */
            color: white;
            padding: 60px 0;
          }
          .about-icon-box-list .section-title {
            text-align: center;
            margin-bottom: 40px;
          }
          .about-icon-box-list .section-title h2 {
            font-size: 2.2rem;
            color: white;
          }
          .about-icon-list-item {
            text-align: center;
            margin-bottom: 30px;
          }
          .about-icon-list-item .icon-box {
            width: 80px;
            height: 80px;
            background-color: #007bff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 15px;
          }
          .about-icon-list-item .icon-box img {
            width: 50px;
            height: 50px;
          }
          .about-icon-list-content h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
            color: var(--accent-color, #007bff); /* Fallback color */
          }
          .about-icon-list-content p {
            font-size: 0.9rem;
            color: #ccc;
          }

          /* Member Personal Info Section */
          .member-personal-info {
            padding: 60px 0;
          }
          .member-personal-info .section-title h2 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 15px;
          }
          .member-personal-info .section-title p {
            line-height: 1.7;
            margin-bottom: 20px;
          }

          .service-entry-image .row {
            display: flex;
            flex-wrap: wrap;
          }
          .service-entry-image .col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
          }
          .service-entry-image .col-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
          .service-entry-image figure img {
            width: 100%;
            height: 200px; /* Fixed height for image consistency */
            object-fit: cover; /* Crop images to fit */
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .service-entry-img-1, .service-entry-img-2 {
            margin-bottom: 15px;
          }

          /* Responsive Adjustments */
          @media (max-width: 991px) {
            .team-member-details .member-detail-header {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .section-btn {
              margin-top: 20px;
            }
            .member-detail-list-item {
              flex: 1 1 100%; /* Stack on smaller screens */
            }
          }

          @media (max-width: 767px) {
            .bg-radius-section, .bg-radius-section2 {
              padding: 40px 0;
            }
            .page-header-box h1 {
              font-size: 1.8rem;
            }
            .team-member-image {
              margin-bottom: 30px;
            }
            .team-member-details {
              margin-top: 30px;
            }
            .member-detail-title h2 {
              font-size: 1.8rem;
            }
            .member-detail-content h3 {
              font-size: 1.4rem;
            }
            .about-icon-list-item {
              margin-bottom: 20px;
            }
            .service-entry-image .col-md-3, .service-entry-image .col-6 {
              max-width: 50%;
              flex: 0 0 50%;
            }
          }
        `}
      </style>

      {/* Breadcrumb Start */}
      <div
        className="page-header about-page-header bg-radius-section parallaxie"
        style={{ backgroundImage: "url(images/breadcrumb.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Senior Orthopedic Doctor in Meerut - Dr. Shachindra Shekhar
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://www.mrityunjayhospital.com">home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a
                        href="about.html"
                        title="About Mrityunjay Hospital Meerut"
                      >
                        About
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="about.html#Doctors">Doctors</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dr. Shachindra Shekhar
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Section Start */}
      <div className="page-team-single bg-radius-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member-image mb-4">
                <figure className="image-anime reveal">
                  <img
                    src="images/doctors/dr-shachindra-shekhar2.jpg"
                    alt="Senior Orthopedic Doctor in Meerut - Dr. Shachindra Shekhar"
                  />
                </figure>
              </div>

              <div className="working-hours">
                <h3>Timings</h3>
                <ul>
                  <li>Mon - Sun: 10.00 AM - 4.00 PM</li>
                  <li>Sun: 09.00 AM - 4.00 PM</li>
                  <li>Friday: Closed</li>
                  <li>Emergency: 24 hours</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="team-member-details">
                <div className="member-detail-header">
                  <div className="member-detail-title">
                    <h2 className="text-anime-style-3">
                      Dr. Shachindra Shekhar
                    </h2>
                    <p>Founder & Senior Orthopedic Surgeon</p>
                  </div>

                  <div className="section-btn">
                    <a href="contact.html#Appointment" className="btn-default">
                      <span>make an appointment</span>
                    </a>
                  </div>
                </div>

                <div className="member-detail-content mb-0">
                  <h3 className="mb-2">
                    The Pillar of Ethical Orthopedic Practice in Meerut
                  </h3>
                  <p className="heading fs-5 mb-1 text-black">
                    Founder – Mrityunjay Orthopedic Hospital | 35+ Years of
                    Surgical Experience
                  </p>
                  <p>
                    Dr. Shachindra Shekhar is a name synonymous with integrity,
                    dedication, and surgical excellence in orthopedic care. As
                    the founder of{" "}
                    <strong>Mrityunjay Orthopedic Hospital, Meerut</strong>, he
                    has been a beacon of ethical medical practice for over three
                    decades — offering dependable care for fractures, trauma,
                    and degenerative orthopedic conditions.
                  </p>
                  <p>
                    With his calm demeanor and clinical expertise, Dr.
                    Shachindra has earned the unwavering trust of thousands of
                    families in Western Uttar Pradesh. His legacy continues
                    through his son, <strong>Dr. Shubhankar Shekhar</strong>,
                    but his presence still anchors the values and vision of the
                    hospital.
                  </p>
                </div>

                <div className="member-detail-body mt-4">
                  <div className="member-detail-list-item">
                    <div className="icon-box">
                      <img
                        src="images/svg-icons/icon-member-detail-1.svg"
                        alt="Position Icon"
                      />
                    </div>
                    <div className="member-detail-list-content">
                      <h3>Position</h3>
                      <p>Senior Orthopedic Surgeon</p>
                    </div>
                  </div>

                  <div className="member-detail-list-item">
                    <div className="icon-box">
                      <img
                        src="images/svg-icons/icon-member-detail-2.svg"
                        alt="Education Icon"
                      />
                    </div>
                    <div className="member-detail-list-content">
                      <h3>Education</h3>
                      <p>M.B.B.S., M.S. (Orthopaedics)</p>
                    </div>
                  </div>

                  <div
                    className="member-detail-list-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img
                        src="images/svg-icons/icon-member-detail-3.svg"
                        width="44"
                        alt=""
                      />
                    </div>
                    <div className="member-detail-list-content">
                      <h3>email</h3>
                      <p>
                        <a href="mailto:opdmrityunjayhospital@gmail.com">
                          opdmrityunjayhospital@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div
                    className="member-detail-list-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div className="icon-box">
                      <img
                        src="images/svg-icons/icon-member-detail-4.svg"
                        alt=""
                      />
                    </div>
                    <div className="member-detail-list-content">
                      <h3>phone</h3>
                      <p>
                        (+91) <a href="tel:+919837054400">9837054400</a>
                      </p>
                    </div>
                  </div>
                </div>

                <hr />

                <h3 className="mb-2">Clinical Legacy & Experience</h3>
                <div className="custom-list mt-3 mb-3">
                  <ul>
                    <li>
                      Over{" "}
                      <strong>
                        35 years of orthopedic surgical experience
                      </strong>
                    </li>
                    <li>
                      Successfully treated{" "}
                      <strong>
                        thousands of trauma, joint, and spine cases
                      </strong>
                    </li>
                    <li>
                      Known for{" "}
                      <strong>
                        evidence-based treatment and second-opinion friendly
                        approach
                      </strong>
                    </li>
                    <li>
                      Pioneer in introducing structured
                      <strong> orthopedic care</strong> and{" "}
                      <strong>surgical ethics</strong> in the region
                    </li>
                  </ul>
                </div>

                <p>
                  From conservative management of fractures to life-saving
                  trauma interventions, Dr. Shachindra’s emphasis has always
                  been on doing what is necessary — not what is easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-icon-box-list member-expertise bg-radius-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Areas of Expertise
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="about-icon-list-item">
                <div className="icon-box">
                  <img
                    src="images/icons/joint-replacement.png"
                    alt="Robotic Knee & Hip Replacement Icon"
                  />
                </div>
                <div className="about-icon-list-content">
                  <h3 style={{ color: "var(--accent-color)" }}>
                    Robotic Knee & Hip Replacement
                  </h3>
                  <p className="text-white mt-2">Using MAKO by Stryker</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="about-icon-list-item">
                <div className="icon-box">
                  <img
                    src="images/icons/arthroscopic.png"
                    alt="Direct Anterior Hip Arthroplasty Icon"
                  />
                </div>
                <div className="about-icon-list-content">
                  <h3 style={{ color: "var(--accent-color)" }}>
                    Direct Anterior Hip Arthroplasty (DAA)
                  </h3>
                  <p className="text-white mt-2">Muscle-sparing technique</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="about-icon-list-item">
                <div className="icon-box">
                  <img
                    src="images/icons/trauma-fracture.png"
                    alt="Trauma Surgery Icon"
                  />
                </div>
                <div className="about-icon-list-content">
                  <h3 style={{ color: "var(--accent-color)" }}>
                    Advanced Trauma Surgery
                  </h3>
                  <p className="text-white mt-2">
                    Pelvic, acetabular, long bone fractures
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="about-icon-list-item">
                <div className="icon-box">
                  <img
                    src="images/icons/disc-replacement.png"
                    alt="Spine Surgery Icon"
                  />
                </div>
                <div className="about-icon-list-content">
                  <h3 style={{ color: "var(--accent-color)" }}>
                    Spine Surgery
                  </h3>
                  <p className="text-white mt-2">
                    Disc replacements, kyphoplasty, decompression
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="about-icon-list-item">
                <div className="icon-box">
                  <img
                    src="images/icons/pediatric.png"
                    alt="Pediatric Orthopedics Icon"
                  />
                </div>
                <div className="about-icon-list-content">
                  <h3 style={{ color: "var(--accent-color)" }}>
                    Pediatric Orthopedics
                  </h3>
                  <p className="text-white mt-2">
                    Deformity corrections & growth-related disorders
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="about-icon-list-item">
                <div className="icon-box">
                  <img
                    src="images/icons/arthoscopy.png"
                    alt="Arthoscopy Icon"
                  />
                </div>
                <div className="about-icon-list-content">
                  <h3 style={{ color: "var(--accent-color)" }}>
                    Arthroscopic Sports Injury Repair
                  </h3>
                  <p className="text-white mt-2">ACL, meniscus, labral tears</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="member-personal-info bg-radius-section2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div>
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Founder of Mrityunjay Orthopedic Hospital
                  </h2>
                  <p className="mt-2">
                    Established with the mission to provide affordable, ethical,
                    and advanced orthopedic care to the people of Meerut and
                    surrounding districts, Mrityunjay Orthopedic Hospital stands
                    today as a trusted destination for:
                  </p>
                  <div className="custom-list mt-3">
                    <ul>
                      <li>Joint replacement and trauma surgery</li>
                      <li>Pediatric and geriatric orthopedic care</li>
                      <li>Spine and post-injury rehabilitation</li>
                    </ul>
                  </div>

                  <p>
                    Dr. Shachindra envisioned a space where patients wouldn’t
                    just be treated — they would be educated, heard, and
                    respected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div>
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Mentor & Guide
                  </h2>
                  <p className="mt-2 mb-0">
                    While the baton of surgical innovation is now carried
                    forward by his son, Dr. Shubhankar Shekhar, Dr. Shachindra
                    remains an active mentor to the medical team at MOH —
                    guiding young surgeons in decision-making, surgical ethics,
                    and patient communication.
                  </p>

                  <p className="mt-2 mb-0">He plays a pivotal role in:</p>
                  <div className="custom-list mt-3 mb-3">
                    <ul>
                      <li>Overseeing patient safety protocols</li>
                      <li>
                        Encouraging academic discussions and ethical debates
                      </li>
                      <li>
                        Maintaining continuity in long-term patient follow-up
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-entry-image mt-4 mb-4">
            <div className="row g-4">
              <div className="col-md-3 col-6">
                <div className="service-entry-img-1">
                  <figure className="image-anime reveal">
                    <img
                      src="images/doctors/dr-shachindra-shekhar3.jpg"
                      alt="Orthopedic Surgeon Meerut"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="service-entry-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/doctors/dr-shachindra-shekhar4.jpg"
                      alt="Orthopedic Doctor Meerut"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="service-entry-img-1">
                  <figure className="image-anime reveal">
                    <img
                      src="images/doctors/dr-shachindra-shekhar5.jpg"
                      alt="Trauma Care Meerut"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="service-entry-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/doctors/dr-shachindra-shekhar6.jpg"
                      alt="Fracture Treatment Meerut"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div>
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Patient-Centered Values
                  </h2>
                  <p className="mt-2 mb-0">
                    Dr. Shachindra’s approach is simple yet profound: listen
                    first, operate only when required, and always prioritize
                    recovery over intervention.
                  </p>

                  <div className="custom-list mt-3 mb-3">
                    <ul>
                      <li>Transparent consultation</li>
                      <li>Cost-effective treatments</li>
                      <li>Faithful follow-up culture</li>
                    </ul>
                  </div>

                  <p>
                    His compassionate consultations and honest counsel have made
                    him a household name in Meerut for orthopedic care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div>
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Contact Dr. Shachindra Shekhar
                  </h2>
                </div>

                <div className="custom-list mt-3">
                  <ul>
                    <li>
                      Mrityunjay Orthopedic Hospital, Begum Bridge, Meerut, UP
                    </li>
                    <li>+91 9837054400</li>
                    <li>opdmrityunjayhospital@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <p className="mb-0">
            For families seeking orthopedic wisdom, steady hands, and
            time-tested experience — Dr. Shachindra Shekhar is the trusted name
            they turn to.
          </p>
        </div>
      </div>
    </>
  );
};

export default Doctor;
