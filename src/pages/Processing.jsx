const processingSteps = [
  {
    number: "01",
    icon: "🍒",
    title: "Cherry Reception",
    text: "Fresh coffee cherries are received and prepared for processing."
  },
  {
    number: "02",
    icon: "🔍",
    title: "Sorting",
    text: "Coffee cherries are inspected and sorted to support consistent quality."
  },
  {
    number: "03",
    icon: "⚙️",
    title: "Pulping",
    text: "The coffee fruit is removed from the beans using controlled processing methods."
  },
  {
    number: "04",
    icon: "💧",
    title: "Fermentation & Washing",
    text: "Coffee is carefully processed and washed according to the selected processing method."
  },
  {
    number: "05",
    icon: "☀️",
    title: "Drying",
    text: "Coffee is dried carefully while monitoring the drying process."
  },
  {
    number: "06",
    icon: "📊",
    title: "Grading",
    text: "Processed coffee is prepared and graded according to quality requirements."
  },
  {
    number: "07",
    icon: "🏭",
    title: "Hulling",
    text: "The dried coffee is prepared through the appropriate post-drying processes."
  },
  {
    number: "08",
    icon: "📦",
    title: "Storage & Packaging",
    text: "Coffee is prepared for secure storage, shipment and delivery to partners."
  }
];

function Processing() {
  return (
    <main>

      <section className="page-header">

        <p className="eyebrow">
          COFFEE PROCESSING
        </p>

        <h1>
          From Cherry to
          Quality Coffee
        </h1>

        <p>
          A carefully managed journey focused on
          quality, consistency and traceability.
        </p>

      </section>


      <section className="section">

        <div className="section-heading">

          <p className="eyebrow">
            OUR PROCESS
          </p>

          <h2>
            Every Stage Matters
          </h2>

          <p>
            Coffee quality is influenced by every stage
            after harvest. Our processing approach is
            designed to carefully manage each step.
          </p>

        </div>


        <div className="processing-timeline">

          {processingSteps.map((step) => (

            <div
              className="processing-step"
              key={step.number}
            >

              <div className="processing-number">
                {step.number}
              </div>

              <div className="processing-icon">
                {step.icon}
              </div>

              <div>
                <h2>
                  {step.title}
                </h2>

                <p>
                  {step.text}
                </p>
              </div>

            </div>

          ))}

        </div>

      </section>


      <section className="processing-image-section">

        <div>

          <p className="eyebrow">
            CARE IN EVERY STEP
          </p>

          <h2>
            Preserving the Character
            of Rwandan Coffee
          </h2>

          <p>
            Our processing practices are designed to
            preserve the distinctive qualities of coffee
            while meeting quality expectations.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Processing;