import "./FavouriteButton.css";

const FavouriteButton = ({ property, favourites, setFavourites }) => {
  // Check if the current property is already in the favourites list
  const isFav = favourites.some((f) => f.id === property.id);

  // Adds the property to favourites if not present, removes it if already present.
  const toggleFavourite = () => {
    if (isFav) {
      // Remove property from favourites
      setFavourites(favourites.filter((f) => f.id !== property.id));
    } else {
      // Add property to favourites
      setFavourites([...favourites, property]);
    }
  };

  return (
    <button
      className={`favourite-btn ${isFav ? "fav-active" : ""}`} // Add active class if already favourite
      onClick={toggleFavourite} // Toggle property in favourites on click
      aria-label={isFav ? "Remove from favourites" : "Add to favourites"} // Accessibility label
    >
      {isFav ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default FavouriteButton;