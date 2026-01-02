import { useState } from "react";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";
import SearchForm from "../components/SearchForm";

const SearchPage = () => {
  const [results, setResults] = useState(propertiesData.properties);

  return (
    <div>
      <h1>Property Search</h1>

      <SearchForm
        onFilter={(filters) =>
          setResults(filterProperties(propertiesData.properties, filters))
        }
      />

      {results.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h3>{p.type}</h3>
          <p>{p.location}</p>
          <p>Bedrooms: {p.bedrooms}</p>
          <p>£{p.price}</p>

          <Link to={`/property/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
