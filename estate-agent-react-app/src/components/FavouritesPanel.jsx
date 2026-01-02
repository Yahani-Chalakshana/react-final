import React from "react";
import FavouriteItem from "./FavouriteItem";

const FavouritesPanel = ({ favourites, setFavourites }) => {
  if (favourites.length === 0) return <p>No favourites added yet.</p>;

  return (
    <div>
      <h2>Favourites</h2>
      {favourites.map((property) => (
        <FavouriteItem
          key={property.id}
          property={property}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      ))}
    </div>
  );
};

export default FavouritesPanel;
