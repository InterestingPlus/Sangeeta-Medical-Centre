import React, { useState } from "react";
import "./Rating.scss";

const Testimonials = ({ category }) => {
  const orthoTestimonials = [
    {
      id: 1,
      rating: 5,
      message:
        "I am incredibly grateful to Dr. RAMAN JINDAL for the exceptional care and expertise during my orthopedic treatment. From the very first consultation to the entire process was handled with professionalism, compassion, and attention to detail. He is an excellent doctor and also a good human being. Thanks Dr. RAMAN...",
      patient: "Rahul SAINI",
      designation: "Orthopedic Patient",
    },
    {
      id: 2,
      rating: 5,
      message:
        "The doctor and even the staffs here are wonderful and made me feel comfortable from day one. My shoulder surgery recovery went smooth in this hospital. Thank you Dr Raman for his expert care and follow ups, the results have been fantastic. Thank you team😊😊",
      patient: "Rohit Kashyap",
      designation: "Shoulder Surgery Patient",
    },
    {
      id: 3,
      rating: 5,
      message:
        "I went for an emergency procedure of my friend who got a shoulder dislocation and to my surprise sir was calm and attentive and reduced it without any pain. I would highly recommend sir and the hospital for any bone related injuries.",
      patient: "ashish shivhare",
      designation: "Attendant",
    },
    {
      id: 4,
      rating: 5,
      message:
        "i visited Dr Raman for joint pain that would not go away. consulted many doctors for but got no relief. Dr Raman listened carefully and created a personalized plan for me that worked highly recommend this doc to anyone looking for an orthopaedic specialist who trulycares",
      patient: "Mantsha Malika",
      designation: "Joint Pain Patient",
    },
  ];

  const gynecTestimonials = [
    {
      id: 5,
      rating: 5,
      message:
        "I came here for delivery and now I recommend Dr. Manisha to every woman looking for a smooth and safe delivery. She is transparent with her treatment, and we are glad we chose her hospital for this special moment.",
      patient: "Amir Malik",
      designation: "Delivery Patient",
    },
    {
      id: 6,
      rating: 5,
      message:
        "A life-changing experience with Dr. Manisha and her team at Sangeeta Hospital, Meerut. My wife’s maternity case was handled here with exceptional care. We are extremely satisfied with the services and highly recommend this hospital for excellent maternity care, especially normal deliveries.",
      patient: "Amit Chauhan Rajput",
      designation: "Maternity Patient's Husband",
    },
    {
      id: 7,
      rating: 5,
      message:
        "I underwent a laparoscopic operation by Dr. Manisha Chaudhary ma’am. She is an expert surgeon with a great team. My recovery was smooth—I was discharged in just two days and resumed work within a week. She explained everything clearly and answered all my doubts professionally.",
      patient: "Sonam Pal",
      designation: "Laparoscopic Surgery Patient",
    },
    {
      id: 8,
      rating: 5,
      message:
        "Best hospital for maternity delivery services. We consulted ma’am when one of my twins had a missed heartbeat. Other doctors advised abortion, but ma’am counselled us with compassion and convinced us to continue the pregnancy. Today, one twin is safe because of her treatment. We are grateful that such genuine doctors are in Meerut.",
      patient: "Govinda Kumar",
      designation: "High-Risk Twin Pregnancy Patient's Husband",
    },
  ];

  const testimonials =
    category === "ortho" ? orthoTestimonials : gynecTestimonials;

  const orthoVideos = [
    {
      id: "yrRFAgwm3Ls",
      title: "Knee Replacement Patient",
      description:
        "A patient story about a pain-free knee replacement surgery.",
      url: "https://youtube.com/shorts/yrRFAgwm3Ls",
    },
    {
      id: "9b2tjGftDUw",
      title: "Hip Fracture Patient",
      description:
        "A patient story about a child's successful fracture treatment.",
      url: "https://youtube.com/shorts/9b2tjGftDUw",
    },
    {
      id: "s36zUb55QKI",
      title: "Sports Injury Patient",
      description:
        "A patient story about a 70-year-old man's hip replacement surgery.",
      url: "https://youtube.com/shorts/s36zUb55QKI",
    },
    {
      id: "T0ePTQkTX60",
      title: "Spine Surgery Patient",
      description:
        "A patient story about a clubfoot treatment in a 17-day-old baby.",
      url: "https://youtube.com/shorts/T0ePTQkTX60",
    },
  ];

  const gynecVideos = [
    {
      id: "Ax-gqtH-6XM",
      title: "Successful Delivery Patient",
      description:
        "A patient story about a successful delivery at Sangeeta Medical Center.",
      url: "https://youtube.com/shorts/Ax-gqtH-6XM",
    },
    {
      id: "WBSjH8pIPP0",
      title: "Maternity Care Patient",
      description:
        "A patient story providing expert tips for a normal delivery.",
      url: "https://youtube.com/shorts/WBSjH8pIPP0",
    },
    {
      id: "9ZVaO1htwWY",
      title: "Laparoscopic Surgery Patient",
      description:
        "A patient story about a successful normal delivery despite a 6-loop cord.",
      url: "https://youtube.com/shorts/9ZVaO1htwWY",
    },
    {
      id: "rRXe4LCkltg",
      title: "High-Risk Twin Pregnancy Patient",
      description:
        "A patient story about a precious pregnancy after two miscarriages.",
      url: "https://youtube.com/shorts/rRXe4LCkltg",
    },
  ];

  const stories = category === "ortho" ? orthoVideos : gynecVideos;


  return (
    <div
      id={category === "ortho" ? "orthopedic" : "gynecological"}
      className=" bg-radius-section2 bg-light"
       style={{margin: "50px 0 0 0"}}
    >
      <h2 className="section-title container capitalize">
        {category === "ortho" ? "Orthopedic" : "Gynecological"}
      </h2>
      <div className="container">
        <div className="row">
          {testimonials?.map((item) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className="testimonial-item shadow mt-4 "
                style={{
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                      </svg>
                    ))}
                  </div>
                  <div className="testimonial-content">
                    <p>{item.message}</p>
                  </div>
                </div>
                <div className="testimonial-body">
                  <div className="author-content">
                    <h3>{item.patient}</h3>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-radius-section2" id="Stories" style={{margin: "30px 0 0 0"}}>
        <div className="container">
          {/* Orthopedic Patient Stories */}
          <div className="row">
            {stories.map((video) => (
              <div className="col-lg-3 col-md-6 col-12" key={video.id}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-item d-block p-0 mt-4"
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                    {/* Simple Play Button Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "60px",
                        height: "60px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "30px",
                        pointerEvents: "none",
                      }}
                    >
                      ▶
                    </div>
                  </div>
                  <div className="testimonial-body mt-3">
                    <div className="author-content">
                      <h3>{video.title}</h3>
                    </div>
                  </div>
                  <div className="testimonial-header m-0">
                    <div className="testimonial-content">
                      <p>{video.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
