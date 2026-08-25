function About() {
  return (
    <main>

      <section className="page-header">

        <p className="eyebrow">
          ABOUT KIYOMBE
        </p>

        <h1>
          Processing Rwanda's Coffee
          With Purpose
        </h1>

        <p>
          Discover who we are and what drives our work.
        </p>

      </section>


      <section className="section two-column">

        <div>

          <p className="eyebrow">
            WHO WE ARE
          </p>

          <h2>
            Rooted in Rwanda
          </h2>

          <p>
            Kiyombe Mountain Coffee is a Rwandan coffee
            processing company focused on producing
            high-quality processed coffee.
          </p>

          <p>
            We bring together coffee farmers, processing
            expertise and quality-focused practices to
            prepare coffee for local and international
            markets.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=80"
          alt="Rwanda coffee"
        />

      </section>


      <section className="values-section">

        <div className="section-heading">

          <p className="eyebrow">
            WHAT DRIVES US
          </p>

          <h2>
            Our Values
          </h2>

        </div>


        <div className="values-grid">

          <div className="value-card">

            <span>☕</span>

            <h3>
              Quality
            </h3>

            <p>
              We focus on careful processing and
              consistent quality.
            </p>

          </div>


          <div className="value-card">

            <span>🌱</span>

            <h3>
              Sustainability
            </h3>

            <p>
              We value responsible practices that
              protect our environment.
            </p>

          </div>


          <div className="value-card">

            <span>🤝</span>

            <h3>
              Partnership
            </h3>

            <p>
              We believe strong relationships create
              lasting value.
            </p>

          </div>


          <div className="value-card">

            <span>🇷🇼</span>

            <h3>
              Rwanda
            </h3>

            <p>
              We are proud to contribute to Rwanda's
              coffee industry.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;