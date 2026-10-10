import { useEffect, useRef } from "react";
import { createRadialGallery } from "../lib/radialGallery";

export default function Gallery({ photos = [], onSelect }) {
  const mountRef = useRef(null);
  const selectRef = useRef(onSelect);
  useEffect(() => { selectRef.current = onSelect; }, [onSelect]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !photos.length) return undefined;
    const gallery = createRadialGallery(mount, {
      photos,
      onSelect: (index) => selectRef.current?.(index),
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
    return () => gallery.destroy();
  }, [photos]);

  return (
    <main className="gallery-shell" aria-label="Galería fotográfica 3D">
      <div className="gallery" ref={mountRef} />
      <div className="gallery-hint" aria-hidden="true">
        <span>ARRASTRÁ PARA EXPLORAR</span><span>·</span><span>CLICK PARA VER</span>
      </div>
    </main>
  );
}
