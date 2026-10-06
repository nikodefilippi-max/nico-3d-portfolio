import { useEffect } from "react";

export default function PhotoModal({ photo, index, total, onClose, onPrevious, onNext }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="photo-modal" role="dialog" aria-modal="true" aria-label={photo.title}>
      <button className="close-button modal-close" onClick={onClose} aria-label="Cerrar">
        ×
      </button>

      <button className="nav-button nav-left" onClick={onPrevious} aria-label="Fotografía anterior">
        ←
      </button>

      <figure className="modal-figure">
        <img src={photo.src} alt={photo.alt || photo.title} />
        <figcaption>
          <div>
            <p className="eyebrow">{photo.category}</p>
            <h2>{photo.title}</h2>
            <p>{photo.location} · {photo.year}</p>
          </div>
          <span className="photo-counter">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>

      <button className="nav-button nav-right" onClick={onNext} aria-label="Fotografía siguiente">
        →
      </button>
    </div>
  );
}