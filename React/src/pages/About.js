import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import DoctorsSection from "../components/DoctorsSection";

const About = () => {
  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/about-us-1.webp"
        title="About Mrityunjay Hospital"
        page="About"
      />

      {/* Legacy Section Start */}
      <div className="page-about-us" id="Legacy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Legacy & Milestones
                  </h2>
                  <p>
                    Sangeeta Medical Centre has stood as a pillar of trust and
                    excellence in Orthopedic and Gynecological care for over 35
                    years.
                  </p>

                  <div className="custom-list mt-4">
                    <ul>
                      <li>
                        <strong>1980s–90s:</strong> Dr. Sangeeta Jindal
                        established the center with a vision to provide quality
                        women’s healthcare in Meerut.
                      </li>
                      <li>
                        <strong>2000s:</strong> Expansion into family planning,
                        infertility solutions, and menopausal care.
                      </li>
                      <li>
                        <strong>2010s:</strong> Integration of orthopedic
                        services, including trauma and joint replacements, with
                        the addition of Dr. Raman Jindal.
                      </li>
                      <li>
                        <strong>2020s:</strong> The team grew with specialists
                        like Dr. Manisha Chaudhary for laparoscopic surgeries
                        and infertility support.
                      </li>
                    </ul>
                  </div>

                  <p>
                    Today, the center continues to lead with integrity,
                    compassion, and commitment to evolving medical excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/about/sangeeta-legacy.jpg"
                      alt="Sangeeta Medical Centre Legacy"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Legacy Section End */}

      {/* Ethical Section Start */}
      <div className="page-about-us bg-radius-section2 bg-light" id="Ethical">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/about/ethical-practice.jpg"
                      alt="Ethical Practice"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Ethical Practice
                  </h2>
                  <p>
                    Ethics is not just a policy at MOH—it’s a way of practice.
                    We ensure transparency at every step of the treatment
                    process—from diagnosis and investigation to surgery and
                    post-operative care.
                  </p>

                  <div className="custom-list mt-4">
                    <ul>
                      <li>No unnecessary investigations or surgeries</li>
                      <li>Second-opinion friendly approach</li>
                      <li>Respect for patient consent and understanding</li>
                      <li>Clear financial counseling before treatment</li>
                    </ul>
                  </div>

                  <p>
                    Our belief is simple: "If it's not necessary, we don't do
                    it." Patients at MOH can be confident that every treatment
                    is done for the right reasons, by the right hands, and in
                    the right way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ethical Section End */}

      {/* Doctors Section Start */}
      <DoctorsSection />
      {/* Doctors Section End */}

      {/* Vision Mission Section Start */}
      <div className="therapy-process bg-radius-section2" id="Vision">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Vision & Mission
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="therapy-process-content">
                <div className="therapy-process-item wow fadeInUp">
                  <div className="icon-box">
                    <img
                      src="images/icons/vision.png"
                      alt="Mrityunjay Hospital Vision"
                    />
                  </div>
                  <div className="therapy-process-item-content">
                    <h3>Our Vision</h3>
                    <p>
                      To be North India’s most trusted orthopedic care provider,
                      combining compassionate care with global surgical
                      excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="therapy-process-content">
                <div
                  className="therapy-process-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="icon-box">
                    <img
                      src="images/icons/mission.png"
                      alt="Mrityunjay Hospital Mission"
                    />
                  </div>
                  <div className="therapy-process-item-content">
                    <h3>Our Mission</h3>
                    <p>
                      Providing advanced orthopedic care with dignity, safety,
                      transparency, and mentorship, driven by evolving
                      evidence-based practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision Mission Section End */}

      {/* Award Section Start */}
      <div className="page-about-us bg-radius-section2 bg-light" id="Award">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/about/award.jpg"
                      alt="Award"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Award & Recognition
                  </h2>
                  <p>
                    Mrityunjay Orthopedic Hospital and its team have been widely
                    acknowledged for clinical brilliance and ethical conduct:
                  </p>

                  <div className="custom-list mt-4">
                    <ul>
                      <li>
                        Invited globally for medical workshops and joint
                        replacement training.
                      </li>
                      <li>
                        Featured in reputed national medical forums for
                        innovation in direct anterior approach (DAA) hip
                        replacement.
                      </li>
                      <li>
                        Rated highly on patient satisfaction surveys for
                        post-surgical outcomes and communication.
                      </li>
                    </ul>
                  </div>

                  <p>
                    Our recognitions are a reflection of our genuine dedication
                    to improving lives—not just awards, but responsibilities we
                    carry with pride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Award Section End */}

      {/* Work Section Start */}
      <div className="page-about-us bg-radius-section2" id="Work">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Work with us
                  </h2>
                  <p>
                    MOH is more than a workplace—it's a movement toward better
                    orthopedic care. We are looking for passionate professionals
                    who want to make a difference. Whether you're a surgeon,
                    physiotherapist, nurse, or support staff—if you have
                    integrity, compassion, and a desire to grow, we welcome you.
                  </p>

                  <div className="custom-list mt-4">
                    <ul>
                      <li>
                        Supportive work environment with learning opportunities
                      </li>
                      <li>
                        Exposure to advanced techniques and mentorship under
                        renowned surgeons
                      </li>
                      <li>
                        Transparent HR policies and ethical code of conduct
                      </li>
                    </ul>
                  </div>

                  <p>
                    Interested candidates can email their resume to:{" "}
                    <a href="mailto:mrityunjayhospital@gmail.com">
                      mrityunjayhospital@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/about/work-with-us.jpg"
                      alt="Work with Mrityunjay Hospital"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work Section End */}

      {/* Brand Section Start */}
      <div className="page-about-us bg-radius-section2 bg-light" id="Brand">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/about/brand.jpg"
                      alt="Brand"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    The Brand
                  </h2>
                  <p>
                    Mrityunjay Orthopedic Hospital isn’t just known for
                    surgeries—it’s known for stories of restored mobility,
                    regained independence, and healed lives. Our brand
                    represents:
                  </p>

                  <div className="custom-list mt-4">
                    <ul>
                      <li>Trust across generations</li>
                      <li>
                        Pioneering leadership in minimally invasive and robotic
                        surgeries
                      </li>
                      <li>
                        Personalized care, with a human touch that tech can
                        never replace
                      </li>
                      <li>
                        A name that stands for safety, honesty, and innovation
                      </li>
                    </ul>
                  </div>

                  <p>
                    As we transition from tradition to transformation, the MOH
                    brand continues to be rooted in values, driven by results,
                    and respected by the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Section End */}
      {/* Privacy Policy Section Start */}
      <div className="page-about-us bg-radius-section2" id="Privacy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Privacy Policy
                  </h2>
                  <p>
                    At Sangeeta Medical Centre, protecting your privacy is not
                    just a policy— it’s our professional and moral
                    responsibility. We follow strict standards to ensure that
                    your health data is handled with utmost care.
                  </p>

                  <div className="custom-list mt-4">
                    <ul>
                      <li>
                        Patient records are securely stored and accessible only
                        to authorized medical professionals.
                      </li>
                      <li>
                        No personal or medical information is ever shared with
                        third parties without clear and informed patient
                        consent.
                      </li>
                      <li>
                        We comply with modern digital safety norms and ensure
                        our systems are protected by secure technologies.
                      </li>
                    </ul>
                  </div>

                  <p>
                    Your trust is our strength. We’re committed to respecting
                    your privacy at every stage of your healthcare journey with
                    us.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <figure className="image-anime reveal">
                    <img
                      src="images/about/privacy-policy.jpg"
                      alt="Sangeeta Medical Centre Privacy Policy"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy Policy Section End */}
    </>
  );
};

export default About;
