const filterProperties = (properties, filters) => {
  return properties.filter((p) => {
    if (filters.type !== "Any" && p.type !== filters.type) return false;

    if (filters.bedrooms && p.bedrooms !== filters.bedrooms) return false;

    if (filters.minPrice && p.price < filters.minPrice) return false;
    if (filters.maxPrice && p.price > filters.maxPrice) return false;

    if (filters.tenure !== "Any" && p.tenure !== filters.tenure) return false;

    if (
      filters.location &&
      !p.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;

    if (filters.addedAfter) {
      const propDate = new Date(
        p.added.year,
        new Date(`${p.added.month} 1`).getMonth(),
        p.added.day
      );
      if (propDate < filters.addedAfter) return false;
    }

    return true;
  });
};

export default filterProperties;
