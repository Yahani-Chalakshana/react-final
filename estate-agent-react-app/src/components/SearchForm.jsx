import { useState } from "react";
import { DropdownList, NumberPicker, DatePicker } from "react-widgets"; // React widgets for enhanced form inputs
import "react-widgets/styles.css";
import "./SearchForm.css";

const SearchForm = ({ onFilter }) => {
  const types = ["Any", "House", "Flat"];
  const tenures = ["Any", "Freehold", "Leasehold"];

  const [filters, setFilters] = useState({
    type: "Any", // Default property type
    bedrooms: null,
    minPrice: null,
    maxPrice: null,
    tenure: "Any",
    location: "", // Location keyword
    addedAfter: null, // Date filter
  });

  // Update filters state dynamically
  const update = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === undefined || value === "" ? null : value, // convert empty/undefined to null
    }));
  };

  // Handle form submission
  const submit = (e) => {
    e.preventDefault(); // Prevent page reload
    onFilter(filters); // Pass current filters to parent
  };

  return (
    <form className="search-form" onSubmit={submit}>
      <div className="form-group">
        <DropdownList
          data={types}
          value={filters.type}
          onChange={(v) => update("type", v)} // Update state on change
          placeholder="Property Type"
        />
      </div>

      <div className="form-group">
        <NumberPicker
          placeholder="Bedrooms"
          value={filters.bedrooms} // Selected number of bedrooms
          onChange={(v) => update("bedrooms", v)}
          min={1}
          valueType="number" // Ensure value is numeric
        />
      </div>

      <div className="form-group">
        <NumberPicker
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(v) => update("minPrice", v)}
          step={50000} // Increment step
          valueType="number"   
        />
      </div>

      <div className="form-group">
        <NumberPicker
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(v) => update("maxPrice", v)}
          step={50000}
          valueType="number"  
        />
      </div>

      <div className="form-group">
        <DropdownList
          data={tenures} // Tenure options
          value={filters.tenure}
          onChange={(v) => update("tenure", v)}
          placeholder="Tenure"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="text-input" // Text input styling
          placeholder="Location keyword"
          value={filters.location}
          onChange={(e) => update("location", e.target.value)} // Update location state
        />
      </div>

      <div className="form-group">
        <DatePicker
          value={filters.addedAfter} // Selected date
          onChange={(v) => update("addedAfter", v)}
          placeholder="Added after"
        />
      </div>

      <button type="submit" className="search-btn"> {/* Submit button */}
        Search
      </button>
    </form>
  );
};

export default SearchForm;