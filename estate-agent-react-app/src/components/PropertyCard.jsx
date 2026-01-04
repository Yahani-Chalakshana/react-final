import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import "./PropertyCard.css";

const PropertyCard = ({ property, favourites, setFavourites }) => {
  return (
    <div className="property-card"> {/* Main card container */}
      <h3 className="property-title">{property.type}</h3>

      <p className="property-location">{property.location}</p>
      <p className="property-info">Bedrooms: {property.bedrooms}</p>
      <p className="property-price">£{property.price.toLocaleString()}</p>

      <div className="property-actions"> {/* Container for action buttons */}
        <Link to={`/property/${property.id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>

        <FavouriteButton
          property={property}
          favourites={favourites} // Pass current favourites
          setFavourites={setFavourites} // Function to update favourites
        />
      </div>
    </div>
  );
};

export default PropertyCard;