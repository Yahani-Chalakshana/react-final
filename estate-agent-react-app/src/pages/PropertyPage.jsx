import { useParams, Link, useLocation } from "react-router-dom"; // Router hooks
import propertiesData from "../data/properties.json";
import Gallery from "../components/Gallery";
import TabsSection from "../components/TabsSection";
import FavouriteButton from "../components/FavouriteButton";
import "./PropertyPage.css";

const PropertyPage = ({ favourites, setFavourites }) => {
  const { id } = useParams();
  const location = useLocation(); // Get navigation state
  const fromAllProperties = location.state?.fromAllProperties || false; // Check if navigated from All Properties page

  const property = propertiesData.properties.find((p) => p.id === id); // Find the property by ID
  if (!property) return <p>Property not found</p>;

  // Fallback for features if property.features is missing
  const propertyFeatures =
    property.features && property.features.length > 0
      ? property.features
      : [
          `Type: ${property.type}`,
          `Bedrooms: ${property.bedrooms}`,
          `Price: £${property.price.toLocaleString()}`,
          `Tenure: ${property.tenure}`,
        ];

  return (
    <div className="property-page">
      <Link
        to={fromAllProperties ? "/all-properties" : "/"} // Back to previous page
        className="back-link"
      >
        ← Back
      </Link>

      <h1>{property.type}</h1> {/* Property title */}

      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

      <h2>Images</h2>
      <Gallery images={property.picture} /> {/* Gallery of images */}

      {/* Tabs for description, features, floor plan, map */}
      <TabsSection
        description={property.description}
        features={propertyFeatures}
        location={property.location}
        floorPlan={property.floorPlan}
        lat={property.lat}
        lng={property.lng}
      />

      {/* Favourite button */}
      <FavouriteButton
        property={property}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default PropertyPage;