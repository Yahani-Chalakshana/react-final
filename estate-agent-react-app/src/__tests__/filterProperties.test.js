import filterProperties from "../utils/filterProperties";

const properties = [
  {
    id: "1",
    type: "House",
    bedrooms: 3,
    price: 500000,
    tenure: "Freehold",
    location: "London",
    added: { month: "January", day: 1, year: 2023 },
  },
  {
    id: "2",
    type: "Flat",
    bedrooms: 2,
    price: 300000,
    tenure: "Leasehold",
    location: "Manchester",
    added: { month: "March", day: 10, year: 2022 },
  },
];

// Base filters matching SearchForm defaults
const baseFilters = {
  type: "Any",
  bedrooms: null,
  minPrice: null,
  maxPrice: null,
  tenure: "Any",
  location: "",
  addedAfter: null,
};

describe("filterProperties", () => {
  test("filters by property type", () => {
    const result = filterProperties(properties, {
      ...baseFilters,
      type: "House",
    });

    expect(result).toHaveLength(1);
    expect(result[0].type).toBe("House");
  });

  test("filters by minimum price", () => {
    const result = filterProperties(properties, {
      ...baseFilters,
      minPrice: 400000,
    });

    expect(result).toHaveLength(1);
    expect(result[0].price).toBeGreaterThanOrEqual(400000);
  });

  test("filters by location keyword", () => {
    const result = filterProperties(properties, {
      ...baseFilters,
      location: "man",
    });

    expect(result).toHaveLength(1);
    expect(result[0].location).toBe("Manchester");
  });
});