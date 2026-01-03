import { useState } from "react";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";
import SearchForm from "../components/SearchForm";
import FavouriteButton from "../components/FavouriteButton";
import FavouritesPanel from "../components/FavouritesPanel";
import "./SearchPage.css";

const SearchPage = ({ favourites, setFavourites }) => {
  const [results, setResults] = useState(propertiesData.properties);

  const handleFilter = (filters) => {
    setResults(filterProperties(propertiesData.properties, filters));
  };

  // Drag start for search results → FavouritesPanel
  const handleDragStart = (e, propertyId) => {
    e.dataTransfer.setData("property-id", propertyId);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="search-page">
      {/* Left Section: Search + Results */}
      <div className="search-left">
        <h1>Property Search</h1>
        <SearchForm onFilter={handleFilter} />

        {results.length === 0 && <p>No properties found.</p>}

        {results.map((property) => (
          <div
            key={property.id}
            className="property-card"
            draggable
            onDragStart={(e) => handleDragStart(e, property.id)}
          >
            <h3>{property.type}</h3>
            <p>{property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>£{property.price.toLocaleString()}</p>

            <Link
              to={`/property/${property.id}`}
              state={{ fromAllProperties: false }}
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

      {/* Right Section: Favourites Panel */}
      <div className="search-right">
        <FavouritesPanel favourites={favourites} setFavourites={setFavourites} />
      </div>
    </div>
  );
};

export default SearchPage;
