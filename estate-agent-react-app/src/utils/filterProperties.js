// filterProperties.js
// Filters the properties array based on the search criteria
// criteria: { type, minPrice, maxPrice, minBedrooms, maxBedrooms, postcode, dateFrom, dateTo }

const filterProperties = (properties, criteria) => {
  return properties.filter((property) => {
    // Type filter
    if (criteria.type && criteria.type !== "Any" && property.type !== criteria.type) {
      return false;
    }

    // Price filter
    if (
      (criteria.minPrice && property.price < criteria.minPrice) ||
      (criteria.maxPrice && property.price > criteria.maxPrice)
    ) {
      return false;
    }

    // Bedrooms filter
    if (
      (criteria.minBedrooms && property.bedrooms < criteria.minBedrooms) ||
      (criteria.maxBedrooms && property.bedrooms > criteria.maxBedrooms)
    ) {
      return false;
    }

    // Postcode filter (first part only)
    if (criteria.postcode) {
        const postcodeMatch = property.location.match(/[A-Z]{1,2}\d{1,2}/);
        if (!postcodeMatch || !postcodeMatch[0].startsWith(criteria.postcode.toUpperCase())) {
            return false;
        }
    }

    // Date added filter
    if (criteria.dateFrom || criteria.dateTo) {
      const addedDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      if (criteria.dateFrom && addedDate < new Date(criteria.dateFrom)) return false;
      if (criteria.dateTo && addedDate > new Date(criteria.dateTo)) return false;
    }

    return true;
  });
};

export default filterProperties;

