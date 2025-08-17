// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import BreadCrumb from "../components/BreadCrumb";
// import SideBar from "../components/SideBar";
// import { client } from "../config/sanityClient";
// import SanityBlockContent from "@sanity/block-content-to-react";

// const serializers = {
//   types: {
//     block: (props) => {
//       switch (props.node.style) {
//         case "h1":
//           return <h1 className="text-4xl font-bold my-4">{props.children}</h1>;
//         case "h2":
//           return (
//             <h2 className="text-3xl font-semibold my-3">{props.children}</h2>
//           );
//         case "h3":
//           return (
//             <h3 className="text-2xl font-semibold my-2">{props.children}</h3>
//           );
//         case "h4":
//           return (
//             <h4 className="text-xl font-semibold my-2">{props.children}</h4>
//           );
//         case "blockquote":
//           return (
//             <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic my-4">
//               {props.children}
//             </blockquote>
//           );
//         default:
//           return (
//             <p className="text-gray-700 leading-relaxed my-2">
//               {props.children}
//             </p>
//           );
//       }
//     },
//     image: (props) => (
//       <img
//         src={props.node.asset.url}
//         alt={props.node.alt || "Content Image"}
//         className="w-full h-auto rounded-lg my-6"
//       />
//     ),
//   },
//   list: (props) => {
//     const { type } = props;
//     if (type === "bullet") {
//       return <ul className="custom-list mt-1 mb-3">{props.children}</ul>; // Apply custom-list class
//     }
//     if (type === "number") {
//       return (
//         <ol className="list-decimal list-inside text-gray-700 my-2">
//           {props.children}
//         </ol>
//       );
//     }
//     return null;
//   },
//   listItem: (props) => <li className="mb-1">{props.children}</li>,
//   marks: {
//     link: ({ mark, children }) => {
//       const { href } = mark;
//       return (
//         <a
//           href={href}
//           className="text-blue-600 hover:underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {children}
//         </a>
//       );
//     },
//     strong: ({ children }) => <strong className="font-bold">{children}</strong>,
//     em: ({ children }) => <em className="italic">{children}</em>,
//   },
// };

// const Specialty = () => {
//   const { name } = useParams();
//   const [specialty, setSpecialty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Sanity query to fetch a single specialty by slug
//     const query = `*[_type == "specialty" && slug.current == $slug][0]{
//       name,
//       slug,
//       "iconUrl": icon.asset->url, // Fetch icon URL
//       mainDescription,
//       sections[]{
//         sectionId,
//         title,
//         "mainImageUrl": mainImage.asset->url,
//         description,
//         "secondaryImageUrl": secondaryImage.asset->url,
//         bulletPoints,
//         conclusion
//       },
//       uniqueSellingPoints
//     }`;

//     const fetchSpecialty = async () => {
//       try {
//         setLoading(true);
//         const data = await client.fetch(query, { slug: name });
//         console.log("fetchSpecialty-->", data);
//         if (data) {
//           setSpecialty(data);
//           setError(null);
//         } else {
//           setSpecialty(null); // No specialty found
//           setError("Specialty not found.");
//         }
//       } catch (err) {
//         console.error("Failed to fetch specialty:", err);
//         setError("Failed to load specialty details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (name) {
//       fetchSpecialty();
//     } else {
//       setLoading(false);
//       setError("No specialty slug provided in the URL.");
//     }
//   }, [name]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner"></div> {/* Your existing spinner CSS */}
//         <p className="ml-4 text-gray-700">Loading specialty details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-red-600">
//         <p>{error}</p>
//         <Link to="/specialties" className="mt-4 text-blue-600 hover:underline">
//           Back to Specialties
//         </Link>
//       </div>
//     );
//   }

//   if (!specialty) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-gray-700">
//         <p>Specialty not found.</p>
//         <Link to="/specialties" className="mt-4 text-blue-600 hover:underline">
//           Back to Specialties
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       <BreadCrumb
//         image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
//         title={specialty?.name}
//         page={`Specialties / ${specialty?.name}`}
//       />

//       {/* Section Start  */}
//       <div className="page-service-single bg-radius-section">
//         <div className="container">
//           <div className="row">
//             <SideBar />

//             <div className="col-lg-8">
//               <div className="service-single-content">
//                 <div className="service-entry">
//                   <h2 className="text-anime-style-3">{specialty.name}</h2>
//                   {/* <h3 className="fs-3">
//                     Precision Shoulder Surgery by Dr. Shubhankar Shekhar
//                   </h3> */}
//                   {specialty.mainDescription && (
//                     <SanityBlockContent
//                       blocks={specialty.mainDescription}
//                       projectId={client.projectId}
//                       dataset={client.dataset}
//                       serializers={serializers}
//                     />
//                   )}

//                   <hr />

