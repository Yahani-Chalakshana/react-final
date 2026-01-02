import { Link } from "react-router-dom";

const ResultsSection = ({ results }) => {
  if (results.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div>
      <h2>Results</h2>

      {results.map((property) => (
        <div key={property.id}>
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>£{property.price.toLocaleString()}</p>

          <Link to={`/property/${property.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResultsSection;
