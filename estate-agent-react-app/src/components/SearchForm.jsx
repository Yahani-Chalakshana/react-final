import { useState } from "react";
import { DropdownList, NumberPicker, DatePicker } from "react-widgets";
import "react-widgets/styles.css";

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
    <form onSubmit={submit}>
      <DropdownList
        data={types}
        value={filters.type}
        onChange={(v) => update("type", v)}
        placeholder="Property Type"
      />

      <NumberPicker
        placeholder="Bedrooms"
        value={filters.bedrooms}
        onChange={(v) => update("bedrooms", v)}
        min={1}
      />

      <NumberPicker
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(v) => update("minPrice", v)}
        step={50000}
      />

      <NumberPicker
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(v) => update("maxPrice", v)}
        step={50000}
      />

      <DropdownList
        data={tenures}
        value={filters.tenure}
        onChange={(v) => update("tenure", v)}
        placeholder="Tenure"
      />

      <input
        type="text"
        placeholder="Location keyword"
        value={filters.location}
        onChange={(e) => update("location", e.target.value)}
      />

      <DatePicker
        value={filters.addedAfter}
        onChange={(v) => update("addedAfter", v)}
        placeholder="Added after"
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
