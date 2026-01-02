import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import Gallery from "../components/Gallery";

const PropertyPage = () => {
  const { id } = useParams();

  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <Link to="/">← Back</Link>

      <h1>{property.type}</h1>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Price: £{property.price}</p>
      <p>Tenure: {property.tenure}</p>
      <p>{property.description}</p>

      <h2>Images</h2>
      <Gallery images={property.picture} />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {property.picture.map((img, i) => (
          <img key={i} src={img} width="250" />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
