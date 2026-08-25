const images = [
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80",
    title: "Coffee Beans"
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    title: "Coffee Processing"
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=80",
    title: "Coffee Farm"
  },
  {
    src: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1000&q=80",
    title: "Coffee Preparation"
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    title: "Coffee"
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
    title: "Coffee Production"
  }
];

function Gallery() {
  return (
    <main>

      <section className="page-header">

        <p className="eyebrow">
          GALLERY
        </p>

        <h1>
          The Kiyombe Story
        </h1>

        <p>
          A visual journey through coffee, people
          and processing.
        </p>

      </section>


      <section className="gallery">

        {images.map((image, index) => (

          <div
            className="gallery-item"
            key={index}
          >

            <img
              src={image.src}
              alt={image.title}
            />

            <div className="gallery-caption">
              {image.title}
            </div>

          </div>

        ))}

      </section>

    </main>
  );
}

export default Gallery;