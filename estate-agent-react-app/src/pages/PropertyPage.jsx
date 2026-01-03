import { useParams, Link, useLocation } from "react-router-dom";
import propertiesData from "../data/properties.json";
import Gallery from "../components/Gallery";
import TabsSection from "../components/TabsSection";
import FavouriteButton from "../components/FavouriteButton";
import "./PropertyPage.css";

const PropertyPage = ({ favourites, setFavourites }) => {
  const { id } = useParams();
  const location = useLocation();
  const fromAllProperties = location.state?.fromAllProperties || false;

  const property = propertiesData.properties.find((p) => p.id === id);
  if (!property) return <p>Property not found</p>;

  const features = property.features || [
    `Type: ${property.type}`,
    `Bedrooms: ${property.bedrooms}`,
    `Price: £${property.price}`,
    `Tenure: ${property.tenure}`,
  ];

  return (
    <div className="property-page">
      <Link
        to={fromAllProperties ? "/all-properties" : "/"}
        className="back-link"
      >
        ← Back
      </Link>

      <h1>{property.type}</h1>

      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

      <h2>Images</h2>
      <Gallery images={property.picture} />

      <TabsSection
        description={property.description}
        features={features}
        location={property.location}
      />

      <FavouriteButton
        property={property}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default PropertyPage;
