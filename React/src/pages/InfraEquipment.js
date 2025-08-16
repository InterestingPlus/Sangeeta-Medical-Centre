import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const InfraEquipment = () => {
  return (
    <>
    <style>{`
  .accordion-button::after {
    display: none !important;
    content: none !important;
  }
`}</style>

      <BreadCrumb
        // image="images/breadcrumb.jpg"
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Infrastructure & Equipment"
        page="Infrastructure & Equipment"
      />

      {/* Section Start */}
      <div class="page-about-us about-faq-section ptb60">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="page-about-content p-0">
                <div class="section-title mb-0">
                  <h2 class="text-anime-style-3" data-cursor="-opaque">
                    Infrastructure & Equipment at Sangeeta Medical Center
                  </h2>
                  <p class="mt-2">
                    Where advanced healthcare meets compassionate care.
                  </p>
                  <p class="mt-2">
                    At Sangeeta Medical Center, every treatment and surgical
                    outcome is supported by state-of-the-art infrastructure and
                    internationally approved medical equipment. Personally
                    overseen by <strong>Dr. Sangeeta Jindal </strong> and our
                    team of specialists, our facilities are designed to ensure
                    precision, safety, comfort, and faster recovery for every
                    patient.
                  </p>
                  <p>
                    Our setup integrates modern medical technology with
                    patient-centric design, creating a trusted space for women’s
                    health, orthopedic care, and multi-specialty treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center mt-4 mb-4">
            <div class="col-lg-12">
              <div class="faq-accordion" id="accordion2">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="false"
                      aria-controls="faq1"
                    >
                      Ultrasound Machine
                      
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            A high-resolution ultrasound system for pregnancy
                            monitoring, fetal growth assessment, and
                            gynecological scans.
                          </p>
                          <ul>
                            <li>
                              Why it’s used: Detects fetal development,
                              identifies complications early, and guides
                              treatment.
                            </li>
                            <li>
                              Patient benefit: Clear, accurate imaging for
                              timely medical decisions.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/Ultrasound machine.avif"
                                alt="Ultrasound Machine"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal"></figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      Neonatal Warmer
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead2"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            An essential device for newborn care that maintains
                            the baby’s body temperature immediately after birth.
                          </p>
                          <ul>
                            <li>
                              Why it’s used: Prevents hypothermia in newborns
                              and supports stable post-delivery transition.
                            </li>
                            <li>
                              Patient benefit: Improves survival rates and
                              health outcomes for newborns.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/radiant-warmer-float-with-resuscitation-centre.png"
                                alt="Neonatal Warmer"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      NICU Facility
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead3"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            A fully equipped Neonatal Intensive Care Unit for
                            premature or critically ill newborns.
                          </p>

                          <ul>
                            <li>
                              Why it’s used: Provides advanced respiratory
                              support, monitoring, and emergency care for
                              newborns
                            </li>
                            <li>
                              Patient benefit: Round-the-clock expert care to
                              give fragile babies the best start in life.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/Neonatal-intensive-care-unit-equipments-apollo-hospitals.png"
                                alt="NICU Facility"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead4">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      CTG Machine (Cardiotocography)
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead4"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            A fetal monitoring system that records fetal heart
                            rate and uterine contractions.
                          </p>

                          <ul>
                            <li>
                              Why it’s used: Detects signs of fetal distress
                              during pregnancy or labor.
                            </li>
                            <li>
                              Patient benefit: Early intervention for safer
                              deliveries.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/Respbuy_LuckCome_CTG-570x570.png.webp"
                                alt=" CTG Machine (Cardiotocography)"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead5">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="false"
                      aria-controls="faq5"
                    >
                      LUI Centrifuge Machine
                    </button>
                  </h2>
                  <div
                    id="faq5"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead5"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            A laboratory device used for blood and sample
                            separation in diagnostic testing.
                          </p>

                          <ul>
                            <li>
                              Why it’s used: Ensures precise lab results for
                              accurate medical treatment.
                            </li>
                            <li>
                              Patient benefit: Fast, reliable test reports for
                              timely care.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/rmi-centrifuge-medico-plus-500x500.webp"
                                alt="LUI Centrifuge Machine"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead6">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq6"
                      aria-expanded="false"
                      aria-controls="faq6"
                    >
                      Suction and Evacuation Machine
                    </button>
                  </h2>
                  <div
                    id="faq6"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead6"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            A surgical tool for safe removal of uterine contents
                            during certain gynecological procedures.
                          </p>

                          <ul>
                            <li>
                              Why it’s used: Manages incomplete miscarriages,
                              molar pregnancies, and medical terminations.
                            </li>
                            <li>
                              Patient benefit: Minimizes complications with
                              quick, sterile procedures.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/NEU_Grid-Bild_Record55.png"
                                alt="Suction and Evacuation Machine"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead7">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq7"
                      aria-expanded="false"
                      aria-controls="faq7"
                    >
                      Laparoscopic Equipment
                    </button>
                  </h2>
                  <div
                    id="faq7"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead7"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Advanced minimally invasive surgery tools for
                            gynecological and abdominal procedures.
                          </p>
                          <ul>
                            <li>
                              Why it’s used: Treats conditions like fibroids,
                              ovarian cysts, and endometriosis with small
                              incisions.
                            </li>
                            <li>
                              Patient benefit: Less pain, minimal scarring, and
                              faster recovery.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/1655357382585206.png"
                                alt="Laparoscopic Equipment"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead8">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq8"
                      aria-expanded="false"
                      aria-controls="faq8"
                    >
                      HSG Equipment (Hysterosalpingography)
                    </button>
                  </h2>
                  <div
                    id="faq8"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead8"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Specialized X-ray imaging equipment for examining
                            the uterus and fallopian tubes.
                          </p>

                          <ul>
                            <li>
                              Why it’s used: Detects blockages, abnormalities,
                              and infertility causes.
                            </li>
                            <li>
                              Patient benefit: Accurate diagnosis for effective
                              fertility treatment planning.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/MRI-SKAN-C-1.webp"
                                alt="HSG Equipment (Hysterosalpingography)"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="false"
                      aria-controls="faq1"
                    >
                      Pneumatic & Electric Power System
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            At Mrityunjay Orthopedic Hospital, Meerut, under the
                            leadership of Dr. Shubhankar Shekhar, we take pride
                            in our advanced infrastructure that supports
                            world-class orthopedic care. A key part of this is
                            our Pneumatic & Electric Power System, which powers
                            precision surgical tools, medical devices, and
                            operating room equipment. These systems ensure
                            smooth, efficient operations during procedures,
                            enabling surgeons to work with enhanced accuracy and
                            reliability. System 9, one of the most coveted
                            systems throughout the world, known for its enhanced
                            sterility, precision and power, is used to its full
                            potential for the Pneumatic-powered instruments
                            allow minimally invasive techniques with reduced
                            tissue trauma and faster recovery, while
                            electric-powered systems provide consistent, precise
                            control even in complex surgeries. Together, they
                            reflect our commitment to delivering cutting-edge
                            technology, superior patient care, and exceptional
                            surgical outcomes.
                          </p>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/1pneumatic-electric-power-system.jpg"
                                alt="Pneumatic & Electric Power System"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal"></figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      Electric Tourniquet System
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead2"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Essential for orthopedic surgery, the Electric
                            Tourniquet System temporarily restricts blood flow
                            to the limb being operated on.
                          </p>

                          <ul>
                            <li>
                              Benefits: Provides a clear, bloodless surgical
                              field, reduces bleeding, and improves surgical
                              precision.
                            </li>
                            <li>
                              Outcome: Shorter surgery times, safer procedures,
                              and improved patient recovery.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/2electric-tourniquet-system.jpg"
                                alt="Electric Tourniquet System"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      Arthroscopy Equipment
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead3"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Our high-definition arthroscopy system offers
                            crystal-clear visualization of joints for both
                            diagnostic and surgical procedures.
                          </p>

                          <ul>
                            <li>
                              Benefits: Accurate repairs of ligaments,
                              cartilage, and tendons via tiny incisions.
                            </li>
                            <li>
                              Outcome: Less pain, minimal scarring, and faster
                              post-surgery recovery.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/3arthroscopy-equipment.jpg"
                                alt="Arthroscopy Equipment"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            

           

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead8">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq8"
                      aria-expanded="false"
                      aria-controls="faq8"
                    >
                      C-Arm
                    </button>
                  </h2>
                  <div
                    id="faq8"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead8"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Mobile, high-resolution C-Arm imaging allows
                            real-time visualization during fracture fixation,
                            spine surgery, and joint replacement.
                          </p>

                          <ul>
                            <li>
                              Benefits: Improved accuracy, safe implant
                              placement, and minimal radiation exposure.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/8c-arm.jpg"
                                alt="C-Arm"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead12">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq12"
                      aria-expanded="false"
                      aria-controls="faq12"
                    >
                      Digital Radiography (DR) X-ray System
                    </button>
                  </h2>
                  <div
                    id="faq12"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead12"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Our Siemens DR X-ray System provides fast, clear
                            images for diagnosing fractures and orthopedic
                            conditions.
                          </p>

                          <ul>
                            <li>
                              Benefits: Lower radiation, quicker diagnosis, and
                              better treatment planning.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/12DR-system-xray.jpg"
                                alt="Digital Radiography (DR) X-ray System"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead13">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq13"
                      aria-expanded="false"
                      aria-controls="faq13"
                    >
                      GE & Siemens Ventilators & Monitors
                    </button>
                  </h2>
                  <div
                    id="faq13"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead13"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            GE and Siemens ventilators and monitors ensure
                            patient safety during surgery and in critical care.
                          </p>

                          <ul>
                            <li>
                              Benefits: Real-time monitoring, precise
                              ventilation, and rapid response to patient needs.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/13advanced-ventilators-monitors.jpg"
                                alt="Advanced GE and Seimens Ventilators and monitors"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead14">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq14"
                      aria-expanded="false"
                      aria-controls="faq14"
                    >
                      High-Grade Anesthesia Machines
                    </button>
                  </h2>
                  <div
                    id="faq14"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead14"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Our GE and Skanray anesthesia machines deliver
                            precise, safe anesthesia during orthopedic
                            surgeries.
                          </p>

                          <ul>
                            <li>
                              Benefits: Advanced safety features, optimized
                              dosing, and reduced perioperative risks.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/14-high-grade-anesthesia-machines.jpg"
                                alt="Highest grade Anaesthesia machines"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead15">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq15"
                      aria-expanded="false"
                      aria-controls="faq15"
                    >
                      Ultra High-Speed Burr System
                    </button>
                  </h2>
                  <div
                    id="faq15"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead15"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            The Stryker CORE 2 Ultra High-Speed Burr enables
                            delicate bone shaping and cutting with unmatched
                            precision.
                          </p>

                          <ul>
                            <li>
                              Benefits: Reduced bone trauma, minimal heat, and
                              faster healing.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/15ultra-high-speed-burr.jpg"
                                alt="Ultra High speed Burr"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead16">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq16"
                      aria-expanded="false"
                      aria-controls="faq16"
                    >
                      Centralized EMR System
                    </button>
                  </h2>
                  <div
                    id="faq16"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead16"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            Our Electronic Medical Records (EMR) system ensures
                            seamless patient data management.
                          </p>

                          <ul>
                            <li>
                              Benefits: Instant access to medical history,
                              imaging, and lab results for accurate, coordinated
                              care.
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/16centralised-EMR.jpg"
                                alt="Centralised EMR"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead17">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq17"
                      aria-expanded="false"
                      aria-controls="faq17"
                    >
                      Mobile DR X-ray
                    </button>
                  </h2>
                  <div
                    id="faq17"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead17"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                           Portable digital X-ray system allows bedside imaging in ICU and OT.
                          </p>

                          <ul>
                            <li>Benefits: Patient comfort, no transport risks, and real-time surgical decision-making.</li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/17mobile-DR-system.jpg"
                                alt="Mobile DR system"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead18">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq18"
                      aria-expanded="false"
                      aria-controls="faq18"
                    >
                      Specialized OR Table
                    </button>
                  </h2>
                  <div
                    id="faq18"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead18"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            The Specialised Operating Room Table at Mrityunjay
                            Orthopedic Hospital, Meerut is customized for
                            muscle-sparing joint replacements, allowing Dr.
                            Shubhankar Shekhar to perform precise, minimally
                            invasive surgeries with better exposure and
                            positioning.
                          </p>

                          <p class="mt-3">
                            This advanced OR table supports patient stability,
                            optimal surgical angles, and smoother workflows,
                            helping reduce operative times and improve recovery
                            outcomes. It’s a key part of the hospital’s
                            commitment to offering cutting-edge orthopedic
                            surgery techniques.
                          </p>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/18specialised-OR-table.jpg"
                                alt="Specialised OR Table"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="faqhead19">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq19"
                      aria-expanded="false"
                      aria-controls="faq19"
                    >
                      Joint Replacement Robot
                    </button>
                  </h2>
                  <div
                    id="faq19"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqhead19"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-lg-8">
                          <p>
                            The MAKO by Stryker Joint Replacement Robot at
                            Mrityunjay Orthopedic Hospital, Meerut enhances
                            surgical precision by combining 3D planning with
                            robotic-assisted execution. Under Dr. Shubhankar
                            Shekhar’s guidance, this robot allows for highly
                            accurate implant placement, preserving more natural
                            bone and soft tissue.
                          </p>

                          <p class="mt-3">
                            Patients benefit from faster recovery, less pain,
                            and longer-lasting joint replacements. The MAKO
                            robot places the hospital at the forefront of
                            advanced, patient-centered orthopedic surgery in the
                            region.
                          </p>
                        </div>
                        <div class="col-lg-4">
                          <div class="how-work-image-box-2 rounded-4">
                            <div class="how-work-img-2">
                              <img
                                src="images/infra-equip/19joint-replacement-robot.jpg"
                                alt="Joint Replacement ROBOT"
                                loading="lazy"
                              />
                              {/* <figure class="image-anime reveal">
                              </figure> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Start */}
    </>
  );
};

export default InfraEquipment;

// <div class="accordion-item">
//                   <h2 class="accordion-header" id="faqhead7">
//                     <button
//                       class="accordion-button collapsed"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#faq7"
//                       aria-expanded="false"
//                       aria-controls="faq7"
//                     >
//                       Physiotherapy & Rehabilitation Unit
//                     </button>
//                   </h2>
//                   <div
//                     id="faq7"
//                     class="accordion-collapse collapse"
//                     aria-labelledby="faqhead7"
//                     data-bs-parent="#accordion2"
//                   >
//                     <div class="accordion-body">
//                       <div class="row">
//                         <div class="col-lg-8">
//                           <p>
//                             The Physiotherapy & Rehabilitation Unit at
//                             Mrityunjay Orthopedic Hospital, Meerut plays a key
//                             role in patients’ recovery journeys after orthopedic
//                             surgeries or injuries. Led by Dr. Shubhankar
//                             Shekhar, the unit offers personalized rehabilitation
//                             plans tailored to restore joint function, muscle
//                             strength, and mobility.
//                           </p>

//                           <p class="mt-3">
//                             Equipped with modern physiotherapy tools,
//                             electrotherapy devices, and supervised exercise
//                             programs, the unit ensures that patients achieve
//                             optimal recovery. The team’s focus on functional
//                             rehabilitation and long-term maintenance helps
//                             prevent re-injury and empowers patients to return to
//                             their normal daily activities with confidence.
//                           </p>
//                         </div>
//                         <div class="col-lg-4">
//                           <div class="how-work-image-box-2 rounded-4">
//                             <div class="how-work-img-2">
//                               <img
//                                 src="images/infra-equip/7physiotherapy-rehabilitation-unit.jpg"
//                                 alt="Physiotherapy & Rehabilitation Unit"
//                                 loading="lazy"
//                               />
//                               {/* <figure class="image-anime reveal">
//                               </figure> */}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

