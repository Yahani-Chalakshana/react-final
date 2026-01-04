import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ root API
import App from "./App";
import "./index.css";

// Vite React root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);