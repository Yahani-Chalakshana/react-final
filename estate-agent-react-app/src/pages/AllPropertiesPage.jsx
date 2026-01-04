import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import FavouriteButton from "../components/FavouriteButton";
import "./AllPropertiesPage.css";

const AllPropertiesPage = ({ favourites, setFavourites }) => {
  return (
    <div className="all-properties-page">
      <h1>All Properties</h1>

      {/* Loop through all properties */}
      {propertiesData.properties.map((property) => (
        <div key={property.id} className="property-card-wrapper">
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>£{property.price.toLocaleString()}</p>

          {/* Button to view property details */}
          <Link to={`/property/${property.id}`} state={{ fromAllProperties: true }}>
            <button>View Details</button>
          </Link>

          {/* Favourite toggle button */}
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

export default AllPropertiesPage;