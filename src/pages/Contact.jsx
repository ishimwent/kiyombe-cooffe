import { Link } from "react-router-dom";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Kiyombe Mountain Coffee!"
    );
  };

  return (
    <main>

      <section className="page-header">

        <p className="eyebrow">
          CONTACT US
        </p>

        <h1>
          Let's Work Together
        </h1>

        <p>
          Get in touch with Kiyombe Mountain Coffee.
        </p>

      </section>


      <section className="contact-container">

        <div className="contact-info">

          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h2>
            Let's Talk Coffee
          </h2>

          <p>
            Whether you are a coffee buyer, exporter,
            roaster, partner or simply interested in
            learning more about our work, we'd love
            to hear from you.
          </p>

          <div className="contact-details">

            <p>
              📍 Rwanda 
            </p>

            <p>
              ☎️ +250 78 213 3693
            </p>

            <p>
              ✉️ info@kiyombecoffee.com
            </p>

            <p>
              📷 Instagram
            </p>

            <p>
              📘 Facebook
            </p>

          </div>


          <Link
            to="/quote"
            className="primary-button"
          >
            Request a Quote
          </Link>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label>
            Your Name

            <input
              type="text"
              placeholder="Full name"
              required
            />

          </label>


          <label>
            Email Address

            <input
              type="email"
              placeholder="Email address"
              required
            />

          </label>


          <label>
            Company

            <input
              type="text"
              placeholder="Company name"
            />

          </label>


          <label>
            Message

            <textarea
              rows="6"
              placeholder="How can we help?"
              required
            />

          </label>


          <button
            type="submit"
            className="primary-button"
          >
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contact;