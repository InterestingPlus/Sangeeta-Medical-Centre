import React, { useEffect, useState } from "react";
import { client } from "../config/sanityClient";

import "./Rating.scss";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1234,
      rating: 5,
      message:
        "You don’t feel like a case here — you feel like a person. Dr. Shubhankar Shekhar’s calm guidance and surgical skills are unmatched. The hospital has everything — infrastructure, cleanliness, empathy.",
      patient: "Vikram Mehta",
      designation: "Joint Replacement Patient",
    },
    {
      id: 4452,
      rating: 5,
      message:
        "Spine surgery is scary — but Dr. Shubhankar made it reassuring. Every step was explained. I never imagined I’d walk straight and pain-free again. Grateful beyond words.",
      patient: "Savitri Devi",
      designation: "L4-L5 Decompression",
    },
    {
      id: 5453,
      rating: 4,
      message:
        "The ICU, nurses, and follow-up support after my mother’s hip fracture surgery was world-class. MOH has brought big-city care to Meerut.",
      patient: "Anjali R.",
      designation: "Attendant",
    },
  ]);

  useEffect(() => {
    const testimonialQuery = `*[_type == "testimonial"]{
          _id,
          patient,
          designation,
          rating,
          message
        }`;

    const fetchTestimonials = async () => {
      try {
        // setLoading(true);
        const data = await client.fetch(testimonialQuery);
        setTestimonials(data);
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
  return (
    <div class="page-about-us bg-radius-section2 bg-light" id="Testimonials">
      <div class="container">
        <div class="row align-items-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title mb-0">
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Testimonials
                </h2>
              </div>
            </div>

            {testimonials?.map((item) => (
              <div class="col-lg-4">
                <div class="testimonial-item shadow mt-4">
                  <div class="testimonial-header">
                    <div class="testimonial-rating">
                      {Array.from({ length: item?.rating })?.map((_, index) => (
                        <svg
                          key={index} // Add key for list items
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512" // Adjusted viewBox for standard star aspect ratio
                        >
                          <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                        </svg>
                      ))}
                      {/* <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star"></i>{" "} */}
                    </div>
                    <div class="testimonial-content">
                      <p>{item?.message}</p>
                    </div>
                  </div>
                  <div class="testimonial-body">
                    <div class="author-content">
                      <h3>{item?.patient}</h3>
                      <p>{item?.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
