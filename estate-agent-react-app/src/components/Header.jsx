import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Routing & current path
import { FaBuilding, FaBars, FaTimes } from "react-icons/fa"; 
import "./Header.css";

const Header = () => {
  const location = useLocation(); // Get current URL path
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Open/close menu

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-section">
          <FaBuilding className="logo-icon" />
          <span className="logo-text">Estate Agent</span>
        </div>
      </div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
      </div>

      {/* Nav links */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}> {/* Add 'open' class if menu is open */}
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""} // Highlight current page
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/all-properties"
          className={location.pathname === "/all-properties" ? "active" : ""}
          onClick={() => setMenuOpen(false)} // Close menu on click
        >
          Property Details
        </Link>
      </nav>
    </header>
  );
};

export default Header;