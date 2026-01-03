import { useState } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const displayImages = images.slice(0, 6);
  const [mainImage, setMainImage] = useState(displayImages[0]);

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
            alt={`Thumbnail ${index + 1}`}
            className={mainImage === img ? "active" : ""}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
