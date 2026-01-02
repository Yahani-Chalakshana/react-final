import { useState } from "react";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";
import SearchForm from "../components/SearchForm";
import ResultsSection from "../components/ResultsSection";

const SearchPage = () => {
  const [results, setResults] = useState(propertiesData.properties);

  const handleFilter = (filters) => {
    setResults(filterProperties(propertiesData.properties, filters));
  };

  return (
    <div>
      <h1>Property Search</h1>

      <SearchForm onFilter={handleFilter} />

      <ResultsSection results={results} />
    </div>
  );
};

export default SearchPage;