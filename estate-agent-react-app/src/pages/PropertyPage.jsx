import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import Gallery from "../components/Gallery";
import TabsSection from "../components/TabsSection";
import FavouriteButton from "../components/FavouriteButton";

const PropertyPage = ({ favourites, setFavourites }) => { // ← receive props
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) return <p>Property not found</p>;

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