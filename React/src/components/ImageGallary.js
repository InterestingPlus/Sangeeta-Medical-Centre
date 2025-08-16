import React, { useState } from "react";

const ImageGallery = ({ header = false }) => {
  // Array of image links. Replace these with your actual image URLs.
  const imageUrls = [
    "/images/gallary/AUTOCLAVE .jpg",
    "/images/gallary/CARM.jpg",
    "/images/gallary/hospital entrance GPS.jpg",
    "/images/gallary/hospital front day.jpg",
    "/images/gallary/ICU.jpg",
    "/images/gallary/lift lobby 2.jpg",
    "/images/gallary/lift lobby.jpg",
    "/images/gallary/opd1.jpg",
    "/images/gallary/opd2.jpg",
    "/images/gallary/opd3.jpg",
    "/images/gallary/ot1.jpg",
    "/images/gallary/ot2.jpg",
    "/images/gallary/PATH COLLECTION CENTER GPS.jpeg",
    "/images/gallary/patient room.jpg",
    "/images/gallary/patient waiting .jpg",
    "/images/gallary/patient waiting .jpg",
    "/images/gallary/pharmacy .jpg",
    "/images/gallary/PHARMACY GPS.jpg",
    "/images/gallary/reception GPS.jpg",
    "/images/gallary/waiting area GPS 3.jpg",
    "/images/gallary/WAITING AREA GPS.jpeg",
    "/images/gallary/waiting area.jpg",
  ];

  const [imagesToShow, setImagesToShow] = useState(imageUrls.slice(0, 8));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrev = () => {
    const prevIndex =
      currentImageIndex === 0 ? imageUrls.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  const goToNext = () => {
    const nextIndex =
      currentImageIndex === imageUrls.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="gallery-section">
      <div className="container">
        {header && (
          <div className="section-title mb-4">
            <h2 className="text-anime-style-3" data-cursor="-opaque">
              Our Gallery
            </h2>
          </div>
        )}
        <div className="image-grid">
          {imagesToShow.map((url, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(index)}
            >
              <img src={url} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
        {imageUrls.length > imagesToShow.length ? (
          <div className="" style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                alignSelf: "flex-end",
                padding: "10px 0px",
                border: "none",
                cursor: "pointer",
                outline: "none",
                backgroundColor: "transparent",
                transition: "background-color 0.3s ease",
                color: '#008080',
                textDecoration: 'underline',
              }}
              onClick={() => setImagesToShow(imageUrls)}
            >
              View More
            </button>
          </div>
        ) : (
          <div className="" style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                alignSelf: "flex-end",
                padding: "10px 0px",
                border: "none",
                cursor: "pointer",
                outline: "none",
                backgroundColor: "transparent",
                transition: "background-color 0.3s ease",
                color: '#008080',
                textDecoration: 'underline',
              }}
              onClick={() => setImagesToShow(imageUrls.slice(0, 8))}
            >
              View Less
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="image-modal-overlay">
          <div className="image-modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <button className="modal-nav-btn modal-prev-btn" onClick={goToPrev}>
              &#10094;
            </button>
            <img
              src={imageUrls[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-nav-btn modal-next-btn" onClick={goToNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
