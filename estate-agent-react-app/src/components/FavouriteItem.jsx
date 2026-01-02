import React from "react";
import { Link } from "react-router-dom";

const FavouriteItem = ({ property, setFavourites, favourites }) => {
  const removeFavourite = () => {
    setFavourites(favourites.filter((f) => f.id !== property.id));
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
      <h4>{property.type}</h4>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>£{property.price}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
      <button onClick={removeFavourite} style={{ marginLeft: "10px" }}>
        Remove
      </button>
    </div>
  );
};

export default FavouriteItem;