// <div class="accordion-item">
//                 <h2 class="accordion-header" id="faqhead10">
//                   <button
//                     class="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#faq10"
//                     aria-expanded="false"
//                     aria-controls="faq10"
//                   >
//                     Advanced Sterilisation Protocols
//                   </button>
//                 </h2>
//                 <div
//                   id="faq10"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="faqhead10"
//                   data-bs-parent="#accordion2"
//                 >
//                   <div class="accordion-body">
//                     <div class="row">
//                       <div class="col-lg-8">
//                         <p>
//                           At Mrityunjay Orthopedic Hospital, Meerut, advanced
//                           sterilization protocols using Cold Plasma and Steam
//                           technology ensure the highest levels of infection
//                           control. These systems allow for safe, thorough
//                           sterilization of surgical instruments, implants, and
//                           operating environments, safeguarding patients during
//                           every procedure performed by Dr. Shubhankar Shekhar.
//                         </p>

//                         <p class="mt-3">
//                           Cold plasma offers low-temperature sterilization for
//                           delicate instruments, while steam sterilizers
//                           provide deep cleaning for robust surgical tools.
//                           Together, they reflect the hospital’s commitment to
//                           international standards of safety, ensuring a
//                           sterile environment for every orthopedic
//                           intervention.
//                         </p>
//                       </div>
//                       <div class="col-lg-4">
//                         <div class="how-work-image-box-2 rounded-4">
//                           <div class="how-work-img-2">
//                             <img
//                               src="images/infra-equip/10advanced-sterilisation-protocols.jpg"
//                               alt="Advanced sterilisation (Cold Plasma and steam)"
//                               loading="lazy"
//                             />
//                             {/* <figure class="image-anime reveal">
//                             </figure> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//  <div class="accordion-item">
//                 <h2 class="accordion-header" id="faqhead11">
//                   <button
//                     class="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#faq11"
//                     aria-expanded="false"
//                     aria-controls="faq11"
//                   >
//                     DEXA Scan
//                   </button>
//                 </h2>
//                 <div
//                   id="faq11"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="faqhead11"
//                   data-bs-parent="#accordion2"
//                 >
//                   <div class="accordion-body">
//                     <div class="row">
//                       <div class="col-lg-8">
//                         <p>
//                           The DEXA (Dual-Energy X-ray Absorptiometry) system
//                           by GE at Mrityunjay Orthopedic Hospital, Meerut
//                           provides precise bone density measurements, crucial
//                           for diagnosing osteoporosis and monitoring bone
//                           health. Under Dr. Shubhankar Shekhar’s guidance,
//                           this tool supports preoperative planning and
//                           postoperative assessment, especially in elderly or
//                           high-risk patients.
//                         </p>

