import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TestimonialSection.scss";
import { client } from "../config/sanityClient";

import "../pages/Rating.scss";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1234,
      rating: 5,
      content:
        "You don’t feel like a case here — you feel like a person. Dr. Shubhankar Shekhar’s calm guidance and surgical skills are unmatched. The hospital has everything — infrastructure, cleanliness, empathy.",
      author: "Vikram Mehta",
      designation: "Joint Replacement Patient",
    },
    {
      id: 4452,
      rating: 3,
      content:
        "Spine surgery is scary — but Dr. Shubhankar made it reassuring. Every step was explained. I never imagined I’d walk straight and pain-free again. Grateful beyond words.",
      author: "Savitri Devi",
      designation: "L4-L5 Decompression",
    },
    {
      id: 5453,
      rating: 5,
      content:
        "The ICU, nurses, and follow-up support after my mother’s hip fracture surgery was world-class. MOH has brought big-city care to Meerut.",
      author: "Anjali R.",
      designation: "Attendant",
    },
  ]);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Function to move to the next testimonial
  const handleNext = useCallback(() => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  }, [testimonials.length]);

  // Function to move to the previous testimonial
  const handlePrev = useCallback(() => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-switch every 5 seconds

    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    const testimonialQuery = `*[_type == "testimonial"]{
      _id,
      patient,   // Updated field name
      designation,
      rating,
      message    // Updated field name
    }`;

    const fetchTestimonials = async () => {
      try {
        // setLoading(true);
        const data = await client.fetch(testimonialQuery);
        // setTestimonials(data);
        // setError(null);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        // setError("Failed to load testimonials. Please try again later.");
        // } finally {
        // setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

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
                <Link
                  to="https://www.google.com/search?sca_esv=340802fe2459afeb&rlz=1C1CHBF_enIN1142IN1142&sxsrf=AE3TifNo7NeSBdubcQv1Hnl1rLnKLJ4j6g:1755329189224&kgmid=/g/11qpp4j3qs&q=Sangeeta+Medical+Center+-+Dr.+Sangeeta+Jindal,+Best+Gynecologist+in+Meerut,+Normal+Delivery+%26+Maternity+Hospital+Services.&shndl=30&shem=lcuae,lstuoe3,uaasie&source=sh/x/loc/uni/m1/1&kgs=e96cda2444b3be99&utm_source=lcuae,lstuoe3,uaasie,sh/x/loc/uni/m1/1"
                  target="_blank"
                >
                  <img
                    src="images/google-reviews.png"
                    alt="Review us on Google"
                    width="250"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="testimonial-slider">
              <div class="swiper">
                <div class="swiper-wrapper" data-cursor="-opaque">
                  {currentTestimonial && (
                    <div
                      key={currentTestimonial.id}
                      className="testimonial-item"
                    >
                      <div className="testimonial-header">
                        <div className="testimonial-rating">
                          {Array.from({
                            length: currentTestimonial?.rating,
                          })?.map((_, index) => (
                            <svg
                              key={index} // Add key for list items
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512" // Adjusted viewBox for standard star aspect ratio
                            >
                              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                            </svg>
                          ))}
                        </div>
                        <div className="testimonial-content">
                          <p>{currentTestimonial.content}</p>
                        </div>
                      </div>
                      <div className="testimonial-body">
                        <div className="author-content">
                          <h3>{currentTestimonial.author}</h3>
                          <p>{currentTestimonial.designation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div class="testimonial-btn">
                  <div
                    class="testimonial-button-prev"
                    onClick={handlePrev}
                  ></div>
                  <div
                    class="testimonial-button-next"
                    onClick={handleNext}
                  ></div>
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
