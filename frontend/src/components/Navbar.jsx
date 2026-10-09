import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo-bg.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="rmv-navbar">
      <div className="rmv-navbar-inner">

        {/* Logo */}
        <Link to="/" className="rmv-logo" onClick={closeMenu}>
          <img src={logo} alt="RMV Academy" />
        </Link>

        {/* Navigation */}
        <nav className={`rmv-nav-links ${menuOpen ? "menu-open" : ""}`}>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/courses" onClick={closeMenu}>
            Courses
          </NavLink>

          <NavLink to="/testimonials" onClick={closeMenu}>
            Testimonials
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Enroll Button */}
        <Link
          to="/contact"
          className="rmv-nav-button"
          onClick={closeMenu}
        >
          Enroll Now
          <span>↗</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`rmv-menu-button ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="rmv-navigation"
          type="button"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;