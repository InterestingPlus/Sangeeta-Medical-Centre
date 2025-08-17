import BreadCrumb from "../components/BreadCrumb";
import ImageGallery from "../components/ImageGallary";

const Gallary = () => {
  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title="Our Gallery"
        page="Gallery"
      />

      {/* Gallery Section Start */}
      <div className="page-about-us" id="Legacy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="page-about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Our Gallery
                  </h2>
                  <p>
                    Established over 35 years ago, Sangeeta Ortho and Gynae
                    Medical Center has become a trusted name in orthopedic and
                    gynecological care in Meerut.
                  </p>
                  <p>
                    Founded with the vision of providing ethical, compassionate,
                    and expert medical services, our center has treated
                    thousands of patients with dedication and excellence.
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
                    src="/images/about/DSC_0106.jpg"
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
      {/* Gallery Section End */}

      <ImageGallery/>
    </>
  );
};

export default Gallary;
