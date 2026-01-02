import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import FavouriteButton from "./FavouriteButton";

const FavouritesPanel = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const favIds = JSON.parse(localStorage.getItem("favourites")) || [];
        const favProps = propertiesData.properties.filter((p) =>
            favIds.includes(p.id)
        );
        setFavourites(favProps);
    },[]);

    return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Your Favourites</h2>
      {favourites.length === 0 && <p>No favourites added yet.</p>}

      {favourites.map((property) => (
        <div key={property.id} style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>
          <Link to={`/property/${property.id}`}>
            <strong>{property.type}</strong> - {property.location}
          </Link>
          <div>
            <FavouriteButton propertyId={property.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouritesPanel;