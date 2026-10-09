// Fotos actuales de la categoría SHOWS.
// Los archivos deben existir exactamente en:
// public/photos/shows/01.webp ... 11.webp

const showPhotos = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/photos/shows/${number}.webp`,
    title: number,
    category: "Shows",
    location: "Brasil",
    year: "2026",
    alt: `Fotografía de show ${number}`,
  };
});

export const photos = showPhotos;
