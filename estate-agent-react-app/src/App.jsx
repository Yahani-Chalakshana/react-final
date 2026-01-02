import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
