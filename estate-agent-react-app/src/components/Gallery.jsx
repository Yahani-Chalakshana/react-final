import { useState } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const displayImages = images.slice(0, 6); // Limit to first 6 images
  const [mainImage, setMainImage] = useState(displayImages[0]); // State for main displayed image

  return (
    <div className="gallery">
      {/* Main Image */}
      <div className="gallery-main">
        <img src={mainImage} alt="Main property view" />
      </div>

      {/* Thumbnails */}
      <div className="gallery-thumbnails">
        {displayImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`} // Alt text for accessibility
            className={mainImage === img ? "active" : ""} // Highlight active thumbnail
            onClick={() => setMainImage(img)} // Update main image on click
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;