//                         <p class="mt-3">
//                           By detecting early signs of bone loss, DEXA allows
//                           for proactive treatments that strengthen bones and
//                           reduce fracture risk. The integration of this
//                           advanced diagnostic technology ensures
//                           comprehensive, preventive orthopedic care for every
//                           patient at the hospital.
//                         </p>
//                       </div>
//                       <div class="col-lg-4">
//                         <div class="how-work-image-box-2 rounded-4">
//                           <div class="how-work-img-2">
//                             <img
//                               src="images/infra-equip/11DEXA-scan.jpg"
//                               alt="DEXA"
//                               loading="lazy"
//                             />
//                             {/* <figure class="image-anime reveal">
//                             </figure> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

// <div class="accordion-item">
//               <h2 class="accordion-header" id="faqhead9">
//                 <button
//                   class="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#faq9"
//                   aria-expanded="false"
//                   aria-controls="faq9"
//                 >
//                   World’s Most Advanced Orthopedic Robot
//                 </button>
//               </h2>
//               <div
//                 id="faq9"
//                 class="accordion-collapse collapse"
//                 aria-labelledby="faqhead9"
//                 data-bs-parent="#accordion2"
//               >
//                 <div class="accordion-body">
//                   <div class="row">
//                     <div class="col-lg-8">
//                       <p>
//                         The MAKO Stryker Orthopaedic Robot at Mrityunjay
//                         Orthopedic Hospital, Meerut represents the pinnacle
//                         of robotic-assisted joint replacement. Under Dr.
//                         Shubhankar Shekhar’s leadership, this system allows
//                         surgeons to perform knee and hip replacements with
//                         unparalleled precision, using preoperative 3D
//                         planning and real-time intraoperative adjustments.
//                       </p>

