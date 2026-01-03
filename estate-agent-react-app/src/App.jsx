import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import AllPropertiesPage from "./pages/AllPropertiesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [favourites, setFavourites] = useState([]);

return (
    <BrowserRouter>
      <Header />
      <main className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
          <Route
            path="/all-properties"
            element={
              <AllPropertiesPage
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
          <Route
            path="/property/:id"
            element={
              <PropertyPage
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );  
}