//                   {specialty.sections?.map((section, index) => (
//                     <div
//                       key={section.sectionId || index}
//                       id={section.sectionId}
//                     >
//                       {section.mainImageUrl && (
//                         <div className="service-single-image">
//                           <img
//                             src={section.mainImageUrl}
//                             alt={section.title}
//                             loading="lazy"
//                           />
//                         </div>
//                       )}
//                       <h3 className="fs-3">{section.title}</h3>
//                       {section.description && (
//                         <SanityBlockContent
//                           blocks={section.description}
//                           projectId={client.projectId}
//                           dataset={client.dataset}
//                           serializers={serializers}
//                         />
//                       )}
//                       {section.secondaryImageUrl && (
//                         <div className="row">
//                           <div className="col-lg-8">
//                             {/* If there's a secondary image, the description might be split */}
//                             {/* This assumes the description array might contain content before the image */}
//                             {/* You might need to adjust how your 'description' is structured in Sanity
//                                 if you want specific paragraphs before/after the secondary image */}
//                             {section.description && (
//                               <SanityBlockContent
//                                 blocks={section.description}
//                                 projectId={client.projectId}
//                                 dataset={client.dataset}
//                                 serializers={serializers}
//                               />
//                             )}
//                           </div>
//                           <div className="col-lg-4">
//                             <div className="how-work-image-box-2 rounded-4">
//                               <div className="how-work-img-2">
//                                 <img
//                                   src={section.secondaryImageUrl}
//                                   alt={section.title}
//                                   loading="lazy"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                       {section.bulletPoints &&
//                         section.bulletPoints.length > 0 && (
//                           <>
//                             <p className="mt-4">
//                               <strong>Under {specialty.name}'s care:</strong>{" "}
//                               {/* Dynamic reference */}
//                             </p>
//                             <SanityBlockContent
//                               blocks={section.bulletPoints}
//                               projectId={client.projectId}
//                               dataset={client.dataset}
//                               serializers={serializers}
//                             />
//                           </>
//                         )}
//                       {section.conclusion && (
//                         <SanityBlockContent
//                           blocks={section.conclusion}
//                           projectId={client.projectId}
//                           dataset={client.dataset}
//                           serializers={serializers}
//                         />
//                       )}
//                       <hr /> {/* Separator between sections */}
//                     </div>
//                   ))}

//                   {/* What Makes This Department Different section */}
//                   {specialty.uniqueSellingPoints &&
//                     specialty.uniqueSellingPoints.length > 0 && (
//                       <div id="what-makes-different">
//                         <h3 className="fs-3">
//                           What Makes This Department Different
//                         </h3>
//                         <SanityBlockContent
//                           blocks={specialty.uniqueSellingPoints}
//                           projectId={client.projectId}
//                           dataset={client.dataset}
//                           serializers={serializers}
//                         />
//                         <p>
//                           The {specialty.name} at Sangeeta Medical Centre, is
//                           where modern orthopedic science meets surgical
//                           mastery—delivering outcomes that patients can trust
//                           and feel.
//                         </p>
//                       </div>
//                     )}

//                   {/* <div id="Instability">
//                     <div className="service-single-image">
//                       <img
//                         src="images/specialties/shoulder/shoulder-instability.jpg"
//                         alt="Shoulder treatment and surgery Meerut"
//                         loading="lazy"
//                       />
//   <figure className="image-anime reveal">
//                                     </figure>
//                     </div>
//                     <h3 className="fs-3">Shoulder Instability</h3>
//                     <p>
//                       Recurrent shoulder dislocations can turn into chronic
//                       instability if not corrected early. Often seen in athletes
//                       or post-injury patients, this condition leads to joint
//                       looseness, muscle guarding, and fear of movement.
//                     </p>

//                     <p>
//                       Beyond surgical correction, Dr. Shubhankar Shekhar
//                       emphasizes a comprehensive patient evaluation, which
//                       includes assessing underlying factors like joint
//                       hyperlaxity, muscle imbalances, or previous failed
//                       surgeries that may contribute to instability. This
//                       holistic approach ensures the treatment plan is tailored
//                       not just to the shoulder joint but to the entire kinetic
//                       chain supporting it.
//                     </p>

//                     <div className="row">
//                       <div className="col-lg-8">
//                         <p>
//                           Patients at Sangeeta Hospital, Meerut benefit from
//                           cutting-edge surgical tools such as high-strength
//                           suture anchors, bioabsorbable implants, and the latest
//                           arthroscopic techniques that allow for smaller
//                           incisions, reduced blood loss, and faster healing.
//                           Combined with a dedicated physiotherapy team, Dr.
//                           Shubhankar’s program focuses on regaining shoulder
//                           strength, proprioception, and sport-specific or
//                           occupational movement patterns — ensuring patients
//                           don’t just recover but thrive confidently in their
//                           daily lives or competitive pursuits.
//                         </p>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="how-work-image-box-2 rounded-4">
//                           <div className="how-work-img-2">
//                             <figure className="image-anime reveal">
//                               <img
//                                 src="images/specialties/shoulder/shoulder-instability2.jpg"
//                                 alt="Shoulder Shoulder Instability treatment Meerut"
//                                 loading="lazy"
//                               />
//                             </figure>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <p className="mt-4">
//                       <strong>Under Dr. Shubhankar’s care:</strong>
//                     </p>
//                     <div className="custom-list mt-1 mb-3">
//                       <ul>
//                         <li>
//                           Detailed imaging (MRI, CT) is used to assess soft
//                           tissue and labral damage.
//                         </li>
//                         <li>
//                           Arthroscopic shoulder stabilization (keyhole surgery)
//                           is performed using precision anchors and minimal
//                           trauma technique.
//                         </li>
//                         <li>
//                           Post-op rehabilitation is carefully supervised to
//                           prevent recurrence and rebuild confidence.
//                         </li>
//                       </ul>
//                     </div>

