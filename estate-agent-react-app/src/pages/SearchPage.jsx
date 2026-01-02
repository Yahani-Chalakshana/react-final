import React, { useState } from "react";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";
import SearchForm from "../components/SearchForm";

const SearchPage = () => {
  const [results, setResults] = useState(propertiesData.properties);

  const handleFilter = (filters) => {
    const filtered = filterProperties(propertiesData.properties, filters);
    setResults(filtered);
  };

  return (
    <div>
      <h1>Property Search</h1>
      <SearchForm onFilter={handleFilter} />

      <h2>Results ({results.length})</h2>
      {results.length === 0 ? (
        <p>No properties match your criteria.</p>
      ) : (
        results.map((property) => (
          <div key={property.id}>
            <h3>{property.type}</h3>
            <p>{property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Price: £{property.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchPage;

