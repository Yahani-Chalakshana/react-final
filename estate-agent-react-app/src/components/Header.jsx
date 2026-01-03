import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBuilding, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav links */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/all-properties"
          className={location.pathname === "/all-properties" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Property Details
        </Link>
      </nav>
    </header>
  );
};

export default Header;