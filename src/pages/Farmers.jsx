function Farmers() {
  return (
    <main>

      <section className="page-header">

        <p className="eyebrow">
          OUR FARMERS
        </p>

        <h1>
          The People Behind
          the Coffee
        </h1>

        <p>
          Great coffee begins with dedicated farmers.
        </p>

      </section>


      <section className="section two-column">

        <img
          src="src/PK.PNG"
          alt="Coffee farmer"
        />

        <div>

          <p className="eyebrow">
            FARMER PARTNERSHIPS
          </p>

          <h2>
            Growing Quality Together
          </h2>

          <p>
            Coffee farmers are at the heart of Rwanda's
            coffee industry. Their knowledge, dedication
            and work determine the quality of the coffee
            cherries that enter the processing chain.
          </p>

          <p>
            We believe that strong relationships with
            farmers are essential for building a sustainable
            coffee value chain.
          </p>

        </div>

      </section>


      <section className="values-section">

        <div className="section-heading">

          <p className="eyebrow">
            OUR COMMITMENT
          </p>

          <h2>
            Supporting the Coffee Value Chain
          </h2>

        </div>


        <div className="values-grid">

          <div className="value-card">
            <span>🌱</span>
            <h3>Better Practices</h3>
            <p>
              Encouraging responsible coffee-growing practices.
            </p>
          </div>

          <div className="value-card">
            <span>🎓</span>
            <h3>Knowledge</h3>
            <p>
              Supporting knowledge and quality-focused practices.
            </p>
          </div>

          <div className="value-card">
            <span>🤝</span>
            <h3>Partnership</h3>
            <p>
              Building relationships throughout the coffee value chain.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Farmers;
