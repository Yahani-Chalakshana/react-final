const FavouriteButton = ({ property, favourites, setFavourites }) => {
  const isFav = favourites.some((f) => f.id === property.id);

  const toggleFavourite = () => {
    if (isFav) {
      setFavourites(favourites.filter((f) => f.id !== property.id));
    } else {
      setFavourites([...favourites, property]);
    }
  };

  return (
    <button onClick={toggleFavourite}>
      {isFav ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default FavouriteButton;
