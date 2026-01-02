import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "300px",
      }}
    >
      {/* First image as thumbnail */}
      <img
        src={property.picture[0]}
        alt={`${property.type} at ${property.location}`}
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }}
      />

      <h3>{property.type}</h3>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>

      <Link to={`/property/${property.id}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default PropertyCard;