//                       <p class="mt-3">
//                         With MAKO, patients experience more accurate implant
//                         placement, less bone and soft tissue trauma, and
//                         faster recovery times. This world-class robotic
//                         system positions Mrityunjay Orthopedic Hospital,
//                         Meerut as a regional leader in advanced orthopedic
//                         care, delivering outstanding results for patients
//                         seeking cutting-edge surgical solutions.
//                       </p>
//                     </div>
//                     <div class="col-lg-4">
//                       <div class="how-work-image-box-2 rounded-4">
//                         <div class="how-work-img-2">
//                           <img
//                             src="images/infra-equip/9advanced-orthopaedic-robot.jpg"
//                             alt="World's most advanced Orthopaedic robot"
//                             loading="lazy"
//                           />
//                           {/* <figure class="image-anime reveal">
//                           </figure> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>





                // <div class="accordion-item">
                //   <h2 class="accordion-header" id="faqhead5">
                //     <button
                //       class="accordion-button collapsed"
                //       type="button"
                //       data-bs-toggle="collapse"
                //       data-bs-target="#faq5"
                //       aria-expanded="false"
                //       aria-controls="faq5"
                //     >
                //       Dedicated Orthopaedic OT
                //     </button>
                //   </h2>
                //   <div
                //     id="faq5"
                //     class="accordion-collapse collapse"
                //     aria-labelledby="faqhead5"
                //     data-bs-parent="#accordion2"
                //   >
                //     <div class="accordion-body">
                //       <div class="row">
                //         <div class="col-lg-8">
                //           <p>
                //             Our Dedicated Orthopedic Operating Theater is
                //             equipped with laminar airflow, HEPA filtration, and
                //             specialized lighting.
                //           </p>

                //           <ul>
                //             <li>
                //               Benefits: Reduced infection risk, seamless
                //               surgical workflow, and enhanced precision.
                //             </li>
                //           </ul>
                //         </div>
                //         <div class="col-lg-4">
                //           <div class="how-work-image-box-2 rounded-4">
                //             <div class="how-work-img-2">
                //               <img
                //                 src="images/infra-equip/5dedicated-orthopaedic-OT.jpg"
                //                 alt="Orthopaedic OT"
                //                 loading="lazy"
                //               />
                //               {/* <figure class="image-anime reveal">
                //               </figure> */}
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>


                //      <div class="accordion-item">
                //   <h2 class="accordion-header" id="faqhead6">
                //     <button
                //       class="accordion-button collapsed"
                //       type="button"
                //       data-bs-toggle="collapse"
                //       data-bs-target="#faq6"
                //       aria-expanded="false"
                //       aria-controls="faq6"
                //     >
                //       Specialized Orthopedic ICU
                //     </button>
                //   </h2>
                //   <div
                //     id="faq6"
                //     class="accordion-collapse collapse"
                //     aria-labelledby="faqhead6"
                //     data-bs-parent="#accordion2"
                //   >
                //     <div class="accordion-body">
                //       <div class="row">
                //         <div class="col-lg-8">
                //           <p>
                //             Post-surgical orthopedic patients receive
                //             round-the-clock care in our Specialized ICU with
                //             advanced monitoring systems.
                //           </p>
                //           <ul>
                //             <li>
                //               Benefits: Early complication detection, rapid
                //               intervention, and specialized recovery protocols.
                //             </li>
                //           </ul>
                //         </div>
                //         <div class="col-lg-4">
                //           <div class="how-work-image-box-2 rounded-4">
                //             <div class="how-work-img-2">
                //               <img
                //                 src="images/infra-equip/6specialized-ICU.jpg"
                //                 alt="Specialized ICU"
                //                 loading="lazy"
                //               />
                //               {/* <figure class="image-anime reveal">
                //               </figure> */}
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>



                //     <div class="accordion-item">
                //   <h2 class="accordion-header" id="faqhead4">
                //     <button
                //       class="accordion-button collapsed"
                //       type="button"
                //       data-bs-toggle="collapse"
                //       data-bs-target="#faq4"
                //       aria-expanded="false"
                //       aria-controls="faq4"
                //     >
                //       Joint Replacement Equipment
                //     </button>
                //   </h2>
                //   <div
                //     id="faq4"
                //     class="accordion-collapse collapse"
                //     aria-labelledby="faqhead4"
                //     data-bs-parent="#accordion2"
                //   >
                //     <div class="accordion-body">
                //       <div class="row">
                //         <div class="col-lg-8">
                //           <p>
                //             We use latest-generation joint replacement
                //             instruments for hip, knee, and shoulder surgeries.
                //           </p>

                //           <ul>
                //             <li>
                //               Benefits: Accurate implant positioning, proper
                //               joint alignment, and long-lasting results.
                //             </li>
                //             <li>
                //               Outcome: Restored mobility, reduced pain, and
                //               improved quality of life.
                //             </li>
                //           </ul>
                //         </div>
                //         <div class="col-lg-4">
                //           <div class="how-work-image-box-2 rounded-4">
                //             <div class="how-work-img-2">
                //               <img
                //                 src="images/infra-equip/4joint-replacement-equipment.jpg"
                //                 alt="Joint Replacement Equipment"
                //                 loading="lazy"
                //               />
                //               {/* <figure class="image-anime reveal">
                //               </figure> */}
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>


                //   <div class="accordion-item">
                //   <h2 class="accordion-header" id="faqhead11">
                //     <button
                //       class="accordion-button collapsed"
                //       type="button"
                //       data-bs-toggle="collapse"
                //       data-bs-target="#faq11"
                //       aria-expanded="false"
                //       aria-controls="faq11"
                //     >
                //       DEXA Scan
                //     </button>
                //   </h2>
                //   <div
                //     id="faq11"
                //     class="accordion-collapse collapse"
                //     aria-labelledby="faqhead11"
                //     data-bs-parent="#accordion2"
                //   >
                //     <div class="accordion-body">
                //       <div class="row">
                //         <div class="col-lg-8">
                //           <p>
                //             The DEXA (Dual-Energy X-ray Absorptiometry) system
                //             by GE at Mrityunjay Orthopedic Hospital, Meerut
                //             provides precise bone density measurements, crucial
                //             for diagnosing osteoporosis and monitoring bone
                //             health. Under Dr. Shubhankar Shekhar’s guidance,
                //             this tool supports preoperative planning and
                //             postoperative assessment, especially in elderly or
                //             high-risk patients.
                //           </p>

                //           <p class="mt-3">
                //             By detecting early signs of bone loss, DEXA allows
                //             for proactive treatments that strengthen bones and
                //             reduce fracture risk. The integration of this
                //             advanced diagnostic technology ensures
                //             comprehensive, preventive orthopedic care for every
                //             patient at the hospital.
                //           </p>
                //         </div>
                //         <div class="col-lg-4">
                //           <div class="how-work-image-box-2 rounded-4">
                //             <div class="how-work-img-2">
                //               <img
                //                 src="images/infra-equip/11DEXA-scan.jpg"
                //                 alt="DEXA"
                //                 loading="lazy"
                //               />
                //               {/* <figure class="image-anime reveal">
                //               </figure> */}
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>