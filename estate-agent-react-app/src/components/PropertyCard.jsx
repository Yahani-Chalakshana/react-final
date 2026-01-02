import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";

const PropertyCard = ({ property, favourites, setFavourites }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3>{property.type}</h3>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>£{property.price}</p>

      <Link to={`/property/${property.id}`}>
        <button>View Details</button>
      </Link>

      <FavouriteButton
        property={property}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default PropertyCard;
