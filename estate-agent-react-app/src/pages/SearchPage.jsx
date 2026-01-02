import { useState } from "react";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import ResultsSection from "../components/ResultsSection";

import "./SearchPage.css";

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
        <Header />

        <h1 className="page-title">Property Search</h1>

        <SearchForm onSearch={handleSearch} />

        <ResultsSection properties={filteredProperties} />

        <Footer />
        </div>
    );
};

export default SearchPage;