//                     <p>
//                       His approach minimizes risk of redislocation and restores
//                       full range of motion in record recovery time.
//                     </p>
//                   </div>

//                   <hr />

//                   <div id="Rotator">
//                     <div className="service-single-image">
//                       <figure className="image-anime reveal">
//                         <img
//                           src="images/specialties/shoulder/rotator-cuff-tear.jpg"
//                           alt="Rotator Cuff Tear Treatment Meerut"
//                           loading="lazy"
//                         />
//                       </figure>
//                     </div>
//                     <h3 className="fs-3">Rotator Cuff Tear</h3>
//                     <p>
//                       Whether degenerative or traumatic, a torn rotator cuff can
//                       drastically limit shoulder function and quality of life.
//                       Delays in proper treatment often worsen the tear and
//                       prolong disability. At MOH:
//                     </p>

//                     <p>
//                       At Sangeeta Orthopedic Hospital, Meerut, patients with
//                       rotator cuff tears receive expert, personalized care under
//                       the guidance of <strong>Dr. Shubhankar Shekhar</strong>,
//                       Consultant Joint Replacement & Orthopedic Surgeon. A
//                       rotator cuff tear occurs when the tendons in the shoulder
//                       become damaged or torn, often due to overuse, injury, or
//                       age-related degeneration. This condition can severely
//                       limit a person’s ability to lift, rotate, or reach with
//                       the affected arm, leading to chronic pain and weakness
//                       that disrupts daily life and work activities.
//                     </p>

//                     <div className="row">
//                       <div className="col-lg-8">
//                         <p>
//                           Dr. Shubhankar Shekhar specializes in diagnosing
//                           rotator cuff injuries using advanced imaging
//                           techniques like ultrasound and MRI, ensuring no detail
//                           is missed. His approach blends minimally invasive
//                           arthroscopic repair techniques with tailored
//                           rehabilitation programs designed to restore shoulder
//                           strength, flexibility, and function. Whether you are
//                           an athlete, a laborer, or simply someone looking to
//                           regain pain-free movement, you can trust{" "}
//                           <strong>
//                             Sangeeta Orthopedic Hospital, Meerut
//                           </strong>{" "}
//                           to deliver comprehensive care with excellent outcomes.
//                         </p>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="how-work-image-box-2 rounded-4">
//                           <div className="how-work-img-2">
//                             <figure className="image-anime reveal">
//                               <img
//                                 src="images/specialties/shoulder/rotator-cuff-tear2.jpg"
//                                 alt="Rotator Cuff Tear Specialist Meerut"
//                                 loading="lazy"
//                               />
//                             </figure>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="custom-list mt-3 mb-3">
//                       <ul>
//                         <li>
//                           Dr. Shubhankar personally conducts high-resolution
//                           diagnostic evaluations to grade the tear.
//                         </li>
//                         <li>
//                           For eligible cases, non-surgical management is
//                           explored first—including guided physiotherapy and PRP
//                           injections.
//                         </li>
//                         <li>
//                           When surgery is needed, Dr. Shubhankar performs
//                           arthroscopic rotator cuff repair with ultra-fine
//                           instrumentation, preserving healthy tissue and
//                           reducing post-op pain.
//                         </li>
//                       </ul>
//                     </div>

//                     <p>
//                       His expertise ensures minimal physiotherapy requirement
//                       and rapid shoulder strength recovery—ideal for both active
//                       adults and senior patients.
//                     </p>
//                   </div>

//                   <hr />

//                   <div id="Frozen">
//                     <div className="service-single-image">
//                       <figure className="image-anime reveal">
//                         <img
//                           src="images/specialties/shoulder/frozen-shoulder.jpg"
//                           alt="Frozen Shoulder Doctor Meerut"
//                           loading="lazy"
//                         />
//                       </figure>
//                     </div>
//                     <h3 className="fs-3">
//                       Frozen Shoulder (Adhesive Capsulitis)
//                     </h3>
//                     <p>
//                       This condition is marked by severe stiffness, especially
//                       in diabetic and post-operative patients. Most treatments
//                       fail when done without stage-specific clarity.
//                     </p>

