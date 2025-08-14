import BreadCrumb from "../components/BreadCrumb";
import DoctorsSection from "../components/DoctorsSection";

const About = () => {
  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/about-us-1.webp"
        title="About Sangeeta Ortho and Gynae Medical Center"
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
                    Our Journey & Legacy
                  </h2>
                  <p>
                    Sangeeta Medical Center began with a simple yet powerful
                    vision – to provide compassionate, reliable, and advanced
                    healthcare to our community. Founded by dedicated medical
                    professionals, we have grown from a small clinic into a
                    trusted multi-specialty center, offering excellence in
                    Gynecology, Orthopedics, and General Medicine.
                  </p>
                  <p>
                    Over the years, we have touched countless lives, combining
                    medical expertise with a personal touch that makes every
                    patient feel cared for and respected. Our legacy is built on
                    trust, ethical practice, and an unwavering commitment to
                    improving health outcomes.
                  </p>
                  <p>
                    Today, Sangeeta Medical Center stands as a beacon of hope
                    and healing – a place where tradition meets innovation, and
                    every patient’s well-being comes first.
                  </p>

                  {/* <div className="custom-list mt-4">
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
                  </div> */}

                  {/* <p>
                    Today, the center continues to lead with integrity,
                    compassion, and commitment to evolving medical excellence.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="images/about/DSC_0106.jpg"
                    alt="Sangeeta Medical Centre Legacy"
                    loading="lazy"
                  />
                  {/* <figure className="image-anime reveal">
                  </figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Legacy Section End */}

     

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
                      To be the most trusted and patient-centric orthopedic and
                      gynecological center in the region.
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
                      <ul>
                        <li>
                          Provide world-class treatment using the latest medical
                          advancements.
                        </li>

                        <li>
                          Maintain a warm, supportive environment for every
                          patient.
                        </li>

                        <li>
                          Educate the community on preventive care and wellness.
                        </li>
                      </ul>
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
                  <img
                    src="images/about/award.jpg"
                    alt="Award"
                    loading="lazy"
                  />
                  {/* <figure className="image-anime reveal">
                  </figure> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Awards & Recognitions
                  </h2>
                  <p>
                    Over the decades, Sangeeta Medical has received numerous
                    honors from medical associations, local organizations, and
                    government bodies for its contribution to healthcare.
                  </p>
                  <p>
                    Our doctors are regularly invited for expert talks and panel
                    discussions.
                  </p>

                  {/* <div className="custom-list mt-4">
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
                  </div> */}

                  {/* <p>
                    Our recognitions are a reflection of our genuine dedication
                    to improving lives—not just awards, but responsibilities we
                    carry with pride.
                  </p> */}
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
                    Careers at Sangeeta Medical
                  </h2>
                  <p>
                    Looking to join a team of passionate healthcare
                    professionals?
                  </p>

                  <p>
                    We offer opportunities for doctors, nurses, lab technicians,
                    and administrative staff. With ongoing training and a
                    supportive environment, Sangeeta Medical is a great place to
                    grow your career in healthcare.
                  </p>

                  {/* <div className="custom-list mt-4">
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
                  </div> */}

                  {/* <p>
                    Interested candidates can email their resume to:{" "}
                    <a href="mailto:mrityunjayhospital@gmail.com">
                      mrityunjayhospital@gmail.com
                    </a>
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="images/about/work-with-us.jpg"
                    alt="Work with Mrityunjay Hospital"
                    loading="lazy"
                  />
                  {/* <figure className="image-anime reveal">
                  </figure> */}
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
                  <img
                    src="https://www.mrityunjayhospital.com/images/about/brand.jpg"
                    alt="Brand"
                    loading="lazy"
                  />
                  {/* <figure className="image-anime reveal">
                  </figure> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Our Brand Identity
                  </h2>
                  <p>
                    The Sangeeta Medical brand stands for trust, care, and
                    excellence. Our logo symbolizes healing, our name inspires
                    reassurance, and our work reflects years of medical
                    expertise blended with compassion.
                  </p>

                  {/* <div className="custom-list mt-4">
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
                  </div> */}

                  {/* <p>
                    As we transition from tradition to transformation, the MOH
                    brand continues to be rooted in values, driven by results,
                    and respected by the community.
                  </p> */}
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
                    Privacy Policy{" "}
                  </h2>
                  <p>
                    We respect your privacy. All patient data is kept
                    confidential and used solely for treatment and follow-ups.
                  </p>
                  <p>
                    Our systems are compliant with national medical privacy laws
                    to ensure your information is always secure.
                  </p>

                  {/* <div className="custom-list mt-4">
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
                  </div> */}

                  {/* <p>
                    Your trust is our strength. We’re committed to respecting
                    your privacy at every stage of your healthcare journey with
                    us.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="https://www.mrityunjayhospital.com/images/about/privacy-policy.jpg"
                    alt="Sangeeta Medical Centre Privacy Policy"
                    loading="lazy"
                  />
                  {/* <figure className="image-anime reveal">
                  </figure> */}
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






//  {/* Ethical Section Start */}
      
//       <div className="page-about-us bg-radius-section2 bg-light" id="Ethical">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-5">
//               <div className="how-work-image-box-2 rounded-4">
//                 <div className="how-work-img-2">
//                   <img
//                     src="images/about/ethical-practice.jpg"
//                     alt="Ethical Practice"
//                     loading="lazy"
//                   />
//                   {/* <figure className="image-anime reveal">
//                   </figure> */}
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-7">
//               <div className="page-about-content-left">
//                 <div className="section-title mb-0">
//                   <h2 className="text-anime-style-3" data-cursor="-opaque">
//                     Ethical Medical Practices
//                   </h2>
//                   <p>
//                     At our core lies a commitment to ethical, transparent, and
//                     patient-first practices.
//                   </p>
//                   <p>
//                     We believe in honest diagnosis, evidence-based treatments,
//                     and ensuring that every patient is fully informed and
//                     comfortable with their care journey. Integrity and empathy
//                     guide all our decisions.
//                   </p>

//                   {/* <div className="custom-list mt-4">
//                     <ul>
//                       <li>No unnecessary investigations or surgeries</li>
//                       <li>Second-opinion friendly approach</li>
//                       <li>Respect for patient consent and understanding</li>
//                       <li>Clear financial counseling before treatment</li>
//                     </ul>
//                   </div> */}

//                   {/* <p>
//                     Our belief is simple: "If it's not necessary, we don't do
//                     it." Patients at MOH can be confident that every treatment
//                     is done for the right reasons, by the right hands, and in
//                     the right way.
//                   </p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Ethical Section End */}