import React from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import Gallery from "../components/Gallery";
import TabsSection from "../components/TabsSection";

const PropertyPage = () => {
  const { id } = useParams();

  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  // Optional: features placeholder if not in JSON
  const features = property.features || [
    `Type: ${property.type}`,
    `Bedrooms: ${property.bedrooms}`,
    `Price: £${property.price}`,
    `Tenure: ${property.tenure}`,
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: "20px" }}>
        ← Back to Search
      </Link>

      <h1 style={{ marginBottom: "10px" }}>{property.type}</h1>
      <p>
        <strong>Location:</strong> {property.location}
      </p>
      <p>
        <strong>Bedrooms:</strong> {property.bedrooms}
      </p>
      <p>
        <strong>Price:</strong> £{property.price.toLocaleString()}
      </p>
      <p>
        <strong>Tenure:</strong> {property.tenure}
      </p>

      {/* Gallery */}
      <h2 style={{ marginTop: "30px" }}>Images</h2>
      <Gallery images={property.picture} />

      {/* Tabs for Description, Features, Location */}
      <TabsSection
        description={property.description}
        features={features}
        location={property.location}
      />
    </div>
  );
};

export default PropertyPage;
