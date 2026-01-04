import { Link } from "react-router-dom";
import "./FavouriteItem.css";

const FavouriteItem = ({ property, favourites, setFavourites }) => {
  const removeFavourite = () => {
    setFavourites(favourites.filter((f) => f.id !== property.id));
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("remove-favourite", property.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = (e) => {
    const dropEffect = e.dataTransfer.dropEffect;
    if (dropEffect === "none") removeFavourite();
  };

  return (
    <div
      className="favourite-item"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      aria-label="Favourite property item"
    >
      <h4>{property.type}</h4>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>£{property.price.toLocaleString()}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
      <button onClick={removeFavourite}>Remove</button>
    </div>
  );
};

export default FavouriteItem;
