import React from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Specialty = () => {
  const { name } = useParams();

  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Best Orthopedic Treatments"
        page={`Specialties / ${name}`}
      />

      {/* Section Start  */}
      <div className="page-service-single bg-radius-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 hidden-xs">
              <div className="service-sidebar">
                <div className="service-catagery-list specialties-panel wow fadeInUp">
                  <h3>Specialties</h3>
                  <div className="faq-accordion" id="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          Shoulder Department
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/shoulder-department#Instability"
                                title="Shoulder Instability treatment Meerut"
                              >
                                Shoulder Instability
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/shoulder-department#Rotator"
                                title="Rotator cuff tear treatment Meerut"
                              >
                                Rotator cuff tear
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/shoulder-department#Frozen"
                                title="Frozen shoulder treatment Meerut"
                              >
                                Frozen shoulder
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          Hand & Microvascular Department
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/hand-microvascular-department#Elbow"
                                title="Elbow instability treatment Meerut"
                              >
                                Elbow instability
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/hand-microvascular-department#Inflammatory"
                                title="Inflammatory pathologies treatment Meerut"
                              >
                                Inflammatory pathologies
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Hip Department
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/hip-department#Trauma"
                                title="Hip surgery Meerut"
                              >
                                Hip trauma
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/hip-department#Injuries"
                                title="Hip Labral injuries treatment Meerut"
                              >
                                Labral injuries
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/hip-department#Replacement"
                                title="Hip Replacement surgery Meerut"
                              >
                                Hip Replacement
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/hip-department#DAA"
                                title="Direct Anterior Approach (DAA) Hip Replacement Meerut"
                              >
                                DAA Hip Replacement
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Knee Department
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/knee-department#Instability"
                                title="Knee instability/pain treatment Meerut"
                              >
                                Knee instability/pain
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/knee-department#Replacement"
                                title="Partial and Total Knee Replacement Surgery Meerut"
                              >
                                Knee Replacement (Partial/Total)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          Spine Department
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/spine-department#Degenerative"
                                title="Degenerative spine/Disc disease treatment Meerut"
                              >
                                Degenerative spine/Disc disease
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading6">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          Foot And Ankle Department
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/foot-ankle-department#Arthroscopy"
                                title="Ankle arthroscopy Meerut"
                              >
                                Ankle arthroscopy
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/foot-ankle-department#Heel"
                                title="Foot and heel pain treatment Meerut"
                              >
                                Foot and heel pain
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/foot-ankle-department#Fractures"
                                title="Foot and ankle fractures surgery Meerut"
                              >
                                Foot and ankle fractures
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading7">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          Arthroscopy
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading7"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/arthroscopy#Injuries"
                                title="Sports injuries treatment Meerut"
                              >
                                Sports injuries
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading8">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          Rheumatology
                        </button>
                      </h2>
                      <div
                        id="collapse8"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading8"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <Link
                                to="/specialties/rheumatology#Arthritis"
                                title="Arthritis Treatment Meerut"
                              >
                                Arthritis
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/rheumatology#Osteoarthritis"
                                title="Osteoarthritis Treatment Meerut"
                              >
                                Osteoarthritis
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/specialties/rheumatology#Tendinitis"
                                title="Tendinitis Treatment Meerut"
                              >
                                Tendinitis
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="working-hours">
                  <h3>opening hours</h3>
                  <ul>
                    <li>Mon - Sat: 10.00 AM - 4.00 PM</li>
                    <li>Sun: 09.00 AM - 4.00 PM</li>
                    <li>Friday: Closed</li>
                    <li>Emergency: 24 hours</li>
                  </ul>
                  <div className="working-hours-btn">
                    {" "}
                    <Link to="/contact#Appointment" className="btn-default">
                      <span>make an appointment</span>
                    </Link>{" "}
                  </div>
                </div>

                <div className="sidebar-cta-box">
                  <div className="sidebar-cta-image">
                    <img
                      src="images/contact-treatment.jpg"
                      alt="Contact Mrityunjay Hospital Meerut"
                      loading="lazy"
                    />
                    {/* <figure>
                    </figure> */}
                  </div>

                  <div className="sidebar-cta-item">
                    <div className="icon-box">
                      <img
                        src="images/svg-icons/cta-icon-phone.svg"
                        alt="CTA Phone Icon"
                      />
                      {/* <figure>
                      </figure> */}
                    </div>
                    <div className="sidebar-cta-content">
                      <h3>Need any Help?</h3>
                      <h4 className="text-white mb-1">Call us:</h4>
                      <p>
                        +(91) <Link to="tel:+919837054400">9837054400</Link>
                      </p>
                      <h4 className="text-white mb-1">Whatsapp:</h4>
                      <p>
                        +(91){" "}
                        <Link
                          to="https://api.whatsapp.com/send?phone=+919068168434&text=Hi+there+I+have+been+on+your+website+and+I+want+to+be+counselled+by+experts"
                          target="_blank"
                        >
                          9068168434
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-entry">
                  <h2 className="text-anime-style-3">Shoulder Department</h2>
                  <h3 className="fs-3">
                    Precision Shoulder Surgery by Dr. Shubhankar Shekhar
                  </h3>
                  <p>
                    At Mrityunjay Orthopedic Hospital, the Shoulder Department
                    is a center of advanced care—personally led by Dr.
                    Shubhankar Shekhar, AIIMS globally trained orthopedic
                    surgeon. With years of experience and international exposure
                    in robotic and minimally invasive joint surgeries, Dr.
                    Shubhankar brings global standards to shoulder care in
                    Meerut.
                  </p>
                  <p>
                    Every diagnosis, every decision, and every procedure in this
                    department is overseen and executed by Dr. Shubhankar
                    himself—ensuring that patients receive the most accurate
                    diagnosis, the most conservative treatment possible, and the
                    most effective surgical outcomes when required.
                  </p>

                  <hr />

                  <div id="Instability">
                    <div className="service-single-image">
                      <img
                        src="images/specialties/shoulder/shoulder-instability.jpg"
                        alt="Shoulder treatment and surgery Meerut"
                        loading="lazy"
                      />
                      {/* <figure className="image-anime reveal">
                                    </figure> */}
                    </div>
                    <h3 className="fs-3">Shoulder Instability</h3>
                    <p>
                      Recurrent shoulder dislocations can turn into chronic
                      instability if not corrected early. Often seen in athletes
                      or post-injury patients, this condition leads to joint
                      looseness, muscle guarding, and fear of movement.
                    </p>

                    <p>
                      Beyond surgical correction, Dr. Shubhankar Shekhar
                      emphasizes a comprehensive patient evaluation, which
                      includes assessing underlying factors like joint
                      hyperlaxity, muscle imbalances, or previous failed
                      surgeries that may contribute to instability. This
                      holistic approach ensures the treatment plan is tailored
                      not just to the shoulder joint but to the entire kinetic
                      chain supporting it.
                    </p>

                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Patients at Mrityunjay Hospital, Meerut benefit from
                          cutting-edge surgical tools such as high-strength
                          suture anchors, bioabsorbable implants, and the latest
                          arthroscopic techniques that allow for smaller
                          incisions, reduced blood loss, and faster healing.
                          Combined with a dedicated physiotherapy team, Dr.
                          Shubhankar’s program focuses on regaining shoulder
                          strength, proprioception, and sport-specific or
                          occupational movement patterns — ensuring patients
                          don’t just recover but thrive confidently in their
                          daily lives or competitive pursuits.
                        </p>
                      </div>

                      <div className="col-lg-4">
                        <div className="how-work-image-box-2 rounded-4">
                          <div className="how-work-img-2">
                            <figure className="image-anime reveal">
                              <img
                                src="images/specialties/shoulder/shoulder-instability2.jpg"
                                alt="Shoulder Shoulder Instability treatment Meerut"
                                loading="lazy"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4">
                      <strong>Under Dr. Shubhankar’s care:</strong>
                    </p>
                    <div className="custom-list mt-1 mb-3">
                      <ul>
                        <li>
                          Detailed imaging (MRI, CT) is used to assess soft
                          tissue and labral damage.
                        </li>
                        <li>
                          Arthroscopic shoulder stabilization (keyhole surgery)
                          is performed using precision anchors and minimal
                          trauma technique.
                        </li>
                        <li>
                          Post-op rehabilitation is carefully supervised to
                          prevent recurrence and rebuild confidence.
                        </li>
                      </ul>
                    </div>

                    <p>
                      His approach minimizes risk of redislocation and restores
                      full range of motion in record recovery time.
                    </p>
                  </div>

                  <hr />

                  <div id="Rotator">
                    <div className="service-single-image">
                      <figure className="image-anime reveal">
                        <img
                          src="images/specialties/shoulder/rotator-cuff-tear.jpg"
                          alt="Rotator Cuff Tear Treatment Meerut"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <h3 className="fs-3">Rotator Cuff Tear</h3>
                    <p>
                      Whether degenerative or traumatic, a torn rotator cuff can
                      drastically limit shoulder function and quality of life.
                      Delays in proper treatment often worsen the tear and
                      prolong disability. At MOH:
                    </p>

                    <p>
                      At Mrityunjay Orthopedic Hospital, Meerut, patients with
                      rotator cuff tears receive expert, personalized care under
                      the guidance of <strong>Dr. Shubhankar Shekhar</strong>,
                      Consultant Joint Replacement & Orthopedic Surgeon. A
                      rotator cuff tear occurs when the tendons in the shoulder
                      become damaged or torn, often due to overuse, injury, or
                      age-related degeneration. This condition can severely
                      limit a person’s ability to lift, rotate, or reach with
                      the affected arm, leading to chronic pain and weakness
                      that disrupts daily life and work activities.
                    </p>

                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Dr. Shubhankar Shekhar specializes in diagnosing
                          rotator cuff injuries using advanced imaging
                          techniques like ultrasound and MRI, ensuring no detail
                          is missed. His approach blends minimally invasive
                          arthroscopic repair techniques with tailored
                          rehabilitation programs designed to restore shoulder
                          strength, flexibility, and function. Whether you are
                          an athlete, a laborer, or simply someone looking to
                          regain pain-free movement, you can trust{" "}
                          <strong>
                            Mrityunjay Orthopedic Hospital, Meerut
                          </strong>{" "}
                          to deliver comprehensive care with excellent outcomes.
                        </p>
                      </div>

                      <div className="col-lg-4">
                        <div className="how-work-image-box-2 rounded-4">
                          <div className="how-work-img-2">
                            <figure className="image-anime reveal">
                              <img
                                src="images/specialties/shoulder/rotator-cuff-tear2.jpg"
                                alt="Rotator Cuff Tear Specialist Meerut"
                                loading="lazy"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="custom-list mt-3 mb-3">
                      <ul>
                        <li>
                          Dr. Shubhankar personally conducts high-resolution
                          diagnostic evaluations to grade the tear.
                        </li>
                        <li>
                          For eligible cases, non-surgical management is
                          explored first—including guided physiotherapy and PRP
                          injections.
                        </li>
                        <li>
                          When surgery is needed, Dr. Shubhankar performs
                          arthroscopic rotator cuff repair with ultra-fine
                          instrumentation, preserving healthy tissue and
                          reducing post-op pain.
                        </li>
                      </ul>
                    </div>

                    <p>
                      His expertise ensures minimal physiotherapy requirement
                      and rapid shoulder strength recovery—ideal for both active
                      adults and senior patients.
                    </p>
                  </div>

                  <hr />

                  <div id="Frozen">
                    <div className="service-single-image">
                      <figure className="image-anime reveal">
                        <img
                          src="images/specialties/shoulder/frozen-shoulder.jpg"
                          alt="Frozen Shoulder Doctor Meerut"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <h3 className="fs-3">
                      Frozen Shoulder (Adhesive Capsulitis)
                    </h3>
                    <p>
                      This condition is marked by severe stiffness, especially
                      in diabetic and post-operative patients. Most treatments
                      fail when done without stage-specific clarity.
                    </p>

                    <p>
                      Frozen Shoulder, or Adhesive Capsulitis, is a painful and
                      often frustrating condition that gradually limits shoulder
                      movement, making even simple tasks like dressing or
                      reaching overhead difficult. At{" "}
                      <strong>Mrityunjay Orthopedic Hospital, Meerut</strong>,
                      Dr. Shubhankar Shekhar offers expert care for patients
                      facing this condition, guiding them through every stage of
                      recovery. The condition typically develops after injury,
                      surgery, or periods of immobilization and can persist for
                      months if not treated properly.
                    </p>

                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          With a deep understanding of shoulder mechanics and
                          patient-centered care,{" "}
                          <strong>Dr. Shubhankar Shekhar</strong> provides both
                          non-surgical and surgical solutions tailored to each
                          patient’s severity and needs. From supervised
                          physiotherapy and medication strategies to advanced
                          arthroscopic capsular release procedures when needed,
                          the focus is always on restoring pain-free motion and
                          preventing long-term stiffness. At Mrityunjay
                          Orthopedic Hospital, Meerut, patients find the
                          expertise and support they need to regain control over
                          their shoulder health.
                        </p>
                      </div>

                      <div className="col-lg-4">
                        <div className="how-work-image-box-2 rounded-4">
                          <div className="how-work-img-2">
                            <img
                              src="images/specialties/shoulder/frozen-shoulder2.jpg"
                              alt="Frozen Shoulder Specialist Meerut"
                              loading="lazy"
                            />
                            {/* <figure className="image-anime reveal">
                                                </figure> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className=" mt-4">
                      <strong>Dr. Shubhankar’s protocol includes:</strong>
                    </p>
                    <div className="custom-list mt-1 mb-3">
                      <ul>
                        <li>
                          Accurate staging (freezing, frozen, thawing) through
                          clinical and imaging correlation
                        </li>
                        <li>
                          Intra-articular injections, capsular stretches, and
                          selective MUA (manipulation under anesthesia) only
                          when necessary
                        </li>
                        <li>
                          Tailored physiotherapy to match the stage and response
                          of each patient
                        </li>
                      </ul>
                    </div>

                    <p>
                      With his refined approach, most cases improve dramatically
                      without aggressive therapy or repeat interventions.
                    </p>
                  </div>

                  <hr />

                  <div id="">
                    <h3 className="fs-3">
                      What Makes This Department Different
                    </h3>

                    <div className="custom-list mt-3 mb-3">
                      <ul>
                        <li>
                          <strong>
                            Every case is seen and operated by Dr. Shubhankar
                            Shekhar —
                          </strong>{" "}
                          no junior delegation
                        </li>
                        <li>
                          <strong>
                            Only evidence-backed treatment offered —
                          </strong>{" "}
                          no overuse of physiotherapy or unnecessary surgery
                        </li>
                        <li>
                          <strong>
                            All surgeries done with minimally invasive
                            techniques —
                          </strong>{" "}
                          faster healing, less pain
                        </li>
                        <li>
                          <strong>Patient-first protocols —</strong> only the
                          care that is truly needed, nothing more
                        </li>
                      </ul>
                    </div>

                    <p>
                      The Shoulder Department at Mrityunjay Orthopedic Hospital
                      is where modern orthopedic science meets surgical
                      mastery—delivering outcomes that patients can trust and
                      feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section End */}
    </>
  );
};

export default Specialty;
