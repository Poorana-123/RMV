import React, { useState, useEffect } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Learning Together",
    category: "Classes",
    tag: "LEARNING SESSION",
    description: "An engaging classroom experience at RMV Academy.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
    date: "Learning Experience",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    category: "Workshops",
    tag: "WORKSHOP",
    description: "Students explore modern web development technologies.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    date: "Technical Workshop",
  },
  {
    id: 3,
    title: "Building Real Projects",
    category: "Projects",
    tag: "STUDENT PROJECTS",
    description: "Turning innovative ideas into practical solutions.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    date: "Project Showcase",
  },
  {
    id: 4,
    title: "Team Collaboration",
    category: "Events",
    tag: "TEAMWORK",
    description: "Sharing knowledge and growing together as a team.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    date: "Team Activities",
  },
  {
    id: 5,
    title: "Creative Thinking",
    category: "Workshops",
    tag: "CREATIVITY",
    description: "Exploring fresh ideas through collaborative learning.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    date: "Creative Workshop",
  },
  {
    id: 6,
    title: "Technology in Action",
    category: "Projects",
    tag: "TECHNOLOGY",
    description: "Applying technical knowledge to real-world challenges.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    date: "Development Projects",
  },
  {
    id: 7,
    title: "Sharing Knowledge",
    category: "Classes",
    tag: "LEARNING",
    description: "An interactive environment that encourages questions.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    date: "Learning Session",
  },
  {
    id: 8,
    title: "Ideas Become Reality",
    category: "Projects",
    tag: "INNOVATION",
    description: "Planning, designing, and developing new applications.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    date: "Project Development",
  },
  {
    id: 9,
    title: "A Day of Collaboration",
    category: "Events",
    tag: "COMMUNITY",
    description: "Building confidence through teamwork and communication.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    date: "Academy Activities",
  },
];

const categories = [
  "All",
  "Classes",
  "Workshops",
  "Projects",
  "Events",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight" && selectedImage) {
        const currentIndex = filteredItems.findIndex(
          (item) => item.id === selectedImage.id
        );

        const nextIndex = (currentIndex + 1) % filteredItems.length;

        setSelectedImage(filteredItems[nextIndex]);
      }

      if (event.key === "ArrowLeft" && selectedImage) {
        const currentIndex = filteredItems.findIndex(
          (item) => item.id === selectedImage.id
        );

        const previousIndex =
          (currentIndex - 1 + filteredItems.length) %
          filteredItems.length;

        setSelectedImage(filteredItems[previousIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredItems]);

  // Prevent background scrolling while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="rmv-gallery">
      {/* HERO SECTION */}
      <section className="gallery-hero">
        <div className="gallery-container">
          <div className="gallery-hero-content">
            <span className="gallery-eyebrow">
              <span className="gold-line"></span>
              LIFE AT RMV ACADEMY
            </span>

            <h1>
              Every Picture
              <br />
              Tells a <span>Story.</span>
            </h1>

            <p>
              Discover the people, projects, and experiences that
              make our learning journey special. Every moment
              reflects creativity, collaboration, and growth.
            </p>

            <a href="#gallery-collection" className="gallery-primary-btn">
              Explore Our Gallery <span>→</span>
            </a>

            <div className="gallery-hero-note">
              <span className="note-dot"></span>
              A glimpse into our learning journey
            </div>
          </div>

          <div className="gallery-hero-image">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85"
              alt="Students participating in a learning session"
            />

            <div className="hero-image-caption">
              <span className="caption-icon">✦</span>

              <div>
                <strong>Learn. Create. Grow.</strong>
                <p>Moments worth remembering</p>
              </div>
            </div>

            <div className="hero-image-badge">
              RMV
              <span>ACADEMY</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="gallery-intro">
        <div className="gallery-container intro-inner">
          <div>
            <span className="gallery-eyebrow">
              <span className="gold-line"></span>
              OUR JOURNEY
            </span>

            <h2>
              More Than Learning.
              <br />
              <span>It's an Experience.</span>
            </h2>
          </div>

          <p>
            From interactive classes to creative projects, every
            experience helps students discover their potential.
            Explore the moments that bring our academy to life.
          </p>
        </div>
      </section>

      {/* FEATURED EDITORIAL SECTION */}
      <section className="gallery-featured">
        <div className="gallery-container">
          <div className="featured-editorial">
            <div className="featured-editorial-image">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
                alt="Students working on technology"
              />

              <span className="featured-image-label">
                FEATURED MOMENT
              </span>
            </div>

            <div className="featured-editorial-content">
              <span className="story-category">
                LEARNING & INNOVATION
              </span>

              <h2>
                Learning Today,
                <br />
                Building Tomorrow.
              </h2>

              <p>
                Great ideas begin with curiosity. At RMV Academy,
                students develop their skills through practical
                learning, creative thinking, and meaningful projects.
              </p>

              <button
                className="text-link"
                onClick={() =>
                  setSelectedImage({
                    id: 2,
                    title: "Web Development Workshop",
                    category: "Workshops",
                    description:
                      "Students explore modern web development technologies.",
                    image:
                      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
                  })
                }
              >
                View Featured Photo <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY COLLECTION */}
      <section
        className="gallery-collection"
        id="gallery-collection"
      >
        <div className="gallery-container">
          <div className="collection-heading">
            <div>
              <span className="gallery-eyebrow">
                <span className="gold-line"></span>
                OUR GALLERY
              </span>

              <h2>
                Moments That <span>Inspire.</span>
              </h2>

              <p>
                Take a closer look at our classes, workshops,
                projects, and academy activities.
              </p>
            </div>

            <div className="collection-count">
              <strong>{filteredItems.length.toString().padStart(2, "0")}</strong>
              <span>PHOTOS</span>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="gallery-filters"
            aria-label="Filter gallery by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedImage(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="editorial-gallery-grid">
            {filteredItems.map((item, index) => (
              <article
                className={`gallery-photo-card ${
                  index === 0 ? "photo-card-large" : ""
                }`}
                key={item.id}
              >
                <button
                  className="gallery-photo-button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.image} alt={item.title} />

                  <span className="photo-view-icon">↗</span>

                  <span className="photo-overlay">
                    <span className="photo-category">
                      {item.tag}
                    </span>

                    <span className="photo-title">
                      {item.title}
                    </span>

                    <span className="photo-description">
                      {item.description}
                    </span>
                  </span>
                </button>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              No photos found in this category.
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="gallery-cta-section">
        <div className="gallery-container">
          <div className="gallery-cta-box">
            <div className="cta-decoration">✦</div>

            <div className="cta-content">
              <span>YOUR JOURNEY STARTS HERE</span>

              <h2>
                Create Your Own
                <br />
                Success Story.
              </h2>

              <p>
                Learn new skills, build meaningful projects, and
                take the next step toward your goals.
              </p>

              <a href="/courses" className="gallery-cta-button">
                Explore Our Courses <span>→</span>
              </a>
            </div>

            <div className="cta-side-text">
              <span>RMV</span>
              <p>Learn. Build. Achieve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();

              const currentIndex = filteredItems.findIndex(
                (item) => item.id === selectedImage.id
              );

              const previousIndex =
                (currentIndex - 1 + filteredItems.length) %
                filteredItems.length;

              setSelectedImage(filteredItems[previousIndex]);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-caption">
              <span>{selectedImage.category}</span>
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();

              const currentIndex = filteredItems.findIndex(
                (item) => item.id === selectedImage.id
              );

              const nextIndex =
                (currentIndex + 1) % filteredItems.length;

              setSelectedImage(filteredItems[nextIndex]);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;