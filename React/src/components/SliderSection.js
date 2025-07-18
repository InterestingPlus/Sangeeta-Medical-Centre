import React from "react";

const SliderSection = () => {
  return (
    <div class="hero hero-slider-layout bg-radius-section">
      <div class="swiper">
        <div class="swiper-wrapper" data-cursor-text="Drag">
          <div class="swiper-slide">
            <div class="hero-slide">
              <div class="hero-slider-image">
                <img
                  src="images/slider/1.jpg"
                  alt="Legacy of Healing. Excellence in Every Specialty."
                  loading="lazy"
                />
              </div>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-7">
                    <div class="hero-content">
                      <div class="section-title">
                        <h1 class="text-anime-style-3" data-cursor="-opaque">
                          Legacy of Healing. Excellence in Every Specialty.
                        </h1>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                          Serving Meerut with over 40 years of trusted medical
                          care, Mrityunjay Hospital is a name synonymous with
                          integrity, compassion, and clinical expertise. From
                          advanced orthopaedics to comprehensive critical care —
                          we bring world-class healthcare closer to you.
                        </p>
                      </div>
                      <div
                        class="hero-content-body wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <a
                          href="specialties.html"
                          title="Best orthopedic treatments in Meerut"
                          class="btn-default"
                        >
                          <span>explore services</span>
                        </a>
                        <a
                          href="contact.html#Appointment"
                          class="btn-default btn-highlighted"
                        >
                          <span>book appointment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="hero-slide">
              <div class="hero-slider-image">
                <img
                  src="images/slider/2.jpg"
                  alt="Where Modern Medicine Meets Human Touch."
                  loading="lazy"
                />
              </div>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-7">
                    <div class="hero-content">
                      <div class="section-title">
                        <h1 class="text-anime-style-3" data-cursor="-opaque">
                          Where Modern Medicine Meets Human Touch.
                        </h1>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                          At Mrityunjay Hospital, we blend advanced diagnostics,
                          expert doctors, and personalized care to treat every
                          patient with dignity and empathy. Because healing
                          isn’t just about technology — it’s about people who
                          care.
                        </p>
                      </div>
                      <div
                        class="hero-content-body wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <a
                          href="specialties.html"
                          title="Best orthopedic treatments in Meerut"
                          class="btn-default"
                        >
                          <span>explore services</span>
                        </a>
                        <a
                          href="contact.html#Appointment"
                          class="btn-default btn-highlighted"
                        >
                          <span>book appointment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="hero-slide">
              <div class="hero-slider-image">
                <img
                  src="images/slider/3.jpg"
                  alt="Trusted by Generations. Empowered by Innovation."
                  loading="lazy"
                />
              </div>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-7">
                    <div class="hero-content">
                      <div class="section-title">
                        <h1 class="text-anime-style-3" data-cursor="-opaque">
                          Trusted by Generations. Empowered by Innovation.
                        </h1>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                          With a legacy built on ethical practice and
                          innovation, Mrityunjay Hospital continues to lead the
                          way in surgical excellence, emergency response, and
                          multi-specialty care — guided by values, powered by
                          vision.
                        </p>
                      </div>
                      <div
                        class="hero-content-body wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <a
                          href="specialties.html"
                          title="Best orthopedic treatments in Meerut"
                          class="btn-default"
                        >
                          <span>explore services</span>
                        </a>
                        <a
                          href="contact.html#Appointment"
                          class="btn-default btn-highlighted"
                        >
                          <span>book appointment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-pagination"></div>
      </div>
    </div>
  );
};

export default SliderSection;
