import { useState } from "react";
import propertiesData from "../data/properties.json";

import filterProperties from "../utils/filterProperties";

const SearchPage = () => {
    const allProperties = propertiesData.properties;
    
    //State for filtered results
    const [filteredProperties, setFilteredProperties] = useState(allProperties);

    // Handle search/filter submission
    const handleSearch = (criteria) => {
        const results = filterProperties(allProperties, criteria);
        setFilteredProperties(results);
    };

    return (
    <div className="search-page">
      {/* Header */}
      <Header />

      {/* Page title */}
      <h1 className="page-title">Property Search</h1>

      {/* Search Form */}
      <SearchForm onSearch={handleSearch} />

      {/* Results */}
      <ResultsSection properties={filteredProperties} />

      {/* Footer */}
      <Footer />
    </div>
  );
} 

export default SearchPage;