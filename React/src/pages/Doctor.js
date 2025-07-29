import React, { useEffect, useState } from "react";
// import doctors from "../pages/Doctor.json";
import { Link, useParams } from "react-router-dom";
import { client } from "../config/sanityClient";

const Doctor = () => {
  const { name } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "doctor" && slug.current == $slug][0] {
            name,
            designation,
            education,
            description,
            experienceYears,
            hospital,
            position,
            email,
            phone,
            timings,
            emergency,
            legacy,
            expertise[]{ title, description, icon{asset->{url}} },
            images[]{asset->{url}},
            contactInfo { address, phone, email },
            profileImage { asset->{url} }
          }`,
          { slug: name } // Use the 'name' from useParams as the slug
        );
        setDoctor(data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    if (name) {
      // Only fetch if 'name' (slug) is available
      fetchDoctor();
    }
  }, [name]); // Re-fetch if the 'name' (slug) parameter changes

  return (
    <>
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
                  {doctor?.designation} - {doctor?.name}
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="about" title="About Mrityunjay Hospital Meerut">
                        About
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="about#Doctors">Doctors</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {doctor?.name}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {doctor ? (
        <>
          {/* Section Start */}
          <div className="page-team-single bg-radius-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="team-member-image mb-4">
                    <img
                      src={
                        doctor?.profileImage?.asset?.url ||
                        "https://placehold.co/400x400/cccccc/ffffff?text=Doctor+Image"
                      }
                      alt={`Dr. ${doctor?.name} - ${doctor?.designation}`}
                    />
                    <figure className="image-anime reveal">
                      <img
                        src={
                          doctor?.profileImage?.asset?.url ||
                          "https://placehold.co/400x400/cccccc/ffffff?text=Doctor+Image"
                        }
                        alt={`Dr. ${doctor?.name} - ${doctor?.designation}`}
                      />
                    </figure>
                  </div>

                  <div className="working-hours">
                    <h3>Timings</h3>
                    <ul>
                      {doctor?.timings?.map((time, index) => (
                        <li key={index}>{time}</li>
                      ))}
                      {/* Emergency timing can be separate or part of timings array */}
                      {doctor?.emergency && (
                        <li>Emergency: {doctor.emergency}</li>
                      )}

                      {/* <li>Mon - Sun: 10.00 AM - 4.00 PM</li>
                      <li>Sun: 09.00 AM - 4.00 PM</li>
                      <li>Friday: Closed</li>
                      <li>Emergency: 24 hours</li> */}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="team-member-details">
                    <div className="member-detail-header">
                      <div className="member-detail-title">
                        <h2 className="text-anime-style-3">{doctor?.name}</h2>
                        <p>
                          <p>{doctor?.designation}</p>
                        </p>
                      </div>

                      <div className="section-btn">
                        <Link to="/contact#Appointment" className="btn-default">
                          <span>make an appointment</span>
                        </Link>
                      </div>
                    </div>

                    <div className="member-detail-content mb-0">
                      <h3 className="mb-2">
                        The Pillar of Ethical Orthopedic Practice in{" "}
                        {doctor?.contactInfo?.address?.split(",")[2]?.trim() ||
                          "Meerut"}
                      </h3>
                      <p className="heading fs-5 mb-1 text-black">
                        {doctor?.hospital} | {doctor?.experienceYears} Years of
                        Surgical Experience
                      </p>
                      <p>{doctor?.description}</p>
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
                          <p>{doctor?.position}</p>
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
                          <p>{doctor?.education}</p>
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
                            <a href={`mailto:${doctor?.email}`}>
                              {doctor?.email}
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
                            (+91){" "}
                            <a href={`tel:+91${doctor?.phone}`}>
                              {doctor?.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <h3 className="mb-2">Clinical Legacy & Experience</h3>
                    <div className="custom-list mt-3 mb-3">
                      <ul>
                        {doctor?.legacy?.map((item, index) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        ))}

                        {/* <li>
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
                          <strong> orthopedic care</strong> and
                          <strong>surgical ethics</strong> in the region
                        </li> */}
                      </ul>
                    </div>

                    <p>
                      From conservative management of fractures to life-saving
                      trauma interventions,{" "}
                      {doctor?.name?.split(" ").slice(0, -1).join(" ")}’s
                      emphasis has always been on doing what is necessary — not
                      what is easy.
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
                {doctor?.expertise?.map((exp, index) => (
                  <div key={index} className="col-lg-2 col-md-4 col-6">
                    <div className="about-icon-list-item">
                      <div className="icon-box">
                        <img
                          src={
                            exp.icon?.asset?.url ||
                            "https://placehold.co/50x50/cccccc/ffffff?text=Icon"
                          }
                          alt={`${exp.title} Icon`}
                        />
                      </div>
                      <div className="about-icon-list-content">
                        <h3 style={{ color: "var(--accent-color)" }}>
                          {exp.title}
                        </h3>
                        <p className="text-white mt-2">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="col-lg-2 col-md-4 col-6">
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
                      <p className="text-white mt-2">
                        Muscle-sparing technique
                      </p>
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
                      <p className="text-white mt-2">
                        ACL, meniscus, labral tears
                      </p>
                    </div>
                  </div>
                </div> */}
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
                        Founder of {doctor?.hospital}
                      </h2>
                      <p className="mt-2">
                        Established with the mission to provide affordable,
                        ethical, and advanced orthopedic care to the people of{" "}
                        {doctor?.contactInfo?.address?.split(",")[2]?.trim() ||
                          "Meerut"}{" "}
                        and surrounding districts, {doctor?.hospital} stands
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
                        {doctor?.name?.split(" ").slice(0, -1).join(" ")}{" "}
                        envisioned a space where patients wouldn’t just be
                        treated — they would be educated, heard, and respected.
                      </p>

                      {/* <h2 className="text-anime-style-3" data-cursor="-opaque">
                        Founder of Mrityunjay Orthopedic Hospital
                      </h2>
                      <p className="mt-2">
                        Established with the mission to provide affordable,
                        ethical, and advanced orthopedic care to the people of
                        Meerut and surrounding districts, Mrityunjay Orthopedic
                        Hospital stands today as a trusted destination for:
                      </p>
                      <div className="custom-list mt-3">
                        <ul>
                          <li>Joint replacement and trauma surgery</li>
                          <li>Pediatric and geriatric orthopedic care</li>
                          <li>Spine and post-injury rehabilitation</li>
                        </ul>
                      </div>

                      <p>
                        Dr. Shachindra envisioned a space where patients
                        wouldn’t just be treated — they would be educated,
                        heard, and respected.
                      </p> */}
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
                        forward by his son, Dr. Shubhankar Shekhar,{" "}
                        {doctor?.name}
                        remains an active mentor to the medical team at MOH —
                        guiding young surgeons in decision-making, surgical
                        ethics, and patient communication.
                      </p>

                      <p className="mt-2 mb-0">He plays a pivotal role in:</p>
                      <div className="custom-list mt-3 mb-3">
                        <ul>
                          <li>Overseeing patient safety protocols</li>
                          <li>
                            Encouraging academic discussions and ethical debates
                          </li>
                          <li>
                            Maintaining continuity in long-term patient
                            follow-up
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-entry-image mt-4 mb-4">
                <div className="row g-4">
                  {doctor?.images?.map((img, index) => (
                    <div key={index} className="col-md-3 col-6">
                      <div className={`service-entry-img-${(index % 2) + 1}`}>
                        <img
                          src={
                            img.asset?.url ||
                            "https://placehold.co/400x400/cccccc/ffffff?text=Gallery+Image"
                          }
                          alt={`Orthopedic Surgeon ${
                            doctor?.name
                          } Gallery Image ${index + 1}`}
                        />
                        <figure className="image-anime reveal"></figure>
                      </div>
                    </div>
                  ))}

                  {/* <div className="col-md-3 col-6">
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
                  </div> */}
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
                        {doctor?.name?.split(" ").slice(0, -1).join(" ")}’s
                        approach is simple yet profound: listen first, operate
                        only when required, and always prioritize recovery over
                        intervention.
                      </p>

                      <div className="custom-list mt-3 mb-3">
                        <ul>
                          <li>Transparent consultation</li>
                          <li>Cost-effective treatments</li>
                          <li>Faithful follow-up culture</li>
                        </ul>
                      </div>

                      <p>
                        His compassionate consultations and honest counsel have
                        made him a household name in{" "}
                        {doctor?.contactInfo?.address?.split(",")[2]?.trim() ||
                          "Meerut"}{" "}
                        for orthopedic care.
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
                        Contact {doctor?.name}
                      </h2>
                    </div>

                    <div className="custom-list mt-3">
                      <ul>
                        <li>{doctor?.contactInfo?.address}</li>
                        <li>{doctor?.contactInfo?.phone}</li>
                        <li>{doctor?.contactInfo?.email}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <p className="mb-0">
                For families seeking orthopedic wisdom, steady hands, and
                time-tested experience — {doctor?.name} is the trusted name they
                turn to.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner"></div> {/* Use your existing spinner CSS */}
          <p className="ml-4">Loading doctor info...</p>
        </div>
      )}
    </>
  );
};

export default Doctor;
