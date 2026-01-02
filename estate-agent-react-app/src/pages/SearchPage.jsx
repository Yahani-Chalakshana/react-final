import { useState } from "react";
import propertiesData from "../data/properties.json";
import filterProperties from "../utils/filterProperties";

import Header from "../components/Header"
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import ResultsSection from "../components/ResultsSection";
import FavouritesPanel from "../components/FavouritesPanel";

import "./SearchPage.css";

export default function SearchPage() {
  // All properties from JSON
  const properties = propertiesData.properties;

  // Search criteria state
  const [criteria, setCriteria] = useState({
    type: "Any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateFrom: null,
    dateTo: null,
    postcodeArea: ""
  });

  // Filtered results
  const filteredProperties = filterProperties(properties, {
    ...criteria,
    minPrice: criteria.minPrice ? Number(criteria.minPrice) : null,
    maxPrice: criteria.maxPrice ? Number(criteria.maxPrice) : null,
    minBedrooms: criteria.minBedrooms ? Number(criteria.minBedrooms) : null,
    maxBedrooms: criteria.maxBedrooms ? Number(criteria.maxBedrooms) : null
  });

  return (
    <>
      <Header />

      <main className="search-page">
        <section className="search-layout">
          
          {/* Left: Search + Results */}
          <div className="search-main">
            <SearchForm
              criteria={criteria}
              setCriteria={setCriteria}
            />

            <ResultsSection
              properties={filteredProperties}
            />
          </div>

          {/* Right: Favourites */}
          <aside className="search-favourites">
            <FavouritesPanel />
          </aside>

        </section>
      </main>

      <Footer />
    </>
  );
}