//                     <p>
//                       Frozen Shoulder, or Adhesive Capsulitis, is a painful and
//                       often frustrating condition that gradually limits shoulder
//                       movement, making even simple tasks like dressing or
//                       reaching overhead difficult. At{" "}
//                       <strong>Sangeeta Orthopedic Hospital, Meerut</strong>,
//                       Dr. Shubhankar Shekhar offers expert care for patients
//                       facing this condition, guiding them through every stage of
//                       recovery. The condition typically develops after injury,
//                       surgery, or periods of immobilization and can persist for
//                       months if not treated properly.
//                     </p>

//                     <div className="row">
//                       <div className="col-lg-8">
//                         <p>
//                           With a deep understanding of shoulder mechanics and
//                           patient-centered care,{" "}
//                           <strong>Dr. Shubhankar Shekhar</strong> provides both
//                           non-surgical and surgical solutions tailored to each
//                           patient’s severity and needs. From supervised
//                           physiotherapy and medication strategies to advanced
//                           arthroscopic capsular release procedures when needed,
//                           the focus is always on restoring pain-free motion and
//                           preventing long-term stiffness. At Sangeeta
//                           Orthopedic Hospital, Meerut, patients find the
//                           expertise and support they need to regain control over
//                           their shoulder health.
//                         </p>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="how-work-image-box-2 rounded-4">
//                           <div className="how-work-img-2">
//                             <img
//                               src="images/specialties/shoulder/frozen-shoulder2.jpg"
//                               alt="Frozen Shoulder Specialist Meerut"
//                               loading="lazy"
//                             />
//                            <figure className="image-anime reveal">
//                                                 </figure>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <p className=" mt-4">
//                       <strong>Dr. Shubhankar’s protocol includes:</strong>
//                     </p>
//                     <div className="custom-list mt-1 mb-3">
//                       <ul>
//                         <li>
//                           Accurate staging (freezing, frozen, thawing) through
//                           clinical and imaging correlation
//                         </li>
//                         <li>
//                           Intra-articular injections, capsular stretches, and
//                           selective MUA (manipulation under anesthesia) only
//                           when necessary
//                         </li>
//                         <li>
//                           Tailored physiotherapy to match the stage and response
//                           of each patient
//                         </li>
//                       </ul>
//                     </div>

//                     <p>
//                       With his refined approach, most cases improve dramatically
//                       without aggressive therapy or repeat interventions.
//                     </p>
//                   </div>

//                   <hr />

//                   <div id="">
//                     <h3 className="fs-3">
//                       What Makes This Department Different
//                     </h3>

//                     <div className="custom-list mt-3 mb-3">
//                       <ul>
//                         <li>
//                           <strong>
//                             Every case is seen and operated by Dr. Shubhankar
//                             Shekhar —
//                           </strong>{" "}
//                           no junior delegation
//                         </li>
//                         <li>
//                           <strong>
//                             Only evidence-backed treatment offered —
//                           </strong>{" "}
//                           no overuse of physiotherapy or unnecessary surgery
//                         </li>
//                         <li>
//                           <strong>
//                             All surgeries done with minimally invasive
//                             techniques —
//                           </strong>{" "}
//                           faster healing, less pain
//                         </li>
//                         <li>
//                           <strong>Patient-first protocols —</strong> only the
//                           care that is truly needed, nothing more
//                         </li>
//                       </ul>
//                     </div>

//                     <p>
//                       The Shoulder Department at Sangeeta Orthopedic Hospital
//                       is where modern orthopedic science meets surgical
//                       mastery—delivering outcomes that patients can trust and
//                       feel.
//                     </p>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Section End */}
//     </>
//   );
// };

// export default Specialty;

// // import React, { useEffect, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import BreadCrumb from "../components/BreadCrumb";
// // import SideBar from "../components/SideBar";

// // import specialtiesData from "../pages/specialties.json"; // import your JSON file

// // const Paragraphs = ({ texts }) => (
// //   <>
// //     {texts.map((text, i) => (
// //       <p className="text-gray-700 leading-relaxed my-2" key={i}>{text}</p>
// //     ))}
// //   </>
// // );

// // const Specialty = () => {
// //   const { name } = useParams();
// //   const [specialty, setSpecialty] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     if (name) {
// //       const found = specialtiesData.specialties.find(
// //         (spec) => spec.slug === name.toLowerCase()
// //       );
// //       if (found) {
// //         setSpecialty(found);
// //         setError(null);
// //       } else {
// //         setSpecialty(null);
// //         setError("Specialty not found.");
// //       }
// //     } else {
// //       setError("No specialty slug provided in the URL.");
// //     }
// //     setLoading(false);
// //   }, [name]);

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="spinner"></div>
// //         <p className="ml-4 text-gray-700">Loading specialty details...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex flex-col justify-center items-center h-screen text-red-600">
// //         <p>{error}</p>
// //         <Link to="/specialties" className="mt-4 text-blue-600 hover:underline">
// //           Back to Specialties
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <BreadCrumb
// //         image="https://sangeetamedicalcentre.com/wp-content/uploads/2024/11/services.webp"
// //         title={specialty?.name}
// //         page={`Specialties / ${specialty?.name}`}
// //       />

