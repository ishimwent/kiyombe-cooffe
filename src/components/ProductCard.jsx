import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <span className="roast">{product.roast}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="flavor">
          ✦ {product.flavor}
        </div>

        <div className="product-bottom">
          <strong>${product.price}</strong>
          <span>{product.weight}</span>
        </div>

        <div className="product-actions">
          <Link
            to={`/products/${product.id}`}
            className="outline-button"
          >
            Details
          </Link>

          <button
            className="primary-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;