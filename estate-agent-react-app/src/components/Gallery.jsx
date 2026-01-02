import React, { useState } from "react";

const Gallery = ({images}) => {
    const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return <p>No images available.</p>;

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <img
        src={images[current]}
        alt={`Property ${current + 1}`}
        style={{ width: "100%", maxWidth: "600px", height: "400px", objectFit: "cover", borderRadius: "8px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevImage} style={{ marginRight: "10px" }}>
          ◀ Previous
        </button>
        <button onClick={nextImage}>Next ▶</button>
      </div>

      <p>{current + 1} / {images.length}</p>
    </div>
  );
};

export default Gallery;