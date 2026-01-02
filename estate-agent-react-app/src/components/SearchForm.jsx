import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";
import NumberPicker from "react-widgets/NumberPicker";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

const SearchForm = ({ onFilter }) => {
  const types = ["Any", "House", "Flat"];
  const tenures = ["Any", "Freehold", "Leasehold"];

  const [type, setType] = useState("Any");
  const [bedrooms, setBedrooms] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [tenure, setTenure] = useState("Any");
  const [location, setLocation] = useState("");
  const [addedAfter, setAddedAfter] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ type, bedrooms, minPrice, maxPrice, tenure, location, addedAfter });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <DropdownList data={types} value={type} onChange={setType} />
      </div>

      <div>
        <label>Bedrooms:</label>
        <NumberPicker value={bedrooms} onChange={setBedrooms} min={1} max={10} />
      </div>

      <div>
        <label>Min Price (£):</label>
        <NumberPicker value={minPrice} onChange={setMinPrice} step={50000} min={0} />
      </div>

      <div>
        <label>Max Price (£):</label>
        <NumberPicker value={maxPrice} onChange={setMaxPrice} step={50000} min={0} />
      </div>

      <div>
        <label>Tenure:</label>
        <DropdownList data={tenures} value={tenure} onChange={setTenure} />
      </div>

      <div>
        <label>Location keyword:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city, street or postcode"
        />
      </div>

      <div>
        <label>Added After:</label>
        <DatePicker value={addedAfter} onChange={setAddedAfter} />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
