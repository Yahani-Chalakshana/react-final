import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import "./PropertyCard.css";

const PropertyCard = ({ property, favourites, setFavourites }) => {
  return (
    <div className="property-card">
      <h3 className="property-title">{property.type}</h3>

      <p className="property-location">{property.location}</p>
      <p className="property-info">Bedrooms: {property.bedrooms}</p>
      <p className="property-price">£{property.price.toLocaleString()}</p>

      <div className="property-actions">
        <Link to={`/property/${property.id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>

        <FavouriteButton
          property={property}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      </div>
    </div>
  );
};

export default PropertyCard;