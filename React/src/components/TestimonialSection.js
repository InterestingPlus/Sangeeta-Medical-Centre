import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TestimonialSection.scss";
import { client } from "../config/sanityClient";

import "../pages/Rating.scss";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([
  {
    "id": 12345,
    "rating": 5,
    "content": "I am incredibly grateful to Dr. RAMAN JINDAL for the exceptional care and expertise during my orthopedic treatment. From the very first consultation to the entire process was handled with professionalism, compassion, and attention to detail. He is an excellent doctor and also a good human being. Thanks Dr. RAMAN...",
    "author": "Rahul SAINI",
    "designation": "Orthopedic Patient"
  },
  {
    "id": 23456,
    "rating": 5,
    "content": "The doctor and even the staffs here are wonderful and made me feel comfortable from day one. My shoulder surgery recovery went smooth in this hospital. Thank you Dr Raman for his expert care and follow ups, the results have been fantastic. Thank you team😊😊",
    "author": "Rohit Kashyap",
    "designation": "Shoulder Surgery Patient"
  },
  {
    "id": 34567,
    "rating": 5,
    "content": "I went for an emergency procedure of my friend who got a shoulder dislocation and to my surprise sir was calm and attentive and reduced it without any pain. I would highly recommend sir and the hospital for any bone related injuries.",
    "author": "ashish shivhare",
    "designation": "Attendant"
  },
  {
    "id": 45678,
    "rating": 5,
    "content": "i visited Dr Raman for joint pain that would not go away. consulted many doctors for this but got no relief. Dr Raman listened carefully and created a personalized plan for me that worked highly recommend this doc to anyone looking for an orthopaedic specialist who trulycares",
    "author": "Mantsha Malika",
    "designation": "Joint Pain Patient"
  },
  {
    "id": 56789,
    "rating": 5,
    "content": "I came here for delivery and now I recommend Dr. Manisha to every woman looking for a smooth and safe delivery. She is transparent with her treatment, and we are glad we chose her hospital for this special moment.",
    "author": "Amir Malik",
    "designation": "Delivery Patient"
  },
  {
    "id": 67890,
    "rating": 5,
    "content": "A life-changing experience with Dr. Manisha and her team at Sangeeta Hospital, Meerut. My wife’s maternity case was handled here with exceptional care. We are extremely satisfied with the services and highly recommend this hospital for excellent maternity care, especially normal deliveries.",
    "author": "Amit Chauhan Rajput",
    "designation": "Maternity Patient's Husband"
  },
  {
    "id": 78901,
    "rating": 5,
    "content": "I underwent a laparoscopic operation by Dr. Manisha Chaudhary ma’am. She is an expert surgeon with a great team. My recovery was smooth—I was discharged in just two days and resumed work within a week. She explained everything clearly and answered all my doubts professionally.",
    "author": "Sonam Pal",
    "designation": "Laparoscopic Surgery Patient"
  },
  {
    "id": 89012,
    "rating": 5,
    "content": "Best hospital for maternity delivery services. We consulted ma’am when one of my twins had a missed heartbeat. Other doctors advised abortion, but ma’am counselled us with compassion and convinced us to continue the pregnancy. Today, one twin is safe because of her treatment. We are grateful that such genuine doctors are in Meerut.",
    "author": "Govinda Kumar",
    "designation": "High-Risk Twin Pregnancy Patient's Husband"
  }
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
                  At Sangeeta Medical Center, every success story reflects the clinical excellence and patient-first dedication of Dr. Sangeeta Jindal, Dr. Raman Jindal, and Dr. Manisha. These are not just treatments — they are lives transformed with compassionate care, surgical precision, and advanced technology.
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
