import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const Gynecology = () => {
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
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Gynecological Procedures Meerut"
        page="Procedures/ Gynecology"
      />

      {/* Section Start */}
      <div className="page-about-us ptb60" id="Legacy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Gynecological & Obstetric Procedures
                  </h2>
                  <p className="mt-2">
                    Doctor provides a full spectrum of care for women at every
                    stage of life.
                  </p>
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
                    recovery. Sangeeta Medical Center specializes in safe childbirth,
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
                    scarring. Sangeeta Medical Center performs a range of laparoscopic
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
                    Sangeeta Medical Center offers personalized fertility solutions,
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
                    Sangeeta Medical Center offers advanced pain relief methods, including{" "}
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
                    Sangeeta Medical Center's clinic is equipped with in-house ultrasound
                    and diagnostic services for accurate monitoring of pregnancy
                    progress and swift detection of gynecological conditions.
                  </p>
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

export default Gynecology;
