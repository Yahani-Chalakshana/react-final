import React from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";

const PropertyPage = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) return <p>Property not found.</p>;

  return (
    <div>
      <h1>{property.type}</h1>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Price: £{property.price}</p>
      <p>Tenure: {property.tenure}</p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyPage;