// //       <div className="page-service-single bg-radius-section">
// //         <div className="container">
// //           <div className="row">
// //             <SideBar />

// //             <div className="col-lg-8">
// //               <div className="service-single-content">
// //                 <div className="service-entry">
// //                   <h2 className="text-anime-style-3">{specialty.name}</h2>
// //                   {specialty.mainDescription && (
// //                     <Paragraphs texts={specialty.mainDescription} />
// //                   )}

// //                   <hr />

// //                   {specialty.sections?.map((section, index) => (
// //                     <div
// //                       key={section.sectionId || index}
// //                       id={section.sectionId}
// //                     >
// //                       {section.mainImageUrl && (
// //                         <div className="service-single-image">
// //                           <img
// //                             src={section.mainImageUrl}
// //                             alt={section.title}
// //                             loading="lazy"
// //                             className="rounded-lg mb-4 w-full object-cover"
// //                           />
// //                         </div>
// //                       )}
// //                       <h3 className="fs-3">{section.title}</h3>
// //                       {section.description && (
// //                         <Paragraphs texts={section.description} />
// //                       )}

// //                       {section.secondaryImageUrl && (
// //                         <div className="row">
// //                           <div className="col-lg-8">
// //                             {section.description && (
// //                               <Paragraphs texts={section.description} />
// //                             )}
// //                           </div>
// //                           <div className="col-lg-4">
// //                             <div className="how-work-image-box-2 rounded-4">
// //                               <img
// //                                 src={section.secondaryImageUrl}
// //                                 alt={section.title}
// //                                 loading="lazy"
// //                                 className="rounded-lg"
// //                               />
// //                             </div>
// //                           </div>
// //                         </div>
// //                       )}

// //                       {section.bulletPoints && section.bulletPoints.length > 0 && (
// //                         <>
// //                           <p className="mt-4">
// //                             <strong>Under {specialty.name}'s care:</strong>
// //                           </p>
// //                           <ul className="custom-list mt-1 mb-3">
// //                             {section.bulletPoints.map((point, i) => (
// //                               <li key={i}>{point}</li>
// //                             ))}
// //                           </ul>
// //                         </>
// //                       )}

// //                       {section.conclusion && (
// //                         <Paragraphs texts={[section.conclusion]} />
// //                       )}

// //                       <hr />
// //                     </div>
// //                   ))}

// //                   {specialty.uniqueSellingPoints && specialty.uniqueSellingPoints.length > 0 && (
// //                     <div id="what-makes-different" className="mt-6">
// //                       <h3 className="fs-3">What Makes This Department Different</h3>
// //                       <ul className="custom-list mt-3 mb-3">
// //                         {specialty.uniqueSellingPoints.map((usp, i) => (
// //                           <li key={i}>{usp}</li>
// //                         ))}
// //                       </ul>
// //                       <p>
// //                         The {specialty.name} at Sangeeta Medical Centre is where modern orthopedic
// //                         science meets surgical mastery—delivering outcomes that patients can trust
// //                         and feel.
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Specialty;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import SideBar from "../components/SideBar";
import specialtiesData from "../pages/specialties.json"; // Import JSON

// New component to display image nicely
const SpecialtyImageCard = ({ title, imageUrl }) => {
  return (
    <div className="mt-4 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
      <div className="p-3 bg-white">
        <h4 className="text-gray-800 font-semibold text-lg">{title}</h4>
      </div>
    </div>
  );
};

