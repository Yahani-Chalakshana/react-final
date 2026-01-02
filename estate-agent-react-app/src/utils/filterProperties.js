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

    // Location (partial match)
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // Added After Date
    if (filters.addedAfter) {
      const propDate = new Date(
        property.added.year,
        new Date(`${property.added.month} 1`).getMonth(),
        property.added.day
      );

      if (propDate < filters.addedAfter) {
        return false;
      }
    }

    return true;
  });
}
