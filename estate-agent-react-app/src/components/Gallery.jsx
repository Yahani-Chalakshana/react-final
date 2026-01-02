const Gallery = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // ✅ 3 columns
        gridTemplateRows: "repeat(2, 200px)",  // ✅ 2 rows
        gap: "10px",
      }}
    >
      {images.slice(0, 6).map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Property image ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
};

export default Gallery;
