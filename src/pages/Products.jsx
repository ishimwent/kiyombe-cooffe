import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">OUR COFFEE</p>
        <h1>Exceptional Coffee From Rwanda</h1>
        <p>
          Explore our collection of carefully selected coffee.
        </p>
      </section>

      <section className="section">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;