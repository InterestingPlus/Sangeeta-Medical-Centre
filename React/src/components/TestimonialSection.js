import React from "react";

const TestimonialSection = () => {
  return (
    <div class="our-testimonial bg-radius-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="testimonial-content">
              <div class="section-title">
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Our Clients Reviews
                </h2>
                <p class="wow fadeInUp mb-4" data-wow-delay="0.25s">
                  At Mrityunjay Orthopedic Hospital, each success story reflects
                  the clinical excellence and patient-first commitment of Dr.
                  Shubhankar Shekhar. These are not just recoveries — they’re
                  lives transformed by surgical precision, compassionate care,
                  and futuristic technology.
                </p>
                <a
                  href="https://g.page/r/CZa_uGf0aqFLEBM/review"
                  target="_blank"
                >
                  <img
                    src="images/google-reviews.png"
                    alt="Review us on Google"
                    width="250"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="testimonial-slider">
              <div class="swiper">
                <div class="swiper-wrapper" data-cursor-text="Drag">
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <div class="testimonial-header">
                        <div class="testimonial-rating">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="testimonial-content">
                          <p>
                            You don’t feel like a case here — you feel like a
                            person. Dr. Shubhankar Shekhar’s calm guidance and
                            surgical skills are unmatched. The hospital has
                            everything — infrastructure, cleanliness, empathy.
                          </p>
                        </div>
                      </div>
                      <div class="testimonial-body">
                        <div class="author-content">
                          <h3>Vikram Mehta</h3>
                          <p>Joint Replacement Patient</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <div class="testimonial-header">
                        <div class="testimonial-rating">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="testimonial-content">
                          <p>
                            Spine surgery is scary — but Dr. Shubhankar made it
                            reassuring. Every step was explained. I never
                            imagined I’d walk straight and pain-free again.
                            Grateful beyond words.
                            <span class="hidden-xs">
                              <br />
                              &nbsp;
                              <br />
                              &nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="testimonial-body">
                        <div class="author-content">
                          <h3>Savitri Devi</h3>
                          <p>L4-L5 Decompression</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <div class="testimonial-header">
                        <div class="testimonial-rating">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="testimonial-content">
                          <p>
                            The ICU, nurses, and follow-up support after my
                            mother’s hip fracture surgery was world-class. MOH
                            has brought big-city care to Meerut.
                            <span class="hidden-xs">
                              <br />
                              &nbsp;
                              <br />
                              &nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="testimonial-body">
                        <div class="author-content">
                          <h3>Anjali R.</h3>
                          <p>Attendant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-btn">
                  <div class="testimonial-button-prev"></div>
                  <div class="testimonial-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
