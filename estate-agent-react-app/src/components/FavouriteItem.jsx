import { Link } from "react-router-dom"; // Import Link for routing to property pages
import "./FavouriteItem.css";

const FavouriteItem = ({ property, favourites, setFavourites }) => {
  // Function to remove this property from favourites
  const removeFavourite = () => {
    setFavourites(favourites.filter((f) => f.id !== property.id)); 
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("remove-favourite", property.id); // Store property ID in drag data
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = (e) => {
    const dropEffect = e.dataTransfer.dropEffect; // Check how the item was dropped
    if (dropEffect === "none") removeFavourite();
  };

  return (
    <div
      className="favourite-item"
      draggable // Make this element draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      aria-label="Favourite property item" // Accessibility label
    >
      {/* Display property details: type, location, bedrooms, and price */}
      <h4>{property.type}</h4>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>£{property.price.toLocaleString()}</p>

      {/* Actions: view details page and remove from favourites */}
      <Link to={`/property/${property.id}`}>View Details</Link>
      <button onClick={removeFavourite}>Remove</button>
    </div>
  );
};

export default FavouriteItem;