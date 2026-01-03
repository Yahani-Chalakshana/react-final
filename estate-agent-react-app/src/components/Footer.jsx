import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3>Estate Agent</h3>
          <p>Your trusted real estate partner & Helping you find your dream home with ease</p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4> Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/all-properties">Details</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Estate Agent App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
