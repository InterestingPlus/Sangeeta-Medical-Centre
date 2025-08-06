import { useEffect, useState } from "react";
// import doctors from "../pages/Doctor.json";
import { Link } from "react-router-dom";

import { client } from "../config/sanityClient";

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doctorsQuery = `*[_type == "doctor"]{
      name,
      position,
      description,
      "image": profileImage.asset->url,  
      "link": slug.current,  
    }`;

    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(doctorsQuery);
        setDoctors(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
        setError("Failed to load doctors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="spinner"></div>
        <p className="ml-4">Loading Doctors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-48 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="therapist-team bg-radius-section" id="doctors">
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-0">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Meet Our Doctors
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {doctors?.map((doctor) => (
              <div key={doctor.link} className="col-lg-4 col-md-6">
                <div className="team-member-item wow fadeInUp">
                  <div className="team-image">
                    <figure className="image-anime">
                      <img
                        src={
                          doctor?.image ||
                          "https://placehold.co/400x300/cccccc/ffffff?text=Doctor+Image"
                        }
                        alt={doctor?.alt || `Dr. ${doctor?.name}`}
                        loading="lazy"
                      />
                    </figure>
                    <div className="team-social-icon">
                      <Link
                        to={`/doctor/${doctor?.link}`}
                        title={`View profile of ${doctor?.name}`}
                        className="btn-default"
                      >
                        <span>view profile</span>
                      </Link>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>{doctor.name}</h3>
                    <p className="mb-2">{doctor.position}</p>
                    <p>{doctor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div class="therapist-team bg-radius-section">
        <div class="container">
          <div class="row section-row text-center">
            <div class="col-lg-12">
              <div class="section-title mb-0">
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Our dedicated & experienced doctors
                </h2>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            {doctors?.map((doctor) => (
              <div class="col-lg-4 col-md-6">
                <div class="team-member-item wow fadeInUp">
                  <div class="team-image">
                    <figure class="image-anime">
                      <img
                           src={`images/doctors/${doctor?.image}`}  
                        src={doctor?.image}
                        alt={doctor?.alt}
                        loading="lazy"
                      />
                    </figure>
                    <div class="team-social-icon">
                      <Link
                        to={`/doctor/${doctor?.link}`}
                        title={doctor?.title}
                        class="btn-default"
                      >
                        <span>view profile</span>
                      </Link>
                    </div>
                  </div>
                  <div class="team-content">
                    <h3>{doctor.name}</h3>
                    <p class="mb-2">{doctor.position}</p>
                    <p>{doctor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default DoctorsSection;
