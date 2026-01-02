const filterProperties = (properties, filters) => {
  const { type, bedrooms, minPrice, maxPrice, tenure, location, addedAfter } = filters;

  return properties.filter((prop) => {
    // Type
    if (type && type !== "Any" && prop.type !== type) return false;

    // Bedrooms
    if (bedrooms && prop.bedrooms !== bedrooms) return false;

    // Min Price
    if (minPrice && prop.price < minPrice) return false;

    // Max Price
    if (maxPrice && prop.price > maxPrice) return false;

    // Tenure
    if (tenure && tenure !== "Any" && prop.tenure !== tenure) return false;

    // Location keyword
    if (location && !prop.location.toLowerCase().includes(location.toLowerCase())) return false;

    // Added after date
    if (addedAfter) {
      const propDate = new Date(prop.added.year, new Date(`${prop.added.month} 1`).getMonth(), prop.added.day);
      if (propDate < addedAfter) return false;
    }

    return true;
  });
};

export default filterProperties;

