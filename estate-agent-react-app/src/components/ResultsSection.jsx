import React from "react";
import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";

const ResultsSection = ({ results, favourites, setFavourites }) => {
  return (
    <div style={{ flex: 2 }}>
      {results.length === 0 && <p>No properties found.</p>}

      {results.map((property) => (
        <div
          key={property.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>£{property.price}</p>

          <Link to={`/property/${property.id}`}>
            <button style={{ marginRight: "10px" }}>View Details</button>
          </Link>

          {/* Favourite button */}
          <FavouriteButton
            property={property}
            favourites={favourites}
            setFavourites={setFavourites}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultsSection;