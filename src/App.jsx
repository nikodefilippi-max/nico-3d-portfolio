import { useCallback, useEffect, useMemo, useState } from "react";
import Gallery from "./components/Gallery";
import PhotoModal from "./components/PhotoModal";
import ContactPanel from "./components/ContactPanel";
import Intro from "./components/Intro";
import { photos } from "./data/photos";
import { photographer } from "./data/photographer";

const CATEGORY_ORDER = ["Todas", "Shows", "Comidas", "Retratos"];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Shows");

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "Todas") return photos;
    return photos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const selectedPhoto =
    selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  const previousPhoto = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || filteredPhotos.length === 0) return current;
      return (current - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const nextPhoto = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || filteredPhotos.length === 0) return current;
      return (current + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        setContactOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app">
      <div className="gallery-atmosphere" aria-hidden="true" />

      <Intro onContact={() => setContactOpen(true)} />

      <nav className="category-nav" aria-label="Galerías">
        <div className="category-nav-inner">
          {CATEGORY_ORDER.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-link ${
                activeCategory === category ? "is-active" : ""
              }`}
              onClick={() => chooseCategory(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>
      </nav>

      <Gallery
        photos={filteredPhotos}
        onSelect={(index) => setSelectedIndex(index)}
      />

      <footer className="site-footer">
        <div className="footer-info">
          <span>{photographer.name}</span>
          <span>{photographer.tagline}</span>
        </div>

        <div className="footer-right">
          <span className="footer-gallery-name">{activeCategory}</span>
          <button
            className="footer-contact"
            onClick={() => setContactOpen(true)}
          >
            CONTACTO ↗
          </button>
        </div>
      </footer>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          index={selectedIndex}
          total={filteredPhotos.length}
          onClose={() => setSelectedIndex(null)}
          onPrevious={previousPhoto}
          onNext={nextPhoto}
        />
      )}

      {contactOpen && (
        <ContactPanel onClose={() => setContactOpen(false)} />
      )}
    </div>
  );
}
