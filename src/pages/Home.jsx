import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <p className="eyebrow">
              RWANDAN COFFEE PROCESSING
            </p>

            <h1>
              From Rwanda's
              <br />
              Highlands to the World
            </h1>

            <p>
              We process exceptional Rwandan coffee with
              care, precision and a commitment to quality.
            </p>

            <div className="hero-buttons">

              <Link
                to="/processing"
                className="primary-button"
              >
                Explore Our Processing
              </Link>

              <Link
                to="/quote"
                className="outline-light-button"
              >
                Work With Us
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* INTRODUCTION */}

      <section className="section intro-section">

        <div className="intro-image">

          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
            alt="Coffee processing"
          />

        </div>

        <div className="intro-text">

          <p className="eyebrow">
            KIYOMBE MOUNTAIN COFFEE
          </p>

          <h2>
            Carefully Processed.
            <br />
            Exceptionally Crafted.
          </h2>

          <p>
            Kiyombe Mountain Coffee is a Rwandan coffee
            processor dedicated to transforming carefully
            selected coffee cherries into high-quality
            processed coffee.
          </p>

          <p>
            From the moment coffee cherries arrive at our
            processing facilities to the final preparation,
            every stage receives careful attention.
          </p>

          <Link
            to="/about"
            className="text-link"
          >
            Learn About Us →
          </Link>

        </div>

      </section>


      {/* PROCESSING */}

      <section className="section processing-preview">

        <div className="section-heading">

          <p className="eyebrow">
            OUR PROCESS
          </p>

          <h2>
            From Cherry to Exceptional Coffee
          </h2>

          <p>
            Quality is built into every stage of our
            coffee processing journey.
          </p>

        </div>


        <div className="process-cards">

          <div className="process-card">
            <span>🍒</span>
            <h3>Cherry Reception</h3>
            <p>
              Carefully selected coffee cherries
              arrive for processing.
            </p>
          </div>

          <div className="process-card">
            <span>💧</span>
            <h3>Washing & Processing</h3>
            <p>
              Coffee is carefully processed using
              controlled methods.
            </p>
          </div>

          <div className="process-card">
            <span>☀️</span>
            <h3>Drying</h3>
            <p>
              Coffee is carefully dried to preserve
              quality and flavor.
            </p>
          </div>

          <div className="process-card">
            <span>📦</span>
            <h3>Preparation</h3>
            <p>
              Coffee is prepared and stored for
              delivery to buyers and partners.
            </p>
          </div>

        </div>


        <div className="center">

          <Link
            to="/processing"
            className="primary-button"
          >
            Discover Our Process
          </Link>

        </div>

      </section>


      {/* FARMERS */}

      <section className="farmer-banner">

        <div>

          <p className="eyebrow">
            THE PEOPLE BEHIND THE COFFEE
          </p>

          <h2>
            Working Together With
            Rwanda's Coffee Farmers
          </h2>

          <p>
            Exceptional coffee begins with farmers who
            dedicate their time and knowledge to producing
            quality coffee cherries.
          </p>

          <Link
            to="/farmers"
            className="outline-light-button"
          >
            Meet Our Farmers
          </Link>

        </div>

      </section>


      {/* QUALITY */}

      <section className="section quality-preview">

        <div>

          <p className="eyebrow">
            QUALITY & SUSTAINABILITY
          </p>

          <h2>
            Quality at Every Stage
          </h2>

          <p>
            Our approach focuses on careful processing,
            consistency, traceability and responsible
            practices.
          </p>

          <Link
            to="/quality"
            className="primary-button"
          >
            Our Commitment
          </Link>

        </div>


        <div className="quality-grid">

          <div>
            <span>✓</span>
            <h3>Quality Control</h3>
            <p>
              Careful attention throughout processing.
            </p>
          </div>

          <div>
            <span>🌱</span>
            <h3>Sustainability</h3>
            <p>
              Respect for our environment and communities.
            </p>
          </div>

          <div>
            <span>🔍</span>
            <h3>Traceability</h3>
            <p>
              Understanding where coffee comes from.
            </p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Partnership</h3>
            <p>
              Building strong relationships with farmers
              and buyers.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <p className="eyebrow">
          PARTNER WITH KIYOMBE
        </p>

        <h2>
          Looking for High-Quality
          Rwandan Coffee?
        </h2>

        <p>
          Get in touch with our team to discuss
          coffee sourcing and partnerships.
        </p>

        <Link
          to="/quote"
          className="primary-button"
        >
          Request a Quote
        </Link>

      </section>

    </main>
  );
}

export default Home;