import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const Procedures = () => {
    const CircularCheckBox = () => {
    return (
     <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ paddingRight: "8px" }}  // adjust padding as needed
>
  <circle cx="12" cy="12" r="12" fill="#f7941d" />
  <path
    d="M9.00001 12.5L11 14.5L15 10.5"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

    );
  };
  return (
    <>
    <style>
        {`
    .custom-list ul {
      list-style: none;
      padding-left: 0;
    }
    .custom-list ul li::before {
      display: none !important;
      content: none !important;
    }
      .icon-padding-right {
  padding-right: 8px; /* or margin-right: 8px; */
  display: inline-block; /* ensures padding/margin applies properly */
}
  `}
      </style>
      <BreadCrumb
        // image="images/breadcrumb.jpg"
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Orthopaedic Procedures Meerut"
        page="Procedures"
      />

      {/* Section Start */}
      <div className="page-about-us ptb60" id="Legacy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Procedures 
                  </h2>
                  <p className="mt-2">
                    Every procedure is not just a surgery, but a benchmark of
                    precision, ethics, and outcome-led care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2 bg-light" id="Joint">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/Joint Replacement Surgery.jpg"
                    alt="Joint Replacement Surgery (Robotic & Muscle-Sparing) Meerut"
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
                    Joint Replacement Surgery – Dr. Raman Jindal
                  </h2>
                  <p className="mt-3">
                    Joint replacement surgery has evolved significantly with the
                    advent of robotics. Dr. Raman Jindal, a highly experienced
                    orthopedic doctor in Meerut, offers knee and hip replacement
                    surgeries for unmatched accuracy, minimal pain, and faster
                    recovery. Recognized as one of the best orthopedic doctors
                    in Meerut, he uses advanced robotic-assisted systems to
                    ensure precise implant positioning and longer-lasting
                    results.
                  </p>
                  <p className="mt-3">
                    At Sangeeta Ortho and Gynae Center, Dr. Raman Jindal
                    combines his orthopedic expertise with cutting-edge
                    technology to create customized surgical plans for each
                    patient. The system allows for better alignment, improved
                    joint movement, and reduced post-surgical complications
                    compared to traditional methods.
                  </p>
                  <p className="mt-3">
                    Patients searching for an orthopedic doctor near me choose
                    Dr. Raman Jindal for joint replacements because of the
                    quicker recovery times, shorter hospital stays, and enhanced
                    post-operative outcomes.
                  </p>
                  <p className="mt-3">
                    If you are suffering from severe arthritis or joint
                    degeneration and are looking for an orthopedic doctor Meerut
                    who offers the most advanced treatment, Dr. Raman Jindal’s
                    joint replacement surgery is the future of pain-free
                    mobility.
                  </p>

                  {/* <div className="custom-list mt-3">
                    <ul>
                      <li>
                        <strong>Micron-level implant alignment</strong> using
                        AI-assisted robotics
                      </li>
                      <li>
                        <strong>
                          Preservation of key muscles and ligaments
                        </strong>
                        , leading to reduced pain
                      </li>
                      <li>
                        <strong>Minimal physiotherapy</strong> with early
                        weight-bearing possible within 24–48 hours
                      </li>
                      <li>
                        <strong>Higher long-term success rates</strong> and
                        superior post-op mobility
                      </li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    This technique is particularly valuable for younger, active
                    patients and those seeking a faster, safer return to normal
                    life.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2" id="Trauma">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Trauma & Fracture Surgery
                  </h2>
                  <p className="mt-3">
                    Accidents and injuries can cause complex fractures that
                    require immediate expert care. Dr. Raman Jindal, a trusted
                    orthopedic doctor in Meerut, specializes in trauma and
                    fracture surgery for patients of all ages. Known as one of
                    the best orthopedic doctors in Meerut, he provides emergency
                    care for fractures, dislocations, ligament injuries, and
                    multiple trauma cases.
                  </p>
                  <p className="mt-3">
                    At Sangeeta Ortho and Gynae Center, Dr. Raman Jindal uses
                    advanced orthopedic surgical methods such as internal
                    fixation, external fixation, and minimally invasive fracture
                    repair to stabilize injuries and promote fast healing. His
                    expertise ensures proper bone alignment, reduced pain, and
                    prevention of long-term complications
                  </p>
                  <p className="mt-3">
                    People searching for an orthopedic doctor near me during
                    emergencies trust Dr. Raman Jindal for his quick response,
                    accurate diagnosis, and effective surgical intervention.
                  </p>
                  <p className="mt-3">
                    If you are looking for an orthopedic doctor Meerut for
                    accident-related bone injuries, Dr. Raman Jindal offers
                    life-saving orthopedic trauma care with precision and
                    compassion.
                  </p>

                  {/* <div className="custom-list mt-3">
                    <ul>
                      <li>
                        <strong>
                          Acetabular, pelvic, and periarticular fractures
                        </strong>{" "}
                        managed with 3D planning
                      </li>
                      <li>
                        <strong>Minimally invasive internal fixation</strong> to
                        preserve soft tissue and bone health
                      </li>
                      <li>
                        <strong>Early mobilization</strong> protocols that
                        reduce complications like DVT or stiffness
                      </li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    His trauma care is rooted in restoring life — not just
                    stabilizing bones.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/Trauma & Fracture Surgery.jpg"
                    alt="Trauma & Fracture Surgery Meerut"
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

      <div
        className="page-about-us bg-radius-section2 bg-light"
        id="Arthroscopic"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/Arthroscopic Surgery.jpeg"
                    alt="Arthroscopic Surgery (Keyhole Precision) Meerut"
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
                   Arthroscopic Surgery – Dr. Raman Jindal
                  </h2>
                  <p className="mt-3">
                   Arthroscopic surgery is a minimally invasive orthopedic technique that uses a small camera and instruments to treat joint problems. Dr. Raman Jindal, a leading orthopedic doctor in Meerut, is an expert in arthroscopic procedures for knees and shoulders, including ACL/PCL reconstruction, meniscus repair, and shoulder arthroscopy.
                  </p>
                  <p className="mt-3">
                   As one of the best orthopedic doctors in Meerut, Dr. Raman Jindal ensures smaller incisions, faster recovery, and minimal post-operative pain for his patients. Arthroscopy allows him to diagnose and treat joint problems with precision, preserving healthy tissue and restoring mobility.
                    </p>
                  <p className="mt-3">
                   Patients searching for an orthopedic doctor near me for sports injuries or ligament tears often choose Dr. Raman Jindal for his skill in arthroscopic surgery and successful rehabilitation programs.
                    </p>
                  <p className="mt-3">
                   If you are looking for an orthopedic doctor Meerut who can offer advanced, minimally invasive joint care, Dr. Raman Jindal provides world-class arthroscopic treatments.

                    </p>

                  {/* <div className="custom-list mt-3">
                    <ul>
                      <li>
                        <strong>ACL/PCL reconstruction</strong>, rotator cuff
                        repair, labral tear repair
                      </li>
                      <li>
                        <strong>Stitch-free ports</strong>, resulting in minimal
                        scarring and rapid healing
                      </li>
                      <li>
                        <strong>Return-to-sport pathways</strong> tailored to
                        athletes and fitness-conscious patients
                      </li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    Every movement matters — arthroscopy at MOH ensures they
                    return stronger.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2" id="Pediatric">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                   Pediatric Orthopedic – Dr. Raman Jindal
                  </h2>
                  <p className="mt-3">
                  Children’s bone and joint problems need specialized, gentle care. Dr. Raman Jindal, a trusted orthopedic doctor in Meerut, provides advanced pediatric orthopedic treatments for conditions such as clubfoot correction (CTEV), limb deformities, and growth-related orthopedic conditions.

                  </p>
                  <p className="mt-3">
                  As one of the best orthopedic doctors in Meerut, Dr. Raman Jindal ensures accurate diagnosis, child-friendly treatment methods, and long-term correction of bone and joint issues. His expertise in pediatric orthopedics helps children achieve normal growth and pain-free movement.

                  </p>
                  <p className="mt-3">
                  Parents searching online for an orthopedic doctor near me prefer Dr. Raman Jindal for his compassionate approach, safe techniques, and high success rate in treating young patients.

                  </p>
                  <p className="mt-3">
                  If you need an orthopedic doctor Meerut for your child’s bone or joint care, Dr. Raman Jindal offers trusted, specialized, and effective pediatric orthopedic solutions.

                  </p>

                 
                  {/* <div className="custom-list mt-3">
                    <ul>
                      <li>
                        <strong>Congenital deformities</strong> (clubfoot, DDH)
                      </li>
                      <li>
                        <strong>Growth plate fractures</strong>, managed to
                        avoid future deformity
                      </li>
                      <li>
                        <strong>Spine and limb alignment</strong> disorders in
                        children
                      </li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    He approaches pediatric cases with clinical maturity and
                    human sensitivity, ensuring parents feel informed and
                    involved. 
                  </p>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/Pediatric Orthopedic Surgery.jpg"
                    alt="Pediatric Orthopedic Surgery Meerut"
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

      <div
        className="page-about-us bg-radius-section2 bg-light"
        id="Kyphoplasty"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/Direct Anterior Hip Replacement .jpg"
                    alt="Kyphoplasty Treatment Meerut"
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
                    Direct Anterior Hip Replacement – Dr. Raman Jindal

                  </h2>
                  <p className="mt-3">
                   The direct anterior hip replacement is a modern, muscle-sparing technique that offers faster recovery and less pain after surgery. Dr. Raman Jindal, a top orthopedic doctor in Meerut, specializes in this approach to help patients walk within days and resume normal activities quickly.

                   
                  </p>
                  <p className="mt-3">
                   Known as one of the best orthopedic doctors in Meerut, Dr. Raman Jindal uses advanced implants and precise surgical techniques to ensure natural joint movement and long-term durability. This method reduces the risk of dislocation, minimizes scarring, and shortens hospital stays.

                  </p>
                  <p className="mt-3">
                   Patients searching for an orthopedic doctor near me for hip replacement choose Dr. Raman Jindal for his expertise and commitment to patient comfort.


                  </p>
                  <p className="mt-3">
                   If you are looking for an orthopedic doctor Meerut offering advanced hip replacement options, Dr. Raman Jindal’s direct anterior hip replacement delivers exceptional results.


                  </p>

{/*                   
                  <div className="custom-list mt-3">
                    <ul>
                      <li>
                        <strong>Immediately reduce fracture pain</strong>
                      </li>
                      <li>
                        <strong>
                          Prevent further spinal collapse or curvature
                        </strong>
                      </li>
                      <li>
                        <strong>Restore posture and function</strong> without
                        open surgery
                      </li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    It’s a game-changer for patients who cannot tolerate major
                    spine surgeries.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="page-about-us bg-radius-section2 bg-light" id="delivery">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Normal-&-High-Risk-Delivery.jpg"
                    alt="Normal & High-Risk Delivery Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Normal & High-Risk Delivery
                  </h2>
                  <p className="mt-3">
                    Expert pregnancy care from the first trimester to postnatal
                    recovery. Dr. Chaudhary specializes in safe childbirth,
                    including the management of high-risk pregnancies caused by
                    conditions like gestational diabetes, hypertension, and
                    multiple pregnancies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2" id="laparoscopic">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Laparoscopic Gynecological Surgeries
                  </h2>
                  <p className="mt-3">
                    Minimally invasive surgeries for faster recovery and minimal
                    scarring. Dr. Chaudhary performs a range of laparoscopic
                    procedures including:
                  </p>
                  <div className="custom-list mt-3">
                    <ul>
                       <li>  <CircularCheckBox/>
                       
                        <strong>Ovarian cyst removal</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                          
                        <strong>Fibroid removal (Myomectomy)</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>Hysterectomy (Uterus removal)</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>Endometriosis treatment</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Laparoscopic-Gynecological-Surgeries.jpg"
                    alt="Laparoscopic Gynecological Surgeries Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="page-about-us bg-radius-section2 bg-light"
        id="infertility"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Infertility-Procedures.jpg"
                    alt="Infertility Procedures Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Infertility Procedures
                  </h2>
                  <p className="mt-3">
                    Dr. Chaudhary offers personalized fertility solutions,
                    helping couples navigate their journey to parenthood.
                    Services include:
                  </p>
                  <div className="custom-list mt-3">
                    <ul>
                       <li>  <CircularCheckBox/>
                        <strong>Ovulation induction</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>IUI (Intrauterine Insemination)</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>IVF (In-Vitro Fertilization)</strong> referrals
                        with specialist coordination
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2" id="menstrual">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Menstrual Disorder Management
                  </h2>
                  <p className="mt-3">
                    Comprehensive treatment for a variety of menstrual issues,
                    helping patients regain comfort and regularity. Dr.
                    Chaudhary provides care for:
                  </p>
                  <div className="custom-list mt-3">
                    <ul>
                       <li>  <CircularCheckBox/>
                        <strong>Irregular or missed periods</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>Heavy menstrual bleeding</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>PCOD/PCOS</strong>-related cycle issues
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Menstrual-Disorder-Management.jpg"
                    alt="Menstrual Disorder Management Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2 bg-light" id="PCOD">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/PCODPCOS-Hormonal-Treatment.jpg"
                    alt="PCOD/PCOS Hormonal Treatment Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    PCOD/PCOS Hormonal Treatment
                  </h2>
                  <p className="mt-3">
                    A comprehensive approach to PCOD/PCOS combining medical
                    treatment with guidance on diet and lifestyle changes to
                    restore hormonal balance and improve fertility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2" id="adolescent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Adolescent & Menopausal Care
                  </h2>
                  <p className="mt-3">
                    Specialized care tailored to the unique needs of women at
                    different life stages. Services include support for:
                  </p>
                  <div className="custom-list mt-3">
                    <ul>
                       <li>  <CircularCheckBox/>
                        <strong>Teenage menstrual and hormonal health</strong>
                      </li>
                       <li>  <CircularCheckBox/>
                        <strong>Menopause-related symptoms such as hot
                        flashes, mood swings, and bone health issues</strong> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Adolescent-&-Menopausal-Care.jpg"
                    alt="Adolescent & Menopausal Care Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="page-about-us bg-radius-section2 bg-light"
        id="painless-delivery"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/painless-delivery.png"
                    alt="Painless Delivery Options Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Painless Delivery Options
                  </h2>
                  <p className="mt-3">
                    Dr. Chaudhary offers advanced pain relief methods, including{" "}
                    <strong>epidural anesthesia</strong>, to ensure a
                    comfortable and positive birthing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us bg-radius-section2" id="family-planning">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Family Planning & Contraception
                  </h2>
                  <p className="mt-3">
                    Providing confidential and comprehensive guidance on safe
                    and effective birth control methods, including{" "}
                    <strong>IUD insertion</strong>, oral contraceptives, and
                    permanent sterilization.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Family-Planning-&-Contraception.jpg"
                    alt="Family Planning & Contraception Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="page-about-us bg-radius-section2 bg-light"
        id="diagnostics"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="how-work-image-box-2 rounded-4">
                <div className="how-work-img-2">
                  <img
                    src="/images/procedures/gyneco/Gynecological-Ultrasound-&-Diagnostics.jpg"
                    alt="Gynecological Ultrasound & Diagnostics Meerut"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="page-about-content-left">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Gynecological Ultrasound & Diagnostics
                  </h2>
                  <p className="mt-3">
                    Dr. Chaudhary's clinic is equipped with in-house ultrasound
                    and diagnostic services for accurate monitoring of pregnancy
                    progress and swift detection of gynecological conditions.
                  </p>
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

export default Procedures;
