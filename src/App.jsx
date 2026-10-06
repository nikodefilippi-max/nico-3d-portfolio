import { useCallback, useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import PhotoModal from "./components/PhotoModal";
import ContactPanel from "./components/ContactPanel";
import Intro from "./components/Intro";
import { photos } from "./data/photos";
import { photographer } from "./data/photographer";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

  const previousPhoto = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current - 1 + photos.length) % photos.length;
    });
  }, []);

  const nextPhoto = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + 1) % photos.length;
    });
  }, []);

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
      <Intro onContact={() => setContactOpen(true)} />

      <Gallery
        photos={photos}
        onSelect={(index) => setSelectedIndex(index)}
      />

      <footer className="site-footer">
        <div>
          <span>{photographer.name}</span>
          <span>{photographer.tagline}</span>
        </div>

        <button className="footer-contact" onClick={() => setContactOpen(true)}>
          CONTACTO ↗
        </button>
      </footer>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          index={selectedIndex}
          total={photos.length}
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