const specialtyData = [
  {
    name: "Arthroscopy & Sports Injury Treatment",
    slug: "arthroscopy-sports-injury-treatment",
    doctor: "Dr. Raman Jindal",
    link: "/images/specialties/Arthroscopy & Sports Injury Treatment.jpg", // Leave empty as per request
    description: [
      "Sports injuries can happen to anyone — athletes, fitness enthusiasts, or even during daily activities. Dr. Raman Jindal, a trusted orthopedic doctor in Meerut, offers advanced arthroscopy and sports injury treatments to repair damaged joints, ligaments, and cartilage. Considered among the best orthopedic doctors in Meerut, he specializes in treating ACL/PCL tears, meniscus injuries, rotator cuff tears, and other sports-related conditions.",
      "Using minimally invasive arthroscopic surgery, Dr. Raman Jindal ensures faster recovery, less scarring, and reduced post-operative pain. His comprehensive approach includes accurate diagnosis, targeted surgical repair, and tailored rehabilitation programs.",
      "When patients search for an orthopedic doctor near me for sports injury care, they often choose Dr. Raman Jindal for his expertise and excellent patient outcomes. Whether it’s restoring an athlete’s performance or helping someone return to an active lifestyle, his orthopedic skills deliver reliable results.",
      "If you need an orthopedic doctor Meerut for sports injury management, Dr. Raman Jindal is committed to getting you back on your feet with advanced, effective, and safe treatments.",
    ],
  },
  {
    name: "Spine & Back Pain Treatment",
    slug: "spine-back-pain-treatment",
    doctor: "Dr. Raman Jindal",
    link: "/images/specialties/Spine & Back Pain Treatment.jpg", // Leave empty as per request
    description: [
      "Back pain is one of the most common health issues, affecting people of all ages. Dr. Raman Jindal, a skilled orthopedic doctor in Meerut, provides specialized treatment for spine disorders and chronic back pain. Recognized as one of the best orthopedic doctors in Meerut, he offers both non-surgical and surgical solutions for conditions such as slipped discs, sciatica, spinal stenosis, and degenerative spine disease.",
      "At Sangeeta Ortho and Gynae Center, Dr. Raman Jindal uses modern diagnostic tools to pinpoint the cause of pain and develop a personalized treatment plan. His approach may include physiotherapy, pain management, and minimally invasive spine surgery to relieve symptoms and restore mobility.",
      "Patients searching for an orthopedic doctor near me for spine problems rely on Dr. Raman Jindal for his accurate diagnosis and effective treatment methods.",
      "If you’re suffering from persistent back pain and looking for an orthopedic doctor Meerut, Dr. Raman Jindal offers expert care that focuses on lasting relief and improved quality of life.",
    ],
  },
  {
    name: "Joint Pain & Arthritis Management",
    slug: "joint-pain-arthritis-management",
    doctor: "Dr. Raman Jindal",
    link: "/images/specialties/Joint Pain & Arthritis Managementjpg.jpg", // Leave empty as per request
    description: [
      "Joint pain caused by arthritis can limit daily activities and affect overall quality of life. Dr. Raman Jindal, a renowned orthopedic doctor in Meerut, specializes in the diagnosis and treatment of osteoarthritis, rheumatoid arthritis, gout, and other degenerative joint conditions. Widely recognized as one of the best orthopedic doctors in Meerut, he offers personalized treatment plans to reduce pain, improve mobility, and prevent further joint damage.",
      "At Sangeeta Ortho and Gynae Center, Dr. Raman Jindal uses advanced orthopedic methods such as targeted medications, joint injections, physiotherapy, and surgical interventions when necessary. His approach focuses on preserving natural joint function for as long as possible, delaying or eliminating the need for surgery.",
      "Patients searching for an orthopedic doctor near me trust Dr. Raman Jindal for his comprehensive arthritis care, which includes lifestyle advice, exercise plans, and long-term management strategies.",
      "If you’re experiencing stiffness, swelling, or chronic joint pain and are looking for an orthopedic doctor Meerut, Dr. Raman Jindal provides expert care to help you regain mobility and live pain-free.",
    ],
  },
  {
    name: "Orthopedic Emergencies & Trauma Care",
    slug: "orthopedic-emergencies-trauma-care",
    doctor: "Dr. Raman Jindal",
    link: "/images/specialties/Orthopedic Emergencies & Trauma Care.jpg", // Leave empty as per request
    description: [
      "Accidents, falls, and sports injuries can cause severe orthopedic trauma that needs urgent medical attention. Dr. Raman Jindal, a trusted orthopedic doctor in Meerut, offers emergency orthopedic and trauma care for fractures, dislocations, ligament tears, and bone injuries. Recognized as one of the best orthopedic doctors in Meerut, he is known for his quick response, accurate diagnosis, and effective treatment in critical situations.",
      "At Sangeeta Ortho and Gynae Center, Dr. Raman Jindal uses advanced orthopedic equipment and surgical methods to stabilize injuries, prevent complications, and promote healing. He is available for urgent care and ensures patients receive immediate attention during emergencies.",
      "People searching for an orthopedic doctor near me in emergency situations rely on Dr. Raman Jindal for his experience and dedication.",
      "If you need an orthopedic doctor Meerut for urgent orthopedic care, Dr. Raman Jindal delivers timely, skilled, and life-changing treatment.",
      "Families searching for an orthopedic doctor near me to care for aging loved ones trust Dr. Raman Jindal for his compassionate approach and commitment to improving quality of life.",
      "If you’re looking for an orthopedic doctor Meerut who understands the unique needs of older adults, Dr. Raman Jindal provides expert care that keeps bones strong and movement pain-free.",
    ],
  },
  {
    name: "Normal Delivery Care",
    slug: "normal-pregnancy-care",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Normal-&-High-Risk-Delivery.jpg",
    description: [
      "Dr. Manisha Chaudhary, M.S. (OBG), is known as one of the best gynecologists in Meerut for complete pregnancy care. She provides expert management for normal pregnancies, ensuring safe delivery and healthy outcomes for both mother and baby.",
      "From the first trimester to postnatal recovery, Sangeeta Medical Center offers personalized care, regular check-ups, and advanced monitoring. High-risk conditions such as gestational diabetes, high blood pressure, multiple pregnancies, and previous miscarriages are handled with extra attention and medical expertise.",
      "At Sangeeta Medical Centre, expectant mothers receive nutritional guidance, lifestyle counseling, and emotional support for a healthy pregnancy journey. Sangeeta Medical Center’s focus is on safe childbirth — whether through normal delivery or cesarean section — always prioritizing the well-being of the patient.",
      "📍 Location: Sangeeta Medical Centre, Ganga Nagar, Meerut",
      " 📞 Contact: 011-69269888, +91 79705 86243 ",
      "Book your consultation today with a gynecologist near you for complete pregnancy care.",
    ],
  },
  {
    name: "Laparoscopic (Keyhole) Surgeries",
    slug: "laparoscopic-surgeries",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Laparoscopic-Gynecological-Surgeries.jpg",
    description: [
      "Specializing in laparoscopic gynecological surgeries, Dr. Manisha Chaudhary offers women advanced treatment with minimal pain, faster recovery, and small scars.",
      "She performs laparoscopic hysterectomy, myomectomy, ovarian cyst removal, endometriosis treatment, and ectopic pregnancy surgery at Sangeeta Medical Centre. Using precision technology, she ensures minimal tissue damage and a quicker return to daily life.",
      "Patients benefit from shorter hospital stays, less post-operative discomfort, reduced infection risk, and better cosmetic results compared to traditional open surgery.",
      "📍 Location: Sangeeta Medical Centre, Meerut ",
      "📞 Contact: 011-69269888, +91 79705 86243 ",
      "If you’re seeking laparoscopic surgery in Meerut, schedule an appointment with Sangeeta Medical Center today.",
    ],
  },
  {
    name: "Infertility Treatments (IVF, IUI, etc.)",
    slug: "infertility-treatments",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Infertility-Procedures.jpg",
    description: [
      "Infertility can be emotionally challenging, but with the right guidance, solutions are possible. Dr. Manisha Chaudhary, one of the best gynecologists in Meerut, offers personalized infertility treatments including IUI, IVF guidance, ovulation induction, and hormonal therapy.",
      "At Sangeeta Medical Centre, every couple receives a comprehensive fertility evaluation to identify the root cause of infertility. Sangeeta Medical Center then designs a treatment plan that maximizes the chances of conception while keeping emotional well-being in focus.",
      "Her expertise covers male and female infertility, polycystic ovary syndrome (PCOS), irregular ovulation, blocked tubes, and other reproductive health concerns.",
      "📍 Location: Sangeeta Medical Centre, Meerut",
      " 📞 Contact: 011-69269888, +91 79705 86243 ",
      "Take the first step toward parenthood — consult a trusted gynecologist near you for fertility solutions.",
    ],
  },
  {
    name: "Menstrual Disorders Treatment",
    slug: "menstrual-disorders-treatment",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Menstrual-Disorder-Management.jpg",
    description: [
      "Menstrual problems like irregular cycles, heavy bleeding, and severe cramps can affect daily life. Dr. Manisha Chaudhary provides expert diagnosis and treatment for menstrual disorders to restore hormonal balance and improve quality of life.",
      "She treats conditions like PCOS, endometriosis, fibroids, thyroid-related cycle issues, and abnormal uterine bleeding. At Sangeeta Medical Centre, advanced diagnostics like ultrasound and hormonal testing help pinpoint the cause, enabling targeted treatment.",
      "Whether the solution involves medication, lifestyle adjustments, or minimally invasive procedures, Sangeeta Medical Center ensures a personalized approach for long-term relief.",
      "📍 Location: Sangeeta Medical Centre, Meerut",
      " 📞 Contact: 011-69269888, +91 79705 86243 ",
      "Get help from a gynecologist near you to manage menstrual problems effectively.",
    ],
  },
  {
    name: "PCOS/PCOD Management",
    slug: "pcos-pcod-management",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/PCODPCOS-Hormonal-Treatment.jpg",
    description: [
      "Polycystic Ovary Syndrome (PCOS) and Polycystic Ovary Disease (PCOD) are common yet complex hormonal disorders. Dr. Manisha Chaudhary is experienced in creating comprehensive PCOS/PCOD treatment plans focusing on symptom relief and long-term health.",
      "Her management approach includes lifestyle modification, diet planning, hormonal regulation, fertility guidance, and metabolic health monitoring. Early diagnosis helps prevent complications like infertility, diabetes, and cardiovascular risks.",
      "At Sangeeta Medical Centre, patients receive complete care combining medical treatment with wellness counseling.",
      "📍 Location: Sangeeta Medical Centre, Meerut ",
      "📞 Contact: 011-69269888, +91 79705 86243",
      " Consult the best gynecologist in Meerut for effective PCOS/PCOD management.",
    ],
  },
  {
    name: "Adolescent & Menopausal Health",
    slug: "adolescent-menopausal-health",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Adolescent-&-Menopausal-Care.jpg",
    description: [
      "Women’s health needs change with age. Dr. Manisha Chaudhary offers dedicated care for adolescent girls and women experiencing menopause.",
      "For adolescents, she provides counseling on menstrual health, nutrition, and reproductive health education. For menopausal women, she offers solutions for hot flashes, mood changes, bone health, and hormonal balance.",
      "Her compassionate approach ensures that women feel supported, informed, and confident about their health at every stage of life.",
      "📍 Location: Sangeeta Medical Centre, Meerut",
      " 📞 Contact: 011-69269888, +91 79705 86243",
      " Book a consultation with a gynecologist near you for age-specific women’s healthcare.",
    ],
  },
  {
    name: "Painless Delivery Options",
    slug: "painless-delivery-options",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/painless-delivery.png",
    description: [
      "Dr. Manisha Chaudhary specializes in painless delivery techniques to make childbirth safer and more comfortable.",
      "Using modern pain relief methods such as epidural anesthesia, she helps mothers experience a positive delivery process without unnecessary discomfort. Every birth plan is customized according to the patient’s medical history and preferences.",
      "Her focus is on safe delivery for both mother and baby while maintaining a calm and supportive environment.",
      "📍 Location: Sangeeta Medical Centre, Meerut ",
      "📞 Contact: 011-69269888, +91 79705 86243 ",
      "Choose painless delivery in Meerut with a trusted gynecologist by your side.",
    ],
  },
  {
    name: "Cancer Screening & Prevention",
    slug: "cancer-screening-prevention",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/cancer-screening-test-article.jpg",
    description: [
      "Early detection is the key to preventing and successfully treating gynecological cancers. Dr. Manisha Chaudhary offers regular cervical cancer screening (Pap smear), HPV testing, breast exams, and ovarian cancer check-ups.",
      "She educates women about risk factors and promotes regular screenings for early diagnosis. At Sangeeta Medical Centre, advanced diagnostic tools ensure accuracy and safety.",
      "📍 Location: Sangeeta Medical Centre, Meerut",
      " 📞 Contact: 011-69269888, +91 79705 86243 ",
      "Schedule your cancer screening in Meerut with the best gynecologist near you.",
    ],
  },
  {
    name: "Contraception & Family Planning",
    slug: "contraception-family-planning",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Family-Planning-&-Contraception.jpg",
    description: [
      "Family planning is a vital part of women’s healthcare. Dr. Manisha Chaudhary provides counseling on birth control methods, permanent sterilization, and natural planning techniques.",
      "She tailors each recommendation to the patient’s health, lifestyle, and family goals. Safe and effective options include oral contraceptives, IUD insertion, implants, and surgical methods.",
      "📍 Location: Sangeeta Medical Centre, Meerut ",
      "📞 Contact: 011-69269888, +91 79705 86243 ",
      "Discuss family planning in Meerut with a caring and experienced gynecologist.",
    ],
  },
  {
    name: "Gynecological Ultrasound & Diagnostics",
    slug: "gynecological-ultrasound-diagnostics",
    doctor: "Dr. Manisha Chaudhary",
    link: "/images/procedures/gyneco/Gynecological-Ultrasound-&-Diagnostics.jpg",
    description: [
      "Accurate diagnosis leads to effective treatment. Dr. Manisha Chaudhary offers gynecological ultrasound and diagnostic services to detect conditions like fibroids, ovarian cysts, endometriosis, and pregnancy-related complications.",
      "At Sangeeta Medical Centre, advanced imaging ensures detailed results with minimal discomfort. These diagnostics form the foundation for precise treatment planning in all areas of gynecology.",
      "📍 Location: Sangeeta Medical Centre, Meerut ",
      "📞 Contact: 011-69269888, +91 79705 86243 ",
      "Visit a gynecologist near you for expert diagnostic and imaging services.",
    ],
  },
];

