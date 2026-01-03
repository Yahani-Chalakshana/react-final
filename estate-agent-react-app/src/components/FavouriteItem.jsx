import { Link } from "react-router-dom";

const FavouriteItem = ({ property, favourites, setFavourites }) => {
  // Remove favourite by button
  const removeFavourite = () => {
    setFavourites(favourites.filter((f) => f.id !== property.id));
  };

  // Drag start for removing item
  const handleDragStart = (e) => {
    e.dataTransfer.setData("remove-favourite", property.id);
    e.dataTransfer.effectAllowed = "move";
  };

  // Drag end → if dropped outside favourites panel, remove item
  const handleDragEnd = (e) => {
    const dropEffect = e.dataTransfer.dropEffect;
    if (dropEffect === "none") {
      // dropped outside → remove
      removeFavourite();
    }
  };

  return (
    <div
      className="favourite-item"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ border: "1px solid #ccc", margin: 5, padding: 5, borderRadius: 5, background: "#f0f4ff" }}
    >
      <h4>{property.type}</h4>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>£{property.price.toLocaleString()}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
      <button onClick={removeFavourite} style={{ marginLeft: "10px" }}>
        Remove
      </button>
    </div>
  );
};

export default FavouriteItem;
