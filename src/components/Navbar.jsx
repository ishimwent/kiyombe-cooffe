import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">☕</span>

        <span>
          KIYOMBE
          <small>MOUNTAIN COFFEE</small>
        </span>
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/processing" onClick={closeMenu}>
          Processing
        </Link>

        <Link to="/farmers" onClick={closeMenu}>
          Farmers
        </Link>

        <Link to="/quality" onClick={closeMenu}>
          Quality
        </Link>

        <Link to="/gallery" onClick={closeMenu}>
          Gallery
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          to="/quote"
          className="nav-quote"
          onClick={closeMenu}
        >
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;