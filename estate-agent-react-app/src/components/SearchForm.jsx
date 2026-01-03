import { useState } from "react";
import { DropdownList, NumberPicker, DatePicker } from "react-widgets";
import "react-widgets/styles.css";
import "./SearchForm.css";

const SearchForm = ({ onFilter }) => {
  const types = ["Any", "House", "Flat"];
  const tenures = ["Any", "Freehold", "Leasehold"];

  const [filters, setFilters] = useState({
    type: "Any",
    bedrooms: null,
    minPrice: null,
    maxPrice: null,
    tenure: "Any",
    location: "",
    addedAfter: null,
  });

  const update = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form className="search-form" onSubmit={submit}>
      <div className="form-group">
        <DropdownList
          data={types}
          value={filters.type}
          onChange={(v) => update("type", v)}
          placeholder="Property Type"
        />
      </div>

      <div className="form-group">
        <NumberPicker
          placeholder="Bedrooms"
          value={filters.bedrooms}
          onChange={(v) => update("bedrooms", v)}
          min={1}
        />
      </div>

      <div className="form-group">
        <NumberPicker
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(v) => update("minPrice", v)}
          step={50000}
        />
      </div>

      <div className="form-group">
        <NumberPicker
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(v) => update("maxPrice", v)}
          step={50000}
        />
      </div>

      <div className="form-group">
        <DropdownList
          data={tenures}
          value={filters.tenure}
          onChange={(v) => update("tenure", v)}
          placeholder="Tenure"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="text-input"
          placeholder="Location keyword"
          value={filters.location}
          onChange={(e) => update("location", e.target.value)}
        />
      </div>

      <div className="form-group">
        <DatePicker
          value={filters.addedAfter}
          onChange={(v) => update("addedAfter", v)}
          placeholder="Added after"
        />
      </div>

      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
