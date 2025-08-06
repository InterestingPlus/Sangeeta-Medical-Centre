import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../config/sanityClient";

const SpecialtiesSection = () => {
  const [specialties, setSpecialties] = useState([
    {
      name: "Arthoscopy",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-3-.webp",
      alt: "Arthoscopy",

      icon: "arthoscopy.png",
      link: "/specialties/arthroscopy",
      title: "Arthroscopy Meerut",
    },
    {
      name: "Fracture Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-4.webp",
      alt: "Fracture Management",

      icon: "knee.png",
      link: "/specialties/knee-department",
      title: "Advanced Knee Treatment/Surgery Meerut",
    },
    {
      name: "Knee Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/Service-image-1.webp",
      alt: "Knee Replacement",

      icon: "knee.png",
      link: "/specialties/knee-department",
      title: "Advanced Knee Treatment/Surgery Meerut",
    },
    {
      name: "Hip Joint Replacement",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-2.webp",
      alt: "Hip Joint Replacement",

      icon: "hip.png",
      link: "/specialties/hip-department",
      title: "Hip Treatment & Surgery Meerut",
    },
    {
      name: "Complex Trauma Surgery",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/cccccc.webp",
      alt: "Complex Trauma Surgery",

      icon: "spine.png",
    },
    {
      name: "Sports Injury Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/sports.webp",
      alt: "Sports Injury Treatment",

      icon: "foot.png",
    },

    {
      name: "Infertility Treatment",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-5-1.webp",
      alt: "Infertility Treatment",

      icon: "arthoscopy.png",
    },
    {
      name: "High-Risk Pregnancy Management",
      image:
        "https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/service-image-8-1-1.webp",
      alt: "High-Risk Pregnancy Management",

      icon: "rheumatology.png",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "specialty"]{
       name,
       "link": slug.current,
       "image": mainImage.asset->url,
       "icon": icon.asset->url,
     } | order(name asc)`;

    const fetchSpecialties = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(query);
        setSpecialties(data);
        console.log(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch specialties:", err);
        setError("Failed to load specialties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Your existing spinner CSS */}
        <p className="ml-4 text-gray-700">Loading specialties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>{error}</p>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <div class="our-services bg-radius-section">
        <div class="container">
          <div class="row section-row align-items-center">
            <div class="col-lg-7">
              <div class="section-title">
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Our Specialties
                </h2>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="section-btn wow fadeInUp">
                <Link to="tel:011-69269888" class="btn-default">
                  <span>make an appointment</span>
                </Link>
              </div>
            </div>
          </div>

          <div class="row">
            {specialties.map((specialty) => (
              <div class="col-lg-3 col-md-3">
                <div class="service-item wow fadeInUp" data-wow-delay="1.25s">
                  <div class="service-item-image">
                    <figure>
                      <img
                        src={
                          specialty.image ||
                          "https://placehold.co/400x200/cccccc/ffffff?text=Specialty+Image"
                        }
                        alt={specialty.name}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div class="icon-box">
                    <img
                      src={
                        specialty.icon ||
                        "https://placehold.co/35x35/007bff/ffffff?text=Icon"
                      }
                      alt="Foot Icon"
                    />
                  </div>
                  <div class="service-body">
                    <div class="service-content">
                      <h3>{specialty.name}</h3>
                    </div>
                    <div class="service-btn">
                      <Link
                        to={`/specialties/${specialty?.link}`}
                        title={specialty.title}
                      >
                        <img
                          src="images/svg-icons/arrow-readmore-btn.svg"
                          alt="More arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div class="col-lg-12">
              <div class="more-service-btn wow fadeInUp" data-wow-delay="1.5s">
                <Link
                  to="/specialties"
                  title="Best orthopedic treatments in Meerut"
                >
                  Find Out More About Our Specialties
                  <img src="images/svg-icons/arrow-long-white.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-section bg-radius-section"></div>
    </>
  );
};

export default SpecialtiesSection;
