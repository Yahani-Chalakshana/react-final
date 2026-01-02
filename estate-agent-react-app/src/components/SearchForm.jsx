import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: "Any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
    dateFrom: "",
    dateTo: ""
  });

  const handleChange = (e) => {
    setCriteria({
      ...criteria,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <select name="type" onChange={handleChange}>
        <option value="Any">Any</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
      <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} />

      <input type="number" name="minBedrooms" placeholder="Min Bedrooms" onChange={handleChange} />
      <input type="number" name="maxBedrooms" placeholder="Max Bedrooms" onChange={handleChange} />

      <input type="text" name="postcode" placeholder="Postcode area (e.g. BR)" onChange={handleChange} />

      <input type="date" name="dateFrom" onChange={handleChange} />
      <input type="date" name="dateTo" onChange={handleChange} />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
