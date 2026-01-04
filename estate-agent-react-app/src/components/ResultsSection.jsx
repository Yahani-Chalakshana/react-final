import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import "./ResultsSection.css";

const ResultsSection = ({ results, favourites, setFavourites }) => {
  if (results.length === 0) return <p>No properties found.</p>;

  return (
    <div className="results-section"> {/* Container for all property cards */}
      {results.map((property) => (
        <div key={property.id} className="property-card">
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>£{property.price.toLocaleString()}</p>

          <Link to={`/property/${property.id}`}> {/* Link to property details page */}
            <button>View Details</button>
          </Link>

          <FavouriteButton
            property={property}
            favourites={favourites}
            setFavourites={setFavourites}
          /> {/* Favourite button for this property */}
        </div>
      ))}
    </div>
  );
};

export default ResultsSection;