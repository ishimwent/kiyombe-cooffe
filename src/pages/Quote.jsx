function Quote() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Your quote request has been submitted."
    );
  };

  return (
    <main>

      <section className="page-header">

        <p className="eyebrow">
          PARTNER WITH US
        </p>

        <h1>
          Request a Quote
        </h1>

        <p>
          Tell us about your coffee requirements
          and our team can get back to you.
        </p>

      </section>


      <section className="quote-section">

        <form
          className="quote-form"
          onSubmit={handleSubmit}
        >

          <h2>
            Tell Us About Your Requirements
          </h2>


          <label>
            Full Name

            <input
              type="text"
              placeholder="Your name"
              required
            />

          </label>


          <label>
            Company

            <input
              type="text"
              placeholder="Company name"
              required
            />

          </label>


          <label>
            Email

            <input
              type="email"
              placeholder="Business email"
              required
            />

          </label>


          <label>
            Phone

            <input
              type="tel"
              placeholder="Phone number"
            />

          </label>


          <label>
            What are you interested in?

            <select required>

              <option value="">
                Select an option
              </option>

              <option>
                Green Coffee
              </option>

              <option>
                Processed Coffee
              </option>

              <option>
                Coffee Partnership
              </option>

              <option>
                Export
              </option>

              <option>
                Other
              </option>

            </select>

          </label>


          <label>
            Quantity / Requirement

            <input
              type="text"
              placeholder="Example: 10,000 kg"
            />

          </label>


          <label>
            Message

            <textarea
              rows="6"
              placeholder="Tell us more about your requirements..."
              required
            />

          </label>


          <button
            type="submit"
            className="primary-button"
          >
            Submit Quote Request
          </button>

        </form>

      </section>

    </main>
  );
}

export default Quote;