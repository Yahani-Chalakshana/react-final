import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}