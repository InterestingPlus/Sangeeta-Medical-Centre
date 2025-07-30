import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import SideBar from "../components/SideBar";
import { client } from "../config/sanityClient";
import SanityBlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    block: (props) => {
      switch (props.node.style) {
        case "h1":
          return <h1 className="text-4xl font-bold my-4">{props.children}</h1>;
        case "h2":
          return (
            <h2 className="text-3xl font-semibold my-3">{props.children}</h2>
          );
        case "h3":
          return (
            <h3 className="text-2xl font-semibold my-2">{props.children}</h3>
          );
        case "h4":
          return (
            <h4 className="text-xl font-semibold my-2">{props.children}</h4>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic my-4">
              {props.children}
            </blockquote>
          );
        default:
          return (
            <p className="text-gray-700 leading-relaxed my-2">
              {props.children}
            </p>
          );
      }
    },
    image: (props) => (
      <img
        src={props.node.asset.url}
        alt={props.node.alt || "Content Image"}
        className="w-full h-auto rounded-lg my-6"
      />
    ),
  },
  list: (props) => {
    const { type } = props;
    if (type === "bullet") {
      return <ul className="custom-list mt-1 mb-3">{props.children}</ul>; // Apply custom-list class
    }
    if (type === "number") {
      return (
        <ol className="list-decimal list-inside text-gray-700 my-2">
          {props.children}
        </ol>
      );
    }
    return null;
  },
  listItem: (props) => <li className="mb-1">{props.children}</li>,
  marks: {
    link: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a
          href={href}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

const Specialty = () => {
  const { name } = useParams();
  const [specialty, setSpecialty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sanity query to fetch a single specialty by slug
    const query = `*[_type == "specialty" && slug.current == $slug][0]{
      name,
      slug,
      "iconUrl": icon.asset->url, // Fetch icon URL
      mainDescription,
      sections[]{
        sectionId,
        title,
        "mainImageUrl": mainImage.asset->url,
        description,
        "secondaryImageUrl": secondaryImage.asset->url,
        bulletPoints,
        conclusion
      },
      uniqueSellingPoints
    }`;

    const fetchSpecialty = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(query, { slug: name });
        console.log(data);
        if (data) {
          setSpecialty(data);
          setError(null);
        } else {
          setSpecialty(null); // No specialty found
          setError("Specialty not found.");
        }
      } catch (err) {
        console.error("Failed to fetch specialty:", err);
        setError("Failed to load specialty details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchSpecialty();
    } else {
      setLoading(false);
      setError("No specialty slug provided in the URL.");
    }
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Your existing spinner CSS */}
        <p className="ml-4 text-gray-700">Loading specialty details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>{error}</p>
        <Link to="/specialties" className="mt-4 text-blue-600 hover:underline">
          Back to Specialties
        </Link>
      </div>
    );
  }

  if (!specialty) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-700">
        <p>Specialty not found.</p>
        <Link to="/specialties" className="mt-4 text-blue-600 hover:underline">
          Back to Specialties
        </Link>
      </div>
    );
  }

  return (
    <>
      <BreadCrumb
        image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
        title={specialty?.name}
        page={`Specialties / ${specialty?.name}`}
      />

      {/* Section Start  */}
      <div className="page-service-single bg-radius-section">
        <div className="container">
          <div className="row">
            <SideBar />

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-entry">
                  <h2 className="text-anime-style-3">{specialty.name}</h2>
                  {/* <h3 className="fs-3">
                    Precision Shoulder Surgery by Dr. Shubhankar Shekhar
                  </h3> */}
                  {specialty.mainDescription && (
                    <SanityBlockContent
                      blocks={specialty.mainDescription}
                      projectId={client.projectId}
                      dataset={client.dataset}
                      serializers={serializers}
                    />
                  )}

                  <hr />

                  {specialty.sections?.map((section, index) => (
                    <div
                      key={section.sectionId || index}
                      id={section.sectionId}
                    >
                      {section.mainImageUrl && (
                        <div className="service-single-image">
                          <img
                            src={section.mainImageUrl}
                            alt={section.title}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <h3 className="fs-3">{section.title}</h3>
                      {section.description && (
                        <SanityBlockContent
                          blocks={section.description}
                          projectId={client.projectId}
                          dataset={client.dataset}
                          serializers={serializers}
                        />
                      )}
                      {section.secondaryImageUrl && (
                        <div className="row">
                          <div className="col-lg-8">
                            {/* If there's a secondary image, the description might be split */}
                            {/* This assumes the description array might contain content before the image */}
                            {/* You might need to adjust how your 'description' is structured in Sanity
                                if you want specific paragraphs before/after the secondary image */}
                            {section.description && (
                              <SanityBlockContent
                                blocks={section.description}
                                projectId={client.projectId}
                                dataset={client.dataset}
                                serializers={serializers}
                              />
                            )}
                          </div>
                          <div className="col-lg-4">
                            <div className="how-work-image-box-2 rounded-4">
                              <div className="how-work-img-2">
                                <img
                                  src={section.secondaryImageUrl}
                                  alt={section.title}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {section.bulletPoints &&
                        section.bulletPoints.length > 0 && (
                          <>
                            <p className="mt-4">
                              <strong>Under {specialty.name}'s care:</strong>{" "}
                              {/* Dynamic reference */}
                            </p>
                            <SanityBlockContent
                              blocks={section.bulletPoints}
                              projectId={client.projectId}
                              dataset={client.dataset}
                              serializers={serializers}
                            />
                          </>
                        )}
                      {section.conclusion && (
                        <SanityBlockContent
                          blocks={section.conclusion}
                          projectId={client.projectId}
                          dataset={client.dataset}
                          serializers={serializers}
                        />
                      )}
                      <hr /> {/* Separator between sections */}
                    </div>
                  ))}

                  {/* What Makes This Department Different section */}
                  {specialty.uniqueSellingPoints &&
                    specialty.uniqueSellingPoints.length > 0 && (
                      <div id="what-makes-different">
                        <h3 className="fs-3">
                          What Makes This Department Different
                        </h3>
                        <SanityBlockContent
                          blocks={specialty.uniqueSellingPoints}
                          projectId={client.projectId}
                          dataset={client.dataset}
                          serializers={serializers}
                        />
                        <p>
                          The {specialty.name} at Sangeeta Medical Centre, is
                          where modern orthopedic science meets surgical
                          mastery—delivering outcomes that patients can trust
                          and feel.
                        </p>
                      </div>
                    )}

                  {/* <div id="Instability">
                    <div className="service-single-image">
                      <img
                        src="images/specialties/shoulder/shoulder-instability.jpg"
                        alt="Shoulder treatment and surgery Meerut"
                        loading="lazy"
                      />
  <figure className="image-anime reveal">
                                    </figure> 
                    </div>
                    <h3 className="fs-3">Shoulder Instability</h3>
                    <p>
                      Recurrent shoulder dislocations can turn into chronic
                      instability if not corrected early. Often seen in athletes
                      or post-injury patients, this condition leads to joint
                      looseness, muscle guarding, and fear of movement.
                    </p>

                    <p>
                      Beyond surgical correction, Dr. Shubhankar Shekhar
                      emphasizes a comprehensive patient evaluation, which
                      includes assessing underlying factors like joint
                      hyperlaxity, muscle imbalances, or previous failed
                      surgeries that may contribute to instability. This
                      holistic approach ensures the treatment plan is tailored
                      not just to the shoulder joint but to the entire kinetic
                      chain supporting it.
                    </p>

                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Patients at Mrityunjay Hospital, Meerut benefit from
                          cutting-edge surgical tools such as high-strength
                          suture anchors, bioabsorbable implants, and the latest
                          arthroscopic techniques that allow for smaller
                          incisions, reduced blood loss, and faster healing.
                          Combined with a dedicated physiotherapy team, Dr.
                          Shubhankar’s program focuses on regaining shoulder
                          strength, proprioception, and sport-specific or
                          occupational movement patterns — ensuring patients
                          don’t just recover but thrive confidently in their
                          daily lives or competitive pursuits.
                        </p>
                      </div>

                      <div className="col-lg-4">
                        <div className="how-work-image-box-2 rounded-4">
                          <div className="how-work-img-2">
                            <figure className="image-anime reveal">
                              <img
                                src="images/specialties/shoulder/shoulder-instability2.jpg"
                                alt="Shoulder Shoulder Instability treatment Meerut"
                                loading="lazy"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4">
                      <strong>Under Dr. Shubhankar’s care:</strong>
                    </p>
                    <div className="custom-list mt-1 mb-3">
                      <ul>
                        <li>
                          Detailed imaging (MRI, CT) is used to assess soft
                          tissue and labral damage.
                        </li>
                        <li>
                          Arthroscopic shoulder stabilization (keyhole surgery)
                          is performed using precision anchors and minimal
                          trauma technique.
                        </li>
                        <li>
                          Post-op rehabilitation is carefully supervised to
                          prevent recurrence and rebuild confidence.
                        </li>
                      </ul>
                    </div>

                    <p>
                      His approach minimizes risk of redislocation and restores
                      full range of motion in record recovery time.
                    </p>
                  </div>

                  <hr />

                  <div id="Rotator">
                    <div className="service-single-image">
                      <figure className="image-anime reveal">
                        <img
                          src="images/specialties/shoulder/rotator-cuff-tear.jpg"
                          alt="Rotator Cuff Tear Treatment Meerut"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <h3 className="fs-3">Rotator Cuff Tear</h3>
                    <p>
                      Whether degenerative or traumatic, a torn rotator cuff can
                      drastically limit shoulder function and quality of life.
                      Delays in proper treatment often worsen the tear and
                      prolong disability. At MOH:
                    </p>

                    <p>
                      At Mrityunjay Orthopedic Hospital, Meerut, patients with
                      rotator cuff tears receive expert, personalized care under
                      the guidance of <strong>Dr. Shubhankar Shekhar</strong>,
                      Consultant Joint Replacement & Orthopedic Surgeon. A
                      rotator cuff tear occurs when the tendons in the shoulder
                      become damaged or torn, often due to overuse, injury, or
                      age-related degeneration. This condition can severely
                      limit a person’s ability to lift, rotate, or reach with
                      the affected arm, leading to chronic pain and weakness
                      that disrupts daily life and work activities.
                    </p>

                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Dr. Shubhankar Shekhar specializes in diagnosing
                          rotator cuff injuries using advanced imaging
                          techniques like ultrasound and MRI, ensuring no detail
                          is missed. His approach blends minimally invasive
                          arthroscopic repair techniques with tailored
                          rehabilitation programs designed to restore shoulder
                          strength, flexibility, and function. Whether you are
                          an athlete, a laborer, or simply someone looking to
                          regain pain-free movement, you can trust{" "}
                          <strong>
                            Mrityunjay Orthopedic Hospital, Meerut
                          </strong>{" "}
                          to deliver comprehensive care with excellent outcomes.
                        </p>
                      </div>

                      <div className="col-lg-4">
                        <div className="how-work-image-box-2 rounded-4">
                          <div className="how-work-img-2">
                            <figure className="image-anime reveal">
                              <img
                                src="images/specialties/shoulder/rotator-cuff-tear2.jpg"
                                alt="Rotator Cuff Tear Specialist Meerut"
                                loading="lazy"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="custom-list mt-3 mb-3">
                      <ul>
                        <li>
                          Dr. Shubhankar personally conducts high-resolution
                          diagnostic evaluations to grade the tear.
                        </li>
                        <li>
                          For eligible cases, non-surgical management is
                          explored first—including guided physiotherapy and PRP
                          injections.
                        </li>
                        <li>
                          When surgery is needed, Dr. Shubhankar performs
                          arthroscopic rotator cuff repair with ultra-fine
                          instrumentation, preserving healthy tissue and
                          reducing post-op pain.
                        </li>
                      </ul>
                    </div>

                    <p>
                      His expertise ensures minimal physiotherapy requirement
                      and rapid shoulder strength recovery—ideal for both active
                      adults and senior patients.
                    </p>
                  </div>

                  <hr />

                  <div id="Frozen">
                    <div className="service-single-image">
                      <figure className="image-anime reveal">
                        <img
                          src="images/specialties/shoulder/frozen-shoulder.jpg"
                          alt="Frozen Shoulder Doctor Meerut"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <h3 className="fs-3">
                      Frozen Shoulder (Adhesive Capsulitis)
                    </h3>
                    <p>
                      This condition is marked by severe stiffness, especially
                      in diabetic and post-operative patients. Most treatments
                      fail when done without stage-specific clarity.
                    </p>

                    <p>
                      Frozen Shoulder, or Adhesive Capsulitis, is a painful and
                      often frustrating condition that gradually limits shoulder
                      movement, making even simple tasks like dressing or
                      reaching overhead difficult. At{" "}
                      <strong>Mrityunjay Orthopedic Hospital, Meerut</strong>,
                      Dr. Shubhankar Shekhar offers expert care for patients
                      facing this condition, guiding them through every stage of
                      recovery. The condition typically develops after injury,
                      surgery, or periods of immobilization and can persist for
                      months if not treated properly.
                    </p>

                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          With a deep understanding of shoulder mechanics and
                          patient-centered care,{" "}
                          <strong>Dr. Shubhankar Shekhar</strong> provides both
                          non-surgical and surgical solutions tailored to each
                          patient’s severity and needs. From supervised
                          physiotherapy and medication strategies to advanced
                          arthroscopic capsular release procedures when needed,
                          the focus is always on restoring pain-free motion and
                          preventing long-term stiffness. At Mrityunjay
                          Orthopedic Hospital, Meerut, patients find the
                          expertise and support they need to regain control over
                          their shoulder health.
                        </p>
                      </div>

                      <div className="col-lg-4">
                        <div className="how-work-image-box-2 rounded-4">
                          <div className="how-work-img-2">
                            <img
                              src="images/specialties/shoulder/frozen-shoulder2.jpg"
                              alt="Frozen Shoulder Specialist Meerut"
                              loading="lazy"
                            />
                           <figure className="image-anime reveal">
                                                </figure>  
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className=" mt-4">
                      <strong>Dr. Shubhankar’s protocol includes:</strong>
                    </p>
                    <div className="custom-list mt-1 mb-3">
                      <ul>
                        <li>
                          Accurate staging (freezing, frozen, thawing) through
                          clinical and imaging correlation
                        </li>
                        <li>
                          Intra-articular injections, capsular stretches, and
                          selective MUA (manipulation under anesthesia) only
                          when necessary
                        </li>
                        <li>
                          Tailored physiotherapy to match the stage and response
                          of each patient
                        </li>
                      </ul>
                    </div>

                    <p>
                      With his refined approach, most cases improve dramatically
                      without aggressive therapy or repeat interventions.
                    </p>
                  </div>

                  <hr />

                  <div id="">
                    <h3 className="fs-3">
                      What Makes This Department Different
                    </h3>

                    <div className="custom-list mt-3 mb-3">
                      <ul>
                        <li>
                          <strong>
                            Every case is seen and operated by Dr. Shubhankar
                            Shekhar —
                          </strong>{" "}
                          no junior delegation
                        </li>
                        <li>
                          <strong>
                            Only evidence-backed treatment offered —
                          </strong>{" "}
                          no overuse of physiotherapy or unnecessary surgery
                        </li>
                        <li>
                          <strong>
                            All surgeries done with minimally invasive
                            techniques —
                          </strong>{" "}
                          faster healing, less pain
                        </li>
                        <li>
                          <strong>Patient-first protocols —</strong> only the
                          care that is truly needed, nothing more
                        </li>
                      </ul>
                    </div>

                    <p>
                      The Shoulder Department at Mrityunjay Orthopedic Hospital
                      is where modern orthopedic science meets surgical
                      mastery—delivering outcomes that patients can trust and
                      feel.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section End */}
    </>
  );
};

export default Specialty;
