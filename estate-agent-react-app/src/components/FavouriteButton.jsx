import { useState, useEffect } from "react";

const FavouriteButton = ({ propertyId }) => {
  const [isFav, setIsFav] = useState(false);

  // Check localStorage on load
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFav(favs.includes(propertyId));
  }, [propertyId]);

  const toggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    let updatedFavs;

    if (favs.includes(propertyId)) {
      // Remove from favourites
      updatedFavs = favs.filter((id) => id !== propertyId);
      setIsFav(false);
    } else {
      // Add to favourites
      updatedFavs = [...favs, propertyId];
      setIsFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  };

  return (
    <button onClick={toggleFavourite}>
      {isFav ? "★ Remove Favourite" : "☆ Add Favourite"}
    </button>
  );
};

export default FavouriteButton;
