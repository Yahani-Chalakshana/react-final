import { useState } from "react";
import FavouriteItem from "./FavouriteItem";
import propertiesData from "../data/properties.json";
import "./FavouritesPanel.css";

const FavouritesPanel = ({ favourites, setFavourites }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  // Drop from search results → add to favourites
  const handleDrop = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("property-id");
    const property = propertiesData.properties.find((p) => p.id === propertyId);

    if (property && !favourites.some((f) => f.id === property.id)) {
      setFavourites([...favourites, property]);
    }
    setIsDragOver(false);
  };

  const handleDragOver = (e) => e.preventDefault(); // necessary for drop
  const handleDragEnter = () => setIsDragOver(true);
  const handleDragLeave = () => setIsDragOver(false);

  return (
    <div
      className={`favourites-panel ${isDragOver ? "drag-over" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <h2>Favourites</h2>

      {favourites.length > 0 && (
        <button
          onClick={() => setFavourites([])}
          style={{ marginBottom: "10px" }}
        >
          Clear Favourites
        </button>
      )}
      
      {favourites.length === 0 && <p>No favourites added yet.</p>}

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
