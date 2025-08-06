import React, { useState } from "react";
import doctors from "../pages/Doctor.json";

const BookApointment = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const production = true;

  let api_url = "http://localhost:4000/send-email";

  if (production) {
    api_url = "https://sangeeta-medical-centre.onrender.com/send-email";
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          email,
          message,
          selectedDoctor,
        }),
      });

      alert("Email Sent Successfully!");
    } catch (err) {
      console.log("Error in sending email", err);
      alert("Error in sending email");
    }
  };

  return (
    <div className="contact-faqs bg-radius-section2" id="Appointment">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-us-form">
              <div className="section-title mb-4 text-center">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Send Us a Message
                </h2>
                <p className="mt-2">
                  {/* Call or message us to schedule an OPD or surgical consultation
                  with Dr. Shubhankar Shekhar. */}
                </p>
              </div>
              <form
                data-toggle="validator"
                id="g_captcha_form"
                onSubmit={handleFormSubmit}
              >
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Your Name*"
                      required
                      value={name}
                      onInput={(e) => setName(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="user_contact"
                      className="form-control"
                      placeholder="Contact Number*"
                      required
                      value={contact}
                      onInput={(e) => setContact(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Email address*"
                      required
                      value={email}
                      onInput={(e) => setEmail(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  {/* Select Doctor Start */}
                  {/* <div className="form-group col-md-6 mb-4">
                    <div
                      className="tesla-select-wrapper"
                      style={{ position: "relative" }}
                    >
                      <select
                        name="user_doctor"
                        className="form-control"
                        aria-label="Doctors"
                        required
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        style={{
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          paddingRight: "2.5rem", // leave space for the icon
                        }}
                      >
                        <option value="">Select Doctor* </option>

                        {doctors?.map((doctor) => (
                          <option key={doctor?.email} value={doctor?.email}>
                            {doctor?.name}
                          </option>
                        ))}
                      </select>
 
                      <span
                        style={{
                          position: "absolute",
                          right: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          fontSize: "1rem",
                          color: "#666",
                        }}
                      ></span>

                      <div className="help-block with-errors"></div>
                    </div>
                  </div> */}
                  {/* Select Doctor End */}

                  <div className="form-group col-md-12 mb-4">
                    <textarea
                      name="user_message"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      required
                      value={message}
                      onInput={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="col-md-12 mb-4">
                    <script
                      src="https://www.google.com/recaptcha/api.js"
                      async
                      defer
                    ></script>
                    <div
                      className="g-recaptcha"
                      data-sitekey="6Ldi1WgrAAAAADvB3yu6UsiO5drvftsAE9IGf5Rb"
                      style={{ marginBottom: "20px", margin: "auto" }}
                      required=""
                    ></div>
                  </div>

                  <div className="col-lg-12">
                    <div className="contact-form-btn text-start">
                      <button type="submit" className="btn-default">
                        <span>Submit Now</span>
                      </button>
                      <div id="msgSubmit" className="h3 hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookApointment;
