import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import FavouriteButton from "../components/FavouriteButton";

const AllPropertiesPage = ({ favourites, setFavourites }) => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>All Properties</h1>
      {propertiesData.properties.map((property) => (
        <div
          key={property.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>£{property.price}</p>
          <Link
            to={`/property/${property.id}`}
            state={{ fromAllProperties: true }} // came from all properties
          >
            <button>View Details</button>
          </Link>
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
