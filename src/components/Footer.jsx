import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <h2>☕ Kiyombe</h2>

        <p>
          From Rwanda's highlands to the world.
          Processing exceptional coffee with care,
          quality and traceability.
        </p>
      </div>

      <div>
        <h3>Explore</h3>

        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/processing">Processing</Link>
        <Link to="/farmers">Our Farmers</Link>
        <Link to="/quality">Quality</Link>
      </div>

      <div>
        <h3>Connect</h3>

        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/quote">Request a Quote</Link>

        <p>📱 +250 788 538 792</p>
        <p>✉️ info@kiyombecoffee.com</p>
      </div>

      <div className="footer-bottom">
        © 2026 Kiyombe Mountain Coffee. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
