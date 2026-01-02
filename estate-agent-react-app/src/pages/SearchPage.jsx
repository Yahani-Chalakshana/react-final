import { useState } from "react";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";
import SearchForm from "../components/SearchForm";
import FavouriteButton from "../components/FavouriteButton";
import FavouritesPanel from "../components/FavouritesPanel";

const SearchPage = ({ favourites, setFavourites }) => {
  const [results, setResults] = useState(propertiesData.properties);

  const handleFilter = (filters) => {
    setResults(filterProperties(propertiesData.properties, filters));
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left side: Search + Results */}
      <div style={{ flex: 3 }}>
        <h1>Property Search</h1>

        {/* Search form */}
        <SearchForm onFilter={handleFilter} />

        {/* Results */}
        {results.length === 0 && <p>No properties found.</p>}

        {results.map((property) => (
          <div
            key={property.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{property.type}</h3>
            <p>{property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>£{property.price.toLocaleString()}</p>

            {/* View Details button */}
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

      {/* Right side: Favourites Panel only */}
      <div style={{ flex: 1, borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
        <FavouritesPanel favourites={favourites} setFavourites={setFavourites} />
      </div>
    </div>
  );
};

export default SearchPage;