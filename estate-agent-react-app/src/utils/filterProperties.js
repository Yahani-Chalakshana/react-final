import { parseAddedDate } from "./dateUtils";

export default function filterProperties(properties, filters) {
  return properties.filter((property) => {

    // Type
    if (filters.type !== "Any" && property.type !== filters.type) {
      return false;
    }

    // Bedrooms (exact match if selected)
    if (filters.bedrooms !== null && property.bedrooms !== filters.bedrooms) {
      return false;
    }

    // Min Price
    if (filters.minPrice !== null && property.price < filters.minPrice) {
      return false;
    }

    // Max Price
    if (filters.maxPrice !== null && property.price > filters.maxPrice) {
      return false;
    }

    // Tenure
    if (filters.tenure !== "Any" && property.tenure !== filters.tenure) {
      return false;
    }

    // Location filter (case-insensitive partial match)
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // Added After Date filter
    if (filters.addedAfter) {
      const propertyDate = parseAddedDate(property.added);

      if (propertyDate && propertyDate < filters.addedAfter) {
        return false; // Exclude properties added before the selected date
      }
    }

    // If property passes all filters, include it
    return true;
  });
}