const Specialty = () => {
  const { name } = useParams();
  const [specialty, setSpecialty] = useState(null);

  useEffect(() => {
    if (name) {
      const staticData = specialtyData.find((item) => item.slug === name);
      if (staticData) setSpecialty(staticData);
      else {
        const foundSpecialty = specialtiesData.specialties.find(
          (item) => item.slug === name
        );
        setSpecialty(foundSpecialty);
      }
    }
  }, [name]);

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
        title={specialty.name}
        page={`Specialties / ${specialty.name}`}
      />

      {/* Section Start */}
      <div className="page-service-single bg-radius-section">
        <div className="container">
          <div className="row">
            <SideBar />

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-entry">
                  <h2 className="text-anime-style-3">{specialty.name}</h2>
                  {specialty.slug === "normal-pregnancy-care" && (
                    <p style={{ fontSize: "18px" }}>
                      We provide <strong>Normal Delivery</strong> with maximun
                      normal delivery rate in 20km radius area.
                    </p>
                  )}
                  <h4 className="text-lg font-semibold mb-3">
                    {specialty.doctor}
                  </h4>
                  {/* Image from JSON link */}
                  {specialty.link && (
                    <SpecialtyImageCard
                      title={specialty.name}
                      imageUrl={specialty.link}
                    />
                  )}
                  {/* Description */}
                  {specialty.description &&
                    specialty.description.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 leading-relaxed my-2"
                      >
                        {para}
                      </p>
                    ))}
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
